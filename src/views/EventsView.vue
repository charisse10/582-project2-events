<template>
  <section class="section-events">
    <div class="container">
      <div class="flex-container">
        <FilterEvents
          class="filter-events"
          v-if="showFilters"
          :categories="uniqueCategories"
          @filter-changed="applyFilter"
        ></FilterEvents>

        <div class="events-flex">
          <div v-for="event in filteredEvents" :key="event._id">
            <EventView
              :event="event"
              :showInterestButton="showInterestButton"
              :showInterestCount="showInterestCount"
              :showDeleteButton="showDeleteButton"
              :eventId="event._id"
              @event-deleted="deleteEvent(event._id)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EventView from "./EventView.vue";
import FilterEvents from "@/components/FilterEvents.vue";

export default {
  name: "EventsView",

  components: {
    EventView,
    FilterEvents,
  },

  props: {
    showFilters: {
      type: Boolean,
      default: false,
    },

    showInterestButton: {
      type: Boolean,
      default: true,
    },

    showInterestCount: {
      type: Boolean,
      default: true,
    },

    showDeleteButton: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      events: [],
      selectedCategories: [],
      uniqueCategories: [],
    };
  },

  computed: {
    filteredEvents() {
      if (this.selectedCategories.length === 0) {
        return this.events;
      } else {
        return this.events.filter((event) =>
          this.selectedCategories.includes(event.category)
        );
      }
    },
  },

  methods: {
    async fetchEvents() {
      try {
        const response = await fetch(
          "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/"
        );
        const data = await response.json();
        this.events = data;

        this.uniqueCategories = Array.from(
          new Set(this.events.map((event) => event.category))
        );
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },

    applyFilter(selectedCategories) {
      this.selectedCategories = selectedCategories;
    },

    deleteEvent(eventId) {
      this.events = this.events.filter((event) => event._id !== eventId);
      console.log(`Event with ID ${eventId} deleted.`);
    },
  },

  created() {
    this.fetchEvents();
  },
};
</script>

<style lang="scss" scoped>
$orange: #f44d00;
$yellow: rgb(255, 255, 124);
$blue: #2c3e50;

.section-events {
  padding: 25px 0 100px;

  .container {
    width: 1400px;
    max-width: 90%;
    margin: 0 auto;

    .flex-container {
      .filter-events {
        padding: 10px 0 25px;
        display: grid;
        grid-template-columns: 1fr;
        font-weight: 500;

        h3 {
          margin-bottom: 25px;
        }
      }

      .events-flex {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 30px;

        .event {
          min-height: 350px;
        }
      }
    } //flex-container
  } //container
} //section-events

@media only screen and (min-width: 768px) {
  .section-events {
    .container {
      .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .filter-events {
          width: 25%;
        }

        .events-flex {
          width: 70%;
        }
      } //flex-container
    } //container
  } //section-events
}

@media only screen and (min-width: 992px) {
  .section-events {
    .container {
      .flex-container {
        .filter-events {
          width: 20%;
        }

        .events-flex {
          width: 75%;
          grid-template-columns: repeat(2, 1fr);
        }
      } //flex-container
    } //container
  } //section-events
}

@media only screen and (min-width: 1600px) {
  .section-events {
    .container {
      .flex-container {
        .filter-events {
          width: 15%;
        }
        .events-flex {
          width: 80%;
          grid-template-columns: repeat(3, 1fr);
        }
      } //flex-container
    } //container
  } //section-events
}
</style>

<template>
  <section class="section-events">
    <div class="container">
      <h2>Summer Events</h2>
      <div class="flex-container">
        <FilterEvents
          v-if="showFilters"
          :categories="uniqueCategories"
          @filter-changed="applyFilter"
        ></FilterEvents>

        <div class="events-flex">
          <div v-for="event in filteredEvents" :key="event._id">
            <EventItem
              :event="event"
<<<<<<< HEAD
              :showInterestButton="showInterestButton"
              :showInterestCount="showInterestCount"
=======
              :showDeleteButton="showDeleteButton"
              :showButtons="showButtons"
              @delete-event="deleteEvent"
              @toggle-interest="toggleInterest"
>>>>>>> e84040d26d78dae99ea123746a04c705a329b2ef
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EventItem from "./EventItem.vue";
import FilterEvents from "./FilterEvents.vue";

export default {
  name: "EventList",

  components: {
    EventItem,
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

    userView: {
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
<<<<<<< HEAD
=======

    deleteEvent() {},

    toggleInterest(updatedEvent) {
      this.events = this.events.map((event) => {
        if (event.id === updatedEvent.id) {
          return { ...event, interested: updatedEvent.interested };
        }
        return event; // Return unchanged events
      });
    },
>>>>>>> e84040d26d78dae99ea123746a04c705a329b2ef
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
    max-width: 90%;
    margin: 0 auto;

    h2 {
      color: $orange;
      text-transform: uppercase;
      margin-bottom: 50px;
      text-align: center;
      font-size: 1.8rem;
    }

    .flex-container {
      .filter-events {
        padding: 10px 0 25px;
        display: grid;
        grid-template-columns: 1fr;

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
        .events-flex {
          grid-template-columns: repeat(2, 1fr);
        }
      } //flex-container
    } //container
  } //section-events
}

@media only screen and (min-width: 1200px) {
  .section-events {
    .container {
      .flex-container {
        .events-flex {
          grid-template-columns: repeat(3, 1fr);
        }
      } //flex-container
    } //container
  } //section-events
}

@media only screen and (min-width: 1800px) {
  .section-events {
    .container {
      .flex-container {
        .events-flex {
          grid-template-columns: repeat(4, 1fr);
        }
      } //flex-container
    } //container
  } //section-events
}
</style>

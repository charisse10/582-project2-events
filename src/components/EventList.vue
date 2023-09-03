<template>
  <section class="section-events">
    <div class="container">
      <h2>Summer Events</h2>
      <FilterEvents
        v-if="showFilters"
        :categories="uniqueCategories"
        @filter-changed="applyFilter"
      ></FilterEvents>
      <div v-for="event in filteredEvents" :key="event.id">
        <EventItem
          :event="event"
          :showDeleteButton="showDeleteButton"
          :showButtons="showButtons"
          @delete-event="deleteEvent(event._id)"
          @toggle-interest="toggleInterest"
        />
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
    showButtons: {
      type: Boolean,
      default: false,
    },
    showDeleteButton: {
      type: Boolean,
      default: false,
    },
    showFilters: {
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

    deleteEvent() {},

    toggleInterest(updatedEvent) {
      const index = this.events.findIndex((e) => e.id === updatedEvent.id);

      if (index !== -1) {
        this.$set(this.events, index, updatedEvent);
      }
    },
  },
  created() {
    this.fetchEvents();
  },
};
</script>

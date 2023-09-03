<template>
  <section class="section-events">
    <div class="container">
      <h2>Summer Events</h2>
      <div v-for="event in events" :key="event.id">
        <EventItem
          :event="event"
          :showDeleteButton="showDeleteButton"
          @delete-event="deleteEvent(event._id)"
        />
        <!-- :showButtons="showButtons" -->
        <!-- @toggle-interest="toggleInterest" -->
      </div>
    </div>
  </section>
</template>

<script>
import EventItem from "./EventItem.vue";

export default {
  name: "EventList",
  components: {
    EventItem,
  },
  props: {
    // showButtons: {
    //   type: Boolean,
    //   default: false,
    // },
    showDeleteButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      events: [],
    };
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await fetch(
          "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/"
        );
        const data = await response.json();
        this.events = data;
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
  },

  // toggleInterest(updatedEvent) {
  //   const index = this.events.findIndex((e) => e.id === updatedEvent.id);

  //   if (index !== -1) {
  //     this.$set(this.events, index, updatedEvent);
  //   }
  // },

  created() {
    this.fetchEvents();
  },
};
</script>

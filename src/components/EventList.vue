<template>
  <section class="section-events">
    <div class="container">
      <h2>Summer Events</h2>
      <div v-for="event in events" :key="event._id">
        <EventItem
          :event="event"
          :showButtons="showButtons"
          :showDeleteButton="showDeleteButton"
          @toggle-interest="toggleInterest"
          @delete-event="deleteEvent"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import EventItem from "./EventItem.vue";

export default {
  name: "EventList",
  components: {
    EventItem,
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
  },
  setup() {
    const events = ref([]);

    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/"
        );
        const data = await response.json();
        events.value = data;
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();

    const toggleInterest = (event) => {
      event.interested = !event.interested;
    };

    const deleteEvent = (eventId) => {
      const index = events.value.findIndex((event) => event._id === eventId);
      if (index !== -1) {
        events.value.splice(index, 1);
      }
    };

    return {
      events,
      toggleInterest,
      deleteEvent,
    };
  },
};
</script>

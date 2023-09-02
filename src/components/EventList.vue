<template>
  <section class="section-events">
    <div class="container">
      <h2>Summer Events</h2>
      <div v-for="event in events" :key="event.id">
        <EventItem
          :event="event"
          :showButtons="showButtons"
          :showDeleteButton="showDeleteButton"
          @toggleInterest="toggleInterest"
          @submitDeleteEvent="submitDeleteEvent"
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

    const toggleInterest = async (event) => {
      event.interested = !event.interested;

      try {
        const response = await fetch(
          `https://your-backend-api.com/events/${event._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ interested: event.interested }),
          }
        );

        if (response.ok) {
          console.log("Interest status updated successfully");
        } else {
          console.error(
            "Failed to update interest status:",
            response.statusText
          );
          event.interested = !event.interested;
        }
      } catch (error) {
        console.error("Error updating interest status:", error);
        event.interested = !event.interested;
      }
    };

    const submitDeleteEvent = async (eventId) => {
      try {
        const response = await fetch(
          `https://your-backend-api.com/events/${eventId}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          events.value = events.value.filter((event) => event.id !== eventId);
        } else {
          console.error("Failed to delete event:", response.statusText);
        }
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    };

    return {
      events,
      toggleInterest,
      submitDeleteEvent,
    };
  },
};
</script>

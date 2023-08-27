<template>
  <button @click="submitDelete(event._id)">Delete</button>
</template>

<script>
import { useEventsStore } from "@/store/events";

export default {
  props: {
    event: Object,
  },
  methods: {
    async submitDelete(eventId) {
      try {
        const response = await fetch(
          `https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/${eventId}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          const eventsStore = useEventsStore();
          eventsStore.deleteEvent(eventId);
        } else {
          const data = await response.json();
          console.error("Error deleting event:", data.message);
        }
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    },
  },
};
</script>

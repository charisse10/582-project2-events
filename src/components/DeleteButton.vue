<template>
  <button @click="deleteEvent">DELETE</button>
</template>

<script>
export default {
  name: "DeleteButton",
  methods: {
    async deleteEvent(eventId) {
      try {
        const response = await fetch(
          "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/" +
            `${eventId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          this.$emit("event-deleted");
          console.log("Event deleted successfully!");
        } else {
          console.error("Error deleting event!");
        }
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    },
  },
  props: {
    eventId: {
      type: String,
      required: true,
    },
  },
};
</script>

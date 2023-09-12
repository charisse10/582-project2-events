<template>
  <button @click="deleteEvent">DELETE</button>
</template>

<script>
export default {
  name: "DeleteButton",

  methods: {
    // async deleteEvent() {
    //   try {
    //     const response = await fetch(
    //       "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/events/" +
    //         `${this.eventId}`,
    //       {
    //         method: "DELETE",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     if (response.ok) {
    //       // this.$emit("event-deleted");
    //       this.$emit("delete-clicked");
    //       console.log("Event deleted successfully!");
    //     } else {
    //       console.error("Error deleting event!");
    //     }
    //   } catch (error) {
    //     console.error("Error deleting event:", error);
    //   }
    // },

    deleteEvent() {
      this.$emit("delete-clicked");
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

<style lang="scss" scoped>
$orange: #f44d00;
$yellow: rgb(255, 255, 124);
$blue: #2c3e50;

button {
  background-color: #fff;
  border: 1px solid $yellow;
  padding: 5px 20px;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 3rem;

  &:hover button {
    background-color: $yellow;
  }
}
</style>

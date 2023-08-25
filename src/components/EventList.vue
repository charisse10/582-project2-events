<template>
  <section class="events">
    <div class="container">
      <h2>Event List</h2>
      <div v-for="event in events" :key="event._id">
        <ul>
          <li>{{ event.title }}</li>
          <span> {{ event.description }} </span>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { useDisplayStore } from "../store/display";

export default {
  setup() {
    const displayStore = useDisplayStore();
    const events = displayStore.events;

    return { events };
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await fetch(
          "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/"
        );
        const data = await response.json();
        const displayStore = useDisplayStore();
        displayStore.displayEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
  },
};
</script>

<style lang="scss"></style>

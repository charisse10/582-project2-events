<template>
  <section class="events">
    <div class="container">
      <h2>Summer Events</h2>
      <div v-for="event in events" :key="event._id">
        <event-item :event="event" :deleteEvent="deleteEvent" />
      </div>
    </div>
  </section>
</template>

<script>
import EventItem from "@/components/EventItem";
import { useEventsStore } from "../store/events";

export default {
  components: {
    EventItem,
  },
  setup() {
    const eventsStore = useEventsStore();
    const events = eventsStore.events;

    return { events };
  },
  async mounted() {
    await this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await fetch(
          "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/"
        );
        const data = await response.json();

        // Add the isInterested property to each event
        const eventsWithInterest = data.map((event) => ({
          ...event,
          isInterested: false,
        }));

        const eventsStore = useEventsStore();
        eventsStore.displayEvents(eventsWithInterest);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
    deleteEvent(eventId) {
      const eventsStore = useEventsStore();
      eventsStore.deleteEvent(eventId);
    },
    toggleInterest(eventId) {
      const eventsStore = useEventsStore();
      eventsStore.toggleInterest(eventId);
    },
  },
};
</script>

<style lang="scss"></style>

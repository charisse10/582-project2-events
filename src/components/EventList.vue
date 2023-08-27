<template>
  <!-- <section class="events">
    <div class="container">
      <h2>Event List</h2>
      <div v-for="event in events" :key="event._id">
        <ul>
          <ul class="event">
            <li class="category">{{ event.category }}</li>
            <li class="title">{{ event.title }}</li>
            <li>{{ event.date }}</li>
            <li>{{ event.time }}</li>
            <li>{{ event.location }}</li>
            <button @click="deleteEvent(event._id)">Delete</button>
          </ul>
        </ul>
      </div>
    </div>
  </section> -->
  <section class="events">
    <div class="container">
      <h2>Event List</h2>
      <div v-for="event in events" :key="event._id">
        <event-item :event="event" :deleteEvent="deleteEvent" />
      </div>
    </div>
  </section>
</template>

<script>
import EventItem from "@/components/EventItem"; // Update the path accordingly
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
        const eventsStore = useEventsStore();
        eventsStore.displayEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
    deleteEvent(eventId) {
      const eventsStore = useEventsStore();
      eventsStore.deleteEvent(eventId);
    },
  },
};
// import { useEventsStore } from "../store/events";

// export default {
//   setup() {
//     const eventsStore = useEventsStore();
//     const events = eventsStore.events;

//     return { events };
//   },
//   mounted() {
//     this.fetchEvents();
//   },
//   methods: {
//     async fetchEvents() {
//       try {
//         const response = await fetch(
//           "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/"
//         );
//         const data = await response.json();
//         const eventsStore = useEventsStore();
//         eventsStore.displayEvents(data);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     },
//   },
// };
</script>

<style lang="scss"></style>

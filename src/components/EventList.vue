<template>
  <section class="section-events">
    <div class="container">
      <h2>Summer Events</h2>
      <div v-for="event in events" :key="event._id">
        <div class="event" :class="{ interestedevent: event.interested }">
          <h4>{{ event.category }}</h4>
          <h3>{{ event.title }}</h3>
          <p>DATE: {{ event.date }}</p>
          <p>TIME: {{ event.time }}</p>
          <p>LOCATION:{{ event.location }}</p>
          <button
            v-if="showButtons"
            @click="toggleInterest(event)"
            :class="{ interestedbutton: event.interested }"
          >
            {{ event.interested ? "Interested!" : "Interested" }}
          </button>
          <button v-if="showDeleteButton" @click="deleteEvent(event._id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useEventsStore } from "../store/events";

export default {
  name: "EventList",
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
    const eventsStore = useEventsStore();
    // const events = eventsStore.events;

    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/"
        );
        const data = await response.json();

        eventsStore.displayEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();

    const toggleInterest = (event) => {
      event.interested = !event.interested;
    };

    const deleteEvent = (eventId) => {
      eventsStore.events = eventsStore.events.filter(
        (event) => event._id !== eventId
      );
    };

    return { events: eventsStore.events, toggleInterest, deleteEvent };
  },
};
</script>

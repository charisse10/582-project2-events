<template>
  <div class="home">
    <h1>CSL Summer in the City 2023</h1>
  </div>
  <EventList :events="events" />
</template>

<script>
import EventList from "@/components/EventList.vue";
import { useEventsStore } from "../store/events";

export default {
  name: "HomeView",
  components: {
    EventList,
  },
  setup() {
    const eventsStore = useEventsStore();

    return {
      events: eventsStore.events,
    };
  },
};
</script>

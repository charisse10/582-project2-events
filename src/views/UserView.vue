<template>
  <div class="about">
    <h1>User View</h1>
  </div>
  <EventList :events="events" :showButtons="true" />
</template>

<script>
import EventList from "@/components/EventList.vue";
import { useEventsStore } from "../store/events";

export default {
  name: "UserView",
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

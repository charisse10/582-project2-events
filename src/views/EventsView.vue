<template>
  <h1>EVENTS PAGE</h1>
  <EventList />
</template>

<script>
import EventList from "@/components/EventList.vue";

export default {
  name: "EventsView",
  components: {
    EventList,
  },
  setup() {
    return {};
  },
};
</script>

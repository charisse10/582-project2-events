<template>
  <div class="home">
    <h1>Social Medium Events</h1>
  </div>
  <EventList :event="events" />
</template>

<script>
import EventList from "@/components/EventList.vue";

export default {
  name: "HomeView",
  components: {
    EventList,
  },
  data() {
    return {
      events: [],
    };
  },
};
</script>

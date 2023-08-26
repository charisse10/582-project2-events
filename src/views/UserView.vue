<template>
  <div class="about">
    <h1>User View</h1>
  </div>
  <EventList :events="events" user />
</template>

<script>
import EventList from "@/components/EventList.vue";

export default {
  name: "UserView",
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

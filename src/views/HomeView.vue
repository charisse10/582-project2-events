<template>
  <div class="home">
    <img
      class="logo"
      alt="Social medium events logo"
      src="../assets/logo-sm.svg"
    />
    <h1>Social Medium Events</h1>
  </div>
  <EventList />
</template>

<script>
import EventList from "@/components/EventList.vue";

export default {
  name: "HomeView",
  components: {
    EventList,
  },
};
</script>

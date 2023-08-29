<template>
  <div class="home">
    <h1>CSL Summer in the City 2023</h1>
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
  data() {
    return {
      events: [],
    };
  },
};
</script>

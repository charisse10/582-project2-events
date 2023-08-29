<template>
  <div class="home">
    <h1>Probable Guacamole</h1>
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

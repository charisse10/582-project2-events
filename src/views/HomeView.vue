<template>
  <AccessNav />
  <div class="home">
    <h1>Probable Guacamole</h1>
  </div>
  <EventList />
</template>

<script>
import AccessNav from "@/components/AccessNav.vue";
import EventList from "@/components/EventList.vue";

export default {
  name: "HomeView",
  components: {
    EventList,
    AccessNav,
  },
  data() {
    return {
      events: [],
    };
  },
};
</script>

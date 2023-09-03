<template>
  <div class="home">
    <h1>CSL Summer in the City 2023</h1>
    <EventList :showFilters="true" />
  </div>
</template>

<script>
import EventList from "@/components/EventList.vue";

export default {
  name: "HomeView",
  components: {
    EventList,
  },

  setup() {
    return {};
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ header }}</h1>
    <EventList :showFilters="true" />
  </div>
</template>

<script>
import EventList from "@/components/EventList.vue";

export default {
  name: "HomeView",
  data() {
    return {
      header: "Côte Saint-Luc 2023",
    };
  },

  components: {
    EventList,
  },

  setup() {
    return {};
  },
};
</script>

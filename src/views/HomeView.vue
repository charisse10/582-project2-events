<template>
  <div class="home">
    <h1>{{ header }}</h1>
    <EventsView
      :showFilters="true"
      :showInterestButton="false"
      :showInterestCount="true"
      :showDeleteButton="false"
    />
  </div>
</template>

<script>
import EventsView from "./EventsView.vue";

export default {
  name: "HomeView",
  data() {
    return {
      header: "Côte Saint-Luc 2023",
    };
  },

  components: {
    EventsView,
  },

  setup() {
    return {};
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ header }}</h1>
    <EventList
      :showFilters="true"
      :showInterestButton="false"
      :showInterestCount="true"
      :showDeleteButton="false"
    />
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

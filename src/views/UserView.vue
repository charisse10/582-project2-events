<template>
  <div class="about">
    <h1>User View</h1>
  </div>
  <EventList :showButtons="true" :showFilters="true" />
</template>

<script>
import EventList from "@/components/EventList.vue";

export default {
  name: "UserView",
  components: {
    EventList,
  },
  setup() {
    return {};
  },
};
</script>

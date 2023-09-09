<template>
  <div class="access">
    <h1>Welcome Max!</h1>
  </div>
  <EventList
    :showFilters="true"
    :showInterestButton="true"
    :showInterestCount="false"
    :showDeleteButton="false"
  />
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

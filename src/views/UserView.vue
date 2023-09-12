<template>
  <div class="access">
    <h1>Welcome Max!</h1>
  </div>
  <EventsView
    :showFilters="true"
    :showInterestButton="true"
    :showInterestCount="false"
    :showDeleteButton="false"
  />
</template>

<script>
import EventsView from "./EventsView.vue";

export default {
  name: "UserView",
  components: {
    EventsView,
  },
  setup() {
    return {};
  },
};
</script>

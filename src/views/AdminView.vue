<template>
  <div class="access">
    <h1>Welcome Admin!</h1>
  </div>
  <div class="admin-view">
    <div class="form-wrapper">
      <FormComponent />
    </div>
    <div class="events-wrapper">
      <EventsView
        :showFilters="true"
        :showInterestButton="false"
        :showInterestCount="false"
        :showDeleteButton="true"
      />
    </div>
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import EventsView from "./EventsView.vue";

export default {
  name: "AdminView",
  components: {
    FormComponent,
    EventsView,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss"></style>

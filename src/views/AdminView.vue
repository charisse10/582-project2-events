<template>
  <div class="access">
    <h1>Welcome Admin!</h1>
  </div>
  <div class="admin-view">
    <div class="form-wrapper">
      <FormComponent />
    </div>
    <div class="events-wrapper">
      <EventList :showDeleteButton="true" :showFilters="false" />
    </div>
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import EventList from "@/components/EventList.vue";

export default {
  name: "AdminView",
  components: {
    FormComponent,
    EventList,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
// .admin-view {
//   display: flex;
//   justify-content: space-between;
// }

// .form-wrapper {
//   width: 25%;
// }

// .events-wrapper {
//   width: 100%;
// }
</style>

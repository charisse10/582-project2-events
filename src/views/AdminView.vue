<template>
  <div class="about">
    <h1>Admin View</h1>
  </div>
  <FormComponent />
  <EventList :showDeleteButton="true" />
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
  data() {
    return {
      events: [],
    };
  },
};
</script>

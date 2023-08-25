<template>
  <div class="about">
    <h1>This is the Admin View</h1>
  </div>
  <FormComponent />
  <EventList />
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
};
</script>

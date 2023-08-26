<template>
  <div class="about">
    <h1>Admin View</h1>
  </div>
  <FormComponent />
  <EventList :events="admin" admin />
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

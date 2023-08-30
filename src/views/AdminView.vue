<template>
  <div class="about">
    <h1>Admin View</h1>
  </div>
  <FormComponent />
  <EventList :events="events" :showDeleteButton="true" />
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import EventList from "@/components/EventList.vue";
import { useEventsStore } from "../store/events";

export default {
  name: "AdminView",
  components: {
    FormComponent,
    EventList,
  },
  setup() {
    const eventsStore = useEventsStore();

    return {
      events: eventsStore.events,
    };
  },
};
</script>

<template>
  <div class="about">
    <h1>This is the User View</h1>
  </div>
  <EventList />
</template>

<script>
import EventList from "@/components/EventList.vue";

export default {
  name: "UserView",
  components: {
    EventList,
  },
};
</script>

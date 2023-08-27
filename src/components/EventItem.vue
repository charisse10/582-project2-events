<template>
  <ul class="event">
    <li class="category">{{ event.category }}</li>
    <li class="title">{{ event.title }}</li>
    <li>{{ event.date }}</li>
    <li>{{ event.time }}</li>
    <li>{{ event.location }}</li>
    <button @click="deleteEvent(event._id)">Delete</button>
  </ul>
</template>

<script>
export default {
  props: {
    event: Object,
    deleteEvent: Function,
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <EventList />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import EventList from "@/components/EventList.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    EventList,
  },
};
</script>

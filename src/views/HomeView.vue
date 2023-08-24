<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="setUserType('user')">User</button>
    <button @click="setUserType('admin')">Admin</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { useAuthStore } from "@/store/auth";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    const authStore = useAuthStore();

    const setUserType = (userType) => {
      authStore.setUserType(userType);
    };

    return {
      setUserType,
    };
  },
};
</script>

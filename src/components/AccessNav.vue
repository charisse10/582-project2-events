<template>
  <div class="access">
    <div class="access-buttons">
      <button @click="toggleUserType">Access {{ userType }}</button>
    </div>
    <div class="access-link">
      <router-link
        v-if="isAuthenticated"
        :to="userType === 'admin' ? '/admin' : '/user'"
        exact
        class="router-link"
      >
        {{ userType === "admin" ? "GO!" : "GO!" }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/store/auth";

export default {
  name: "AccessNav",

  methods: {
    toggleUserType() {
      const authStore = useAuthStore();
      authStore.toggleUserType();
    },
  },

  computed: {
    isAuthenticated() {
      const authStore = useAuthStore();
      return authStore.userType !== "";
    },

    userType() {
      const authStore = useAuthStore();
      return authStore.userType;
    },
  },
};
</script>

<style lang="scss" scoped></style>

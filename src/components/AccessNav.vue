<template>
  <div class="access">
    <div class="access-buttons">
      <button
        @click="setUserType('user')"
        :class="{ active: userType === 'user' }"
      >
        USER
      </button>
      <button
        @click="setUserType('admin')"
        :class="{ active: userType === 'admin' }"
      >
        ADMIN
      </button>
    </div>
    <div class="access-link">
      <router-link
        v-if="isAuthenticated"
        :to="userType === 'admin' ? '/admin' : '/user'"
        exact
        class="router-link"
      >
        {{ userType === "admin" ? "Welcome Admin" : "Welcome User" }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/store/auth";

export default {
  name: "AccessNav",

  methods: {
    setUserType(userType) {
      const authStore = useAuthStore();
      authStore.setUserType(userType);
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

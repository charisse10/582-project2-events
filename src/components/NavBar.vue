<template>
  <nav>
    <div class="container">
      <router-link to="/">Home</router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

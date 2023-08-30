<template>
  <nav>
    <div class="container">
      <div class="navbar">
        <router-link to="/">Home</router-link>
        <!-- <router-link to="/access">Access</router-link> -->
        <router-link to="/admin">Admin</router-link>
        <router-link to="/user">User</router-link>
      </div>
    </div>
    <div></div>
  </nav>
</template>

<script>
export default {
  name: "AcessNav",
};
</script>

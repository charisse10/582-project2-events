<template>
  <nav>
    <div class="container">
      <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/access">
          <select id="access">
            <option value="" disabled selected hidden>Access</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </router-link>
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

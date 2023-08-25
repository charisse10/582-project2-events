<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

$orange: #f44d00;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: $orange;
      }
    }
  }

  .events {
    background-color: rgb(221, 242, 255);
    padding: 25px;

    .container {
      max-width: 90%;
      margin: 0 auto;
      padding: 0 20px;

      ul {
        border: 1px solid #878787;
        padding: 10px;
        margin-bottom: 25px;

        li {
          color: $orange;
          list-style: none;
          font-weight: bold;
          font-size: 1.2rem;
          text-transform: capitalize;
        }
      }
    }
  }

  .home {
    text-align: center;

    .logo {
      width: 75px;
      margin-bottom: -25px;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
  }
}
</style>

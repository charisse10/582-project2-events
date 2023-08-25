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
    background-color: #f8f9d4;
    text-align: center;
    padding: 25px 0;

    .container {
      max-width: 90%;
      margin: 0 auto;
      padding: 0 20px;

      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: $orange;
        }
      }
    }
  }

  .home {
    background-color: aliceblue;
    text-align: center;
    padding: 25px 0;

    .logo {
      width: 75px;
      margin-bottom: -25px;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .events {
    background-color: rgb(239, 239, 239);
    padding: 25px 0;

    .container {
      max-width: 90%;
      margin: 0 auto;
      padding: 0 20px;

      ul.event {
        border: 1px solid #878787;
        min-height: 120px;
        padding: 10px;
        margin-bottom: 25px;

        li {
          list-style: none;
        }

        .category {
          text-transform: uppercase;
          font-weight: bold;
        }

        .title {
          color: $orange;
          font-size: 1.3rem;
          font-weight: bold;
        }
      }
    }
  }

  .form {
    background-color: rgb(241, 227, 254);
    padding: 25px 0;

    .container {
      max-width: 90%;
      margin: 0 auto;
      padding: 0 20px;

      form {
        input {
          display: block;
          margin-bottom: 10px;
          padding: 10px;
          width: 100%;
          border: 1px solid #878787;
        }
      }
    }
  }
}
</style>

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
$blue: #2c3e50;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;

  h1 {
    text-align: center;
    padding: 25px 0;
  }

  nav {
    background-color: #eaeaea;
    text-align: center;
    padding: 25px 0;

    .container {
      max-width: 90%;
      margin: 0 auto;
      padding: 0 20px;

      a {
        font-weight: bold;
        color: $blue;

        &.router-link-exact-active {
          color: $orange;
        }
      }
    }
  }

  .events {
    padding: 25px 0;

    .container {
      max-width: 90%;
      margin: 0 auto;
      padding: 0 20px;

      h2 {
        margin-bottom: 25px;
      }

      ul.event {
        background: #f0f0f0;
        border: 1px solid #878787;
        min-height: 120px;
        padding: 25px;
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
          text-transform: capitalize;
          font-size: 1.3rem;
          font-weight: bold;
        }
      }
    }
  }

  .section-form {
    max-width: 90%;
    margin: 25px auto 50px;
    border-radius: 25px;
    background: $blue;
    padding: 35px 0;

    .container {
      max-width: 90%;
      margin: 0 auto;
      padding: 0 25px;

      h2 {
        color: #fff;
        margin-bottom: 10px;
      }

      form {
        input {
          display: block;
          margin-bottom: 10px;
          padding: 10px;
          width: 100%;
          border: 1px solid #878787;
        }

        input#esubmit {
          background-color: $orange;
          color: #fff;
          width: 200px;
          margin: 20px auto 0;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
        }

        .placeholder {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>

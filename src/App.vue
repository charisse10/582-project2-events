<template>
  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/017/398/790/small/white-circle-free-png.png"
            alt="logo"
          />
          <div class="home">
            <router-link to="/">
              <p>com/events</p>
            </router-link>
            <router-link to="/events">
              <p>EVENTS</p>
            </router-link>
          </div>
        </div>
        <NavBar />
      </nav>
    </div>
  </header>
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
$yellow: rgb(255, 255, 124);
$blue: #2c3e50;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;

  h1 {
    color: $blue;
    text-align: center;
    padding: 15px 0 0;
  }

  header {
    background-color: $blue;

    .container {
      max-width: 80%;
      margin: 0 auto;
      padding: 10px 0 20px;

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
          display: flex;
          justify-content: space-between;
          align-items: center;

          img {
            width: 50px;
          }

          .home {
            p {
              color: #ffffff;
              font-size: 1.2rem;
              font-weight: bolder;
              margin-left: 5px;

              &:hover {
                color: $yellow;
              }
            }

            .router-link-active p {
              text-decoration: none;
              color: $yellow;
            }
          }
        } //logo

        .access {
          position: relative;

          button {
            padding: 2px 10px;
            border-radius: 10px;
            display: inline;

            &:hover {
              background-color: $yellow;
            }
          }
          .active {
            background-color: $yellow;
          }

          .access-link {
            background: $blue;
            position: absolute;
            bottom: -25px;

            a {
              color: #ffffff;
              text-decoration: none;
              margin-left: 10px;

              &:hover {
                color: $yellow;
              }
            }

            .router-link-active a {
              text-decoration: none;
              color: $yellow;
            }
          }
        } //navbar
      } //nav
    } //container
  } //header

  .section-form {
    max-width: 90%;
    margin: 25px auto 25px;
    border-radius: 25px;
    background: $blue;
    padding: 25px 0;

    .added {
      color: #fff;
      text-align: center;
    }

    .container {
      max-width: 90%;
      margin: 0 auto;
      padding: 0 25px;

      h2 {
        color: #fff;
        margin-bottom: 10px;
      }
    }
  }
}
</style>

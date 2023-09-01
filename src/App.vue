<template>
  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/017/398/790/small/white-circle-free-png.png"
            alt="logo"
          />
          <p>com / events</p>
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

img {
  display: block;
  max-width: 100%;
  height: auto;
}

$orange: #f44d00;
$blue: #2c3e50;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;

  h1 {
    text-align: center;
    padding: 25px 0;
  }

  header {
    background-color: $orange;

    .container {
      max-width: 80%;
      margin: 0 auto;
      padding: 10px 0;

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

          p {
            color: #fff;
            font-size: 1.2rem;
            font-weight: medium;
            margin-left: 10px;
          }
        }

        .navbar {
          display: flex;

          a {
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: medium;
            margin-left: 25px;

            &:hover {
              color: rgb(255, 255, 124);
              text-decoration: underline;
              text-underline-offset: 5px;
            }
          }

          #access {
            border-radius: 15px;
            padding: 0 5px;
            cursor: pointer;
          }
        }
      } //nav
    } //conatainer
  }
  .section-events {
    padding: 25px 0;

    .container {
      max-width: 90%;
      margin: 0 auto;

      h2 {
        text-align: center;
        margin-bottom: 25px;
      }

      .event {
        text-align: center;
        background-color: #f3f3f3;
        padding: 25px;
        margin-bottom: 25px;
        border-radius: 25px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

        &:hover {
          background-color: #fff7f2;
        }

        span {
          font-weight: bold;
        }

        h4 {
          text-transform: uppercase;
          text-decoration: underline;
          text-underline-offset: 5px;
          margin-bottom: 20px;
        }

        h3 {
          color: $orange;
          text-transform: capitalize;
          font-size: 1.5rem;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        button {
          background: #fff;
          padding: 5px 30px;
          border: 2px solid $orange;
          border-radius: 25px;
          margin-top: 20px;
          font-weight: bold;
          cursor: pointer;
        }

        p {
          max-width: 80%;
          margin: 0 auto;
          text-align: left;
        }

        button.interestedbutton {
          background-color: $orange;
          color: #fff;
        }
      }

      .event.interestedevent {
        background-color: #e4f0ff;
      }
    }
  }

  .section-form {
    max-width: 90%;
    margin: 25px auto 50px;
    border-radius: 25px;
    background: $blue;
    padding: 35px 0;

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
          margin: 30px auto 30px;
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

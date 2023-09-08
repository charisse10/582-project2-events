<<<<<<< HEAD
// import { defineStore } from "pinia";

// export const useEventsStore = defineStore("events", {
//   state: () => ({
//     workingURL:
//       "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/",
//   }),
// });

import { defineStore } from "pinia";
=======
//import { defineStore } from "pinia";
>>>>>>> e84040d26d78dae99ea123746a04c705a329b2ef

export const useInterestedEventsStore = defineStore("interestedEventsStore", {
  state: () => ({
<<<<<<< HEAD
    interestedEvents: [],
    interestedEventCount: 0,
  }),

  actions: {
    addInterestedEvent(event) {
      if (!this.interestedEvents.some((e) => e._id === event._id)) {
        this.interestedEvents.push({ ...event, isInterested: true });
        this.interestedEventCount++;
      }
    },

    deleteInterestedEvent(event) {
      const index = this.interestedEvents.findIndex(
        (interestedEvent) => interestedEvent._id === event._id
      );
      if (index !== -1) {
        this.interestedEvents.splice(index, 1);
        this.interestedEventCount--;
=======
    workingURL:
      "https://probable-guacamole-w6r64q77rpqcg9rv-3000.app.github.dev/",
  }),//


import { defineStore } from 'pinia';

export const useEventStore = defineStore({
  id: 'event',
  state: () => ({
    events: [],
  }),
  getters: {
    getEventById: (state) => (id) => state.events.find((event) => event.id === id),
  },
  actions: {
    addEvent(event) {
      this.events.push(event);
    },
    deleteEvent(id) {
      const index = this.events.findIndex((event) => event.id === id);
      if (index !== -1) {
        this.events.splice(index, 1);
      }
    },
    updateEvent(updatedEvent) {
      const index = this.events.findIndex((event) => event.id === updatedEvent.id);
      if (index !== -1) {
        this.events[index] = updatedEvent;
      }
    },
    likeEvent(id) {
      const event = this.getEventById(id);
      if (event) {
        event.likes++;
>>>>>>> e84040d26d78dae99ea123746a04c705a329b2ef
      }
    },
  },
});



/* <style lang="scss">
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
            margin-left: 5px;

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
</style> */

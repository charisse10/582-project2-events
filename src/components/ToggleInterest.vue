<template>
  <button
    @click="toggleInterest"
<<<<<<< HEAD
    :class="{ 'interested-button': isInterested }"
  >
    {{ isInterested ? "Interested!" : "Interested" }}
=======
    :class="{ interestedbutton: interested }"
  >
    {{ interested ? "Interested!" : "Interested" }}
>>>>>>> e84040d26d78dae99ea123746a04c705a329b2ef
  </button>
  <!-- <div class="interested-count">Interested Count: {{ interestedCount }}</div> -->
</template>

<script>
import { useInterestedEventsStore } from "../store/events";

export default {
  name: "ToggleInterest",

  props: {
    eventId: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
=======
    showButtons: {
      type: Boolean,
      default: false,
    },
    interested: {
      type: Boolean,
      default: false,
    },
>>>>>>> e84040d26d78dae99ea123746a04c705a329b2ef
  },

  methods: {
    toggleInterest() {
<<<<<<< HEAD
      const store = useInterestedEventsStore();
      if (this.isInterested) {
        store.deleteInterestedEvent({ _id: this.eventId });
      } else {
        store.addInterestedEvent({ _id: this.eventId });
      }
=======
      this.$emit("toggle-interest");
>>>>>>> e84040d26d78dae99ea123746a04c705a329b2ef
    },
  },

  computed: {
    isInterested() {
      const store = useInterestedEventsStore();
      return store.interestedEvents.some((e) => e._id === this.eventId);
    },

    // interestedCount() {
    //   const store = useInterestedEventsStore();
    //   const interestedEvents = store.interestedEvents;
    //   return interestedEvents.filter((e) => e._id === this.eventId).length;
    // },
  },
};
</script>

<style lang="scss" scoped>
$orange: #f44d00;
$yellow: rgb(255, 255, 124);
$blue: #2c3e50;

button {
  background-color: #fff;
  border: 1px solid $yellow;
  padding: 5px 20px;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 3rem;

  &.interested-button {
    background-color: $yellow;
  }
}
</style>

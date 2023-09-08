<template>
  <button
    @click="toggleInterest"
    :class="{ 'interested-button': isInterested }"
  >
    {{ isInterested ? "Interested!" : "Interested" }}
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
  },

  methods: {
    toggleInterest() {
      const store = useInterestedEventsStore();
      if (this.isInterested) {
        store.deleteInterestedEvent({ _id: this.eventId });
      } else {
        store.addInterestedEvent({ _id: this.eventId });
      }
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

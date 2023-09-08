<template>
  <div class="interested-count">
    <p v-if="interestedCount === 0"></p>
    <p v-else-if="interestedCount === 1">
      <span> {{ interestedCount }} </span><br />
      showed interest
    </p>
    <p v-else>
      <span>{{ interestedCount }}</span
      ><br />
      showed interest
    </p>
  </div>
</template>

<script>
import { useInterestedEventsStore } from "../store/events";

export default {
  name: "InterestedCount",

  props: {
    eventId: {
      type: String,
      required: true,
    },
  },

  computed: {
    interestedCount() {
      const store = useInterestedEventsStore();
      const interestedEvents = store.interestedEvents;
      return interestedEvents.filter((e) => e._id === this.eventId).length;
    },
  },
};
</script>

<style lang="scss" scoped>
$yellow: rgb(255, 255, 124);

.interested-count {
  margin-top: 3rem;

  span {
    color: $yellow;
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>

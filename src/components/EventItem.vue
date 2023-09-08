<template>
  <div class="event">
    <h4>{{ event.category }}</h4>
    <h3>{{ event.title }}</h3>
    <p>
      DATE: <span> {{ event.date }} </span>
    </p>
    <p>
      TIME: <span> {{ event.time }} </span>
    </p>
    <p>
      LOCATION: <span> {{ event.location }} </span>
    </p>
<<<<<<< HEAD
    <ToggleInterest v-if="showInterestButton" :eventId="event._id" />
    <InterestedCount v-if="showInterestCount" :eventId="event._id" />
=======
    <ToggleInterest
      :event="event"
      :showButtons="showButtons"
      :interested="interested"
      @toggleInterest="toggleInterest"
    />
    <DeleteButton
      v-if="showDeleteButton"
      :event-id="event._id"
      @event-deleted="handleEventDeleted"
    />
>>>>>>> e84040d26d78dae99ea123746a04c705a329b2ef
  </div>
</template>

<script>
import ToggleInterest from "./ToggleInterest.vue";
import InterestedCount from "./InterestedCount.vue";

export default {
  name: "EventItem",

  components: {
    ToggleInterest,
    InterestedCount,
  },
  props: {
    event: {
      type: Object,
      required: true,
    },

    showInterestButton: {
      type: Boolean,
<<<<<<< HEAD
      default: true,
=======
      default: false,
    },
    showDeleteButton: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      interested: this.event.interested,
    };
  },

  methods: {
    toggleInterest() {
      const updatedEvent = { ...this.event };
      updatedEvent.interested = !updatedEvent.interested;
      this.interested = updatedEvent.interested;
      this.$emit("toggle-interest", updatedEvent);
>>>>>>> e84040d26d78dae99ea123746a04c705a329b2ef
    },

    showInterestCount: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$orange: #f44d00;
$yellow: rgb(255, 255, 124);
$blue: #2c3e50;

.event {
  text-align: center;
  background-color: $blue;
  color: #fff;
  padding: 35px;
  border-radius: 25px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);

  &:hover {
    background-color: $orange;
    transition: 1s;
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
    color: $yellow;
    text-transform: capitalize;
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  p {
    max-width: 80%;
    margin: 0 auto;
    text-align: left;
  }
}
</style>

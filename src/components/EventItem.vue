<template>
  <div class="event" :class="{ interestedevent: event.interested }">
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
    <ToggleInterest
      :event="event"
      :showButtons="showButtons"
      @toggleInterest="toggleInterest"
    />
    <DeleteButton
      v-if="showDeleteButton"
      :event-id="event._id"
      @event-deleted="handleEventDeleted"
    />
  </div>
</template>

<script>
import ToggleInterest from "./ToggleInterest.vue";
import DeleteButton from "./DeleteButton.vue";

export default {
  name: "EventItem",
  components: {
    ToggleInterest,
    DeleteButton,
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
    showButtons: {
      type: Boolean,
      default: false,
    },
    showDeleteButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleInterest() {
      const updatedEvent = { ...this.event };
      updatedEvent.interested = !updatedEvent.interested;
      this.$emit("toggle-interest", updatedEvent);
    },

    handleEventDeleted() {
      this.$emit("event-deleted", this.event._id);
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
  position: relative;

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

  button {
    background: #fff;
    padding: 5px 30px;
    border: 2px solid $orange;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    transform: translateX(-50%);
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
</style>

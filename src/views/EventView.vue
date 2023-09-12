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
    <ToggleInterest v-if="showInterestButton" :eventId="event._id" />

    <InterestedCount v-if="showInterestCount" :eventId="event._id" />

    <DeleteButton
      v-if="showDeleteButton"
      :eventId="event._id"
      @delete-clicked="onDeleteEvent"
    />
  </div>
</template>

<script>
import ToggleInterest from "@/components/ToggleInterest.vue";
import InterestedCount from "@/components/InterestedCount.vue";
import DeleteButton from "@/components/DeleteButton.vue";

export default {
  name: "EventView",

  components: {
    ToggleInterest,
    InterestedCount,
    DeleteButton,
  },

  props: {
    event: {
      type: Object,
      required: true,
    },

    showInterestButton: {
      type: Boolean,
      default: true,
    },

    showInterestCount: {
      type: Boolean,
      default: true,
    },

    showDeleteButton: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    onDeleteEvent() {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this event?"
      );
      if (confirmDelete) {
        this.$emit("event-deleted");
      }
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

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
    <button
      v-if="showButtons"
      @click="toggleInterest(event)"
      :class="{ interestedbutton: event.interested }"
    >
      {{ event.interested ? "Interested!" : "Interested" }}
    </button>
    <button v-if="showDeleteButton" @click="submitDeleteEvent(event._id)">
      DELETE
    </button>
  </div>
</template>

<script>
export default {
  name: "EventItem",
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
    toggleInterest(event) {
      this.$emit("toggle-interest", event);
    },

    submitDeleteEvent(eventId) {
      this.$emit("submit-delete-event", eventId);
    },
  },
};
</script>

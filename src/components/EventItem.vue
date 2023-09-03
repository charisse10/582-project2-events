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

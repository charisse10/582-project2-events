<template>
  <button
    v-if="showButtons"
    @click="toggleInterest"
    :class="{ interestedbutton: event.interested }"
  >
    {{ event.interested ? "Interested!" : "Interested" }}
  </button>
</template>

<script>
export default {
  name: "ToggleInterest",
  props: {
    event: {
      type: Object,
      required: true,
    },
    showButtons: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toggleInterest() {
      console.log("Toggle Interest Clicked for Event:", this.event);
      const updatedEvent = { ...this.event };
      updatedEvent.interested = !updatedEvent.interested;
      this.$emit("toggle-interest", updatedEvent);
    },
  },
};
</script>

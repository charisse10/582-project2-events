<template>
  <button
    v-if="showButtons"
    @click="toggleInterest"
    :class="{ interestedbutton: interested }"
  >
    {{ interested ? "Interested!" : "Interested" }}
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
    interested: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toggleInterest() {
      this.$emit("toggle-interest");
    },
  },
};
</script>

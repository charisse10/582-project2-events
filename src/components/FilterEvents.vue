<template>
  <div class="filter-events">
    <h3>What interests you?</h3>
    <label v-for="category in categories" :key="category">
      <input
        type="checkbox"
        :value="category"
        v-model="selectedCategories"
        @change="filterEvents"
      />
      {{ category }}
    </label>
  </div>
</template>

<script>
export default {
  name: "FilterEvents",
  props: {
    categories: Array,
  },
  data() {
    return {
      selectedCategories: [],
    };
  },
  methods: {
    filterEvents() {
      this.$emit("filter-changed", this.selectedCategories);
    },
  },
};
</script>

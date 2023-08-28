import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  state: () => ({ selectedCategory: null, categories: [] }),
  actions: {
    setCategories(categories) {
      this.categories = categories;
    },
    setSelectedCategory(category) {
      this.selectedCategory = category;
    },
    getSelectedCategory() {
      return this.selectedCategory;
    },
  },
});

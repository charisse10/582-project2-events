<template>
  <button @click="onDeleteClick">DELETE</button>
</template>

<script>
import { useDeleteStore } from "@/stores/deleteStore";

export default {
  props: {
    event: Object,
  },
  setup(props) {
    const { deleteEvent } = useDeleteStore();

    const onDeleteClick = async () => {
      try {
        await deleteEvent(props.event._id);
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    };

    return {
      onDeleteClick,
    };
  },
};
</script>

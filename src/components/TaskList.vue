<template>
  <PureTaskList
    :tasks="tasks"
    @archive-task="archiveTask"
    @pin-task="pinTask"
  />
</template>

<script>
import PureTaskList from "./PureTaskList.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: { PureTaskList },
	
  setup() {
    // creates a store instance
    const store = useStore();

    // retrives the tasks from  the store's state
    const tasks = computed(() => store.state.tasks);

    // Dispatches the actions back to the store
    const archiveTask = (task) => store.dispatch("archiveTask", task);
    const pinTask = (task) => store.dispatch("pinTask", task);

    return {
      tasks,
      archiveTask,
      pinTask,
    };
  },
};
</script>

<style scoped></style>

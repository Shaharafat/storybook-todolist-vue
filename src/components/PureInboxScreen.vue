<template>
  <div>
    <div v-if="error" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <div class="title-message">On no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>

    <div v-else class="page lists-show">
      <nav>
        <h1 class="title-page">
          <span class="title-wrapp">Taskbox</span>
        </h1>
      </nav>
      <!-- TASK LIST -->
      <task-list />
    </div>
  </div>
</template>

<script>
import TaskList from "./TaskList.vue";

export default {
  name: "PureInboxScreen",
  components: { TaskList },
  props: {
    error: { type: Boolean, default: false },
  },
};
</script>


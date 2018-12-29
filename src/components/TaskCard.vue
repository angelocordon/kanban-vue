<template>
  <div class="card task-card">
    <p class="content">
      {{ taskDescription }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'task-card',
  props: { taskData: Object },
  computed: {
    taskDescription() {
      return this.taskData.description
    }
  }
};
</script>

<style lang="scss" scoped>
.task-card {
  margin-top: 1rem;
  padding: 6px 12px;
  min-height: 36px;
}
</style>

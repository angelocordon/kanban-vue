<template>
  <button
    class="button is-small task-button-add"
    @click="addTask">
    ＋ Add a Task
  </button>
</template>

<script>
export default {
  name: 'add-task-button',
  props: { columnId: Number, columnOwner: String },
  methods: {
    addTask() {
      const prompt = `Assign a task for ${this.columnOwner}`;
      /* eslint-disable-next-line no-alert */
      const task = window.prompt(prompt);

      this.$store.commit({
        type: 'addTask',
        assignedTask: task,
        columnId: this.columnId
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.task-button-add {
  margin-top: 1rem;
  padding-left: 0px;
  background-color: transparent;
  border-color: transparent;
  color: #7a7a7a;
  font-size: 0.8em;
  font-weight: bold;
  &:hover { color: #363636 }
}
</style>

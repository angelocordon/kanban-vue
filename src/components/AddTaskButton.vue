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
  props: { columnId: Number },
  methods: {
    addTask() {
      const msg = `Assign a task for ${this.columnOwner}`;
      /* eslint-disable-next-line no-alert */
      const task = window.prompt(msg);

      // TODO: Empty strings should _not_ be added into the tasks data.
      if (task) this.tasks.push(task);
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

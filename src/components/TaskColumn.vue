<template>
  <div class="column task-column">
    <div class="column-header" :style="columnHeaderStyle">
      <h1 class="column-owner">{{ columnOwner }}</h1>
    </div>

    <task-card v-for="task in tasks"
               :task-description="task"
               :key="task.index">
    </task-card>

    <button class="button is-small task-button-add"
            v-on:click="addTask">
      ＋ Add a Task
    </button>
  </div>
</template>

<script>
import TaskCard from './TaskCard';

export default {
  name: 'task-column',
  components: { TaskCard },
  props: { columnOwner: String, columnColor: String },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    addTask() {
      const msg = `Assign a task for ${this.columnOwner}`;
      /* eslint-disable-next-line no-alert */
      const task = window.prompt(msg);

      // TODO: Empty strings should _not_ be added into the tasks data.
      if (task) this.tasks.push(task);
    }
  },
  computed: {
    columnHeaderStyle() {
      return { backgroundColor: this.columnColor };
    }
  }
};
</script>

<style lang="scss">
.task-column {
  margin: 5rem 12.5px;
  padding: 0px;
  &:first-child { margin-left: 2.5rem }
  &:last-child { margin-right: 2.5rem }

  > .task-button-add {
    margin-top: 1rem;
    padding-left: 0px;
    background-color: transparent;
    border-color: transparent;
    color: #7a7a7a;
    font-size: 0.8em;
    font-weight: bold;
    &:hover { color: #363636 }
  }
}

.column-header {
  display: flex;
  align-items: center;
  height: 32px;
  > .column-owner {
    padding-left: 12px;
    padding-right: 12px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
  }
}
</style>

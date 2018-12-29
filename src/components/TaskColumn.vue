<template>
  <div class="column task-column">
    <column-header
      :columnOwner="columnOwner"
      :headerColor="headerColor">
    </column-header>

    <task-card
      v-for="task in columnTasks"
      :task-data="task"
      :key="task.id">
    </task-card>

    <task-add-button :column-id="columnId"></task-add-button>
  </div>
</template>

<script>
import ColumnHeader from './ColumnHeader';
import TaskCard from './TaskCard';
import TaskAddButton from './TaskAddButton';

export default {
  name: 'task-column',
  components: { TaskCard, ColumnHeader, TaskAddButton },
  props: {
    columnData: Object,
    columnId: Number
  },
  computed: {
    columnId() {
      return this.columnData.id;
    },
    columnOwner() {
      return this.columnData.owner;
    },
    headerColor() {
      return this.columnData.color;
    },
    columnTasks() {
      return this.columnData.tasks;
    }
  }
};
</script>

<style lang="scss" scoped>
.task-column {
  margin: 5rem 12.5px;
  padding: 0px;
  &:first-child { margin-left: 2.5rem }
  &:last-child { margin-right: 2.5rem }
}
</style>

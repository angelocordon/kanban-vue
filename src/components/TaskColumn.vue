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

    <add-task-button
      :column-id="columnKeyId"
      :column-owner="columnOwner">
    </add-task-button>
  </div>
</template>

<script>
import ColumnHeader from './ColumnHeader';
import TaskCard from './TaskCard';
import AddTaskButton from './AddTaskButton';

export default {
  name: 'task-column',
  components: { TaskCard, ColumnHeader, AddTaskButton },
  props: { columnData: Object },
  computed: {
    columnKeyId() {
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

<template>
  <div class="columns">
    <task-column
      v-for="owner in projectOwners"
      :column-owner="owner.name"
      :column-color="owner.color"
      :key="owner.index"
    ></task-column>
  </div>
</template>

<script>
import TaskColumn from './components/TaskColumn';

export default {
  name: 'App',
  components: { TaskColumn },
  data() {
    return {
      projectOwners: [
        { name: 'Winnie', color: '#8e6e95' },
        { name: 'Bob', color: '#39a59c' },
        { name: 'Thomas', color: '#344759' },
        { name: 'George', color: '#e8741e' }
      ]
    };
  }
};
</script>

<style lang="scss">
  html { background-color: #eceeee }
</style>

<template>
  <div class="columns">
    <task-column v-for="column in columns"
                 :column-data="column"
                 :key="column.id">
    </task-column>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TaskColumn from './components/TaskColumn';

export default {
  name: 'App',
  components: { TaskColumn },
  computed: mapState(['columns'])
};
</script>

<style lang="scss">
html { background-color: #eceeee }
</style>

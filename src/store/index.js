import Vue from 'vue';
import Vuex from 'vuex';
import ColumnsData from './columns_data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: ColumnsData,
  mutations: {
    addTask(state, payload) {
      const task = payload.assignedTask;
      const columnId = payload.columnId;
      const column = state.columns.find(col => col.id === columnId);
      const columnTasks = column.tasks;
      columnTasks.push({ description: task });
    }
  }
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  columns: [
    {
      id: 1,
      owner: 'Winnie',
      color: '#8e6e95',
      tasks: [
        {
          id: 1,
          description: 'Get milk'
        }
      ]
    },

    {
      id: 2,
      owner: 'Bob',
      color: '#39a59c',
      tasks: []
    },

    {
      id: 3,
      owner: 'Thomas',
      color: '#344759',
      tasks: []
    },

    {
      id: 4,
      owner: 'George',
      color: '#e8741e',
      tasks: []
    }
  ]
};

const mutations = {
  addTask(state) {

  }
};

export default new Vuex.Store({
  state,
  mutations
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  columns: [
    {
      owner: 'Winnie',
      color: '#8e6e95',
      tasks: [{ description: 'Get milk' }]
    },

    {
      owner: 'Bob',
      color: '#39a59c',
      tasks: []
    },

    {
      owner: 'Thomas',
      color: '#344759',
      tasks: []
    },

    {
      owner: 'George',
      color: '#e8741e',
      tasks: []
    }
  ]
};

export default new Vuex.Store({ state });

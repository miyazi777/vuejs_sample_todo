import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'test msg',
    todos: []
  },
  getters: {
    todos(state) {
      return state.todos
    },
    todoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    add(state, todo) {
      const id = state.todos.reduce( function(result, todo) {
        return todo.id > result ? todo.id : result;
      }, 0);
      todo.id = id + 1
      state.todos.push(todo);
    },
    update(state, todo) {
      const index = state.todos.findIndex(t => t.id === todo.id);
      state.todos.splice(index, 1, todo);
    },
    remove(state, id) {
      const index = state.todos.findIndex(t => t.id === id);
      state.todos.splice(index, 1);
    }
  },
  actions: {
    add(context, todo) {
      context.commit('add', todo);
    },
    update(context, todo) {
      context.commit('update', todo);
    },
    remove(context, id) {
      context.commit('remove', id);
    }
  }
})

<template>
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Status</th>
      </tr>
      <tr v-for="todo in todos" :key="todo.id" :class="{ inversion: todo.id == todoId}">
        <th>{{ todo.name }}</th>
        <th>{{ todo.status }}</th>
        <th><button @click="edit(todo.id)">edit</button></th>
        <th><button @click="remove(todo.id)">delete</button></th>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'List',
  computed: {
    ...mapGetters({
      todos: 'todos'
    })
    //todos () {
    //  return this.$store.getters.todos;
    //}
  },
  props: ['todoId'],
  methods: {
    edit(id) {
      this.$emit('edit', {id: id})
    },
    remove(id) {
      if (confirm("Remove OK?")) {
        this.$store.dispatch("remove", id);
      }
    }
  }
}
</script>

<style>
.inversion {
  background-color: lightgray;
}
</style>

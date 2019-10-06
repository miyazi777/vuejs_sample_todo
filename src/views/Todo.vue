<template>
  <div>
    <h1>Todo List</h1>
    <div v-if="editFlg">
      <Edit :todoId="todoId" @clear='clear'/>
    </div>
    <div v-else>
      <button @click="add">New</button>
    </div>
    <List :todoId="todoId" @edit='edit($event)' @clear='clear'/>
  </div>
</template>

<script>
import Edit from '@/components/Edit.vue'
import List from '@/components/List.vue'

export default {
  name: 'todo',
  data() {
    return {
      todoId: 0,
      editFlg: false
    }
  },
  components: {
    Edit,
    List
  },
  methods: {
    edit($event) {
      this.todoId = $event.id;
      this.editFlg = true
    },
    clear() {
      this.todoId = 0
      this.editFlg = false
    },
    add() {
      this.todoId = 0
      this.editFlg = true
    }
  }
}
</script>

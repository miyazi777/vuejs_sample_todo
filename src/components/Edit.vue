<template>
  <div>
    <form @submit.prevent="save">
      Name:
      <input type="text" v-model="todo.name" required/><br>
      Status:<br>
      <input type="radio" name="status" id="waiting" value="waiting" v-model="todo.status" required>
      <label for="waiting">未着手</label>
      <br>
      <input type="radio" name="status" id="doing" value="doing" v-model="todo.status">
      <label for="doing">進行中</label>
      <br>
      <input type="radio" name="status" id="completed" value="completed" v-model="todo.status">
      <label for="completed">完了</label>
      <br>
      <button type="submit">save</button>
    </form>
    <button @click="cancel">cancel</button>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'Edit',
    created() {
      if (this.todoId === 0) {
        this.todo = {}
      } else {
        this.todo = _.cloneDeep(this.$store.getters.todoById(this.todoId));
      }
    },
    data() {
      return {
        todo: {}
      }
    },
    props: ['todoId'],
    methods: {
      save() {
        if (this.todoId === 0) {
          this.$store.dispatch("add", this.todo);
        } else {
          this.$store.dispatch("update", this.todo);
        }
        this.$emit('clear')
      },
      cancel() {
        this.$emit('clear')
      }
    }
  }
</script>

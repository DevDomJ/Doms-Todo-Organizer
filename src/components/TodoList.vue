<script lang="ts">
import { defineComponent } from 'vue'
import Todo from './Todo.vue'

type ApiTodo = {
	id: string,
	todo: string
}

type ApiTodoList = {
	todos: ApiTodo[]
}

export default defineComponent({
	// type inference enabled
	data(): ApiTodoList {
		return {
			todos: []
		}
	},
	computed: {},
	methods: {
		async fetchTodos() {
			const result = await fetch('https://dummyjson.com/todos?limit=3&skip=10');
			this.todos = (await result.json() as unknown as ApiTodoList).todos;
		}
	},
	components: {
		Todo
	},
	mounted() {
		// get todos from API here
		this.fetchTodos();
	}
})
</script>

<template>
	<div>Todo Title</div>
	<div>Estimated Hours</div>
	<Todo v-for="todo in todos" :hour-estimation="0" :todo-title="todo.todo" :todoId="todo.id" />
</template>
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
	<div class="todo-list-header">
		<div class="header-label">Todo Title</div>
		<div class="header-label">Estimated Hours</div>
	</div>
	<div class="todo-list">
		<Todo v-for="todo in todos" :hour-estimation="0" :todo-title="todo.todo" :todoId="todo.id" />
	</div>
</template>

<style>
.todo-list-header {
	display: flex;
	flex-direction: row;
}

.header-label {
	width: 100%;
	padding-left: 10px;
	font-size: large;
	font-weight: bold;
}

.todo-list {
	display: flex;
	flex-direction: column;
}
</style>
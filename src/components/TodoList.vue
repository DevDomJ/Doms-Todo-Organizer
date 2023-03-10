<script lang="ts">
import { defineComponent } from 'vue'
import Todo from './Todo.vue'

export type ApiTodo = {
	id: string,
	todo: string,
	hourEstimation: number,
	dueDate: Date | null,
	canBeSplit: boolean
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
	computed: {
		nextFreeId() {
			let nextId: number = 0;
			this.todos.forEach((apiTodo) => {
				let parsedId = parseInt(apiTodo.id);
				nextId = (parsedId > nextId ? parsedId : nextId)
			});
			return String(++nextId);
		}
	},
	methods: {
		async fetchTodos() {
			// Rewrite to get it from C# REST API instead
			const result = await fetch('https://dummyjson.com/todos?limit=10&skip=10');
			this.todos = (await result.json() as unknown as ApiTodoList).todos;
			this.todos.forEach((todo) => {
				todo.hourEstimation = 0;
				todo.canBeSplit = false;
			});
		},
		insertTaskClicked(event: Event) {
			let newTodo: ApiTodo = {
				id: this.nextFreeId,
				todo: this.nextFreeId,
				hourEstimation: 0,
				dueDate: null,
				canBeSplit: false
			};
			this.todos.splice(2, 0, newTodo);
			return event;
		}
	},
	components: {
		Todo
	},
	mounted() {
		this.fetchTodos();
	}
})
</script>

<template>
	<div class="todo-list-header">
		<div class="header-label">Todo Title</div>
		<div class="header-label" style="text-align: right">Estimated Hours</div>
	</div>
	<div class="todo-list">
		<Todo v-for="todo in todos" @insertTask="insertTaskClicked" :apiTodo="todo" />
	</div>
</template>

<style>
.todo-list-header {
	display: flex;
	flex-direction: row;
}

.header-label {
	width: 100%;
	padding-left: 5px;
	font-size: large;
	font-weight: bold;
}

.todo-list {
	/* Use grid here instead? */
	display: flex;
	flex-direction: column;
}
</style>
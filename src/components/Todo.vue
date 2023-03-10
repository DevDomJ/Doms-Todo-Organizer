<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ApiTodo } from "./TodoList.vue";

export default defineComponent({
	// type inference enabled
	props: {
		apiTodo: {
			type: Object as PropType<ApiTodo>,
			required: true
		}
	},
	computed: {
		todoTitleTextInputId() {
			return "todoTitleTextInput" + this.apiTodo.id;
		},
		hourEstimationNumberInputId() {
			return "hourEstimationNumberInput" + this.apiTodo.id;
		}
	},
	mounted() {
	}
})
</script>

<template>
	<div class="todo">
		<button class="add-todo-button" @click="$emit('insertTask', $event)">+</button>
		<input v-model="apiTodo.todo" :id="todoTitleTextInputId" class="todo-title" />
		<input v-model="apiTodo.hourEstimation" :id="hourEstimationNumberInputId" class="todo-estimated-hours" />
	</div>
</template>

<style>
.todo {
	display: flex;
	flex-direction: row;
	/* display: grid;
	grid-template-columns: 2.5rem 8fr 1fr;
	grid-column-gap: 10px; */
}

.todo-title {
	width: 100%;
}

.todo-estimated-hours {
	min-width: 3rem;
	width: 13%;
	text-align: right;
}

.add-todo-button {
	margin: 5px;
	width: 2.5rem;
	font-size: large;
	visibility: hidden;
}

.todo:hover .add-todo-button {
	visibility: visible;
}

.add-todo-button:hover {
	background-color: rgb(57, 211, 254);
}
</style>
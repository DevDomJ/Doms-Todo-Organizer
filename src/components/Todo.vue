<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	// type inference enabled
	props: {
		todoTitle: String,
		hourEstimation: Number,
		todoId: [Number, String]
	},
	computed: {
		todoTitleTextInputId() {
			return "todoTitleTextInput" + this.todoId;
		},
		hourEstimationNumberInputId() {
			return "hourEstimationNumberInput" + this.todoId;
		}
	},
	mounted() {
	}
})
</script>

<template>
	<div class="todo">
		<input v-model="todoTitle" :id="todoTitleTextInputId" class="todo-title" />
		<input v-model="hourEstimation" :id="hourEstimationNumberInputId" class="todo-estimated-hours" />
	</div>
</template>

<style>
.todo {
	display: flex;
	flex-direction: row;
}

.todo-title {
	width: 40rem;
}

.todo-estimated-hours {
	width: 3rem;
}
</style>
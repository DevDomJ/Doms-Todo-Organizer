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
	<input v-model="todoTitle" :id="todoTitleTextInputId" />
	<input v-model="hourEstimation" :id="hourEstimationNumberInputId" />
</template>
<template>
	<div :class="classes">
		<label class="checkbox">
			<input type="checkbox" :checked="isChecked" disabled name="checked" />
			<span class="checkbox-custom" @click="archiveTask" />
		</label>
		<div class="title">
			<input
				type="text"
				:value="task.title"
				readonly
				placeholder="Input title"
			/>
		</div>
		<div class="actions">
			<a v-if="!isChecked" @click="pinTask">
				<span class="icon-star"></span>
			</a>
		</div>
	</div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
	name: 'Task',
	props: {
		task: {
			type: Object,
			required: true,
			default: () => ({ id: '', state: '', title: '' }),
			validator: (task) => ['id', 'state', 'title'].every((key) => key in task),
		},
	},
	emits: ['archive-task', 'pin-task'],
	setup(props, { emit }) {
		props = reactive(props);
		return {
			classes: computed(() => ({
				'list-item TASK_INBOX': props.task.state === 'TASK_INBOX',
				'list-item TASK_PINNED': props.task.state === 'TASK_PINNED',
				'list-item TASK_ARCHIVED': props.task.state === 'TASK_ARCHIVED',
			})),

			/**
			 * Commputed property for checking the start of the task
			 */
			isChecked: computed(() => props.task.state === 'TASK_ARCHIVED'),

			/**
			 * eventHandler for archiving task
			 *
			 */
			archiveTask() {
				emit('archive-task', props.state.id);
			},

			/**
			 * Event handler for pinning task
			 */
			pinTask() {
				emit('pin-task', props.state.id);
			},
		};
	},
};
</script>

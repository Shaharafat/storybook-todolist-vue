import { mount } from '@vue/test-utils';
// our story imported here
import { WithPinnedTasks } from '../../src/components/PureTaskList.stories';
import PureTaskList from '../../src/components/PureTaskList.vue';

test('renders pinned tasks at the start of the list', () => {
	const wrapper = mount(PureTaskList, {
		// story args used with our test
		propsData: WithPinnedTasks.args,
	});

	const firstPinnedTask = wrapper.find('.list-item:nth-child(1).TASK_PINNED');
	expect(firstPinnedTask).not.toBe(null);
});

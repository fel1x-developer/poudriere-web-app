<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import CurrentStatusTooltip from '$lib/components/Build/CurrentStatusTooltip.svelte';

	const { Story } = defineMeta({
		title: 'Build/CurrentStatusTooltip',
		component: CurrentStatusTooltip,
		parameters: {
			layout: 'centered'
		},
		argTypes: {
			status: {
				control: 'text',
				description: 'Build status'
			}
		},
		tags: ['autodocs']
	});
</script>

<Story name="Done" args={{ status: 'done:' }} />
<Story name="Building" args={{ status: 'building:' }} />
<Story name="Unknown" args={{ status: 'unknown:' }} />

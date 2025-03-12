<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import StatusTooltip from '$lib/components/Build/StatusTooltip.svelte';

	const { Story } = defineMeta({
		title: 'Build/StatusTooltip',
		component: StatusTooltip,
		parameters: {
			layout: 'centered'
		},
		argTypes: {
			status: {
				control: 'text',
				description: 'Build status'
			}
		}
	});
</script>

<Story name="Done" args={{ status: 'done:' }} />
<Story name="Building" args={{ status: 'building:' }} />
<Story name="Unknown" args={{ status: 'unknown:' }} />

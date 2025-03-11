<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import StatsTable from '$lib/components/Build/StatsTable.svelte';

	const stats: PoudriereBuildStats = {
		built: 23,
		failed: 3,
		fetched: 4,
		ignored: 3,
		inspected: undefined,
		queued: 40,
		skipped: 5
	};

	const remaining = stats.queued - stats.built - stats.fetched - stats.fetched - stats.skipped;

	const { Story } = defineMeta({
		title: 'Build/StatsTable',
		component: StatsTable,
		argTypes: {
			built: {
				control: 'number',
				description: 'Number of remaining jobs'
			},
			failed: {
				control: 'number',
				description: 'Number of remaining jobs'
			},
			fetched: {
				control: 'number',
				description: 'Number of remaining jobs'
			},
			ignored: {
				control: 'number',
				description: 'Number of remaining jobs'
			},
			queued: {
				control: 'number',
				description: 'Number of remaining jobs'
			},
			skipped: {
				control: 'number',
				description: 'Number of remaining jobs'
			},
			remaining: {
				control: 'number',
				description: 'Number of remaining jobs'
			}
		}
	});
</script>

<Story name="Primary" args={{ ...stats, remaining: remaining }} />

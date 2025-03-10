<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	import BuildStatus from '$lib/components/Build/BuildStatus.svelte';
	import type { PageProps } from './$types';
	import ProgressBar from '$lib/components/Build/ProgressBar.svelte';

	let { data }: PageProps = $props();
	let name = data.name;
	let builds = data.builds;
	let latest = builds.find((build) => build.buildname === data.latest);

	let { queued, built, failed, skipped, inspected, ignored, fetched } = latest!.stats;
	let remaining = queued - built - failed - skipped - (inspected ?? 0) - ignored - fetched;

	onMount(() => {
		const interval = setInterval(() => {
			invalidate(`/${name}`);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svelte:head>
	<title>Poudriere - Jail {name}</title>
</svelte:head>

<div class="flex h-full w-full flex-col">
	<section class="flex w-full flex-col text-left lg:gap-y-1">
		<div class="flex flex-row items-center gap-x-3 lg:gap-x-4">
			<h1 class="text-xl font-bold lg:text-4xl">
				{name}
			</h1>
			<BuildStatus status={latest?.status ?? ''} />
		</div>
		<h2 class="text-md font-semibold text-gray-600 lg:text-xl dark:text-gray-400">
			Ports Tree: {latest?.ptname ?? ''}
		</h2>
	</section>
	<ProgressBar {queued} {remaining} />
</div>

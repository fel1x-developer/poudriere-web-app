<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	import BuildStatus from '$lib/components/Build/BuildStatus.svelte';
	import type { PageProps } from './$types';
	import ProgressBar from '$lib/components/Build/ProgressBar.svelte';
	import StatsTable from '$lib/components/Build/StatsTable.svelte';

	let { data }: PageProps = $props();
	let build = data.build;
	let { queued, built, failed, skipped, inspected, ignored, fetched } = build.stats;
	let remaining = queued - built - failed - skipped - (inspected ?? 0) - ignored - fetched;

	onMount(() => {
		const interval = setInterval(() => {
			invalidate(`/${build.mastername}`);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svelte:head>
	<title>Poudriere - Build {build.buildname}</title>
</svelte:head>

<div class="flex h-full w-full flex-col">
	<section class="flex w-full flex-col text-left lg:gap-y-1">
		<div class="flex flex-row items-center gap-x-3 lg:gap-x-4">
			<h1 class="text-xl font-bold lg:text-4xl">Build: {build.buildname}</h1>
			<BuildStatus status={build.status} />
		</div>
		<h2 class="text-md font-semibold text-gray-600 lg:text-xl dark:text-gray-400">
			Master: <a class="link" href="/jail/{build.mastername}">{build.mastername}</a>
			({build.jailname})
		</h2>
		<h2 class="text-md font-semibold text-gray-600 lg:text-xl dark:text-gray-400">
			Ports Tree: {build.ptname}
		</h2>
		<ProgressBar {queued} {remaining} />
	</section>
	<div class="divider"></div>
	<StatsTable stats={build.stats} {remaining} />
</div>

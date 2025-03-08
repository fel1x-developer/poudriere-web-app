<script lang="ts">
	import BuildStatus from "$lib/components/Build/BuildStatus.svelte";
	import type { PageProps } from './$types';
	import ProgressBar from "$lib/components/Build/ProgressBar.svelte";

	let { data }: PageProps = $props();
	let build = data.build;
	let {queued, built, failed, skipped, inspected, ignored, fetched} = build.stats;
	let remaining = Number(queued) - Number(built) - Number(failed) - Number(skipped) - Number(inspected ?? 0) - Number(ignored) - Number(fetched);
</script>

<svelte:head>
	<title>Poudriere - Build {build.buildname}</title>
</svelte:head>

<div class="flex w-full flex-col">
	<section class="flex w-full flex-col text-left">
		<div class="flex flex-row items-center gap-x-3 lg:gap-x-4">
			<h1 class="font-bold text-xl lg:text-4xl">Build: {build.buildname}</h1>
			<BuildStatus status={build.status} />
		</div>
		<h2 class="font-semibold text-md lg:text-xl text-gray-600 dark:text-gray-400">Master: <a class="link" href="/jail/{build.mastername}">{build.mastername}</a> ({build.jailname})</h2>
		<h2 class="font-semibold text-md lg:text-xl text-gray-600 dark:text-gray-400">Ports Tree: {build.ptname}</h2>
	</section>
</div>

<section class="w-full bottom-0 self-center absolute bg-base-200">
	<div class="px-1 lg:px-3">
		<ProgressBar queued={Number(queued)} remaining={remaining} />
	</div>
</section>

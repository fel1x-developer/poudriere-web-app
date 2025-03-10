<script lang="ts">
	let { queued, remaining }: { queued: number; remaining: number } = $props();

	let percentage = $derived.by(() => {
		let pctdone = ((queued - remaining) * 100) / queued;
		if (isNaN(pctdone)) {
			pctdone = 0;
		}

		if (pctdone <= 0) pctdone = 0;
		else if (pctdone > 100) pctdone = 100;

		return pctdone;
	});
</script>

<div class="flex w-full flex-row items-center gap-x-2 text-sm lg:text-lg">
	{#if percentage === 0}
		<progress class="progress w-1/2"></progress>
		<p>Preparing build...</p>
	{:else if percentage === 100}
		<progress class="progress progress-success w-1/2" value="100" max="100"></progress>
		<p>Done</p>
	{:else}
		<progress class="progress progress-primary w-1/2" value={percentage} max="100"></progress>
		<p>{percentage}%</p>
	{/if}
</div>

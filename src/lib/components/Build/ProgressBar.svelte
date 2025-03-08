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

{#if percentage === 0}
	<progress class="progress w-full"></progress>
{:else if percentage === 100}
	<progress class="progress progress-success w-full" value="100" max="100"></progress>
{:else}
	<progress class="progress progress-primary w-full" value={percentage} max="100"></progress>
{/if}

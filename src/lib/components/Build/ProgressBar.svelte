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
	<progress class="progress w-1/2"></progress>
{:else if percentage === 100}
	<div class="tooltip tooltip-success" data-tip="{percentage}%">
		<progress class="progress progress-success w-1/2" value="100" max="100"></progress>
	</div>
{:else}
	<div class="tooltip tooltip-primary" data-tip="{percentage}%">
		<progress class="progress progress-primary w-1/2" value={percentage} max="100"></progress>
	</div>
{/if}

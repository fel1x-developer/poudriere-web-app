<script lang="ts">
	let { status }: { status: string } = $props();
</script>

{#if status === 'done:'}
	<div class="tooltip tooltip-success" data-tip="Done">
		<div aria-label="success" class="status status-success lg:status-lg"></div>
	</div>
{:else if status === 'building:'}
	<div class="tooltip tooltip-primary" data-tip="Done">
		<span class="loading loading-spinner text-primary loading-xs"></span>
	</div>
{:else}
	<div class="tooltip tooltip-error" data-tip="Done">
		<div aria-label="error" class="status status-error lg:status-lg"></div>
	</div>
{/if}

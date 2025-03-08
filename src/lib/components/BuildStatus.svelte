<script lang="ts">
    let {status} : {status : string} = $props();
</script>

{#if status === "done:"}
    <div aria-label="success" class="status status-success lg:status-lg"></div>
{:else if status === "building:"}
    <span class="loading loading-spinner text-primary loading-xs"></span>
{:else}
    <div aria-label="error" class="status status-error lg:status-lg"></div>
{/if}
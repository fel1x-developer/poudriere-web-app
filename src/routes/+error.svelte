<script lang="ts">
	import { page } from '$app/state';
	import Fa from 'svelte-fa';
	import { faFreebsd } from '@fortawesome/free-brands-svg-icons';
</script>

<main class="w-full">
	<div class="gay-y-2 flex flex-col gap-y-2 lg:gap-y-3">
		<div
			class="text-bold flex flex-row justify-center gap-x-6 text-5xl lg:gap-x-15 lg:text-9xl"
		>
			<Fa icon={faFreebsd} />
		</div>
		<div class="flex flex-row gap-x-3 lg:gap-x-6 justify-center">
			<div class="inline-grid *:[grid-area:2/1]">
				<div class="status status-error lg:status-xl animate-ping"></div>
				<div class="status status-error lg:status-xl"></div>
			</div>
			<h1 class="text-text dark:text-text-dark text-center text-3xl font-bold lg:text-6xl max-w-3/4">
				{page.status}: {page.error?.message}
			</h1>
		</div>
	</div>
</main>

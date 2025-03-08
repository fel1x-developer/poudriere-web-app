<script lang="ts">
	import { page } from '$app/state';
	import Fa from 'svelte-fa';
	import { faFreebsd } from '@fortawesome/free-brands-svg-icons';
</script>

<main>
	<div class="gay-y-2 flex flex-col lg:gap-y-3">
		<div
			class="text-bold flex w-full flex-row items-center justify-center gap-x-6 align-middle text-5xl lg:gap-x-15 lg:text-9xl"
		>
			<Fa icon={faFreebsd} />
			?
		</div>
		<div class="flex flex-col gap-y-1 align-middle lg:gap-y-2">
			<h1 class="text-text dark:text-text-dark text-center text-3xl font-bold lg:text-6xl">
				Oops! Error Occurred!
			</h1>
			<h1 class="text-text dark:text-text-dark text-center text-xl font-bold lg:text-3xl">
				{page.status}: {page.error?.message}
			</h1>
		</div>
	</div>
</main>

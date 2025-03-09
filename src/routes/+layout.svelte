<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Fa from 'svelte-fa';
	import { faFreebsd } from '@fortawesome/free-brands-svg-icons';

	let { children } = $props();
</script>

<div class="drawer lg:drawer-open min-h-screen min-w-screen lg:min-h-full">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Page content here -->
		<div class="min-h-screen px-15 py-13 lg:px-10 lg:py-15 content-center">
			{@render children()}
		</div>
		<label
			for="my-drawer-2"
			class="btn btn-ghost drawer-button absolute top-0 left-0 m-1 lg:hidden"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-6 w-6 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path>
			</svg>
		</label>
		<Footer />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<li>
				<a class="mb-2 flex flex-row items-center gap-x-4 text-lg font-bold" href="/">
					<Fa icon={faFreebsd} size="2x" />
					Poudriere
				</a>
			</li>
			<li>
				<details open>
					<summary><a class="font-bold" href="/jail">Jail</a></summary>
					<!--					<ul>-->
					<!--						<li><a>Submenu 1</a></li>-->
					<!--						<li><a>Submenu 2</a></li>-->
					<!--					</ul>-->
				</details>
			</li>
			<li>
				<details open>
					<summary><a class="font-bold" href="/build">Build</a></summary>
					<!--					<ul>-->
					<!--						<li><a>Submenu 1</a></li>-->
					<!--						<li><a>Submenu 2</a></li>-->
					<!--					</ul>-->
				</details>
			</li>
		</ul>
	</div>
</div>

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Footer from '$lib/components/Footer.svelte';

	const { Story } = defineMeta({
		title: 'Footer',
		component: Footer,
		parameters: {
			layout: 'fullscreen'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Primary" />

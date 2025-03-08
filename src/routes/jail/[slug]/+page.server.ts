export const prerender = 'auto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const response = await fetch(`$lib/140-rel-default/${params.slug}}/.data.json`);
	const data = response.json();
	return {
		data
	};
};

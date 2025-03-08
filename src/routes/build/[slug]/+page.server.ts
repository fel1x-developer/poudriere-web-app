export const prerender = 'auto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const build: PoudriereBuild = await fetch(`/140-rel-default/${params.slug}/.data.json`).then(
		(res) => res.json()
	);
	return {
		build
	};
};

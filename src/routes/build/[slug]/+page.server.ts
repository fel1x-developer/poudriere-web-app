import {error} from "@sveltejs/kit";

export const prerender = 'auto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const build: PoudriereBuild = await fetch(`/140-rel-default/${params.slug}/.data.json`)
		.then((res) => res.json())
		.catch((err) => error(404, {
			message: err.message,
		}));
	return {
		build
	};
};

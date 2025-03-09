import {error} from "@sveltejs/kit";

export const prerender = 'auto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const builds: PoudriereBuild = await fetch(`/${params.slug}/.data.json`)
		.then((res) => res.json())
		.catch(() => error(404, {
			message: `Jail ${params.slug} not found`,
		}));
	return {
		builds
	};
};

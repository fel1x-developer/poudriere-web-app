import { error } from '@sveltejs/kit';

export const prerender = 'auto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const res = await fetch(`/${params.slug}/.data.json`)
		.then((res) => res.json())
		.catch(() =>
			error(404, {
				message: `Jail ${params.slug} not found`
			})
		);
	const { latest, ...rest } = res.builds;
	const builds = Object.values(rest) as PoudriereJailBuild[];

	return {
		name: params.slug,
		latest: latest,
		builds: builds
	};
};

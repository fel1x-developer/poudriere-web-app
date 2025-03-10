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
	const buildsRaw = Object.values(rest) as PoudriereJailBuildRaw[];
	const builds: PoudriereJailBuild[] = buildsRaw.map((build) => ({
		buildname: build.buildname,
		started: Number(build.started),
		ended: Number(build.ended),
		jailname: build.jailname,
		mastername: build.mastername,
		ptname: build.ptname,
		stats: {
			built: Number(build.stats.built),
			failed: Number(build.stats.built),
			fetched: Number(build.stats.built),
			ignored: Number(build.stats.built),
			inspected: build.stats.built !== undefined ? Number(build.stats.inspected) : undefined,
			queued: Number(build.stats.built),
			skipped: Number( build.stats.built),
		},
		status: build.status,
	}))

	return {
		name: params.slug,
		latest: latest,
		builds: builds
	};
};

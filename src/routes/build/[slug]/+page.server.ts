import { error } from '@sveltejs/kit';

export const prerender = 'auto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const buildRaw: PoudriereBuildRaw = await fetch(`/140-rel-default/${params.slug}/.data.json`)
		.then((res) => res.json())
		.catch(() =>
			error(404, {
				message: `Build '${params.slug}' not found`
			})
		);

	const snap: PoudriereBuildSnap = {
		elapsed: Number(buildRaw.snap.elapsed),
		loadavg: buildRaw.snap.loadavg,
		now: buildRaw.snap.now,
		swapinfo: buildRaw.snap.swapinfo
	};

	const stats: PoudriereBuildStats = {
		built: Number(buildRaw.stats.built),
		failed: Number(buildRaw.stats.failed),
		fetched: Number(buildRaw.stats.fetched),
		ignored: Number(buildRaw.stats.ignored),
		inspected:
			buildRaw.stats.inspected !== undefined ? Number(buildRaw.stats.inspected) : undefined,
		queued: Number(buildRaw.stats.queued),
		skipped: Number(buildRaw.stats.skipped)
	};

	const jobs: PoudriereBuildJob[] = buildRaw.jobs.map((job) => ({
		id: Number(job.id),
		status: job.status
	}));

	const build: PoudriereBuild = {
		buildname: buildRaw.buildname,
		started: Number(buildRaw.started),
		ended: Number(buildRaw.ended),
		jailname: buildRaw.jailname,
		mastername: buildRaw.mastername,
		ports: buildRaw.ports,
		ptname: buildRaw.ptname,
		snap: snap,
		stats: stats,
		status: buildRaw.status,
		jobs: jobs,
		skipped: buildRaw.skipped
	};

	return {
		build
	};
};

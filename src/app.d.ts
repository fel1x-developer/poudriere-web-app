// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	export interface PoudriereBuildPorts {
		tobuild: [
			{
				origin: string;
				pkgname: string;
			}
		];
		built: [
			{
				origin: string;
				pkgname: string;
				elapsed: string;
			}
		];
		failed: [
			{
				origin: string;
				pkgname: string;
				phase: string;
				errortype: string;
				elapsed: string;
			}
		];
		skipped: [
			{
				origin: string;
				pkgname: string;
				depends: string;
			}
		];
		queued: [
			{
				origin: string;
				pkgname: string;
				reason: string;
			}
		];
	}

	export interface PoudriereBuildSnap {
		elapsed: string;
		loadavg: string;
		now: string;
		swapinfo: string;
	}

	export interface PoudriereBuildStats {
		built: number;
		failed: number;
		fetched: number;
		ignored: number;
		inspected?: number;
		queued: number;
		skipped: number;
	}

	export interface PoudriereBuildStatsRaw {
		built: string;
		failed: string;
		fetched: string;
		ignored: string;
		inspected?: string;
		queued: string;
		skipped: string;
	}

	export interface PoudriereBuildJob {
		id: number;
		status: string;
	}

	export interface PoudriereBuildJobRaw {
		id: string;
		status: string;
	}

	export interface PoudriereBuild {
		buildname: string;
		started: number;
		ended: number;
		jailname: string;
		mastername: string;
		ports: PoudriereBuildPorts;
		ptname: string;
		snap: PoudriereBuildSnap;
		stats: PoudriereBuildStats;
		status: string;
		jobs: PoudriereBuildJob[];
		skipped: never;
	}

	export interface PoudriereBuildRaw {
		buildname: string;
		ended: string;
		jailname: string;
		mastername: string;
		ports: PoudriereBuildPorts;
		ptname: string;
		snap: PoudriereBuildSnap;
		started: string;
		stats: PoudriereBuildStatsRaw;
		status: string;
		jobs: PoudriereBuildJobRaw[];
		skipped: never;
	}

	export interface PoudriereJailBuild {
		buildname: string;
		started: number;
		ended: number;
		jailname: string;
		mastername: string;
		ptname: string;
		stats: PoudriereBuildStats;
		status: string;
	}

	export interface PoudriereJailBuildRaw {
		buildname: string;
		started: string;
		ended: string;
		jailname: string;
		mastername: string;
		ptname: string;
		stats: PoudriereBuildStatsRaw;
		status: string;
	}
}

export {};

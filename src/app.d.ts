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

	export interface PoudriereBuild {
		buildname: string;
		ended: string;
		jailname: string;
		mastername: string;
		ports: {
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
		};
		ptname: string;
		snap: {
			elapsed: string;
			loadavg: string;
			now: string;
			swapinfo: string;
		};
		started: string;
		stats: {
			built: string;
			failed: string;
			fetched: string;
			ignored: string;
			inspected?: string;
			queued: string;
			skipped: string;
		};
		status: string;
		jobs: [
			{
				id: string;
				status: string;
			}
		];
		skipped: never;
	}
}

export {};

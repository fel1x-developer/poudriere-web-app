<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBox, faClock, faStar, faHeartbeat, faBolt } from '@fortawesome/free-solid-svg-icons';

	let { stats, snap }: { stats: PoudriereBuildStats; snap: PoudriereBuildSnap } = $props();

	export function formatTime(seconds: number): string {
		const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
		const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
		const secs = String(seconds % 60).padStart(2, '0');
		return `${hrs}:${mins}:${secs}`;
	}

	export function formatPkgHour(stats: PoudriereBuildStats, snap: PoudriereBuildSnap): string {
		let attempted = stats.built + stats.failed;
		if (attempted > 0 && snap.elapsed) {
			let hours = snap.elapsed / 3600;
			return Math.ceil(attempted / hours).toString();
		} else {
			return '--';
		}
	}
</script>

<div class="stats shadow sm:hidden">
	<div class="stat">
		<div class="stat-figure text-primary">
			<Fa icon={faHeartbeat} size="1.5x" />
		</div>
		<div class="stat-title">Load Averages</div>
		<div class="stat-value text-primary text-base">{snap.loadavg}</div>
	</div>
</div>
<div class="stats shadow sm:hidden">
	<div class="stat">
		<div class="stat-figure text-secondary">
			<Fa icon={faBolt} size="1.5x" />
		</div>
		<div class="stat-title">Swap Info</div>
		<div class="stat-value text-secondary text-base">{snap.swapinfo}</div>
	</div>
</div>
<div class="stats shadow sm:hidden">
	<div class="stat">
		<div class="stat-figure text-accent">
			<Fa icon={faClock} size="1.5x" />
		</div>
		<div class="stat-title">Elapsed</div>
		<div class="stat-value text-accent text-sm">{formatTime(snap.elapsed)}</div>
	</div>
</div>
<div class="stats shadow sm:hidden">
	<div class="stat">
		<div class="stat-figure text-warning">
			<Fa icon={faBox} size="1.5x" />
		</div>
		<div class="stat-title">Packages/Hour</div>
		<div class="stat-value text-warning text-sm">{formatPkgHour(stats, snap)}</div>
	</div>
</div>
<div class="stats shadow sm:hidden">
	<div class="stat">
		<div class="stat-figure text-success">
			<Fa icon={faStar} size="1.5x" />
		</div>
		<div class="stat-title">Impulse</div>
		<div class="stat-value text-success text-sm">42</div>
	</div>
</div>

<!--sm-->
<div class="stats shadow max-sm:hidden md:hidden">
	<div class="stat">
		<div class="stat-figure text-primary">
			<Fa icon={faHeartbeat} size="1.5x" />
		</div>
		<div class="stat-title">Load Averages</div>
		<div class="stat-value text-primary text-base">{snap.loadavg}</div>
	</div>

	<div class="stat">
		<div class="stat-figure text-secondary">
			<Fa icon={faBolt} size="1.5x" />
		</div>
		<div class="stat-title">Swap Info</div>
		<div class="stat-value text-secondary text-base">{snap.swapinfo}</div>
	</div>
</div>
<div class="stats shadow max-sm:hidden md:hidden">
	<div class="stat">
		<div class="stat-figure text-accent">
			<Fa icon={faClock} size="1.5x" />
		</div>
		<div class="stat-title">Elapsed</div>
		<div class="stat-value text-accent text-sm">{formatTime(snap.elapsed)}</div>
	</div>

	<div class="stat">
		<div class="stat-figure text-warning">
			<Fa icon={faBox} size="1.5x" />
		</div>
		<div class="stat-title">Packages/Hour</div>
		<div class="stat-value text-warning text-sm">{formatPkgHour(stats, snap)}</div>
	</div>
	<div class="stat">
		<div class="stat-figure text-success">
			<Fa icon={faStar} size="1.5x" />
		</div>
		<div class="stat-title">Impulse</div>
		<div class="stat-value text-success text-sm">42</div>
	</div>
</div>

<!-- md -->
<div class="md:stats hidden md:shadow">
	<div class="stat">
		<div class="stat-figure text-primary">
			<Fa icon={faHeartbeat} size="1.5x" />
		</div>
		<div class="stat-title">Load Averages</div>
		<div class="stat-value text-primary">{snap.loadavg}</div>
	</div>

	<div class="stat">
		<div class="stat-figure text-secondary">
			<Fa icon={faBolt} size="1.5x" />
		</div>
		<div class="stat-title">Swap Info</div>
		<div class="stat-value text-secondary">{snap.swapinfo}</div>
	</div>
</div>
<div class="md:stats hidden md:shadow">
	<div class="stat">
		<div class="stat-figure text-accent">
			<Fa icon={faClock} size="1.5x" />
		</div>
		<div class="stat-title">Elapsed</div>
		<div class="stat-value text-accent">{formatTime(snap.elapsed)}</div>
	</div>

	<div class="stat">
		<div class="stat-figure text-warning">
			<Fa icon={faBox} size="1.5x" />
		</div>
		<div class="stat-title">Packages per Hour</div>
		<div class="stat-value text-warning">{formatPkgHour(stats, snap)}</div>
	</div>
	<div class="stat">
		<div class="stat-figure text-success">
			<Fa icon={faStar} size="1.5x" />
		</div>
		<div class="stat-title">Impulse</div>
		<div class="stat-value text-success"></div>
	</div>
</div>

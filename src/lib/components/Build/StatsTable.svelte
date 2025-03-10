<script lang="ts">
	let {
		queued,
		built,
		failed,
		skipped,
		ignored,
		fetched,
		remaining
	}: {
		queued: number;
		built: number;
		failed: number;
		skipped: number;
		ignored: number;
		fetched: number;
		remaining: number;
	} = $props();
</script>

<div class="block md:hidden">
	<div class="flex flex-col items-center justify-center overflow-x-auto">
		<table class="table-sm w-full text-center">
			<!-- head -->
			<thead>
				<tr>
					<th class="bg-neutral text-xs font-medium text-white">Queued</th>
					<th class="bg-success text-xs font-medium text-white">Built</th>
					<th class="bg-error text-xs font-medium text-white">Failed</th>
					<th class="bg-primary text-xs font-medium text-white">Skipped</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{queued}</td>
					<td>{built}</td>
					<td>{failed}</td>
					<td>{skipped}</td>
				</tr>
			</tbody>
		</table>
		<table class="table-sm w-full text-center">
			<!-- head -->
			<thead>
				<tr>
					<th class="bg-warning text-xs font-medium text-white">Ignored</th>
					<th class="bg-accent text-xs font-medium text-white">Fetched</th>
					<th class="bg-secondary text-xs font-medium text-white">Remaining</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{ignored}</td>
					<td>{fetched}</td>
					<td>{remaining}</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<div class="hidden overflow-x-auto md:block">
	<table class="table text-center">
		<!-- head -->
		<thead>
			<tr>
				<th class="bg-neutral text-white">Queued</th>
				<th class="bg-success text-white">Built</th>
				<th class="bg-error text-white">Failed</th>
				<th class="bg-primary text-white">Skipped</th>
				<th class="bg-warning text-white">Ignored</th>
				<th class="bg-accent text-white">Fetched</th>
				<th class="bg-secondary text-white">Remaining</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{queued}</td>
				<td>{built}</td>
				<td>{failed}</td>
				<td>{skipped}</td>
				<td>{ignored}</td>
				<td>{fetched}</td>
				<td>{remaining}</td>
			</tr>
		</tbody>
	</table>
</div>

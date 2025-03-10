<script module lang="ts">
    import { defineMeta } from '@storybook/addon-svelte-csf';

    import BuildStat from '$lib/components/Build/BuildStat.svelte';

    const stats: PoudriereBuildStats = {
        built: 23,
        failed: 3,
        fetched: 4,
        ignored: 3,
        inspected: undefined,
        queued: 40,
        skipped: 5
    };

    const snap: PoudriereBuildSnap = {
        elapsed: 82,
        loadavg: '( 5%) 1.16 0.51 0.21',
        now: 0,
        swapinfo: '0.00%'
    }

    const { Story } = defineMeta({
        title: 'Build/BuildStat',
        component: BuildStat,
        parameters: {
            layout: 'centered'
        },
        argTypes: {
            stats: {
                control: 'object',
                description: 'Build stats'
            },
            snap: {
                control: 'object',
                description: 'Build snap'
            }
        },
        tags: ['autodocs']
    });
</script>

<Story name="Primary" args={{ stats: stats, snap: snap }} />

<script module lang="ts">
    import { defineMeta } from '@storybook/addon-svelte-csf';

    import ProgressBar from '$lib/components/ProgressBar.svelte';

    const { Story } = defineMeta({
        title: 'Build/ProgressBar',
        component: ProgressBar,
        argTypes: {
            queued: {
                control: 'number',
                min: 0,
                max: 100,
                description: 'Number of queued jobs'
            },
            remaining: {
                control: 'number',
                min: 0,
                max: 100,
                description: 'Number of remaining jobs'
            }
        },
        tags: ['autodocs']
    });
</script>

<Story name="Done" args={{queued: 100, remaining: 0}} />
<Story name="Building" args={{queued: 100, remaining: 50}} />
<Story name="Not Started" args={{queued: 100, remaining: 100}} />

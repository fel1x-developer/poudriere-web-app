<script module lang="ts">
    import { defineMeta } from '@storybook/addon-svelte-csf';

    import BuildStatus from '$lib/components/BuildStatus.svelte';

    const { Story } = defineMeta({
        title: 'Build/BuildStatus',
        component: BuildStatus,
        parameters: {
            layout: 'centered',
        },
        argTypes: {
            status: {
                control: 'text',
                description: 'Section of the roster to display'
            }
        },
        tags: ['autodocs']
    });
</script>

<Story name="Done" args={{status: "done:"}} />
<Story name="Building" args={{status: "building:"}} />
<Story name="Unknown" args={{status: "unknown:"}} />

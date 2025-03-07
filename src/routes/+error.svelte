<script lang="ts">
	import { page } from '$app/state';
    import Fa from "svelte-fa";
    import {faFreebsd} from "@fortawesome/free-brands-svg-icons";
</script>

<main>
    <div class="flex flex-col gay-y-2 lg:gap-y-3">
        <div class="flex flex-row items-center justify-center w-full text-5xl lg:text-9xl text-bold gap-x-6 lg:gap-x-15 align-middle">
            <Fa icon={faFreebsd} />
            ?
        </div>
        <div class="flex flex-col gap-y-1 lg:gap-y-2 align-middle">
            <h1 class="text-text dark:text-text-dark text-center text-3xl lg:text-6xl font-bold">
                Oops! Error Occurred!
            </h1>
            <h1 class="text-text dark:text-text-dark text-center text-xl lg:text-3xl font-bold">
                {page.status}: {page.error?.message}
            </h1>
        </div>
    </div>
</main>

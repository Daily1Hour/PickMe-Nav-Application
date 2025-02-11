<script lang="ts">
    import { onMount } from "svelte";

    const MOBILE_BREAKPOINT = 768;

    let width = 0;
    onMount(() => {
        width = window.innerWidth;
        window.addEventListener("resize", () => (width = window.innerWidth));
    });
</script>

<a href="/" aria-label="Home" title="Home">
    {#if width > MOBILE_BREAKPOINT}
        <img src="/nav/resolution-logo.svg" alt="logo" style="height:75px;" />
    {:else}
        <img src="/nav/monogram-hq.svg" alt="logo" style="height: 75px;" />
    {/if}
</a>

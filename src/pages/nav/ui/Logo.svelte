<script lang="ts">
    import { onMount } from "svelte";
    import { mdiHome } from "@mdi/js";
    import IconButton, { Icon } from "@smui/icon-button";
    import { Title } from "@smui/top-app-bar";

    const MOBILE_BREAKPOINT = 768;

    let width = 0;
    onMount(() => {
        width = window.innerWidth;
        window.addEventListener("resize", () => (width = window.innerWidth));
    });
</script>

{#if width > MOBILE_BREAKPOINT}
    <Title tag="a" href="/" aria-label="Home" color="white">PickMe</Title>
{:else}
    <IconButton tag="a" href="/" aria-label="Home">
        <Icon tag="svg" viewBox="0 0 24 24">
            <path fill="currentColor" d={mdiHome} />
        </Icon>
    </IconButton>
{/if}

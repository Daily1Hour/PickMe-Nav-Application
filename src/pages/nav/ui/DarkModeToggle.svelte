<script lang="ts">
    import { onMount } from "svelte";
    import IconButton, { Icon } from "@smui/icon-button";
    import { mdiCircleHalfFull } from "@mdi/js";

    import { theme } from "../store/themeStore";

    let isDark = false;

    function toggleTheme() {
        theme.update((t: string) => (t === "light" ? "dark" : "light"));
    }

    onMount(() => {
        theme.subscribe((value: string) => {
            isDark = value === "dark";
        });
    });
</script>

<IconButton onclick={toggleTheme}>
    <Icon tag="svg" viewBox="0 0 24 24">
        {#if isDark}
            <path fill="#730175" d={mdiCircleHalfFull} />
        {:else}
            <path fill="currentColor" d={mdiCircleHalfFull} />
        {/if}
    </Icon>
</IconButton>

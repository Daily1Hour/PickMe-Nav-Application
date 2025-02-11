<script lang="ts">
    import DarkModeToggle from "./DarkModeToggle.svelte";
    import AuthControl from "./AuthControl.svelte";
</script>

<div class="tools">
    <DarkModeToggle />
    <AuthControl />
</div>

<style>
    .tools {
        display: flex;
        align-items: center;
    }
    :global(.tools > *) {
        display: block !important;
    }
</style>

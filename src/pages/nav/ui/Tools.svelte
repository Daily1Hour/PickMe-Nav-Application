<script lang="ts">
    import DarkModeToggle from "./DarkModeToggle.svelte";
    import AuthControl from "./AuthControl.svelte";
</script>

<div class="pickme-nav__tools">
    <DarkModeToggle />
    <AuthControl />
</div>

<style>
    .pickme-nav__tools {
        display: flex;
    }
    :global(.mdc-top-app-bar__action-item) {
        align-self: center !important;
    }
</style>

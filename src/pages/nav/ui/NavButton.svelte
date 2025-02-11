<script lang="ts">
    import Button from "@smui/button";

    export let name, path;

    const base = import.meta.env.VITE_PUBLIC_URL;
    const currentPath = window.location.pathname.replace(/\/$/, "");
</script>

<div class="tab-container" data-active={currentPath === base + path}>
    <Button class="tab-button" tag="a" href={base + path} variant="unelevated">
        {name}
    </Button>
    <div class="tab-indicator"></div>
</div>

<style>
    .tab-container {
        position: relative;
    }
    :global(.tab-container .mdc-button) {
        background-color: transparent;
        font-weight: bold;
        color: #f4ddd6;
    }
    :global(.tab-container[data-active="true"] .mdc-button) {
        font-weight: bold;
        color: white !important;
    }
    .tab-container:hover .tab-indicator,
    .tab-container[data-active="true"] .tab-indicator {
        width: 50%;
    }
    .tab-indicator {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0%;
        height: 1px;
        background-color: white;
        transform: translateX(-50%);
        transition: width 0.25s ease-in-out;
    }
</style>

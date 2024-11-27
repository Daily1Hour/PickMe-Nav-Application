<script lang="ts">
    import { onMount } from "svelte";

    import { mountRootParcel } from "single-spa";

    import { parcel as parcelConfig } from "@/../dist/parcel.js";

    let container: HTMLDivElement;

    onMount(() => {
        const parcel = mountRootParcel(parcelConfig, {
            domElement: container, // Svelte에서 React를 렌더링할 DOM 요소
        });

        return () => {
            parcel.unmount();
        };
    });
</script>

<div bind:this={container}></div>

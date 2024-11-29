<script lang="ts">
    import { onMount } from "svelte";

    import { mountRootParcel } from "single-spa";

    let container: HTMLDivElement;

    onMount(() => {
        let parcel: any;

        const loadParcel = async () => {
            const parcelURL = import.meta.env.VITE_PARCEL_URL;

            const { parcel: parcelConfig } = await import(/* @vite-ignore */ parcelURL);

            parcel = mountRootParcel(parcelConfig, {
                domElement: container,
            });
        };

        loadParcel();

        return () => {
            if (parcel) {
                parcel.unmount();
            }
        };
    });
</script>

<div bind:this={container}></div>

import singleSpaSvelte from "single-spa-svelte";

import NavTopBar from "@/pages/nav/ui/NavTopBar.svelte";

const lifecycle = singleSpaSvelte({
    component: NavTopBar,
});

export const { bootstrap, mount, unmount } = lifecycle;

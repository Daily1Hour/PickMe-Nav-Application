import singleSpaSvelte from "@/shared/single-spa-svelte";

import NavTopBar from "@/pages/nav/ui/TopBar.svelte";

const lifecycle = singleSpaSvelte({
    component: NavTopBar,
});

export const { bootstrap, mount, unmount } = lifecycle;

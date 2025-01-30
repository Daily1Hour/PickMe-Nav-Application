<script lang="ts">
    import TopAppBar, { Row, Section } from "@smui/top-app-bar";

    import Logo from "./Logo.svelte";
    import AuthControl from "./AuthControl.svelte";
    import NavList from "./NavList.svelte";
</script>

<div class="container">
    <TopAppBar variant="fixed">
        <Row>
            <Section>
                <Logo />
            </Section>
            <Section>
                <NavList />
            </Section>
            <Section align="end">
                <AuthControl />
            </Section>
        </Row>
    </TopAppBar>
</div>

<style>
    .container {
        height: 64px;
    }
    /* :global(.mdc-top-app-bar) {
        --mdc-theme-primary: #3498db;
    } */
    :global(.mdc-button) {
        font-size: 15px;
    }
</style>

<script lang="ts">
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

    import Logo from "./Logo.svelte";
    import NavList from "./NavList.svelte";
    import Tools from "./Tools.svelte";
</script>

<div>
    <TopAppBar id="pickme-nav" variant="fixed" prominent dense>
        <Row>
            <Section>
                <Logo />
                <Title>
                    <NavList />
                </Title>
            </Section>
            <Section toolbar align="end">
                <Tools />
            </Section>
        </Row>
    </TopAppBar>
</div>

<style>
    :global(.mdc-top-app-bar) {
        background: linear-gradient(90deg, #ce01d1, #10004a);
    }
    /* :global(.mdc-top-app-bar) {
        --mdc-theme-primary: #3498db;
    } */
    :global(.mdc-button) {
        font-size: 15px;
    }
</style>

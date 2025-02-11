<script lang="ts">
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

    import Logo from "./Logo.svelte";
    import AuthControl from "./AuthControl.svelte";
    import NavList from "./NavList.svelte";
</script>

<div>
    <TopAppBar variant="fixed" prominent dense>
        <Row class="nav-container">
            <Section>
                <Logo />
                <Title>
                    <NavList />
                </Title>
            </Section>
            <Section class="auth" align="end">
                <AuthControl />
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

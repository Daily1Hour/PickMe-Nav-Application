<script lang="ts">
    import TopAppBar, { Row, Section } from "@smui/top-app-bar";

    import Logo from "./Logo.svelte";
    import NavList from "./NavList.svelte";
    import Tools from "./Tools.svelte";
</script>

<div>
    <TopAppBar id="pickme-nav" variant="fixed" prominent dense>
        <Row>
            <Section>
                <Logo />
            </Section>
            <Section class="pickme-nav__section--nav">
                <NavList />
            </Section>
            <Section class="pickme-nav__section--tools" toolbar align="end">
                <Tools />
            </Section>
        </Row>
    </TopAppBar>
</div>

<style>
    :global(.mdc-top-app-bar) {
        background: linear-gradient(90deg, #ce01d1, #10004a);
    }
    :global(.pickme-nav__section--nav) {
        padding: 10px 0 !important;
        align-items: end;
    }
    :global(.pickme-nav__section--tools > div) {
        position: absolute;
        top: 0;
    }
    :global(.mdc-button) {
        font-size: 15px;
    }
</style>

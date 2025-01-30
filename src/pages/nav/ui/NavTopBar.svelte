<script lang="ts">
    import Button from "@smui/button";
    import TopAppBar, { Row, Section } from "@smui/top-app-bar";

    import NavLogo from "./NavLogo.svelte";
    import AuthControl from "./AuthControl.svelte";
</script>

<div class="container">
    <TopAppBar variant="fixed">
        <Row>
            <Section>
                <NavLogo />
            </Section>
            <Section align="center">
                <nav>
                    <Button tag="a" href="/records" variant="unelevated">기록</Button>
                    <Button tag="a" href="/reports" variant="unelevated">분석</Button>
                    <Button tag="a" href="/review" variant="unelevated">리뷰</Button>
                    <Button tag="a" href="/calendar" variant="unelevated">캘린더</Button>
                </nav>
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

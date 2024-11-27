<script lang="ts">
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

    import AuthControl from "./AuthControl.svelte";
</script>

<TopAppBar variant="standard">
    <Row>
        <Section>
            <Title>PickMe</Title>
        </Section>
        <Section align="center">
            <nav>
                <a href="/">Home</a>
                <a href="/records">Records</a>
                <a href="/calendar">Calendar</a>
                <a href="/review">Review</a>
            </nav>
        </Section>
        <Section align="end">
            <AuthControl />
        </Section>
    </Row>
</TopAppBar>

<script lang="ts">
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
</script>

<TopAppBar variant="standard">
    <Section>
        <Row>
            <Title>My App</Title>
            <nav>
                <a href="/">Home</a>
                <a href="/svelte">Svelte</a>
                <a href="/vue">Vue</a>
                <a href="/react">React</a>
            </nav>
        </Row>
    </Section>
</TopAppBar>

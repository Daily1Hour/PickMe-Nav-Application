<script lang="ts">
    import Button from "@smui/button";
</script>

<nav class="section-nav">
    <Button tag="a" href="/record/" variant="unelevated">기록</Button>
    <Button tag="a" href="/report/" variant="unelevated">분석</Button>
    <Button tag="a" href="/review/" variant="unelevated">리뷰</Button>
    <Button tag="a" href="/calendar/" variant="unelevated">캘린더</Button>
</nav>

<style>
    .section-nav {
        overflow: auto;
        white-space: nowrap;
        scrollbar-width: none;
    }
</style>

<script lang="ts">
    import NavButton from "./NavButton.svelte";
</script>

<nav class="section-nav">
    <NavButton path="record" name="기록" />
    <NavButton path="report" name="분석" />
    <NavButton path="review" name="리뷰" />
    <NavButton path="calendar" name="캘린더" />
</nav>

<style>
    .section-nav {
        display: flex;
        overflow: auto;
        white-space: nowrap;
        scrollbar-width: none;
    }
</style>

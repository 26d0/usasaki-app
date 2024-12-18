<svelte:head>
    <title>うさささ</title>
    <meta property="og:title" content="うさささ" />
    <meta property="og:description" content="うさささ" />
    <meta property="og:image" content="https://usasaki-app.pages.dev/images/ogp.png" />
    <meta property="og:url" content="https://usasaki-app.pages.dev/" />
    <meta property="og:type" content="website" />
    <!-- Twitter用 -->
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

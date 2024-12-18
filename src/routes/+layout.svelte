<svelte:head>
    <title>うさささ</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png">
    <link rel="android-chrome" sizes="512x512" href="/android-chrome-512x512.png">
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

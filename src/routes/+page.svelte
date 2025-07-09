<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import MarketTicker from "$lib/components/MarketTicker.svelte";
    import Sources from "$lib/components/Sources.svelte";

    const pageTitle = "Blockwatch - Real-time Cryptocurrency News";
    const pageDescription =
        "Real-time cryptocurrency news, market data, and insights from top sources. Stay informed, make smarter decisions.";
    const pageKeywords =
        "crypto, news, trends, blockchain, cryptocurrency, ethereum, bitcoin, altcoins, dogecoin, litecoin, monero, cardano, ripple, stellar, zcash, dash, iota, tezos";
    const pageAuthor = "Blockwatch Team";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content={pageAuthor} />
    <!-- Additional meta tags, links, or scripts -->
    <!-- Open Graph -->
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:image" content="/homepage-summary.jpg" />
    <meta property="og:url" content="https://blockwatch-one.vercel.app" />
    <meta property="og:type" content="website" />
</svelte:head>

<main>
    <Hero />

    <MarketTicker />
    <Sources />
</main>

<script lang="ts">
    const sections = [
        {
            title: "1. No Financial Advice",
            content:
                "Crypto prices and news on this site are for informational purposes only. We are not financial advisors.",
        },
        {
            title: "2. Data Collection",
            content:
                "We use cookies and analytics to improve the service. No personal data is sold.",
        },
        {
            title: "3. Third-Party APIs",
            content:
                "Price data comes from Binance API, the news data come from Bitcoinist, CoinDesk, and other reputable sources. We're not affiliated with any of these providers.",
        },
        {
            title: "4. Content Usage",
            content:
                "News headlines and summaries are provided under fair use provisions. Full articles remain property of their publishers.",
        },
        {
            title: "5. Limitation of Liability",
            content:
                "Blockwatch shall not be liable for any trading losses or damages resulting from use of this service.",
        },
    ];

    const pageTitle = "Terms of Service - Blockwatch";
    const pageDescription = "Blockwatch Terms of Service agreement";
    const pageKeywords =
        "terms of service, blockwatch, cryptocurrency, analytics";
    const pageAuthor = "Blockwatch Team";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content={pageAuthor} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:url" content="https://blockwatch.com/terms-of-service" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8 bg-background text-foreground">
    <div
        class="bg-background-alt rounded-xl shadow-card p-6 mb-8 border border-border-card"
    >
        <h1 class="text-3xl font-bold mb-2">Terms of Service</h1>
        <p class="text-foreground-alt mb-6">Last Updated: 7/11/2025</p>

        <div class="space-y-6">
            {#each sections as section}
                <div
                    class="bg-background rounded-lg p-6 border border-border-card"
                >
                    <h2 class="text-xl font-semibold mb-3">{section.title}</h2>
                    <p class="text-foreground-alt">{section.content}</p>
                </div>
            {/each}
        </div>
    </div>

    <!-- Disclaimer Card -->
    <div
        class="bg-background-alt rounded-xl shadow-card p-6 border border-border-card"
    >
        <h2 class="text-xl font-semibold mb-3">Important Disclaimer</h2>
        <p class="text-foreground-alt">
            Cryptocurrency investments carry substantial risk. The information
            provided on Blockwatch should not be considered financial advice.
            Always conduct your own research before making investment decisions.
        </p>
    </div>
</div>

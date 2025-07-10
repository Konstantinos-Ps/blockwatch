<script lang="ts">
    import { Banknote, Bitcoin, Newspaper } from "@lucide/svelte";

    // List of all supported news sources that i use from RapidAPI
    const newsSources = [
        { name: "Bitcoinist", url: "https://bitcoinist.com", icon: Bitcoin },
        { name: "BSC News", url: "https://www.bsc.news", icon: Newspaper },
        { name: "CoinDesk", url: "https://www.coindesk.com", icon: Newspaper },
        {
            name: "CoinTelegraph",
            url: "https://cointelegraph.com",
            icon: Newspaper,
        },
        {
            name: "CryptoDaily",
            url: "https://cryptodaily.co.uk",
            icon: Newspaper,
        },
        { name: "Decrypt", url: "https://decrypt.co", icon: Newspaper },
        {
            name: "The Guardian (Crypto)",
            url: "https://www.theguardian.com/technology/cryptocurrencies",
            icon: Newspaper,
        },
        {
            name: "Binance Public API",
            url: "https://binance.com/",
            icon: Banknote,
        },
    ];

    const pageTitle = "About - Blockwatch";
    const pageDescription =
        "A modern, open-source platform for the latest cryptocurrency news and updates.";
    const pageKeywords =
        "crypto news, cryptocurrency, open-source, platform, mission, vision, values, community, collaboration, innovation, growth, sustainability";
    const pageAuthor = "Blockwatch Team";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content={pageAuthor} />
    <!-- Additional meta tags, links, or scripts -->
</svelte:head>

<div class="bg-background text-foreground min-h-screen py-12">
    <div class="container mx-auto px-4 max-w-3xl">
        <header class="mb-12 text-center">
            <h1 class="font-display text-4xl font-bold mb-4">
                About Blockwatch
            </h1>
            <p class="text-foreground-alt max-w-2xl mx-auto">
                A modern, open-source platform for the latest cryptocurrency
                news and updates.
            </p>
        </header>

        <section class="mb-12">
            <h2 class="font-display text-2xl font-bold mb-4">Our Mission</h2>
            <p class="text-foreground-alt mb-6">
                Blockwatch is dedicated to providing accurate, timely, and
                unbiased information about the cryptocurrency world. Whether
                you're a seasoned trader or a curious newcomer, our goal is to
                keep you informed.
            </p>
        </section>

        <section class="mb-12">
            <h2 class="font-display text-2xl font-bold mb-4">Open Source</h2>
            <p class="text-foreground-alt mb-6">
                This project is open-source and welcomes contributions from
                developers worldwide. You can find the source code on our GitHub
                repository. Feel free to fork, star, or submit pull requests!
            </p>
            <a
                href="https://github.com/Konstantinos-Ps/blockwatch"
                target="_blank"
                rel="noopener noreferrer"
                class="link inline-flex items-center gap-2"
            >
                Visit GitHub
                <!-- Replace with an icon if desired -->
                <span class="text-lg">→</span>
            </a>
        </section>

        <section>
            <h2 class="font-display text-2xl font-bold mb-6">Powered By</h2>
            <p class="text-foreground-alt mb-6">
                Blockwatch aggregates news and crypto coin prices from the
                following trusted sources:
            </p>

            <!-- News Sources Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {#each newsSources as source}
                    <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-3 p-4 bg-background-alt rounded-lg hover:bg-dark/10 transition-colors border border-border-card"
                    >
                        <source.icon class="w-5 h-5 text-accent" />
                        <span class="font-medium">{source.name}</span>
                    </a>
                {/each}
            </div>
        </section>
    </div>
</div>

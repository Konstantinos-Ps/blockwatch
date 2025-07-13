<script lang="ts">
    //@ts-nocheck still bored to do types for this one
    import { createQuery } from "@tanstack/svelte-query";

    const trendingQuery = createQuery({
        queryKey: ["binance-trending"],
        queryFn: async () => {
            const response = await fetch(
                "https://api.binance.com/api/v3/ticker/24hr",
            );
            const data = await response.json();

            const supportedPairs = [
                "USDT",
                "BTC",
                "ETH",
                "BNB",
                "SOL",
                "XRP",
                "ADA",
                "DOGE",
                "TON",
                "UNI",
                "AVAX",
                "DOT",
                "MATIC",
                "LTC",
                "LINK",
                "XLM",
            ] as const;

            return data
                .filter((item: any) =>
                    supportedPairs.some((pair) => item.symbol.endsWith(pair)),
                )
                .map((item: any) => {
                    const quoteAsset = supportedPairs.find((pair) =>
                        item.symbol.endsWith(pair),
                    )!;
                    return {
                        symbol: item.symbol.replace(quoteAsset, ""),
                        quoteAsset,
                        price: parseFloat(item.lastPrice).toFixed(2),
                        priceChangePercent: parseFloat(
                            item.priceChangePercent,
                        ).toFixed(2),
                        volume: parseFloat(item.volume).toFixed(2),
                    };
                })
                .filter(
                    (v: any, i: number, a: any[]) =>
                        a.findIndex((t) => t.symbol === v.symbol) === i,
                );
        },
        staleTime: 12 * 60 * 60 * 1000, // 12 hours refresh
    });

    // Derived data
    $: topGainers =
        $trendingQuery.data
            ?.sort(
                (a, b) =>
                    parseFloat(b.priceChangePercent) -
                    parseFloat(a.priceChangePercent),
            )
            .slice(0, 10) || [];

    $: topLosers =
        $trendingQuery.data
            ?.sort(
                (a, b) =>
                    parseFloat(a.priceChangePercent) -
                    parseFloat(b.priceChangePercent),
            )
            .slice(0, 10) || [];

    $: highVolume =
        $trendingQuery.data
            ?.sort((a, b) => parseFloat(b.volume) - parseFloat(a.volume))
            .slice(0, 10) || [];

    const pageTitle = "Trending Cryptocurrencies - Blockwatch";
    const pageDescription =
        "Discover top crypto gainers, losers, and volume leaders across multiple trading pairs.";
    const pageKeywords =
        "crypto, trending, binance, USDT, BTC, ETH, BNB, SOL, ADA, DOGE, TON, UNI, AVAX, DOT, MATIC, LTC, LINK, XLM";
    const pageAuthor = "Blockwatch Team";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content={pageAuthor} />
    <!-- Additional meta tags, links, or scripts -->
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-8 bg-background text-foreground">
    <h1
        class="scroll-m-20 text-balance text-3xl md:text-4xl font-extrabold tracking-tight mb-6 md:mb-8 px-4 md:px-0"
    >
        Trending Cryptocurrencies <span class="text-sm font-normal opacity-75"
            >Disclaimer: This data is provided for informational purposes only
            and should not be considered investment advice.</span
        >
    </h1>

    {#if $trendingQuery.isLoading}
        <p class="text-foreground-alt text-center py-8">Loading data...</p>
    {:else if $trendingQuery.isError}
        <p class="text-foreground-alt text-center py-8">
            Error: {$trendingQuery.error.message}
        </p>
    {:else}
        <!-- Top Gainers -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Top Gainers (24h)</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {#each topGainers as crypto (crypto.symbol)}
                    <div
                        class="bg-background-alt rounded-lg p-4 shadow-card hover:shadow-popover transition-shadow border border-card"
                    >
                        <div class="flex justify-between items-center">
                            <span class="font-medium">
                                {crypto.symbol}<span class="text-xs opacity-75"
                                    >/{crypto.quoteAsset}</span
                                >
                            </span>
                            <span
                                class:text-green-500={parseFloat(
                                    crypto.priceChangePercent,
                                ) >= 0}
                                class:text-red-500={parseFloat(
                                    crypto.priceChangePercent,
                                ) < 0}
                            >
                                {crypto.priceChangePercent}%
                            </span>
                        </div>
                        <div class="mt-2 text-foreground-alt">
                            Price: ${crypto.price}
                            <!-- Added $ here -->
                        </div>
                        <div class="mt-1 text-sm text-muted-foreground">
                            Volume: {crypto.volume}
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Top Losers -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Top Losers (24h)</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {#each topLosers as crypto (crypto.symbol)}
                    <div
                        class="bg-background-alt rounded-lg p-4 shadow-card hover:shadow-popover transition-shadow border border-card"
                    >
                        <div class="flex justify-between items-center">
                            <span class="font-medium">
                                {crypto.symbol}<span class="text-xs opacity-75"
                                    >/{crypto.quoteAsset}</span
                                >
                            </span>
                            <span
                                class:text-green-500={parseFloat(
                                    crypto.priceChangePercent,
                                ) >= 0}
                                class:text-red-500={parseFloat(
                                    crypto.priceChangePercent,
                                ) < 0}
                            >
                                {crypto.priceChangePercent}%
                            </span>
                        </div>
                        <div class="mt-2 text-foreground-alt">
                            Price: ${crypto.price}
                            <!-- Added $ here -->
                        </div>
                        <div class="mt-1 text-sm text-muted-foreground">
                            Volume: {crypto.volume}
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <!-- High Volume -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Highest Volume (24h)</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {#each highVolume as crypto (crypto.symbol)}
                    <div
                        class="bg-background-alt rounded-lg p-4 shadow-card hover:shadow-popover transition-shadow border border-card"
                    >
                        <div class="flex justify-between items-center">
                            <span class="font-medium">
                                {crypto.symbol}<span class="text-xs opacity-75"
                                    >/{crypto.quoteAsset}</span
                                >
                            </span>
                            <span
                                class:text-green-500={parseFloat(
                                    crypto.priceChangePercent,
                                ) >= 0}
                                class:text-red-500={parseFloat(
                                    crypto.priceChangePercent,
                                ) < 0}
                            >
                                {crypto.priceChangePercent}%
                            </span>
                        </div>
                        <div class="mt-2 text-foreground-alt">
                            Price: ${crypto.price}
                            <!-- Added $ here -->
                        </div>
                        <div class="mt-1 text-sm text-muted-foreground">
                            Volume: {crypto.volume}
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    {/if}
</div>

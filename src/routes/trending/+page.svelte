<script lang="ts">
    import { onMount } from "svelte";
    //for type checking so i dont have to do //@ts-nocheck haha
    type CryptoData = {
        symbol: string;
        quoteAsset:
            | "USDT"
            | "BTC"
            | "ETH"
            | "BNB"
            | "SOL"
            | "XRP"
            | "ADA"
            | "DOGE"
            | "TON"
            | "UNI"
            | "AVAX"
            | "DOT"
            | "MATIC"
            | "LTC"
            | "LINK"
            | "XLM";
        price: string;
        priceChangePercent: string;
        volume: string;
    };

    let topGainers: CryptoData[] = [];
    let topLosers: CryptoData[] = [];
    let highVolume: CryptoData[] = [];
    let isLoading = true;

    onMount(async () => {
        try {
            const response = await fetch(
                "https://api.binance.com/api/v3/ticker/24hr",
            );
            const data = await response.json();

            // Process all supported pairs (USDT, BTC, ETH, BNB, SOL, XRP, ADA, DOGE, TON, UNI, AVAX, DOT, MATIC, LTC, LINK, XLM)
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
            const allPairs = data
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
                });

            // Deduplicate - prefer USDT pairs when available
            const uniqueSymbols = new Set<string>();
            const filteredData = allPairs.filter((pair) => {
                if (uniqueSymbols.has(pair.symbol)) return false;
                uniqueSymbols.add(pair.symbol);
                return true;
            });

            // Sort as before
            topGainers = [...filteredData]
                .sort(
                    (a, b) =>
                        parseFloat(b.priceChangePercent) -
                        parseFloat(a.priceChangePercent),
                )
                .slice(0, 10);

            topLosers = [...filteredData]
                .sort(
                    (a, b) =>
                        parseFloat(a.priceChangePercent) -
                        parseFloat(b.priceChangePercent),
                )
                .slice(0, 10);

            highVolume = [...filteredData]
                .sort((a, b) => parseFloat(b.volume) - parseFloat(a.volume))
                .slice(0, 10);

            isLoading = false;
        } catch (error) {
            console.error("Failed to fetch trending data:", error);
            isLoading = false;
        }
    });

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

    {#if isLoading}
        <p class="text-foreground-alt text-center py-8">Loading data...</p>
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

<script lang="ts">
    //@ts-nocheck still bored to do types for this one
    import { createQuery } from "@tanstack/svelte-query";
    import { onMount } from "svelte";
    import {
        Bitcoin,
        DollarSign,
        ChartCandlestick,
        Sun,
        X,
        Diamond,
        Dog,
        Coins,
        Cat,
        Tornado,
        CircleDot,
        ChartSpline,
        Orbit,
        Link,
        Link2,
        RefreshCcw,
    } from "@lucide/svelte";
    //Can add more coins here
    const coins = [
        {
            id: "btc",
            name: "Bitcoin",
            symbol: "BTC",
            icon: Bitcoin,
            color: "text-orange-500",
            apiSymbol: "BTCUSDT",
        },
        {
            id: "eth",
            name: "Ethereum",
            symbol: "ETH",
            icon: DollarSign,
            color: "text-purple-500",
            apiSymbol: "ETHUSDT",
        },
        {
            id: "bnb",
            name: "BNB",
            symbol: "BNB",
            icon: ChartCandlestick,
            color: "text-amber-500",
            apiSymbol: "BNBUSDT",
        },
        {
            id: "sol",
            name: "Solana",
            symbol: "SOL",
            icon: Sun,
            color: "text-green-500",
            apiSymbol: "SOLUSDT",
        },
        {
            id: "xrp",
            name: "XRP",
            symbol: "XRP",
            icon: X,
            color: "text-gray-400",
            apiSymbol: "XRPUSDT",
        },
        {
            id: "ada",
            name: "Cardano",
            symbol: "ADA",
            icon: Diamond,
            color: "text-blue-500",
            apiSymbol: "ADAUSDT",
        },
        {
            id: "doge",
            name: "Dogecoin",
            symbol: "DOGE",
            icon: Dog,
            color: "text-yellow-500",
            apiSymbol: "DOGEUSDT",
        },
        {
            id: "ton",
            name: "Toncoin",
            symbol: "TON",
            icon: Coins,
            color: "text-blue-400",
            apiSymbol: "TONUSDT",
        },
        {
            id: "uni",
            name: "Uniswap",
            symbol: "UNI",
            icon: RefreshCcw,
            color: "text-orange-300",
            apiSymbol: "UNIUSDT",
        },
        {
            id: "avax",
            name: "Avalanche",
            symbol: "AVAX",
            icon: Tornado,
            color: "text-red-500",
            apiSymbol: "AVAXUSDT",
        },
        {
            id: "dot",
            name: "Polkadot",
            symbol: "DOT",
            icon: CircleDot,
            color: "text-pink-500",
            apiSymbol: "DOTUSDT",
        },
        {
            id: "matic",
            name: "Polygon",
            symbol: "MATIC",
            icon: ChartSpline,
            color: "text-purple-600",
            apiSymbol: "MATICUSDT",
        },
        {
            id: "ltc",
            name: "Litecoin",
            symbol: "LTC",
            icon: Orbit,
            color: "text-gray-500",
            apiSymbol: "LTCUSDT",
        },
        {
            id: "link",
            name: "Chainlink",
            symbol: "LINK",
            icon: Link,
            color: "text-blue-300",
            apiSymbol: "LINKUSDT",
        },
        {
            id: "xlm",
            name: "Stellar",
            symbol: "XLM",
            icon: Link2,
            color: "text-cyan-500",
            apiSymbol: "XLMUSDT",
        },
    ];

    let prices = {};
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame

    // Initialize prices
    coins.forEach((coin) => {
        prices[coin.id] = { price: "Loading...", change: "0.00" };
    });
    //Fetching prices from Binance public API
    // Simple TanStack Query fetch
    const tickerQuery = createQuery({
        queryKey: ["market-ticker"],
        queryFn: async () => {
            const data = await Promise.all(
                coins.map((coin) =>
                    fetch(
                        `https://api.binance.com/api/v3/ticker/24hr?symbol=${coin.apiSymbol}`,
                    ).then((res) => res.json()),
                ),
            );
            return coins.reduce(
                (acc, coin, index) => ({
                    ...acc,
                    [coin.id]: {
                        price: formatPrice(data[index].lastPrice),
                        change: formatPercentage(
                            data[index].priceChangePercent,
                        ),
                    },
                }),
                {},
            );
        },
        refetchInterval: 180000, // 3 minutes
    });

    // Keep your existing formatting helpers
    const formatPrice = (value) =>
        parseFloat(value) > 1
            ? parseFloat(value).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
              })
            : parseFloat(value).toFixed(4);

    const formatPercentage = (value) => parseFloat(value).toFixed(2);

    // Keep your existing animation logic
    onMount(() => {
        const animate = () => {
            scrollPosition -= scrollSpeed;
            if (scrollPosition < -1000) scrollPosition = 0;
            requestAnimationFrame(animate);
        };
        animate();
    });
</script>

<div
    class="relative overflow-hidden py-3 bg-background-alt border-y border-border-card"
>
    <!-- Gradient fade effects -->
    <div
        class="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background-alt to-transparent z-10"
    ></div>
    <div
        class="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background-alt to-transparent z-10"
    ></div>

    <!-- Scrolling ticker -->
    <div
        class="flex gap-8 whitespace-nowrap"
        style={`transform: translateX(${scrollPosition}px)`}
    >
        {#each coins as coin (coin.id)}
            <div class="inline-flex items-center gap-2 px-2">
                <coin.icon class={`w-5 h-5 ${coin.color}`} />
                <span class="font-medium">{coin.symbol}:</span>
                <span class="tabular-nums">
                    ${$tickerQuery.data?.[coin.id]?.price || "–––"}
                </span>
                <span
                    class:text-green-500={parseFloat(
                        $tickerQuery.data?.[coin.id]?.change || "0",
                    ) >= 0}
                    class:text-red-500={parseFloat(
                        $tickerQuery.data?.[coin.id]?.change || "0",
                    ) < 0}
                >
                    ({$tickerQuery.data?.[coin.id]?.change || "0.00"}%)
                </span>
            </div>
        {/each}

        <!-- Duplicate for seamless looping -->
        {#each coins as coin (coin.id)}
            <div class="inline-flex items-center gap-2 px-2">
                <coin.icon class={`w-5 h-5 ${coin.color}`} />
                <span class="font-medium">{coin.symbol}:</span>
                <span class="tabular-nums">
                    {$tickerQuery.data?.[coin.id]?.price || "–––"}
                </span>
                <span
                    class:text-green-500={parseFloat(
                        $tickerQuery.data?.[coin.id]?.change || "0",
                    ) >= 0}
                    class:text-red-500={parseFloat(
                        $tickerQuery.data?.[coin.id]?.change || "0",
                    ) < 0}
                >
                    ({$tickerQuery.data?.[coin.id]?.change || "0.00"}%)
                </span>
            </div>
        {/each}
    </div>
</div>

<style>
    [style*="translateX"] {
        will-change: transform;
    }
</style>

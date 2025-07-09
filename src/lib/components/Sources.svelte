<script lang="ts">
    import { Bitcoin, Newspaper } from "@lucide/svelte";

    // News sources data from the /routes
    export let newsSources = [
        {
            name: "Bitcoinist",
            path: "/bitcoinist",
            icon: Bitcoin,
            description:
                "In-depth Bitcoin news, analysis, and price predictions.",
        },
        {
            name: "BSC News",
            path: "/bsc-news",
            icon: Newspaper,
            description:
                "Stay updated on the latest developments in the Binance Smart Chain ecosystem.",
        },
        {
            name: "CoinDesk",
            path: "/coindesk",
            icon: Newspaper,
            description:
                "Trusted source for breaking crypto news, market analysis, and insightful commentary.",
        },
        {
            name: "Cointelegraph",
            path: "/cointelegraph",
            icon: Newspaper,
            description:
                "Comprehensive blockchain and cryptocurrency news coverage with expert analysis and opinions.",
        },
        {
            name: "CryptoDaily",
            path: "/cryptodaily",
            icon: Newspaper,
            description:
                "Your daily dose of cryptocurrency market news, price updates, and insightful articles.",
        },
        {
            name: "Decrypt",
            path: "/decrypt",
            icon: Newspaper,
            description:
                "Cutting-edge news and analysis on the ever-evolving world of decentralized finance and Web3.",
        },
        {
            name: "The Guardian (Crypto)",
            path: "/the-guardian",
            icon: Newspaper,
            description:
                "Trusted financial news from a respected global source. Focus on crypto's impact on markets and society.",
        },
    ];
</script>

<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
    {#each newsSources as source}
        <a
            href={source.path}
            class="bg-background-alt rounded-lg p-6 hover:shadow-md transition-shadow"
        >
            <div class="flex items-center gap-4">
                {#if source.icon}
                    <source.icon class="w-8 h-8 text-accent" />
                {/if}
                <div>
                    <h3 class="text-foreground font-medium">{source.name}</h3>
                    <p class="text-sm text-muted-foreground">
                        {source.description}
                    </p>
                </div>
            </div>
        </a>
    {/each}
</section>

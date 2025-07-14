<script lang="ts">
    import { NavigationMenu } from "bits-ui";
    import {
        Home,
        Newspaper,
        Bitcoin,
        Info,
        ChevronDown,
        TrendingUpDown,
        Shield,
        Languages,
    } from "@lucide/svelte";
    // can add more sources here if needed
    const newsSources = [
        { name: "Bitcoinist", path: "/bitcoinist", icon: Bitcoin },
        { name: "BSC News", path: "/bsc-news", icon: Newspaper },
        { name: "CoinDesk", path: "/coindesk", icon: Newspaper },
        { name: "CoinTelegraph", path: "/cointelegraph", icon: Newspaper },
        { name: "CryptoDaily", path: "/cryptodaily", icon: Newspaper },
        { name: "Decrypt", path: "/decrypt", icon: Newspaper },
        { name: "The Guardian", path: "/the-guardian", icon: Newspaper },
        {
            name: "Trending Cryptos",
            path: "/trending",
            icon: TrendingUpDown,
        },
        {
            name: "Crypto Basics",
            path: "/crypto-basics",
            icon: Info,
        },
        {
            name: "How to Buy Crypto",
            path: "/how-to-buy-crypto",
            icon: Info,
        },
        {
            name: "Glossary",
            path: "/glossary",
            icon: Languages,
        },
        {
            name: "Security",
            path: "/security",
            icon: Shield,
        },
    ];
</script>

<div
    class="flex justify-center w-full bg-background-alt border-b border-border-card"
>
    <!-- bg and border like the Footer.svelte -->
    <NavigationMenu.Root class="relative">
        <NavigationMenu.List class="flex items-center gap-6 py-4">
            <!-- Added padding -->
            <!-- Home Link -->
            <NavigationMenu.Item>
                <NavigationMenu.Link
                    href="/"
                    class="flex items-center gap-1 text-foreground hover:text-accent hover:underline transition-colors"
                >
                    <Home class="w-4 h-4" />
                    Home
                </NavigationMenu.Link>
            </NavigationMenu.Item>

            <!-- News Sources Dropdown -->
            <NavigationMenu.Item>
                <NavigationMenu.Trigger
                    class="flex items-center gap-1 text-foreground hover:text-accent hover:underline transition-colors group"
                >
                    <Newspaper class="w-4 h-4" />
                    Sources
                    <ChevronDown
                        class="w-4 h-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content
                    class="absolute left-0 mt-2 w-48 bg-background-alt rounded-lg shadow-popover border border-border-card p-2 z-50 animate-in fade-in"
                >
                    {#each newsSources as source}
                        <NavigationMenu.Link
                            href={source.path}
                            class="flex items-center gap-2 px-3 py-2 text-foreground hover:text-accent hover:underline transition-colors"
                        >
                            <source.icon class="w-4 h-4" />
                            {source.name}
                        </NavigationMenu.Link>
                    {/each}
                </NavigationMenu.Content>
            </NavigationMenu.Item>

            <!-- About Link -->
            <NavigationMenu.Item>
                <NavigationMenu.Link
                    href="/about"
                    class="flex items-center gap-1 text-foreground hover:text-accent hover:underline transition-colors"
                >
                    <Info class="w-4 h-4" />
                    About
                </NavigationMenu.Link>
            </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
    </NavigationMenu.Root>
</div>

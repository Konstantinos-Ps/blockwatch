<script lang="ts">
    import { onMount } from "svelte";

    // 1.FOR TS CHECKS PROPERLY DECLARE REACTIVE VARIABLE
    let news: Array<{
        title: string;
        url: string;
        description?: string;
        source?: string;
        createdAt?: string;
    }> = [];

    // 2.FETCH LOGIC WHEN PAGE LOADS
    onMount(async () => {
        try {
            const res = await fetch("/api/cointelegraph");
            const data = await res.json();

            // 3.SAFE DATA ASSIGNMENT
            news = Array.isArray(data?.data)
                ? data.data
                : Array.isArray(data)
                  ? data
                  : [];

            console.log("Loaded news:", news); // Debug log because i want to see what's happening
        } catch (err) {
            console.error("Fetch error:", err);
        }
    });

    const pageTitle = "Cointelegraph - Blockwatch";
    const pageDescription =
        "Stay updated with the latest crypto news and trends from CoinTelegraph";
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
</svelte:head>

<!-- 4.RENDERING THE DATA AND ALSO STYLING-->
<div class="max-w-3xl mx-auto px-6 py-8 bg-background text-foreground">
    <h1 class="scroll-m-20 text-balance text-4xl font-extrabold tracking-tight">
        Blockwatch
    </h1>

    {#if news.length === 0}
        <p class="text-foreground-alt text-center py-8">Fetching news...</p>
    {:else}
        <ul class="space-y-6">
            {#each news as item (item.url)}
                <li
                    class="bg-background-alt rounded-lg p-6 shadow-card hover:shadow-popover transition-shadow border border-card"
                >
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="news-link"
                    >
                        <h2
                            class="text-xl font-semibold group-hover:text-accent transition-colors"
                        >
                            {item.title || "Untitled Article"}
                        </h2>
                    </a>

                    {#if item.description}
                        <p class="mt-2 text-foreground-alt">
                            {item.description}
                        </p>
                    {/if}

                    <div
                        class="mt-4 flex items-center text-sm text-muted-foreground"
                    >
                        {#if item.source}
                            <span>Source: {item.source}</span>
                        {/if}
                        {#if item.createdAt}
                            <span class="ml-2"> | {item.createdAt}</span>
                        {/if}
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .news-link {
        color: #2563eb;
        text-decoration: none;
    }

    .news-link:hover {
        text-decoration: underline;
    }
</style>

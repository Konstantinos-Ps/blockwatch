<script lang="ts">
    import { createQuery } from "@tanstack/svelte-query";

    // Use createQuery to fetch news Tanstack addition so i dont exceed the api limit early on
    const newsQuery = createQuery({
        queryKey: ["bitcoinist-news"],
        queryFn: async () => {
            const res = await fetch("/api/bitcoinist");
            if (!res.ok) throw new Error("Failed to fetch news");
            const data = await res.json();
            return Array.isArray(data?.data)
                ? data.data
                : Array.isArray(data)
                  ? data
                  : [];
        },
        staleTime: 5 * 60 * 60 * 1000, // 5 hours in milliseconds , I need  to do A/B testing so i whats best and cost effective etc
    });

    const pageTitle = "Bitcoinist - Blockwatch";
    const pageDescription =
        "Stay updated with the latest crypto news and trends from Bitcoinist.";
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

    {#if $newsQuery.isLoading}
        <p class="text-foreground-alt text-center py-8">Fetching news...</p>
    {:else if $newsQuery.isError}
        <p class="text-foreground-alt text-center py-8">
            Error: {$newsQuery.error.message}
        </p>
    {:else if $newsQuery.isSuccess}
        <ul class="space-y-6">
            {#each $newsQuery.data as item (item.url)}
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

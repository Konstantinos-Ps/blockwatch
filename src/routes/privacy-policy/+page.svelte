<script lang="ts">
    import { Twitter } from "@lucide/svelte";
    const sections = [
        {
            title: "1. Information We Collect",
            content: "We automatically collect:",
            items: [
                "Anonymous usage data via PostHog analytics",
                "Browser type and device information",
                "IP address (anonymized)",
            ],
        },
        {
            title: "2. How We Use Data",
            content: "Your information helps us:",
            items: [
                "Improve website performance",
                "Analyze traffic patterns",
                "Prevent abuse and security issues",
            ],
        },
        {
            title: "3. Third-Party Services",
            content: "We use:",
            items: [
                "Binance API for cryptocurrency prices",
                "And other reputable sources for cryptocurrency news",
                "PostHog for analytics (data anonymized)",
            ],
        },
        {
            title: "4. Your Rights",
            content: "You can:",
            items: [
                "Request access to your data",
                "Ask about data deletion",
                "Opt-out of analytics tracking",
            ],
        },
    ];

    const pageTitle = "Privacy Policy - Blockwatch";
    const pageDescription = "How Blockwatch collects and uses data";
    const pageKeywords =
        "privacy policy, blockwatch, cryptocurrency, analytics";
    const pageAuthor = "Blockwatch Team";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content={pageAuthor} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8 bg-background text-foreground">
    <div
        class="bg-background-alt rounded-xl shadow-card p-6 mb-8 border border-border-card"
    >
        <h1 class="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p class="text-foreground-alt mb-6">Last Updated: 7/11/2025</p>

        <div class="space-y-6">
            {#each sections as section}
                <div
                    class="bg-background rounded-lg p-6 border border-border-card"
                >
                    <h2 class="text-xl font-semibold mb-3">{section.title}</h2>
                    <p class="text-foreground-alt mb-3">{section.content}</p>
                    {#if section.items}
                        <ul
                            class="list-disc pl-6 text-foreground-alt space-y-1"
                        >
                            {#each section.items as item}
                                <li>{item}</li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            {/each}
        </div>
    </div>

    <!-- Contact Card -->
    <!-- Replace contact card with this simplified version -->
    <div class="mt-8 text-center">
        <p class="text-foreground-alt mb-4">Questions? Reach out on:</p>
        <a
            href="https://x.com/Psychogios_K"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 link text-accent hover:text-accent/80"
        >
            <Twitter class="w-5 h-5" />
            <span>@Psychogios_K</span>
        </a>
    </div>
</div>

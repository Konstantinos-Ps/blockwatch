<script lang="ts">
    import { Bitcoin, CreditCard, ArrowRight } from "@lucide/svelte";
    // You can replace the affiliate link with your own
    const affiliateLink =
        "https://www.binance.com/activity/referral-entry/CPA?ref=CPA_00G9QJWF4B";

    const pageTitle = "How to Buy Cryptocurrency Safely - Blockwatch";
    const pageDescription =
        "Step-by-step guide to buying Bitcoin and other cryptocurrencies using trusted exchanges.";
    const pageKeywords =
        "cryptocurrency, buy, safe, guide, step-by-step, trusted exchanges, beginner, advanced, beginner-friendly, advanced-user";
    const pageAuthor = "Blockwatch Team";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content={pageAuthor} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:image" content="/how-to-buy-crypto.jpg" />
    <meta
        property="og:url"
        content="https://blockwatch-one.vercel.app/how-to-buy-crypto"
    />
    <meta property="og:type" content="website" />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-6">
        <Bitcoin class="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" /> How to Buy Cryptocurrency
    </h1>

    <!-- Step 1: Choose an Exchange -->
    <section
        class="mb-8 bg-background-alt rounded-lg p-6 border border-border-card"
    >
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <CreditCard class="w-5 h-5 text-blue-500" /> Step 1: Pick a Reliable
            Exchange
        </h2>
        <p class="mb-4">
            We recommend <a
                href={affiliateLink}
                class="text-accent hover:underline font-medium">Binance</a
            >
            (world’s largest exchange) for beginners:
        </p>
        <ul class="space-y-3">
            <li class="flex items-start gap-2">
                <ArrowRight
                    class="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0"
                />
                <strong>Low fees:</strong> 0.1% trading fee (cheaper than competitors)
            </li>
            <li class="flex items-start gap-2">
                <ArrowRight
                    class="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0"
                />
                <strong>Supports 100+ coins:</strong> Buy BTC, ETH, SOL, and more
            </li>
            <li class="flex items-start gap-2">
                <ArrowRight
                    class="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0"
                />
                <strong>Secure:</strong> 2FA and insurance fund
            </li>
        </ul>
        <a
            href={affiliateLink}
            class="mt-4 inline-block bg-dark-40 hover:bg-accent text-white px-6 py-2 rounded-lg font-medium"
        >
            Sign Up on Binance →
        </a>
    </section>

    <!-- Step 2: Verify Account -->
    <section
        class="mb-8 bg-background-alt rounded-lg p-6 border border-border-card"
    >
        <h2 class="text-xl font-semibold mb-4">
            Step 2: Verify Your Identity (KYC)
        </h2>
        <p>
            Exchanges require ID verification to comply with regulations.
            Usually takes 10 minutes.
        </p>
    </section>

    <!-- Step 3: Deposit Funds -->
    <section
        class="mb-8 bg-background-alt rounded-lg p-6 border border-border-card"
    >
        <h2 class="text-xl font-semibold mb-4">Step 3: Deposit Money</h2>
        <p>Use bank transfer, credit card, or PayPal (fees vary).</p>
    </section>

    <!-- Step 4: Buy Crypto -->
    <section
        class="mb-8 bg-background-alt rounded-lg p-6 border border-border-card"
    >
        <h2 class="text-xl font-semibold mb-4">
            Step 4: Buy Your First Crypto
        </h2>
        <p>
            Search for your coin (e.g., Bitcoin), enter the amount, and confirm
            the trade.
        </p>
    </section>

    <!-- Disclaimer -->
    <div class="bg-yellow-100/20 border-l-4 border-yellow-500 p-4 text-sm">
        <p>
            <strong>Note:</strong> Not financial advice. Exchanges carry risks—only
            invest what you can afford to lose.
        </p>
    </div>
</div>

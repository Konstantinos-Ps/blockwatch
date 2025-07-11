<script lang="ts">
    import {
        Bitcoin,
        Network,
        Wallet,
        Coins,
        ArrowRight,
        AlertTriangle,
    } from "@lucide/svelte";
    import FAQ from "$lib/components/ui/CryptoBasicsAccordion.svelte";

    const pageTitle = "Crypto Basics - Blockwatch";
    const pageDescription =
        "Learn the basics of cryptocurrency, blockchain, and how digital money works.";
    const pageKeywords =
        "cryptocurrency, blockchain, digital money, decentralized, security";
    const pageAuthor = "Blockwatch Team";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content={pageAuthor} />
</svelte:head>

<!--Mobile Responsive -->
<div
    class="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 bg-background text-foreground"
>
    <h1
        class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2"
    >
        <Bitcoin class="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" /> Crypto Basics
    </h1>

    <!-- What is Cryptocurrency? -->
    <section
        class="mb-6 sm:mb-8 bg-background-alt rounded-lg p-4 sm:p-6 border border-border-card"
    >
        <h2
            class="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 flex items-center gap-2"
        >
            <Network class="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" /> What is Cryptocurrency?
        </h2>
        <p class="mb-3 sm:mb-4 text-sm sm:text-base">
            Cryptocurrency is digital money that uses cryptography for security.
            Unlike traditional currencies, it operates without a central
            authority (like a bank or government).
        </p>
        <ul class="list-disc pl-5 space-y-1.5 sm:space-y-2">
            <li class="flex items-start gap-2 text-sm sm:text-base">
                <ArrowRight
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-muted-foreground"
                />
                <strong>Decentralized:</strong> No single entity controls it.
            </li>
            <li class="flex items-start gap-2 text-sm sm:text-base">
                <ArrowRight
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-muted-foreground"
                />
                <strong>Transparent:</strong> Transactions are recorded on a public
                ledger (blockchain).
            </li>
            <li class="flex items-start gap-2 text-sm sm:text-base">
                <ArrowRight
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-muted-foreground"
                />
                <strong>Global:</strong> Anyone with internet access can use it.
            </li>
        </ul>
    </section>

    <!-- How Does It Work? -->
    <section
        class="mb-6 sm:mb-8 bg-background-alt rounded-lg p-4 sm:p-6 border border-border-card"
    >
        <h2
            class="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 flex items-center gap-2"
        >
            <Wallet class="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" /> How Does It
            Work?
        </h2>
        <p class="mb-3 sm:mb-4 text-sm sm:text-base">
            Cryptocurrencies rely on blockchain technology:
        </p>
        <ul class="list-disc pl-5 space-y-1.5 sm:space-y-2">
            <li class="flex items-start gap-2 text-sm sm:text-base">
                <ArrowRight
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-muted-foreground"
                />
                <strong>Blockchain:</strong> A chain of blocks (records) that is
                immutable and shared across a network.
            </li>
            <li class="flex items-start gap-2 text-sm sm:text-base">
                <ArrowRight
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-muted-foreground"
                />
                <strong>Mining/Staking:</strong> How new coins are created and transactions
                are verified.
            </li>
            <li class="flex items-start gap-2 text-sm sm:text-base">
                <ArrowRight
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-muted-foreground"
                />
                <strong>Wallets:</strong> Software to store and manage your crypto
                (like a digital bank account).
            </li>
        </ul>
    </section>

    <!-- Why Use Crypto? -->
    <section
        class="mb-6 sm:mb-8 bg-background-alt rounded-lg p-4 sm:p-6 border border-border-card"
    >
        <h2
            class="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 flex items-center gap-2"
        >
            <Coins class="w-5 h-5 sm:w-6 sm:h-6 text-green-500" /> Why Use Cryptocurrency?
        </h2>
        <ul class="list-disc pl-5 space-y-1.5 sm:space-y-2">
            <li class="flex items-start gap-2 text-sm sm:text-base">
                <ArrowRight
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-muted-foreground"
                />
                <strong>Lower Fees:</strong> No middlemen (like banks) means cheaper
                transactions.
            </li>
            <li class="flex items-start gap-2 text-sm sm:text-base">
                <ArrowRight
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-muted-foreground"
                />
                <strong>Privacy:</strong> Some coins offer more anonymity than traditional
                payments.
            </li>
            <li class="flex items-start gap-2 text-sm sm:text-base">
                <ArrowRight
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-muted-foreground"
                />
                <strong>Innovation:</strong> Powers apps like DeFi (decentralized
                finance) and NFTs.
            </li>
        </ul>
    </section>
    <FAQ />

    <!-- Disclaimer -->
    <div
        class="bg-yellow-100/20 border-l-4 border-yellow-500 p-3 sm:p-4 text-xs sm:text-sm flex items-start gap-2"
    >
        <AlertTriangle
            class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0"
        />
        <p>
            <strong>Note:</strong> Crypto is volatile and risky. Do your own research
            before investing.
        </p>
    </div>
</div>

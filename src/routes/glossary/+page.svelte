<script lang="ts">
    import { ArrowRight } from "@lucide/svelte";

    // Glossary terms (sorted alphabetically) can add more
    const glossaryTerms = [
        {
            term: "Blockchain",
            definition:
                "A decentralized digital ledger that records transactions across many computers.",
        },
        {
            term: "DeFi",
            definition:
                "Decentralized Finance; financial services built on blockchain without intermediaries.",
        },
        {
            term: "NFT",
            definition:
                "Non-Fungible Token; a unique digital asset representing ownership of items like art or collectibles.",
        },
        {
            term: "Staking",
            definition:
                "Locking up crypto to support network operations (e.g., validation) and earn rewards.",
        },
        {
            term: "Smart Contract",
            definition:
                "Self-executing contracts with terms written in code on a blockchain.",
        },
        {
            term: "Gas Fee",
            definition:
                "Transaction fee paid to miners/validators for processing transactions on a blockchain.",
        },
        {
            term: "DAO",
            definition:
                "Decentralized Autonomous Organization; a community-led entity with no central authority.",
        },
        {
            term: "Whale",
            definition:
                "An entity holding large amounts of crypto, capable of influencing markets.",
        },
        {
            term: "Token",
            definition:
                "A digital asset representing ownership or utility on a blockchain.",
        },
        {
            term: "Altcoin",
            definition:
                "Any cryptocurrency other than Bitcoin (e.g., Ethereum, Solana).",
        },
        {
            term: "Airdrop",
            definition:
                "Free distribution of crypto tokens to holders of a specific blockchain.",
        },
        {
            term: "Mainnet",
            definition: "A live blockchain network (vs.testnet)",
        },
        {
            term: "Rug Pull",
            definition:
                "A scam where developers abandon a project after stealing funds.",
        },
    ].sort((a, b) => a.term.localeCompare(b.term)); // Alphabetical sort this applies to new additions as well
    const pageTitle = "Crypto Glossary - Blockwatch";
    const pageDescription = "Learn key cryptocurrency and blockchain terms.";
    const pageKeywords =
        "crypto glossary, blockchain terms, cryptocurrency definitions";
    const pageAuthor = "Blockwatch Team";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content={pageAuthor} />
    <!-- Additional meta tags, links, or scripts -->
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:image" content="/glossary.jpg" />
    <meta
        property="og:url"
        content="https://blockwatch-one.vercel.app/glossary"
    />
    <meta property="og:type" content="website" />
</svelte:head>

<!-- Reuse your existing card/list styling -->
<div class="max-w-3xl mx-auto px-6 py-8 bg-background text-foreground">
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight mb-8">
        Crypto Glossary
    </h1>

    <!-- Glossary list -->
    <ul class="space-y-4">
        {#each glossaryTerms as item}
            <li
                class="bg-background-alt rounded-lg p-6 shadow-card hover:shadow-popover transition-shadow border border-card"
            >
                <h2 class="text-xl font-semibold mb-2">{item.term}</h2>
                <p class="text-foreground-alt flex items-start gap-2">
                    <ArrowRight
                        class="w-4 h-4 mt-1 flex-shrink-0 text-muted-foreground"
                    />
                    {item.definition}
                </p>
            </li>
        {/each}
    </ul>
</div>

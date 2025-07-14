<script lang="ts">
    import {
        AlertTriangle,
        Shield,
        Lock,
        Smartphone,
        Link2,
        Mail,
    } from "@lucide/svelte";

    // Security tips with icons can add more tips if needed
    const securityTips = [
        {
            title: "Use Hardware Wallets",
            icon: Shield,
            content:
                "Store large amounts in cold wallets (e.g., Ledger, Trezor) for offline security.",
            urgency: "high",
        },
        {
            title: "Enable 2FA Everywhere",
            icon: Lock,
            content:
                "Use Google Authenticator or Authy instead of SMS for exchanges and wallets.",
            urgency: "high",
        },
        {
            title: "Beware of Phishing",
            icon: Link2,
            content:
                "Never click links in unsolicited emails/DMs. Always verify website URLs.",
            urgency: "medium",
        },
        {
            title: "Update Software",
            icon: Smartphone,
            content:
                "Keep wallets, apps, and devices updated to patch vulnerabilities.",
            urgency: "medium",
        },
        {
            title: "Secure Your Email",
            icon: Mail,
            content:
                "Use a dedicated email with 2FA for crypto accounts (separate from personal email).",
            urgency: "low",
        },
    ];

    // Emergency checklist
    const emergencySteps = [
        "Revoke suspicious token approvals (use Etherscan or Revoke.cash)",
        "Transfer funds to a new wallet if private keys are compromised",
        "Report scams to platforms like Chainabuse",
    ];

    const pageTitle = "Crypto Security Guide - Blockwatch";
    const pageDescription =
        "Protect your assets with these essential cryptocurrency security practices.";
    const pageKeywords =
        "crypto security, wallet safety, phishing, scams, blockchain protection, security best practices, wallet security";
    const pageAuthor = "Blockwatch Team";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content={pageAuthor} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:image" content="/security.jpg" />
    <meta property="og:url" content="https://blockwatch.com/security" />
    <!-- Additional meta tags, links, or scripts -->
</svelte:head>

<div class="max-w-3xl mx-auto px-6 py-8 bg-background text-foreground">
    <!-- Header -->
    <div class="mb-8 text-center">
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight mb-4">
            <Shield class="w-10 h-10 inline-block mr-2 text-accent" />
            Crypto Security
        </h1>
        <p class="text-foreground-alt max-w-2xl mx-auto">
            Protect your assets with battle-tested practices. <strong
                >Bookmark this page!</strong
            >
        </p>
    </div>

    <!-- Warning Banner -->
    <div
        class="bg-red-500/10 border-l-4 border-red-500 p-4 mb-8 flex items-start gap-3"
    >
        <AlertTriangle class="w-6 h-6 text-red-500 flex-shrink-0" />
        <div>
            <h2 class="font-bold mb-1">Critical Reminder</h2>
            <p>
                Never share your seed phrase or private keys. Legitimate
                services will NEVER ask for them.
            </p>
        </div>
    </div>

    <!-- Security Tips Grid -->
    <div class="grid md:grid-cols-2 gap-6 mb-12">
        {#each securityTips as tip}
            <div
                class="bg-background-alt rounded-lg p-6 border border-border-card hover:shadow-card transition-shadow"
            >
                <div class="flex items-start gap-4">
                    <tip.icon
                        class={`w-6 h-6 mt-1 flex-shrink-0 ${
                            tip.urgency === "high"
                                ? "text-red-500"
                                : tip.urgency === "medium"
                                  ? "text-yellow-500"
                                  : "text-muted-foreground"
                        }`}
                    />
                    <div>
                        <h3 class="text-xl font-semibold mb-2">{tip.title}</h3>
                        <p class="text-foreground-alt">{tip.content}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <!-- Emergency Section -->
    <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle class="w-6 h-6 text-red-500" />
            Emergency Response
        </h2>
        <div class="bg-background-alt rounded-lg p-6 border border-red-500/30">
            <ul class="space-y-3">
                {#each emergencySteps as step}
                    <li class="flex items-start gap-3">
                        <span
                            class="bg-red-500/10 text-red-500 px-2 py-1 rounded-full text-xs font-medium"
                            >!</span
                        >
                        <span>{step}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </section>

    <!-- Additional Resources -->
    <section>
        <h2 class="text-2xl font-bold mb-4">Further Reading</h2>
        <div class="grid sm:grid-cols-2 gap-4">
            <a
                href="https://bitcoin.org/en/secure-your-wallet"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-background-alt hover:bg-background-alt/80 rounded-lg p-4 border border-border-card transition-colors"
            >
                Bitcoin.org Security Guide
            </a>
            <a
                href="https://www.ledger.com/academy"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-background-alt hover:bg-background-alt/80 rounded-lg p-4 border border-border-card transition-colors"
            >
                Ledger Academy
            </a>
        </div>
    </section>
</div>

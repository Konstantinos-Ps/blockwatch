<script lang="ts">
    import { Accordion } from "bits-ui";
    import { ChevronDown } from "@lucide/svelte";

    const faqs = [
        {
            question: "Is cryptocurrency safe?",
            answer: "Crypto is secure by design but carries risks like volatility and scams. Always use trusted wallets and exchanges.",
        },
        {
            question: "How do I buy cryptocurrency?",
            answer: "Through exchanges (like Binance or Coinbase) using fiat money. You'll need a wallet to store it securely.",
        },
        {
            question: "What's the difference between Bitcoin and Ethereum?",
            answer: "Bitcoin is digital gold for payments, while Ethereum is a programmable blockchain for apps and smart contracts.",
        },
        {
            question: "Can I lose all my money in crypto?",
            answer: "Yes. Crypto is highly volatile. Only invest what you can afford to lose.",
        },
    ];
</script>

<Accordion.Root type="single" class="mt-6">
    {#each faqs as faq, i}
        <Accordion.Item value={`item-${i}`} class="border-b border-border-card">
            <Accordion.Header>
                <Accordion.Trigger
                    class="group flex w-full items-center justify-between py-4 text-left font-medium"
                >
                    <span>{faq.question}</span>
                    <ChevronDown
                        class="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-muted-foreground"
                    />
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content class="pb-4 text-sm text-foreground-alt">
                {faq.answer}
            </Accordion.Content>
        </Accordion.Item>
    {/each}
</Accordion.Root>

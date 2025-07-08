<script lang="ts">
    const year = new Date().getFullYear();
    import { Github } from "@lucide/svelte";
    import { Twitter } from "@lucide/svelte";
</script>

<footer class="bg-background-alt border-t border-border-card py-8">
    <div class="container mx-auto px-4">
        <div
            class="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
            <!-- Branding -->
            <div class="flex items-center gap-2">
                <span class="font-display text-lg font-bold text-foreground"
                    >Blockwatch</span
                >
            </div>

            <!-- Nav Links -->
            <nav
                class="flex flex-wrap items-center justify-center gap-4 md:gap-6"
            >
                <a
                    href="/about"
                    class="link text-foreground-alt hover:text-foreground"
                    >About</a
                >
            </nav>

            <!-- Social Links -->
            <div class="flex items-center gap-4">
                <a
                    href="https://x.com/Psychogios_K"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-foreground-alt hover:text-foreground"
                >
                    <span class="sr-only">Twitter</span>
                    <Twitter />
                </a>
                <a
                    href="https://github.com/Konstantinos-Ps/blockwatch"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-foreground-alt hover:text-foreground"
                >
                    <span class="sr-only">GitHub</span>
                    <Github />
                </a>
            </div>
        </div>

        <!-- Copyright -->
        <div class="mt-8 text-center text-sm text-foreground-alt">
            <p>
                © {year} Blockwatch. All rights reserved.
            </p>
        </div>
    </div>
</footer>

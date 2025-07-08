<script lang="ts">
    import { Button } from "bits-ui";

    const pageTitle = "About Blockwatch";
    const pageDescription =
        "A modern, open-source platform for the latest cryptocurrency news and updates.";
    const pageKeywords =
        "crypto news, cryptocurrency, open-source, platform, mission, vision, values, community, collaboration, innovation, growth, sustainability";
    const pageAuthor = "Blockwatch Team";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content={pageAuthor} />
    <!-- Additional meta tags, links, or scripts -->
</svelte:head>

<div class="bg-background text-foreground min-h-screen py-12">
    <div class="container mx-auto px-4 max-w-3xl">
        <header class="mb-12 text-center">
            <h1 class="font-display text-4xl font-bold mb-4">
                About Blockwatch
            </h1>
            <p class="text-foreground-alt max-w-2xl mx-auto">
                A modern, open-source platform for the latest cryptocurrency
                news and updates.
            </p>
        </header>

        <section class="mb-12">
            <h2 class="font-display text-2xl font-bold mb-4">Our Mission</h2>
            <p class="text-foreground-alt mb-6">
                Blockwatch is dedicated to providing accurate, timely, and
                unbiased information about the cryptocurrency world. Whether
                you're a seasoned trader or a curious newcomer, our goal is to
                keep you informed.
            </p>
        </section>

        <section class="mb-12">
            <h2 class="font-display text-2xl font-bold mb-4">Open Source</h2>
            <p class="text-foreground-alt mb-6">
                This project is open-source and welcomes contributions from
                developers worldwide. You can find the source code on our GitHub
                repository. Feel free to fork, star, or submit pull requests!
            </p>
            <a
                href="https://github.com/Konstantinos-Ps/blockwatch"
                target="_blank"
                rel="noopener noreferrer"
                class="link inline-flex items-center gap-2"
            >
                Visit GitHub
                <!-- Replace with an icon if desired -->
                <span class="text-lg">→</span>
            </a>
        </section>

        <section>
            <h2 class="font-display text-2xl font-bold mb-4">Powered By</h2>
            <p class="text-foreground-alt mb-6">
                This project is powered by <a
                    href="https://cryptodaily.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link">cryptodaily.co.uk</a
                >, a trusted source for cryptocurrency news and analysis.
            </p>
            <div class="flex justify-center">
                <Button.Root
                    href="/"
                    class="rounded-input bg-dark text-background shadow-mini hover:bg-dark/95 inline-flex
	h-12 items-center justify-center px-[21px] text-[15px]
	font-semibold active:scale-[0.98] active:transition-all"
                    >Go Back Home</Button.Root
                >
            </div>
        </section>
    </div>
</div>

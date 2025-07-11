<script lang="ts">
    const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
</script>

<section class="py-26 text-center relative">
    <!-- Added relative here -->
    <h1
        class="text-4xl md:text-5xl font-display font-bold mb-4 relative inline-block"
    >
        Crypto News - Fast, Accurate, & Comprehensive
        <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-700"></span>
    </h1>
    <p class="text-xl text-foreground-alt mb-8">
        Stay ahead with real-time updates from top sources.
    </p>

    <!-- Live Timestamp That's under the <p></p> and gets the time -->
    <div
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1 text-xs z-10"
    >
        <span class="animate-pulse h-2 w-2 rounded-full bg-green-500"></span>
        <span
            class="bg-foreground/90 text-background px-2 py-1 rounded-md font-mono tracking-tight"
        >
            LIVE {time}
        </span>
    </div>
</section>

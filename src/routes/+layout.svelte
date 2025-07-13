<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";
    import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
    const queryClient = new QueryClient();

    let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
    <div class="min-h-screen flex flex-col">
        <!-- Sticky Navbar -->
        <header>
            <Navbar />
        </header>
        <main class="flex-1">
            {@render children()}
        </main>
        <Footer />
    </div>
</QueryClientProvider>

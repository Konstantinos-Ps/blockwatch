<script lang="ts">
    import { page } from "$app/stores";
    import BackButton from "$lib/components/ui/BackButton.svelte";

    const pageDescription =
        $page.status === 404 ? "Page not found" : "An error occurred";
    const pageKeywords =
        "not-found, error, page, not, found, an, error, occurred";
</script>

<svelte:head>
    <title>{$page.status} Blockwatch</title>
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
</svelte:head>

<div
    class="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4"
>
    <div
        class="max-w-md w-full bg-background-alt rounded-lg shadow-card p-6 text-center"
    >
        <h1 class="text-3xl font-display font-bold mb-4">
            {$page.status === 404
                ? "Oops! Page Not Found"
                : "Something Went Wrong"}
        </h1>
        <p class="text-muted-foreground mb-6">
            {$page.status === 404
                ? "The page you're looking for doesn't exist or has been moved."
                : "An unexpected error occurred. Please try again later."}
        </p>
        <div class="flex justify-center">
            <BackButton />
        </div>
    </div>
</div>

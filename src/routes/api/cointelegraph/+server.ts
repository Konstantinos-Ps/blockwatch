import type { RequestHandler } from "@sveltejs/kit";
import { RAPID_API_KEY, RAPID_API_HOST } from "$env/static/private";

// Handle GET requests with Sveltekit even tho RAPIDAPI only has the vanilla version,
export const GET: RequestHandler = async () => {
  const url = "https://cryptocurrency-news2.p.rapidapi.com/v1/cointelegraph";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": RAPID_API_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "API failed" }), {
      status: 500,
    });
  }
};

import type { RequestHandler } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import { RAPID_API_KEY, RAPID_API_HOST } from "$env/static/private";

// Handle GET requests with Sveltekit even tho RAPIDAPI only has the vanilla version,
export const GET: RequestHandler = async () => {
  const url = "https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily";
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
    return json(result);
  } catch (error) {
    return json({ error: "API failed" }, { status: 500 });
  }
};

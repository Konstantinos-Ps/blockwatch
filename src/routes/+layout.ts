import posthog from "posthog-js";
import { browser } from "$app/environment";
import { PUBLIC_POSTHOG_API_KEY } from "$env/static/public";

export const load = () => {
  if (browser) {
    posthog.init(PUBLIC_POSTHOG_API_KEY, {
      api_host: "https://eu.i.posthog.com",
      capture_pageview: true, // Auto-track pageviews
    });
  }
};

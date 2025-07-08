import { WebsiteURL } from "$lib/www";
import type { RequestHandler } from "@sveltejs/kit";
import * as sitemap from "super-sitemap";

export const GET: RequestHandler = async () => {
  return await sitemap.response({
    origin: WebsiteURL,
    excludeRoutePatterns: [
      ".*api.*", // Exclude API routes in the sitemap
    ],
  });
};

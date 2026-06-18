import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    const event = { request, waitUntil: ctx.waitUntil.bind(ctx) };
    try {
      // Serve static assets from the site bucket defined in wrangler.toml
      return await getAssetFromKV(event);
    } catch (e) {
      // Return 404 for missing assets, 500 for other errors
      if (e && e.message && e.message.includes('NotFoundError')) {
        return new Response('Not Found', { status: 404 });
      }
      return new Response('Internal Server Error', { status: 500 });
    }
  }
};

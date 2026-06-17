export default {
  async fetch(request) {
    return new Response('Mersin Manşet deployed on Cloudflare Workers', {
      headers: { 'content-type': 'text/plain' }
    });
  }
};

/**
 * Home Remodel Budget - Cloudflare Worker
 * API endpoint for budget tracking
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle CORS
    if (request.method === 'OPTIONS') {
      return handleOptions(request);
    }
    
    // Route handling
    if (url.pathname === '/') {
      return new Response(JSON.stringify({
        message: 'Home Remodel Budget API',
        version: '1.0.0',
        endpoints: [
          '/projects',
          '/expenses',
          '/health'
        ]
      }), {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }
    
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok' }), {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }
    
    if (url.pathname === '/projects') {
      // TODO: Implement project list endpoint
      return new Response(JSON.stringify({ projects: [] }), {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }
    
    return new Response('Not Found', { status: 404 });
  }
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function handleOptions(request) {
  return new Response(null, {
    headers: corsHeaders
  });
}

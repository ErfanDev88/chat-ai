module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': [
            "'self'",
            'https:',
            'http:',
            'data:',
            'blob:',
            'https://chat-ai-uf5u.onrender.com', 
            'https://chat-ai-limited.vercel.app', 
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://chat-ai-uf5u.onrender.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"], 
          'connect-src': ["'self'", 'https:', 'data:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'frame-src': ["'self'", 'https:'],
        },
      },
    },
  },
];

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),

  app: {
    keys: env.array("APP_KEYS", ["keyA", "keyB"]),
  },

  url: env("PUBLIC_URL", "https://chat-ai-uf5u.onrender.com"),

  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },

  settings: {
    cors: {
      enabled: true,
      origin: ['*'], 
    },
  },

  allowedHosts: env.array("ALLOWED_HOSTS", [
    "chat-ai-uf5u.onrender.com",
    "localhost",
  ]),
});

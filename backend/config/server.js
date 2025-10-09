module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL", "https://chat-ai-uf5u.onrender.com"),
  app: {
    keys: env.array("APP_KEYS", ["keyA", "keyB"]),
  },
  allowedHosts: env.array("ALLOWED_HOSTS", [
    "chat-ai-uf5u.onrender.com",
    "https://chat-ai-limited.vercel.app",
    "localhost",
  ]),
});

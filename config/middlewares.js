module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: { contentSecurityPolicy: { useDefaults: true } }
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:5173","http://localhost:3000"],
      headers: "*",
      methods: ["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"]
    }
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public"
];

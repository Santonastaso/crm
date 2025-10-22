// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/crm/doc/",
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: "assets",
  },
  integrations: [
    starlight({
      title: "Pinger",
      favicon: "./public/favicon.svg",
      customCss: ["./src/styles/global.css"],
      logo: {
        dark: "",
        light: "",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:title",
            content: "Pinger Documentation",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:description",
            content: "A full-featured CRM toolkit for personalized solutions.",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:url",
            content: "https://marmelab.com/crm/doc",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content:
              "https://marmelab.com/crm/img/pinger-banner.png",
          },
        },
        // add Umami analytics script tag.
        {
          tag: "script",
          attrs: {
            src: "https://gursikso.marmelab.com/script.js",
            "data-website-id": "1dc1c802-5494-4c69-b507-3f2eff25091f",
            defer: true,
            async: true,
          },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/marmelab/crm",
        },
      ],
      sidebar: [
        {
          label: "Users",
          autogenerate: { directory: "users" },
        },
        {
          label: "Developers",
          autogenerate: { directory: "developers" },
        },
      ],
    }),
  ],
});

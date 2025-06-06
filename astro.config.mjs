// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Quria",
      description:
        "A user-friendly Destiny 2 API Wrapper written with TypeScript and approved by Oryx.",
      favicon: "/favicon.ico",
      logo: {
        src: "./src/assets/images/logo.png",
      },
      social: [
        {
          icon: "github",
          label: "Quria on GitHub",
          href: "https://github.com/quriats/quria",
        },
      ],
      customCss: ["./src/assets/styles/styles.css"],
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});

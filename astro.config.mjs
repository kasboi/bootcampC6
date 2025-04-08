// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Introduction",
          slug: "intro",
        },
        {
          label: "Motivation",
          slug: "motivation",
        },
        {
          label: "Code Editor Setup",
          slug: "code-editor",
        },
        {
          label: "HTML Fundamentals",
          items: [
            {
              label: "HTML 101",
              slug: "html/html-101",
            },
          ],
        },
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

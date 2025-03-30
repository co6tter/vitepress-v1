import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },

  rewrites: {
    "packages/pkg-a/src/index.md": "pkg-a/index.md",
    "packages/pkg-a/src/foo.md": "pkg-a/foo.md",
    "packages/pkg-b/src/index.md": "pkg-b/index.md",
    "packages/pkg-b/src/bar.md": "pkg-b/bar.md",
  },
});

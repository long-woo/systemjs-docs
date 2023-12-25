import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../docs',
  base: '/systemjs-docs/',
  title: "SystemJS Document",
  description: "Unofficial SystemJS documentation.",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Getting Start', link: '/nodejs' },
      { text: 'API', link: '/api' },
      { text: 'Hooks', link: '/hooks' },
      { text: 'FAQ', link: '/errors' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Change Log', link: 'https://github.com/systemjs/systemjs/blob/main/CHANGELOG.md' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Using SystemJS', link: '/nodejs' },
          { text: 'System.register', link: '/system-register' },
          {text: 'Import Maps', link: '/import-maps'},
          {text: 'Module Types', link: '/module-types'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/systemjs/systemjs' }
    ]
  }
})

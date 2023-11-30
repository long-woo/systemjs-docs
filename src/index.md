---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SystemJS Document"
  text: "Unofficial SystemJS documentation. "
  tagline: Dynamic ES module loader.
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Module Loader
    details: SystemJS is a hookable, standards-based module loader that enables code written for native ES modules in browsers to be transpiled and work in older browsers. It supports features like dynamic import, circular references, and import maps.
  - title: Transpiler
    details: SystemJS provides a transpilation mechanism that converts code written for modern native ES modules into the System.register module format. This allows developers to ensure compatibility with older browsers that do not support native modules.
  - title: Advanced Features
    details: SystemJS offers advanced features such as top-level await, import.meta.url, module types, integrity, and Content Security Policy. It also maintains compatibility with older browsers, including IE11, while providing almost-native module speeds.
---

<div class="container mx-auto mt-20">
  <div class="px-6 overflow-hidden">
    <iframe class="w-full md:w-2/3 mx-auto aspect-video rounded-lg" src="https://www.youtube.com/embed/AmdKF2UhFzw" title="Javascript Tutorial - SystemJS intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>

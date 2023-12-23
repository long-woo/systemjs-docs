import{_ as s,o as a,c as i,R as e}from"./chunks/framework.lUe35HZ2.js";const g=JSON.parse('{"title":"Module Types","description":"","frontmatter":{},"headers":[],"relativePath":"module-types.md","filePath":"module-types.md"}'),t={name:"module-types.md"},l=e(`<h1 id="module-types" tabindex="-1">Module Types <a class="header-anchor" href="#module-types" aria-label="Permalink to &quot;Module Types&quot;">​</a></h1><p>SystemJS supports loading modules that are in the following formats:</p><table><thead><tr><th>Module Format</th><th>s.js</th><th>system.js</th><th>File Extension</th></tr></thead><tbody><tr><td><a href="/systemjs-docs/docs/system-register.html">System.register</a></td><td>✔️</td><td>✔️</td><td>*</td></tr><tr><td><a href="https://github.com/whatwg/html/pull/4407" target="_blank" rel="noreferrer">JSON Modules</a></td><td><a href="/systemjs-docs/dist/extras/module-types.js">Module Types extra</a></td><td>✔️</td><td>*.json</td></tr><tr><td><a href="https://github.com/w3c/webcomponents/blob/gh-pages/proposals/css-modules-v1-explainer.md" target="_blank" rel="noreferrer">CSS Modules</a></td><td><a href="/systemjs-docs/dist/extras/module-types.js">Module Types extra</a></td><td>✔️</td><td>*.css</td></tr><tr><td><a href="https://github.com/WebAssembly/esm-integration/tree/master/proposals/esm-integration" target="_blank" rel="noreferrer">Web Assembly</a></td><td><a href="/systemjs-docs/dist/extras/module-types.js">Module Types extra</a></td><td>✔️</td><td>*.wasm</td></tr><tr><td>Global variable</td><td><a href="/systemjs-docs/dist/extras/global.js">global extra</a></td><td>✔️</td><td>*</td></tr><tr><td><a href="https://github.com/amdjs/amdjs-api/wiki/AMD" target="_blank" rel="noreferrer">AMD</a></td><td><a href="/systemjs-docs/dist/extras/amd.js">AMD extra</a></td><td><a href="/systemjs-docs/dist/extras/amd.js">AMD extra</a></td><td>*</td></tr><tr><td><a href="https://github.com/umdjs/umd" target="_blank" rel="noreferrer">UMD</a></td><td><a href="/systemjs-docs/dist/extras/amd.js">AMD extra</a></td><td><a href="/systemjs-docs/dist/extras/amd.js">AMD extra</a></td><td>*</td></tr></tbody></table><h3 id="file-extension-limitations" tabindex="-1">File Extension Limitations <a class="header-anchor" href="#file-extension-limitations" aria-label="Permalink to &quot;File Extension Limitations&quot;">​</a></h3><p>When loading JSON modules, CSS modules and Web Assembly modules, the browser specifications require interpreting these modules based on checking their MIME type. Since SystemJS has to choose upfront whether to append a script element (for JS modules) or make a fetch request (for a JSON/CSS/Wasm module), it needs to know the module type upfront at resolution time.</p><p>Instead of reading the MIME type, the file extension is thus used specifically for the JSON, CSS and Web Assembly module cases.</p><h2 id="json-modules" tabindex="-1">JSON Modules <a class="header-anchor" href="#json-modules" aria-label="Permalink to &quot;JSON Modules&quot;">​</a></h2><p><a href="https://github.com/whatwg/html/pull/4407" target="_blank" rel="noreferrer">JSON modules</a> support importing a JSON file as the default export.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p><strong>file.json</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;some&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;json value&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;file.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.default); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The json as a js object.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="css-modules" tabindex="-1">CSS Modules <a class="header-anchor" href="#css-modules" aria-label="Permalink to &quot;CSS Modules&quot;">​</a></h2><p><a href="https://github.com/w3c/webcomponents/blob/gh-pages/proposals/css-modules-v1-explainer.md" target="_blank" rel="noreferrer">CSS Modules</a> are supported <a href="#constructed-style-sheets-polyfill">when a Constructable Style Sheets polyfill is present for browsers other than Chromium</a>.</p><p>Note that the term CSS Modules refers to two separate things: (1) the browser spec, or (2) the Webpack / PostCSS plugin. The CSS modules implemented by SystemJS are the browser spec.</p><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* file.css */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.brown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">brown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;file.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> styleSheet</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.default; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// A CSSStyleSheet object</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  document.adoptedStyleSheets </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.adoptedStyleSheets, styleSheet]; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// now your css is available to be used.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="constructable-style-sheets-polyfill" tabindex="-1">Constructable Style Sheets Polyfill <a class="header-anchor" href="#constructable-style-sheets-polyfill" aria-label="Permalink to &quot;Constructable Style Sheets Polyfill&quot;">​</a></h3><p>CSS modules export a <a href="https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet" target="_blank" rel="noreferrer">Constructable Stylesheet</a> instance as their default export when imported.</p><p>Currently these are only available in new versions of Chromium based browsers (e.g., Chrome 73+), so usage in any other browsers will require a polyfill, such as the one at <a href="https://www.npmjs.com/package/construct-style-sheets-polyfill" target="_blank" rel="noreferrer">https://www.npmjs.com/package/construct-style-sheets-polyfill</a>.</p><p>The polyfill can be conditionally loaded with an approach like:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://unpkg.com/construct-style-sheets-polyfill@2.1.0/adoptedStyleSheets.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><em>Note that this polyfill does not currently work in IE11.</em></p><h2 id="web-assembly-modules" tabindex="-1">Web Assembly Modules <a class="header-anchor" href="#web-assembly-modules" aria-label="Permalink to &quot;Web Assembly Modules&quot;">​</a></h2><p><a href="https://github.com/WebAssembly/esm-integration/tree/master/proposals/esm-integration" target="_blank" rel="noreferrer">Web Assembly Modules</a> support importing Web Assembly with Web Assembly in turn supporting other modules.</p><h3 id="example-2" tabindex="-1">Example <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;systemjs-importmap&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;imports&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;example&quot;: &quot;./wasm-dependency.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/wasm-module.wasm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // calls wasm-dependency square function through Wasm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    m.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exampleExport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>wasm-dependency.js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// function called from Wasm</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> exampleImport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">num</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>where <code>wasm-module.wasm</code> is generated from:</p><p><strong>wasm-module.wat</strong></p><div class="language-wat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">wat</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(module</span></span>
<span class="line"><span>  (func $exampleImport (import &quot;example&quot; &quot;exampleImport&quot;) (param i32) (result i32))</span></span>
<span class="line"><span>  (func $exampleExport (export &quot;exampleExport&quot;) (param $value i32) (result i32)</span></span>
<span class="line"><span>    get_local $value</span></span>
<span class="line"><span>    call $exampleImport</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>)</span></span></code></pre></div>`,33),n=[l];function p(h,r,o,d,k,E){return a(),i("div",null,n)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};
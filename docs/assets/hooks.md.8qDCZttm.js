import{_ as e,o as s,c as i,R as t}from"./chunks/framework.RpFkmAtX.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":false,"prev":{"text":"API","link":"/api"},"next":{"text":"FAQ","link":"/error"}},"headers":[],"relativePath":"hooks.md","filePath":"hooks.md"}'),a={name:"hooks.md"},n=t(`<h2 id="loader-hooks" tabindex="-1">Loader Hooks <a class="header-anchor" href="#loader-hooks" aria-label="Permalink to &quot;Loader Hooks&quot;">​</a></h2><h3 id="hooking-the-loader" tabindex="-1">Hooking the Loader <a class="header-anchor" href="#hooking-the-loader" aria-label="Permalink to &quot;Hooking the Loader&quot;">​</a></h3><p>The loader is designed to be hookable in a very light-weight way using only function extensions.</p><p>The standard pattern for this is:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> existingHook</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> System.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.hookName;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hookName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(existingHook.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, args))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">existingHookResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // custom hook here</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>When hooking the loader it is important to pay attention to the order in which hooks will apply, and to keep existing hooks running where they provide necessary functionality.</p><p>In addition, some hooks are Promise-based, so Promise chaining also needs to be carefully applied only where necessary.</p><h4 id="createcontext-url-object" tabindex="-1">createContext(url) -&gt; Object <a class="header-anchor" href="#createcontext-url-object" aria-label="Permalink to &quot;createContext(url) -&gt; Object&quot;">​</a></h4><p>Used to populate the <code>import.meta</code> for a module, available at <code>_context.meta</code> in the <a href="./system-register.html">System.register module format</a>.</p><p>The default implementation is:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createContext</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h4 id="createscript-url-htmlscriptelement-promise-htmlscriptelement" tabindex="-1">createScript(url) -&gt; HTMLScriptElement | Promise&lt;HTMLScriptElement&gt; <a class="header-anchor" href="#createscript-url-htmlscriptelement-promise-htmlscriptelement" aria-label="Permalink to &quot;createScript(url) -&gt; HTMLScriptElement | Promise\\&lt;HTMLScriptElement&gt;&quot;">​</a></h4><p>When SystemJS loads a module, it creates a <code>&lt;script&gt;</code> tag and injects it into the head.</p><p><code>createScript</code> allows hooking this script tag creation, will by default implement <code>return Object.assign(document.createElement(&#39;script&#39;), { url, crossOrigin: &#39;anonymous&#39; })</code>.</p><p>This allows, for example, including custom integrity or authentication attributes.</p><p>This hook could be asynchronous and you can fetch asynchronously some data and return your script tag.</p><p>Note that this hook does not apply to <a href="./module-types.html">module types</a>, which use the default browser fetch implementation.</p><h4 id="prepareimport-promise" tabindex="-1">prepareImport() -&gt; Promise <a class="header-anchor" href="#prepareimport-promise" aria-label="Permalink to &quot;prepareImport() -&gt; Promise&quot;">​</a></h4><p>This function is called before any <code>System.import</code> or dynamic import, returning a Promise that is resolved before continuing to perform the import.</p><p>This is used in SystemJS core to ensure that import maps are loaded so that the <code>System.resolve</code> function remains synchronous.</p><h4 id="instantiate-url-parenturl-promise" tabindex="-1">instantiate(url, parentUrl) -&gt; Promise <a class="header-anchor" href="#instantiate-url-parenturl-promise" aria-label="Permalink to &quot;instantiate(url, parentUrl) -&gt; Promise&quot;">​</a></h4><p>This function downloads and executes the code for a module. The promise must resolve with a &quot;register&quot; array, as described in the <code>getRegister</code> documentation.</p><p>The default system.js implementation is to append a script tag that downloads and executes the module&#39;s code, subsequently resolving the promise with the most recent register: <code>resolve(System.getRegister())</code>. <a href="https://github.com/systemjs/systemjs/blob/master/src/features/script-load.js" target="_blank" rel="noreferrer">Example</a>.</p><h4 id="getregister-url-deps-string-declare-function" tabindex="-1">getRegister(url) -&gt; [deps: String[], declare: Function] <a class="header-anchor" href="#getregister-url-deps-string-declare-function" aria-label="Permalink to &quot;getRegister(url) -&gt; [deps: String[], declare: Function]&quot;">​</a></h4><blockquote><p>This hook is intended for custom module format integrations only.</p></blockquote><p>This function stores the last call to <code>System.register</code>, and is the companion hook for that function.</p><p>It is important that this function is synchronous, as any event loop delay would result in uncertainty over which source evaluation resulted in this registration call.</p><p>Custom module format support like AMD support is added by hooking the AMD registration in hook.</p><h4 id="resolve-id-parenturl-string" tabindex="-1">resolve(id, parentUrl) -&gt; String <a class="header-anchor" href="#resolve-id-parenturl-string" aria-label="Permalink to &quot;resolve(id, parentUrl) -&gt; String&quot;">​</a></h4><p>In both s.js and system.js, resolve is implemented as a synchronous function.</p><p>Resolve should return a fully-valid URL for specification compatibility, but this is not enforced.</p><h4 id="shouldfetch-url-boolean" tabindex="-1">shouldFetch(url) -&gt; Boolean <a class="header-anchor" href="#shouldfetch-url-boolean" aria-label="Permalink to &quot;shouldFetch(url) -&gt; Boolean&quot;">​</a></h4><p>This hook is used to determine if a module should be loaded by adding a <code>&lt;script&gt;</code> tag to the page (the normal SystemJS behaviour which is the fastest and supports CSP), or if the module should be loaded by using <code>fetch</code> and <code>eval</code> instead.</p><p>When using the <a href="./module-types.html">module types extra</a>, this will return true for files ending in <code>.css</code>, <code>.json</code> and <code>.wasm</code>, so that it can support these types through the fetch hook.</p><p>Setting:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shouldFetch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; };</span></span></code></pre></div><p>will enforce loading all JS files through <code>fetch</code>, allowing custom fetch hook implementation behaviours.</p><h4 id="fetch-url-options-promise-response" tabindex="-1">fetch(url, options) -&gt; Promise&lt;Response&gt; <a class="header-anchor" href="#fetch-url-options-promise-response" aria-label="Permalink to &quot;fetch(url, options) -&gt; Promise\\&lt;Response&gt;&quot;">​</a></h4><p>The default fetch implementation used in SystemJS is simply <code>System.fetch = window.fetch</code>, which can be further hooked to enable arbitrary transformation.</p><p>For an example of how to hook this behaviour, see the <a href="../src/extras/module-types.js">module types extra source code</a>.</p><h4 id="onload-err-id-deps-iserrsource-sync" tabindex="-1">onload(err, id, deps, isErrSource) (sync) <a class="header-anchor" href="#onload-err-id-deps-iserrsource-sync" aria-label="Permalink to &quot;onload(err, id, deps, isErrSource) (sync)&quot;">​</a></h4><p><em>This hook is not available in the s.js minimal loader build.</em></p><p>For tracing functionality this is called on completion or failure of each and every module loaded into the registry.</p><p><code>err</code> is defined for any module load error at instantiation (including fetch and resolution errors), execution or dependency execution.</p><p><code>deps</code> is available for errored modules that did not error on instantiation.</p><p><code>isErrSource</code> is used to indicate if <code>id</code> is the error source or not.</p><p>Such tracing can be used for analysis and to clear the loader registry using the <code>System.delete(url)</code> API to enable reloading and hot reloading workflows.</p>`,47),o=[n];function r(l,h,p,d,c,k){return s(),i("div",null,o)}const m=e(a,[["render",r]]);export{g as __pageData,m as default};
/* empty css                                */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, F as Fragment } from '../chunks/astro/server_DwRF4eQR.mjs';
import 'kleur/colors';
import { $ as $$PageMeta, a as $$PageLayout } from '../chunks/PageMeta_BSexNu32.mjs';
import 'clsx';
import { S as SITE_TITLE } from '../chunks/config_BJeKzReB.mjs';
export { renderers } from '../renderers.mjs';

const $$Intro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mb-8"> <div class="mb-4"> <h1 class="font-extrabold text-5xl md:text-6xl tracking-tight pt-4 pb-2 overflow-hidden"> <span class="bg-gradient-to-br from-[#fb923c] via-[#f97316] to-[#ea580c] dark:from-primary-main dark:via-primary-main dark:to-primary-main bg-clip-text text-transparent">
Kendry Carvajal
</span> </h1> <p class="text-2xl pb-4">BI Data Analyst</p> </div> <div> <p class="mb-5"></p><p>
Hello! This is my blog where you can find tips and projects about Power BI and more!
</p> <p>
Here you will find the code for my projects:
<a${addAttribute("https://github.com/Kecar2", "href")} target="_blank">GitHub</a>.
</p> <p>
Find me on LinkedIn:
<a${addAttribute("https://www.linkedin.com/in/kendry-c-501639206/", "href")} target="_blank">Linkedin</a> </p> <p>
Contact me via email:
<a href="mailto:kendry.contacto@gmail.com" target="_blank">Send mail</a> </p>  </div> </section>`;
}, "C:/Users/kendr/my_blog/src/components/Intro.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, {}, { "main": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "main" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Intro", $$Intro, {})} ` })}`, "meta": ($$result2) => renderTemplate`${renderComponent($$result2, "PageMeta", $$PageMeta, { "title": `${SITE_TITLE} | KCS`, "slot": "meta" })}` })}`;
}, "C:/Users/kendr/my_blog/src/pages/index.astro", void 0);

const $$file = "C:/Users/kendr/my_blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

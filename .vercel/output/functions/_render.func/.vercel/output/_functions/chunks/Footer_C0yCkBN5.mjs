import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, c as createAstro, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, e as renderSlot } from './astro/server_DwRF4eQR.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

function getPageMeta({
  title: pageTitle,
  description,
  baseUrl,
  ogImageAbsoluteUrl,
  ogImageAltText,
  ogImageWidth,
  ogImageHeight,
  siteOwnerTwitterHandle,
  contentAuthorTwitterHandle
}) {
  if (!pageTitle) {
    throw Error("title is required for page SEO");
  }
  if (ogImageAbsoluteUrl) {
    ogImageAltText = !ogImageAltText ? `Preview image for ${pageTitle}` : ogImageAltText;
  }
  const meta = { title: pageTitle, description };
  const og = {
    title: pageTitle,
    description,
    type: "website",
    url: baseUrl,
    image: ogImageAbsoluteUrl,
    imageAlt: ogImageAltText,
    imageWidth: ogImageWidth ? String(ogImageWidth) : void 0,
    imageHeight: ogImageHeight ? String(ogImageHeight) : void 0
  };
  const twitter = {
    title: pageTitle,
    description,
    card: "summary_large_image",
    site: siteOwnerTwitterHandle,
    creator: contentAuthorTwitterHandle || siteOwnerTwitterHandle,
    image: ogImageAbsoluteUrl,
    imageAlt: ogImageAltText
  };
  return {
    meta,
    og,
    twitter
  };
}
function getBlogPostMeta({
  title: pageTitle,
  description,
  canonicalUrl,
  pageUrl,
  authorName,
  publishDate,
  ogImageAbsoluteUrl,
  ogImageAltText,
  ogImageWidth,
  ogImageHeight,
  siteOwnerTwitterHandle,
  contentAuthorTwitterHandle
}) {
  if (!pageTitle) {
    throw Error("title is required for page SEO");
  }
  if (ogImageAbsoluteUrl && !ogImageAltText) {
    ogImageAltText = `Preview image for ${pageTitle}`;
  }
  const meta = {
    title: pageTitle,
    description,
    canonicalUrl
  };
  const og = {
    title: pageTitle,
    description,
    type: "article",
    url: pageUrl,
    author: authorName,
    publishDate,
    image: ogImageAbsoluteUrl,
    imageAlt: ogImageAltText,
    imageWidth: ogImageWidth ? String(ogImageWidth) : void 0,
    imageHeight: ogImageHeight ? String(ogImageHeight) : void 0
  };
  const twitter = {
    title: pageTitle,
    description,
    card: "summary_large_image",
    site: siteOwnerTwitterHandle,
    creator: contentAuthorTwitterHandle || siteOwnerTwitterHandle,
    image: ogImageAbsoluteUrl,
    imageAlt: ogImageAltText
  };
  return {
    meta,
    og,
    twitter
  };
}

const $$GoogleFont = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<link rel="preload" href="/fonts/open-sans-v34-latin-regular.woff2" as="font" type="font/woff2" crossorigin="crossorigin"><link rel="preload" href="/fonts/open-sans-v34-latin-700.woff2" as="font" type="font/woff2" crossorigin="crossorigin"><link rel="preload" href="/fonts/open-sans-v34-latin-800.woff2" as="font" type="font/woff2" crossorigin="crossorigin"><link rel="preload" href="/fonts/open-sans-v34-latin-italic.woff2" as="font" type="font/woff2" crossorigin="crossorigin"><style>
    /* open-sans-regular - latin */
    @font-face {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-display: fallback;
      src: local(""),
        url("/fonts/open-sans-v34-latin-regular.woff2") format("woff2"),
        /* Chrome 26+, Opera 23+, Firefox 39+ */
          url("/fonts/open-sans-v34-latin-regular.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* open-sans-700 - latin */
    @font-face {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      font-display: fallback;
      src: local(""),
        url("/fonts/open-sans-v34-latin-700.woff2") format("woff2"),
        /* Chrome 26+, Opera 23+, Firefox 39+ */
          url("/fonts/open-sans-v34-latin-700.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* open-sans-800 - latin */
    @font-face {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 800;
      font-display: fallback;
      src: local(""),
        url("/fonts/open-sans-v34-latin-800.woff2") format("woff2"),
        /* Chrome 26+, Opera 23+, Firefox 39+ */
          url("/fonts/open-sans-v34-latin-800.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* open-sans-italic - latin */
    @font-face {
      font-family: "Open Sans";
      font-style: italic;
      font-weight: 400;
      font-display: fallback;
      src: local(""),
        url("/fonts/open-sans-v34-latin-italic.woff2") format("woff2"),
        /* Chrome 26+, Opera 23+, Firefox 39+ */
          url("/fonts/open-sans-v34-latin-italic.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
  </style>` })}`;
}, "C:/Users/kendr/my_blog/src/layouts/GoogleFont.astro", void 0);

const $$FontAwesome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<link href="/fontawesome/css/fontawesome.bareminimum.css" rel="stylesheet"><link href="/fontawesome/css/brands.bareminimum.css" rel="stylesheet"><link href="/fontawesome/css/solid.min.css" rel="stylesheet">` })}`;
}, "C:/Users/kendr/my_blog/src/layouts/FontAwesome.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  \n  (function () {\n    if (typeof window !== "undefined") {\n      const isSystemColorSchemeDark = window.matchMedia(\n        "(prefers-color-scheme: dark)"\n      ).matches;\n      const storageTheme = sessionStorage.getItem("theme");\n      if (!storageTheme && isSystemColorSchemeDark) {\n        document.documentElement.classList.add("dark");\n        document.head.children.namedItem("theme-color").content = "#0e141b";\n      } else if (storageTheme === "dark") {\n        document.documentElement.classList.add("dark");\n        document.head.children.namedItem("theme-color").content = "#0e141b";\n      } else {\n        \n        document.head.children.namedItem("theme-color").content = "#ffffff";\n      }\n    }\n  })();\n<\/script>'])));
}, "C:/Users/kendr/my_blog/src/layouts/ThemeScript.astro", void 0);

const $$Favicon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta name="theme-color" content="#ffffff"><link href="/favicon.ico" rel="shortcut icon">`;
}, "C:/Users/kendr/my_blog/src/layouts/Favicon.astro", void 0);

const $$Astro = createAstro("https://kendrycarvajal.com");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const path = Astro2.url.pathname.replace(/\/$/, "");
  const isHome = href === "/" && path === "";
  const isOtherPages = typeof href === "string" && href.length > 1 ? path.substring(1).startsWith(href.substring(1)) : false;
  const isActive = isHome || isOtherPages;
  return renderTemplate`<!-- DO NOT FORMAT. IT ADDS AN EXTRA SPACE ON RENDERED CONTENT. -->${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    className,
    { "show": isActive },
    "unset animated-link"
  ], "class:list")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/kendr/my_blog/src/components/HeaderLink.astro", void 0);

const $$DarkModeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "mode-toggle", "mode-toggle", { "class": "flex", "data-astro-cid-tcsrer47": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button class="justify-self-end bg-neutral-200 dark:bg-neutral-700 ml-4 inline-flex h-6 w-11 items-center rounded-full" id="mode-toggle" role="switch" type="button" tabindex="0" aria-checked="false" data-headlessui-state="" data-astro-cid-tcsrer47><span class="sr-only" data-astro-cid-tcsrer47>Toggle dark mode</span><span id="mode-circle" class="light inline-block h-4 w-4 rounded-full bg-gradient-to-tr invisible" data-astro-cid-tcsrer47><span class="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-gray-700 scale-[0]" data-astro-cid-tcsrer47></span> </span> </button> ` })}  `;
}, "C:/Users/kendr/my_blog/src/components/DarkModeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <a class="unset absolute z-10 left-[50%] -top-[100rem] translate-x-[-50%] bg-white text-black px-8 py-2 focus:top-[initial]" href="#main" data-astro-cid-3ef6ksr2>
Skip to content
</a> <nav data-astro-cid-3ef6ksr2> <section class="text-text-bold" data-astro-cid-3ef6ksr2> <ul class="unset flex gap-4 [&>li]:p-0" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Home` })}</li> <li data-astro-cid-3ef6ksr2>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Blog` })}</li> <li data-astro-cid-3ef6ksr2>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/projects", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Projects` })}</li> </ul> </section> </nav> <div class="max-[375px]:hidden justify-self-end py-2 flex items-center content-center text-text-bold" data-astro-cid-3ef6ksr2> <a class="unset text-xl ml-4 hover:text-text-link" href="https://github.com/Kecar2" data-astro-cid-3ef6ksr2> <i class="fa-brands fa-github" aria-hidden="true" title="Kendry on GitHub" data-astro-cid-3ef6ksr2></i> <span class="fa-sr-only" data-astro-cid-3ef6ksr2>Kendry on GitHub</span> </a> <a class="unset text-xl ml-4 hover:text-text-link" href="https://www.linkedin.com/in/kendry-c-501639206/" data-astro-cid-3ef6ksr2> <i class="fa-brands fa-linkedin" aria-hidden="true" title="Kendry on Linkedin" data-astro-cid-3ef6ksr2></i> <span class="fa-sr-only" data-astro-cid-3ef6ksr2>Kendry on Linkedin</span> </a> </div> ${renderComponent($$result, "DarkModeToggle", $$DarkModeToggle, { "data-astro-cid-3ef6ksr2": true })} </header> `;
}, "C:/Users/kendr/my_blog/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="text-sm leading-[1.75] mt-4" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte>
2023-2024 KCS.
<a class="unset gradient-link tracking-wider font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f57111] to-[#f79605] hover:after:bg-gradient-to-r hover:after:from-[#f57111] hover:after:to-[#f79605]"${addAttribute("https://github.com/Kecar2", "href")} target="_blank" data-astro-cid-sz7xmlte>
©</a> <a class="unset gradient-link tracking-wider font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00abda] to-[#1476ff] hover:after:bg-gradient-to-r hover:after:from-[#00abda] hover:after:to-[#1476ff]" target="_blank" data-astro-cid-sz7xmlte>
All rights are reserved.</a> </div> </footer> `;
}, "C:/Users/kendr/my_blog/src/components/Footer.astro", void 0);

export { $$Favicon as $, $$GoogleFont as a, $$ThemeScript as b, $$FontAwesome as c, $$Header as d, $$Footer as e, getPageMeta as f, getBlogPostMeta as g };

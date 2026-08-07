// docs/.vitepress/config.mts
import { defineConfig } from "file:///D:/111/2026-08-06-14-43-54/WorkBuddyGuide/WorkBuddyGuide-main/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/sidebar.ts
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///D:/111/2026-08-06-14-43-54/WorkBuddyGuide/WorkBuddyGuide-main/docs/.vitepress/sidebar.ts";
var route = (...segments) => encodeURI(`/bluebook/${segments.map((segment) => segment.trim()).join("/")}/`);
var part1 = "\u7B2C\u4E00\u7BC7 \u4F7F\u7528\u624B\u518C\uFF1A\u5148\u628A WorkBuddy \u7528\u8D77\u6765";
var part2 = "\u7B2C\u4E8C\u7BC7 \u6848\u4F8B\u7BC7\uFF1A\u4ECE\u4E00\u9879\u4EFB\u52A1\u5230\u4E00\u652F AI \u56E2\u961F";
var part3 = "\u7B2C\u4E09\u7BC7 \u8FDB\u9636\u7BC7\uFF1A\u628A\u6848\u4F8B\u53D8\u6210\u81EA\u5DF1\u7684\u5DE5\u4F5C\u7CFB\u7EDF";
var part4 = "\u7B2C\u56DB\u7BC7 \u5C97\u4F4D\u4E0E\u884C\u4E1A\u843D\u5730";
var appendix = "\u9644\u5F55";
var item = (directory, text = directory) => ({
  text,
  link: route(directory)
});
var child = (parent, directory, text = directory) => ({
  text,
  link: route(parent, directory)
});
var bluebookSidebar = {
  "/bluebook/": [
    { text: "\u84DD\u76AE\u4E66\u603B\u89C8", link: "/bluebook/" },
    {
      text: "\u7B2C\u4E00\u7BC7 \xB7 \u4F7F\u7528\u624B\u518C",
      collapsed: false,
      items: [
        item(part1, "\u672C\u7BC7\u5BFC\u8BFB"),
        child(part1, "\u7B2C 1 \u7AE0 \u521D\u8BC6 WorkBuddy"),
        child(part1, "\u7B2C 2 \u7AE0 WorkBuddy\u7684\u4E0B\u8F7D\u3001\u5B89\u88C5\u3001\u767B\u5F55\u4E0E\u66F4\u65B0"),
        child(part1, "\u7B2C 3 \u7AE0 WorkBuddy \u7684\u4E3B\u754C\u9762\u3001\u4EFB\u52A1\u4E0E\u5DE5\u4F5C\u533A"),
        child(part1, "\u7B2C 4 \u7AE0 \u5FEB\u901F\u5B8C\u6210\u7B2C\u4E00\u4E2A WorkBuddy \u4EFB\u52A1"),
        child(part1, "\u7B2C 5 \u7AE0 WorkBuddy\u52A0\u8F7D\u4E00\u4E2A\u771F\u6B63\u7528\u5F97\u4E0A\u7684 Skill"),
        child(part1, "\u7B2C 6 \u7AE0 WorkBuddy\u7684\u4E13\u5BB6\u548C\u4E13\u5BB6\u56E2"),
        child(part1, "\u7B2C 7 \u7AE0 WorkBuddy \u4F7F\u7528\u8FDE\u63A5\u5668"),
        child(part1, "\u7B2C 8 \u7AE0 WorkBuddy \u63A5\u5165\u5C0F\u7A0B\u5E8F\u4E0E IM \u52A9\u7406"),
        child(part1, "\u7B2C 9 \u7AE0 \u5982\u4F55\u63A5\u5165\u5916\u90E8 API"),
        child(part1, "\u7B2C 10 \u7AE0 WorkBuddy \u81EA\u52A8\u5316\u4EFB\u52A1"),
        child(part1, "\u8BFE\u5916\u9605\u8BFB\uFF1A\u4E00\u7AE0\u770B\u61C2 AI \u5DE5\u4F5C\u7CFB\u7EDF")
      ]
    },
    {
      text: "\u7B2C\u4E8C\u7BC7 \xB7 \u5B9E\u6218\u6848\u4F8B",
      collapsed: false,
      items: [
        item(part2, "\u672C\u7BC7\u5BFC\u8BFB"),
        child(part2, "\u7B2C 11 \u7AE0 \u529E\u516C\u4E09\u4EF6\u5957\uFF1AWord\u3001Excel\u3001PPT"),
        child(part2, "\u7B2C 12 \u7AE0 \u4ECE\u6574\u7406\u684C\u9762\u6587\u4EF6\u8FD9\u4E9B\u5C0F\u4E8B\u505A\u8D77"),
        child(part2, "\u7B2C 13 \u7AE0 \u8FDC\u7A0B\u63A7\u5236\u4F60\u7684\u7535\u8111\uFF0C\u4E0D\u7528\u53D1\u6101\u4E0D\u5728\u7535\u8111\u524D"),
        child(part2, "\u7B2C 14 \u7AE0 \u751F\u6D3B\u52A9\u624B\u7684\u4EF7\u503C\uFF0C\u662F\u51CF\u5C11\u7410\u788E"),
        child(part2, "\u7B2C 15 \u7AE0 \u8D44\u8BAF\u6574\u5408\uFF1A\u628A\u4FE1\u606F\u6D41\u53D8\u6210\u6BCF\u65E5\u901A\u77E5"),
        child(part2, "\u7B2C 16 \u7AE0 \u6536\u85CF\u4E0D\u662F\u77E5\u8BC6\u7BA1\u7406\uFF0C\u80FD\u518D\u6B21\u7528\u8D77\u6765\u624D\u662F"),
        child(part2, "\u7B2C 17 \u7AE0 \u4F1A\u8BAE\u7ED3\u675F\u4E0D\u662F\u7EC8\u70B9\uFF0C\u5DE5\u4F5C\u624D\u521A\u521A\u5F00\u59CB"),
        child(part2, "\u7B2C 18 \u7AE0 \u628A\u6295\u8D44\u5206\u6790\u53D8\u6210\u4F60\u7684\u65E5\u5E38"),
        child(part2, "\u7B2C 19 \u7AE0 \u4E00\u53E5\u8BDD\u53EC\u5524 AI \u89C6\u9891\u56E2\u961F"),
        child(part2, "\u7B2C 20 \u7AE0 \u81EA\u5A92\u4F53\u4E0D\u53EA\u662F\u9760\u52AA\u529B\uFF0C\u800C\u662F\u4E00\u6761\u589E\u957F\u95ED\u73AF"),
        child(part2, "\u7B2C 21 \u7AE0 WorkBuddy\u4E5F\u80FD\u505AGEO\u4E13\u5BB6")
      ]
    },
    {
      text: "\u7B2C\u4E09\u7BC7 \xB7 \u8FDB\u9636\u7CFB\u7EDF",
      collapsed: false,
      items: [
        item(part3, "\u672C\u7BC7\u5BFC\u8BFB"),
        child(part3, "\u7B2C 22 \u7AE0 \u6253\u9020skill\uFF1A\u5C06\u4E66\u548C\u89C6\u9891\u84B8\u998F\u4E3A\u53EF\u6267\u884C Skill"),
        child(part3, "\u7B2C 23 \u7AE0 \u5176\u4ED6\u7528\u6CD5\u8865\u5145\uFF1AWorkBuddy \u5B9E\u64CD\u6848\u4F8B\u96C6"),
        child(part3, "\u7B2C 24 \u7AE0 \u5982\u4F55\u8FDB\u884C\u591A Agent \u7CFB\u7EDF\u8BBE\u8BA1"),
        child(part3, "\u7B2C 25 \u7AE0 \u81EA\u52A8\u5316\u5DE5\u4F5C\u6D41\u7684\u53EF\u9760\u6027")
      ]
    },
    {
      text: "\u7B2C\u56DB\u7BC7 \xB7 \u5C97\u4F4D\u4E0E\u884C\u4E1A",
      collapsed: false,
      items: [
        item(part4, "\u672C\u7BC7\u5BFC\u8BFB"),
        child(part4, "\u7B2C 26 \u7AE0 \u5C97\u4F4D\u8DEF\u7EBF\u56FE\uFF1A\u4E0D\u540C\u5C97\u4F4D\u5982\u4F55\u628A WorkBuddy \u7528\u6DF1"),
        child(part4, "\u7B2C 27 \u7AE0 \u884C\u4E1A\u8DEF\u7EBF\u56FE\uFF1A\u4ECE\u901A\u7528\u80FD\u529B\u5230\u884C\u4E1A\u5DE5\u4F5C\u6D41")
      ]
    },
    {
      text: "\u9644\u5F55",
      collapsed: false,
      items: [
        item(appendix, "\u9644\u5F55\u5BFC\u8BFB"),
        child(appendix, "\u9644\u5F55 A \u5E38\u7528\u6307\u4EE4\u6A21\u677F"),
        child(appendix, "\u9644\u5F55 B \u573A\u666F\u901F\u67E5\u8868")
      ]
    }
  ]
};
var casesDirectory = fileURLToPath(
  new URL("../cases/submissions/", __vite_injected_original_import_meta_url)
);
var caseItems = readdirSync(casesDirectory, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => {
  const markdown = readFileSync(
    new URL(`../cases/submissions/${entry.name}/index.md`, __vite_injected_original_import_meta_url),
    "utf8"
  );
  const frontmatter = markdown.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] || "";
  const readField = (field) => frontmatter.match(new RegExp(`^${field}:\\s*(.+)$`, "m"))?.[1]?.trim().replace(/^['"]|['"]$/g, "") || "";
  return {
    date: readField("date"),
    item: {
      text: readField("title") || entry.name,
      link: encodeURI(`/cases/submissions/${entry.name}/`)
    }
  };
}).sort((left, right) => left.date.localeCompare(right.date)).map(({ item: caseItem }) => caseItem);
var casesSidebar = [
  { text: "\u6848\u4F8B\u96C6\u9996\u9875", link: "/cases/" },
  { text: "\u5982\u4F55\u63D0\u4EA4 Case", link: "/community/case-contributing" },
  {
    text: "\u793E\u533A Case",
    collapsed: false,
    items: caseItems
  }
];
var siteSidebar = {
  ...bluebookSidebar,
  "/cases/": casesSidebar,
  "/community/case-contributing": casesSidebar
};

// docs/.vitepress/mermaid-markdown.ts
function configureMermaidMarkdown(md) {
  const fallbackFence = md.renderer.rules.fence?.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, index, options, env, self) => {
    const token = tokens[index];
    if (token.info.trim() !== "mermaid") {
      return fallbackFence?.(tokens, index, options, env, self) ?? self.renderToken(tokens, index, options);
    }
    const graph = encodeURIComponent(token.content);
    return `<MermaidDiagram graph="${graph}" />`;
  };
}

// docs/.vitepress/seo.ts
import { readFileSync as readFileSync2 } from "node:fs";
import { resolve } from "node:path";
var SITE_NAME = "WorkBuddy \xD7 zlsk";
var SITE_ALTERNATE_NAME = "WorkBuddy \xD7 zlsk \u84DD\u76AE\u4E66";
var ORGANIZATION_NAME = "zlsk";
var DEFAULT_DESCRIPTION = "\u4ECE\u5B89\u88C5\u4F7F\u7528\u5230 AI \u5DE5\u4F5C\u7CFB\u7EDF\uFF1A27 \u7AE0 WorkBuddy \u5B9E\u6218\u6307\u5357\u4E0E\u56E2\u961F\u843D\u5730\u65B9\u6CD5\u3002";
function cleanPagePath(page) {
  if (page === "index.md") return "/";
  if (page.endsWith("/index.md")) {
    return `/${page.slice(0, -"index.md".length)}`;
  }
  return `/${page.replace(/\.md$/, "")}`;
}
function absolutePageUrl(siteUrl2, page) {
  return new URL(cleanPagePath(page), `${siteUrl2}/`).href;
}
function stripMarkdown(value) {
  return value.replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/<[^>]+>/g, "").replace(/[`*_~]/g, "").replace(/\\([\\`*{}\[\]()#+\-.!_>])/g, "$1").replace(/\s+/g, " ").trim();
}
function decodeHtmlEntities(value) {
  return value.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(
    /&#(\d+);/g,
    (_, codePoint) => String.fromCodePoint(Number(codePoint))
  ).replace(
    /&#x([0-9a-f]+);/gi,
    (_, codePoint) => String.fromCodePoint(Number.parseInt(codePoint, 16))
  );
}
function truncateDescription(value, maxLength = 155) {
  const characters = Array.from(value);
  if (characters.length <= maxLength) return value;
  const shortened = characters.slice(0, maxLength).join("");
  const punctuationIndex = Math.max(
    shortened.lastIndexOf("\u3002"),
    shortened.lastIndexOf("\uFF1B"),
    shortened.lastIndexOf("\uFF0C")
  );
  return `${punctuationIndex >= Math.floor(maxLength * 0.65) ? shortened.slice(0, punctuationIndex) : shortened}\u2026`;
}
function extractDescription(markdown, fallback) {
  const mainStart = markdown.indexOf("<main");
  const mainEnd = mainStart >= 0 ? markdown.indexOf("</main>", mainStart) : -1;
  const pageContent = mainStart >= 0 && mainEnd > mainStart ? markdown.slice(mainStart, mainEnd) : markdown;
  const htmlParagraphs = Array.from(
    pageContent.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/gi),
    (match) => decodeHtmlEntities(stripMarkdown(match[1]))
  ).filter((paragraph) => Array.from(paragraph).length >= 12);
  if (htmlParagraphs.length > 0) {
    const selected = [];
    for (const paragraph of htmlParagraphs) {
      selected.push(paragraph);
      if (Array.from(selected.join(" ")).length >= 90) break;
    }
    return truncateDescription(selected.join(" "));
  }
  const content = markdown.replace(
    /^---\s*[\r\n]+[\s\S]*?[\r\n]+---\s*[\r\n]+/,
    ""
  );
  const candidates = [];
  for (const block of content.split(/\r?\n\s*\r?\n/)) {
    const trimmed = block.trim();
    if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("```") || trimmed.startsWith("~~~") || trimmed.startsWith("import ") || trimmed.startsWith("export ") || trimmed.startsWith("<!--") || trimmed.startsWith("<") || trimmed.startsWith("|") || /^[-*+]\s/.test(trimmed) || /^\d+[.)]\s/.test(trimmed)) {
      continue;
    }
    const plainText = stripMarkdown(trimmed);
    if (Array.from(plainText).length < 12) continue;
    candidates.push(plainText);
    if (Array.from(candidates.join(" ")).length >= 90) break;
  }
  return truncateDescription(candidates.join(" ") || fallback || DEFAULT_DESCRIPTION);
}
function breadcrumbName(segment) {
  let decodedSegment = segment;
  try {
    decodedSegment = decodeURIComponent(segment);
  } catch {
  }
  const labels = {
    bluebook: "WorkBuddy \u5B9E\u6218\u84DD\u76AE\u4E66",
    cases: "\u793E\u533A\u6848\u4F8B\u96C6",
    community: "\u793E\u533A\u5171\u521B",
    help: "\u5E2E\u4F60\u89E3\u51B3",
    "reading-guide": "WorkBuddy \u5B66\u4E60\u6307\u5357"
  };
  return labels[decodedSegment] || decodedSegment.replace(/[-_]/g, " ");
}
function createBreadcrumbs(siteUrl2, page, pageTitle, canonicalUrl) {
  const path = cleanPagePath(page).replace(/^\/|\/$/g, "");
  if (!path) return null;
  const segments = path.split("/");
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "\u9996\u9875",
      item: new URL("/", `${siteUrl2}/`).href
    },
    ...segments.map((segment, index) => {
      const isLast = index === segments.length - 1;
      const parentPath = `/${segments.slice(0, index + 1).join("/")}/`;
      return {
        "@type": "ListItem",
        position: index + 2,
        name: isLast ? pageTitle : breadcrumbName(segment),
        item: isLast ? canonicalUrl : new URL(parentPath, `${siteUrl2}/`).href
      };
    })
  ];
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement
  };
}
function serializeJsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
function createPageDescription(sourceDirectory, pageData) {
  if (pageData.description || pageData.isNotFound || !pageData.filePath) {
    return pageData.description || void 0;
  }
  const fallback = `${pageData.title}\uFF1A${DEFAULT_DESCRIPTION}`;
  try {
    const markdown = readFileSync2(
      resolve(sourceDirectory, pageData.filePath),
      "utf8"
    );
    return extractDescription(markdown, fallback);
  } catch {
    return truncateDescription(fallback);
  }
}
function createSeoHead(siteUrl2, context) {
  const { page, pageData, title, content } = context;
  if (pageData.isNotFound) {
    return [
      ["meta", { name: "robots", content: "noindex, nofollow" }]
    ];
  }
  const canonicalUrl = absolutePageUrl(siteUrl2, page);
  const socialImageUrl = new URL("/og/workbuddy-guide.png", `${siteUrl2}/`).href;
  const description = pageData.description ? truncateDescription(pageData.description) : extractDescription(
    content,
    `${pageData.title}\uFF1A${context.description || DEFAULT_DESCRIPTION}`
  );
  const isHome = page === "index.md";
  const isBluebookPage = page.startsWith("bluebook/");
  const modifiedTime = pageData.lastUpdated ? new Date(pageData.lastUpdated).toISOString() : void 0;
  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl2}/#organization`,
    name: ORGANIZATION_NAME,
    url: `${siteUrl2}/`
  };
  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl2}/#website`,
    url: `${siteUrl2}/`,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "zh-CN",
    publisher: { "@id": `${siteUrl2}/#organization` }
  };
  const breadcrumbTitle = typeof pageData.frontmatter.breadcrumbTitle === "string" ? pageData.frontmatter.breadcrumbTitle : pageData.title;
  const breadcrumbs = createBreadcrumbs(
    siteUrl2,
    page,
    breadcrumbTitle,
    canonicalUrl
  );
  const pageEntity = isHome ? null : {
    "@type": isBluebookPage ? "Article" : "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageData.title,
    ...isBluebookPage ? { headline: pageData.title } : {},
    description,
    inLanguage: "zh-CN",
    isPartOf: { "@id": `${siteUrl2}/#website` },
    breadcrumb: breadcrumbs ? { "@id": `${canonicalUrl}#breadcrumb` } : void 0,
    ...isBluebookPage ? {
      mainEntityOfPage: canonicalUrl,
      image: [socialImageUrl],
      author: { "@id": `${siteUrl2}/#organization` },
      publisher: { "@id": `${siteUrl2}/#organization` }
    } : {},
    ...modifiedTime ? { dateModified: modifiedTime } : {}
  };
  const jsonLdGraph = [organization, website, pageEntity, breadcrumbs].filter(
    Boolean
  );
  const head = [
    ["meta", { name: "description", content: description }],
    [
      "meta",
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      }
    ],
    ["link", { rel: "canonical", href: canonicalUrl }],
    ["meta", { property: "og:locale", content: "zh_CN" }],
    ["meta", { property: "og:site_name", content: SITE_NAME }],
    ["meta", { property: "og:type", content: isBluebookPage ? "article" : "website" }],
    ["meta", { property: "og:title", content: title }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { property: "og:url", content: canonicalUrl }],
    ["meta", { property: "og:image", content: socialImageUrl }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "og:image:width", content: "1280" }],
    ["meta", { property: "og:image:height", content: "720" }],
    ["meta", { property: "og:image:alt", content: "WorkBuddy \u5B9E\u6218\u84DD\u76AE\u4E66\u9996\u9875\u9884\u89C8" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:description", content: description }],
    ["meta", { name: "twitter:image", content: socialImageUrl }],
    ["meta", { name: "twitter:image:alt", content: "WorkBuddy \u5B9E\u6218\u84DD\u76AE\u4E66\u9996\u9875\u9884\u89C8" }],
    [
      "script",
      { type: "application/ld+json" },
      serializeJsonLd({ "@context": "https://schema.org", "@graph": jsonLdGraph })
    ]
  ];
  if (modifiedTime && isBluebookPage) {
    head.push([
      "meta",
      { property: "article:modified_time", content: modifiedTime }
    ]);
  }
  return head;
}

// docs/.vitepress/config.mts
var siteUrl = process.env.VITEPRESS_SITE_URL || "https://workbuddy.homes";
var config_default = defineConfig({
  lang: "zh-CN",
  title: "WorkBuddy \xD7 zlsk",
  titleTemplate: ":title \xB7 WorkBuddy \xD7 zlsk",
  description: "\u4ECE\u5B89\u88C5\u4F7F\u7528\u5230 AI \u5DE5\u4F5C\u7CFB\u7EDF\uFF1A27 \u7AE0 WorkBuddy \u5B9E\u6218\u6307\u5357\u4E0E\u56E2\u961F\u843D\u5730\u65B9\u6CD5\u3002",
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["**/source.md", "plans/**"],
  sitemap: {
    hostname: siteUrl
  },
  transformPageData: (pageData, { siteConfig }) => {
    if (pageData.relativePath.startsWith("cases/")) {
      pageData.frontmatter.aside = false;
      pageData.frontmatter.outline = false;
    }
    return {
      description: createPageDescription(siteConfig.srcDir, pageData)
    };
  },
  transformHead: (context) => createSeoHead(siteUrl, context),
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["meta", { name: "theme-color", content: "#d8f238" }],
    [
      "meta",
      {
        name: "baidu-site-verification",
        content: "codeva-RF1ZqL4g90"
      }
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "WorkBuddy,WorkBuddy \u6559\u7A0B,AI Agent,AI \u5DE5\u4F5C\u7CFB\u7EDF,Skills,MCP,\u81EA\u52A8\u5316,\u591A\u667A\u80FD\u4F53,\u804C\u573A AI"
      }
    ]
  ],
  markdown: {
    config: configureMermaidMarkdown,
    image: {
      lazyLoading: true
    },
    theme: {
      light: "github-light",
      dark: "github-dark"
    }
  },
  themeConfig: {
    siteTitle: "WorkBuddy \xD7 zlsk",
    logo: "/contact/logo-zlsk.png",
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u5F00\u59CB\u9605\u8BFB", link: "/bluebook/" },
      { text: "\u6848\u4F8B\u96C6", link: "/cases/" },
      { text: "\u5E2E\u4F60\u89E3\u51B3", link: "/help/" },
      { text: "\u9605\u8BFB\u6307\u5357", link: "/reading-guide" },
      {
        text: "\u8054\u7CFB\u6211\u4EEC",
        items: [{ component: "GroupQrMenu" }]
      }
    ],
    sidebar: siteSidebar,
    search: {
      provider: "local"
    },
    outline: {
      level: [2, 3],
      label: "\u672C\u9875\u76EE\u5F55"
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u7BC7",
      next: "\u4E0B\u4E00\u7BC7"
    },
    lastUpdated: {
      text: "\u6700\u540E\u66F4\u65B0",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short"
      }
    },
    footer: {
      message: "\u4EE5\u771F\u5B9E\u4EFB\u52A1\u4E3A\u4E3B\u7EBF\u7684 WorkBuddy \u5B9E\u6218\u8BFB\u672C \xB7 \u4E2D\u8054\u6570\u79D1"
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL3NpZGViYXIudHMiLCAiZG9jcy8udml0ZXByZXNzL21lcm1haWQtbWFya2Rvd24udHMiLCAiZG9jcy8udml0ZXByZXNzL3Nlby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXDExMVxcXFwyMDI2LTA4LTA2LTE0LTQzLTU0XFxcXFdvcmtCdWRkeUd1aWRlXFxcXFdvcmtCdWRkeUd1aWRlLW1haW5cXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwxMTFcXFxcMjAyNi0wOC0wNi0xNC00My01NFxcXFxXb3JrQnVkZHlHdWlkZVxcXFxXb3JrQnVkZHlHdWlkZS1tYWluXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8xMTEvMjAyNi0wOC0wNi0xNC00My01NC9Xb3JrQnVkZHlHdWlkZS9Xb3JrQnVkZHlHdWlkZS1tYWluL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xuXG5pbXBvcnQgeyBzaXRlU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZU1lcm1haWRNYXJrZG93biB9IGZyb20gXCIuL21lcm1haWQtbWFya2Rvd25cIjtcbmltcG9ydCB7IGNyZWF0ZVBhZ2VEZXNjcmlwdGlvbiwgY3JlYXRlU2VvSGVhZCB9IGZyb20gXCIuL3Nlb1wiO1xuXG5jb25zdCBzaXRlVXJsID0gcHJvY2Vzcy5lbnYuVklURVBSRVNTX1NJVEVfVVJMIHx8IFwiaHR0cHM6Ly93b3JrYnVkZHkuaG9tZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBsYW5nOiBcInpoLUNOXCIsXG4gICAgdGl0bGU6IFwiV29ya0J1ZGR5IFx1MDBENyB6bHNrXCIsXG4gICAgdGl0bGVUZW1wbGF0ZTogXCI6dGl0bGUgXHUwMEI3IFdvcmtCdWRkeSBcdTAwRDcgemxza1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlx1NEVDRVx1NUI4OVx1ODhDNVx1NEY3Rlx1NzUyOFx1NTIzMCBBSSBcdTVERTVcdTRGNUNcdTdDRkJcdTdFREZcdUZGMUEyNyBcdTdBRTAgV29ya0J1ZGR5IFx1NUI5RVx1NjIxOFx1NjMwN1x1NTM1N1x1NEUwRVx1NTZFMlx1OTYxRlx1ODQzRFx1NTczMFx1NjVCOVx1NkNENVx1MzAwMlwiLFxuICAgIGNsZWFuVXJsczogdHJ1ZSxcbiAgICBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgICBzcmNFeGNsdWRlOiBbXCIqKi9zb3VyY2UubWRcIiwgXCJwbGFucy8qKlwiXSxcbiAgICBzaXRlbWFwOiB7XG4gICAgICBob3N0bmFtZTogc2l0ZVVybCxcbiAgICB9LFxuICAgIHRyYW5zZm9ybVBhZ2VEYXRhOiAocGFnZURhdGEsIHsgc2l0ZUNvbmZpZyB9KSA9PiB7XG4gICAgICBpZiAocGFnZURhdGEucmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgoXCJjYXNlcy9cIikpIHtcbiAgICAgICAgcGFnZURhdGEuZnJvbnRtYXR0ZXIuYXNpZGUgPSBmYWxzZTtcbiAgICAgICAgcGFnZURhdGEuZnJvbnRtYXR0ZXIub3V0bGluZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZXNjcmlwdGlvbjogY3JlYXRlUGFnZURlc2NyaXB0aW9uKHNpdGVDb25maWcuc3JjRGlyLCBwYWdlRGF0YSksXG4gICAgICB9O1xuICAgIH0sXG4gICAgdHJhbnNmb3JtSGVhZDogKGNvbnRleHQpID0+IGNyZWF0ZVNlb0hlYWQoc2l0ZVVybCwgY29udGV4dCksXG4gICAgaGVhZDogW1xuICAgICAgW1wibGlua1wiLCB7IHJlbDogXCJpY29uXCIsIHR5cGU6IFwiaW1hZ2Uvc3ZnK3htbFwiLCBocmVmOiBcIi9mYXZpY29uLnN2Z1wiIH1dLFxuICAgICAgW1wibWV0YVwiLCB7IG5hbWU6IFwidGhlbWUtY29sb3JcIiwgY29udGVudDogXCIjZDhmMjM4XCIgfV0sXG4gICAgICBbXG4gICAgICAgIFwibWV0YVwiLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJiYWlkdS1zaXRlLXZlcmlmaWNhdGlvblwiLFxuICAgICAgICAgIGNvbnRlbnQ6IFwiY29kZXZhLVJGMVpxTDRnOTBcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFwibWV0YVwiLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJrZXl3b3Jkc1wiLFxuICAgICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICBcIldvcmtCdWRkeSxXb3JrQnVkZHkgXHU2NTU5XHU3QTBCLEFJIEFnZW50LEFJIFx1NURFNVx1NEY1Q1x1N0NGQlx1N0VERixTa2lsbHMsTUNQLFx1ODFFQVx1NTJBOFx1NTMxNixcdTU5MUFcdTY2N0FcdTgwRkRcdTRGNTMsXHU4MDRDXHU1NzNBIEFJXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIF0sXG4gICAgbWFya2Rvd246IHtcbiAgICAgIGNvbmZpZzogY29uZmlndXJlTWVybWFpZE1hcmtkb3duLFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgbGF6eUxvYWRpbmc6IHRydWUsXG4gICAgICB9LFxuICAgICAgdGhlbWU6IHtcbiAgICAgICAgbGlnaHQ6IFwiZ2l0aHViLWxpZ2h0XCIsXG4gICAgICAgIGRhcms6IFwiZ2l0aHViLWRhcmtcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0aGVtZUNvbmZpZzoge1xuICAgICAgc2l0ZVRpdGxlOiBcIldvcmtCdWRkeSBcdTAwRDcgemxza1wiLFxuICAgICAgbG9nbzogXCIvY29udGFjdC9sb2dvLXpsc2sucG5nXCIsXG4gICAgICBuYXY6IFtcbiAgICAgICAgeyB0ZXh0OiBcIlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9cIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHU1RjAwXHU1OUNCXHU5NjA1XHU4QkZCXCIsIGxpbms6IFwiL2JsdWVib29rL1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTY4NDhcdTRGOEJcdTk2QzZcIiwgbGluazogXCIvY2FzZXMvXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlx1NUUyRVx1NEY2MFx1ODlFM1x1NTFCM1wiLCBsaW5rOiBcIi9oZWxwL1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTk2MDVcdThCRkJcdTYzMDdcdTUzNTdcIiwgbGluazogXCIvcmVhZGluZy1ndWlkZVwiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlx1ODA1NFx1N0NGQlx1NjIxMVx1NEVFQ1wiLFxuICAgICAgICAgIGl0ZW1zOiBbeyBjb21wb25lbnQ6IFwiR3JvdXBRck1lbnVcIiB9XSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzaWRlYmFyOiBzaXRlU2lkZWJhcixcbiAgICAgIHNlYXJjaDoge1xuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgfSxcbiAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgbGV2ZWw6IFsyLCAzXSxcbiAgICAgICAgbGFiZWw6IFwiXHU2NzJDXHU5ODc1XHU3NkVFXHU1RjU1XCIsXG4gICAgICB9LFxuICAgICAgZG9jRm9vdGVyOiB7XG4gICAgICAgIHByZXY6IFwiXHU0RTBBXHU0RTAwXHU3QkM3XCIsXG4gICAgICAgIG5leHQ6IFwiXHU0RTBCXHU0RTAwXHU3QkM3XCIsXG4gICAgICB9LFxuICAgICAgbGFzdFVwZGF0ZWQ6IHtcbiAgICAgICAgdGV4dDogXCJcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcIixcbiAgICAgICAgZm9ybWF0T3B0aW9uczoge1xuICAgICAgICAgIGRhdGVTdHlsZTogXCJtZWRpdW1cIixcbiAgICAgICAgICB0aW1lU3R5bGU6IFwic2hvcnRcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmb290ZXI6IHtcbiAgICAgICAgbWVzc2FnZTogXCJcdTRFRTVcdTc3MUZcdTVCOUVcdTRFRkJcdTUyQTFcdTRFM0FcdTRFM0JcdTdFQkZcdTc2ODQgV29ya0J1ZGR5IFx1NUI5RVx1NjIxOFx1OEJGQlx1NjcyQyBcdTAwQjcgXHU0RTJEXHU4MDU0XHU2NTcwXHU3OUQxXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwxMTFcXFxcMjAyNi0wOC0wNi0xNC00My01NFxcXFxXb3JrQnVkZHlHdWlkZVxcXFxXb3JrQnVkZHlHdWlkZS1tYWluXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcMTExXFxcXDIwMjYtMDgtMDYtMTQtNDMtNTRcXFxcV29ya0J1ZGR5R3VpZGVcXFxcV29ya0J1ZGR5R3VpZGUtbWFpblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovMTExLzIwMjYtMDgtMDYtMTQtNDMtNTQvV29ya0J1ZGR5R3VpZGUvV29ya0J1ZGR5R3VpZGUtbWFpbi9kb2NzLy52aXRlcHJlc3Mvc2lkZWJhci50c1wiO2ltcG9ydCB7IHJlYWRGaWxlU3luYywgcmVhZGRpclN5bmMgfSBmcm9tIFwibm9kZTpmc1wiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJub2RlOnVybFwiO1xuXG5pbXBvcnQgdHlwZSB7IERlZmF1bHRUaGVtZSB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcblxuY29uc3Qgcm91dGUgPSAoLi4uc2VnbWVudHM6IHN0cmluZ1tdKTogc3RyaW5nID0+XG4gIGVuY29kZVVSSShgL2JsdWVib29rLyR7c2VnbWVudHMubWFwKChzZWdtZW50KSA9PiBzZWdtZW50LnRyaW0oKSkuam9pbihcIi9cIil9L2ApO1xuXG5jb25zdCBwYXJ0MSA9IFwiXHU3QjJDXHU0RTAwXHU3QkM3IFx1NEY3Rlx1NzUyOFx1NjI0Qlx1NTE4Q1x1RkYxQVx1NTE0OFx1NjI4QSBXb3JrQnVkZHkgXHU3NTI4XHU4RDc3XHU2NzY1XCI7XG5jb25zdCBwYXJ0MiA9IFwiXHU3QjJDXHU0RThDXHU3QkM3IFx1Njg0OFx1NEY4Qlx1N0JDN1x1RkYxQVx1NEVDRVx1NEUwMFx1OTg3OVx1NEVGQlx1NTJBMVx1NTIzMFx1NEUwMFx1NjUyRiBBSSBcdTU2RTJcdTk2MUZcIjtcbmNvbnN0IHBhcnQzID0gXCJcdTdCMkNcdTRFMDlcdTdCQzcgXHU4RkRCXHU5NjM2XHU3QkM3XHVGRjFBXHU2MjhBXHU2ODQ4XHU0RjhCXHU1M0Q4XHU2MjEwXHU4MUVBXHU1REYxXHU3Njg0XHU1REU1XHU0RjVDXHU3Q0ZCXHU3RURGXCI7XG5jb25zdCBwYXJ0NCA9IFwiXHU3QjJDXHU1NkRCXHU3QkM3IFx1NUM5N1x1NEY0RFx1NEUwRVx1ODg0Q1x1NEUxQVx1ODQzRFx1NTczMFwiO1xuY29uc3QgYXBwZW5kaXggPSBcIlx1OTY0NFx1NUY1NVwiO1xuXG5jb25zdCBpdGVtID0gKGRpcmVjdG9yeTogc3RyaW5nLCB0ZXh0ID0gZGlyZWN0b3J5KTogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtID0+ICh7XG4gIHRleHQsXG4gIGxpbms6IHJvdXRlKGRpcmVjdG9yeSksXG59KTtcblxuY29uc3QgY2hpbGQgPSAoXG4gIHBhcmVudDogc3RyaW5nLFxuICBkaXJlY3Rvcnk6IHN0cmluZyxcbiAgdGV4dCA9IGRpcmVjdG9yeSxcbik6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbSA9PiAoe1xuICB0ZXh0LFxuICBsaW5rOiByb3V0ZShwYXJlbnQsIGRpcmVjdG9yeSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGJsdWVib29rU2lkZWJhcjogRGVmYXVsdFRoZW1lLlNpZGViYXIgPSB7XG4gIFwiL2JsdWVib29rL1wiOiBbXG4gICAgeyB0ZXh0OiBcIlx1ODRERFx1NzZBRVx1NEU2Nlx1NjAzQlx1ODlDOFwiLCBsaW5rOiBcIi9ibHVlYm9vay9cIiB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU3QkM3IFx1MDBCNyBcdTRGN0ZcdTc1MjhcdTYyNEJcdTUxOENcIixcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICBpdGVtKHBhcnQxLCBcIlx1NjcyQ1x1N0JDN1x1NUJGQ1x1OEJGQlwiKSxcbiAgICAgICAgY2hpbGQocGFydDEsIFwiXHU3QjJDIDEgXHU3QUUwIFx1NTIxRFx1OEJDNiBXb3JrQnVkZHlcIiksXG4gICAgICAgIGNoaWxkKHBhcnQxLCBcIlx1N0IyQyAyIFx1N0FFMCBXb3JrQnVkZHlcdTc2ODRcdTRFMEJcdThGN0RcdTMwMDFcdTVCODlcdTg4QzVcdTMwMDFcdTc2N0JcdTVGNTVcdTRFMEVcdTY2RjRcdTY1QjBcIiksXG4gICAgICAgIGNoaWxkKHBhcnQxLCBcIlx1N0IyQyAzIFx1N0FFMCBXb3JrQnVkZHkgXHU3Njg0XHU0RTNCXHU3NTRDXHU5NzYyXHUzMDAxXHU0RUZCXHU1MkExXHU0RTBFXHU1REU1XHU0RjVDXHU1MzNBXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MSwgXCJcdTdCMkMgNCBcdTdBRTAgXHU1RkVCXHU5MDFGXHU1QjhDXHU2MjEwXHU3QjJDXHU0RTAwXHU0RTJBIFdvcmtCdWRkeSBcdTRFRkJcdTUyQTFcIiksXG4gICAgICAgIGNoaWxkKHBhcnQxLCBcIlx1N0IyQyA1IFx1N0FFMCBXb3JrQnVkZHlcdTUyQTBcdThGN0RcdTRFMDBcdTRFMkFcdTc3MUZcdTZCNjNcdTc1MjhcdTVGOTdcdTRFMEFcdTc2ODQgU2tpbGxcIiksXG4gICAgICAgIGNoaWxkKHBhcnQxLCBcIlx1N0IyQyA2IFx1N0FFMCBXb3JrQnVkZHlcdTc2ODRcdTRFMTNcdTVCQjZcdTU0OENcdTRFMTNcdTVCQjZcdTU2RTJcIiksXG4gICAgICAgIGNoaWxkKHBhcnQxLCBcIlx1N0IyQyA3IFx1N0FFMCBXb3JrQnVkZHkgXHU0RjdGXHU3NTI4XHU4RkRFXHU2M0E1XHU1NjY4XCIpLFxuICAgICAgICBjaGlsZChwYXJ0MSwgXCJcdTdCMkMgOCBcdTdBRTAgV29ya0J1ZGR5IFx1NjNBNVx1NTE2NVx1NUMwRlx1N0EwQlx1NUU4Rlx1NEUwRSBJTSBcdTUyQTlcdTc0MDZcIiksXG4gICAgICAgIGNoaWxkKHBhcnQxLCBcIlx1N0IyQyA5IFx1N0FFMCBcdTU5ODJcdTRGNTVcdTYzQTVcdTUxNjVcdTU5MTZcdTkwRTggQVBJXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MSwgXCJcdTdCMkMgMTAgXHU3QUUwIFdvcmtCdWRkeSBcdTgxRUFcdTUyQThcdTUzMTZcdTRFRkJcdTUyQTFcIiksXG4gICAgICAgIGNoaWxkKHBhcnQxLCBcIlx1OEJGRVx1NTkxNlx1OTYwNVx1OEJGQlx1RkYxQVx1NEUwMFx1N0FFMFx1NzcwQlx1NjFDMiBBSSBcdTVERTVcdTRGNUNcdTdDRkJcdTdFREZcIiksXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTdCMkNcdTRFOENcdTdCQzcgXHUwMEI3IFx1NUI5RVx1NjIxOFx1Njg0OFx1NEY4QlwiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIGl0ZW0ocGFydDIsIFwiXHU2NzJDXHU3QkM3XHU1QkZDXHU4QkZCXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MiwgXCJcdTdCMkMgMTEgXHU3QUUwIFx1NTI5RVx1NTE2Q1x1NEUwOVx1NEVGNlx1NTk1N1x1RkYxQVdvcmRcdTMwMDFFeGNlbFx1MzAwMVBQVFwiKSxcbiAgICAgICAgY2hpbGQocGFydDIsIFwiXHU3QjJDIDEyIFx1N0FFMCBcdTRFQ0VcdTY1NzRcdTc0MDZcdTY4NENcdTk3NjJcdTY1ODdcdTRFRjZcdThGRDlcdTRFOUJcdTVDMEZcdTRFOEJcdTUwNUFcdThENzdcIiksXG4gICAgICAgIGNoaWxkKHBhcnQyLCBcIlx1N0IyQyAxMyBcdTdBRTAgXHU4RkRDXHU3QTBCXHU2M0E3XHU1MjM2XHU0RjYwXHU3Njg0XHU3NTM1XHU4MTExXHVGRjBDXHU0RTBEXHU3NTI4XHU1M0QxXHU2MTAxXHU0RTBEXHU1NzI4XHU3NTM1XHU4MTExXHU1MjREXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MiwgXCJcdTdCMkMgMTQgXHU3QUUwIFx1NzUxRlx1NkQzQlx1NTJBOVx1NjI0Qlx1NzY4NFx1NEVGN1x1NTAzQ1x1RkYwQ1x1NjYyRlx1NTFDRlx1NUMxMVx1NzQxMFx1Nzg4RVwiKSxcbiAgICAgICAgY2hpbGQocGFydDIsIFwiXHU3QjJDIDE1IFx1N0FFMCBcdThENDRcdThCQUZcdTY1NzRcdTU0MDhcdUZGMUFcdTYyOEFcdTRGRTFcdTYwNkZcdTZENDFcdTUzRDhcdTYyMTBcdTZCQ0ZcdTY1RTVcdTkwMUFcdTc3RTVcIiksXG4gICAgICAgIGNoaWxkKHBhcnQyLCBcIlx1N0IyQyAxNiBcdTdBRTAgXHU2NTM2XHU4NUNGXHU0RTBEXHU2NjJGXHU3N0U1XHU4QkM2XHU3QkExXHU3NDA2XHVGRjBDXHU4MEZEXHU1MThEXHU2QjIxXHU3NTI4XHU4RDc3XHU2NzY1XHU2MjREXHU2NjJGXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MiwgXCJcdTdCMkMgMTcgXHU3QUUwIFx1NEYxQVx1OEJBRVx1N0VEM1x1Njc1Rlx1NEUwRFx1NjYyRlx1N0VDOFx1NzBCOVx1RkYwQ1x1NURFNVx1NEY1Q1x1NjI0RFx1NTIxQVx1NTIxQVx1NUYwMFx1NTlDQlwiKSxcbiAgICAgICAgY2hpbGQocGFydDIsIFwiXHU3QjJDIDE4IFx1N0FFMCBcdTYyOEFcdTYyOTVcdThENDRcdTUyMDZcdTY3OTBcdTUzRDhcdTYyMTBcdTRGNjBcdTc2ODRcdTY1RTVcdTVFMzhcIiksXG4gICAgICAgIGNoaWxkKHBhcnQyLCBcIlx1N0IyQyAxOSBcdTdBRTAgXHU0RTAwXHU1M0U1XHU4QkREXHU1M0VDXHU1NTI0IEFJIFx1ODlDNlx1OTg5MVx1NTZFMlx1OTYxRlwiKSxcbiAgICAgICAgY2hpbGQocGFydDIsIFwiXHU3QjJDIDIwIFx1N0FFMCBcdTgxRUFcdTVBOTJcdTRGNTNcdTRFMERcdTUzRUFcdTY2MkZcdTk3NjBcdTUyQUFcdTUyOUJcdUZGMENcdTgwMENcdTY2MkZcdTRFMDBcdTY3NjFcdTU4OUVcdTk1N0ZcdTk1RURcdTczQUZcIiksXG4gICAgICAgIGNoaWxkKHBhcnQyLCBcIlx1N0IyQyAyMSBcdTdBRTAgV29ya0J1ZGR5XHU0RTVGXHU4MEZEXHU1MDVBR0VPXHU0RTEzXHU1QkI2XCIpLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU3QjJDXHU0RTA5XHU3QkM3IFx1MDBCNyBcdThGREJcdTk2MzZcdTdDRkJcdTdFREZcIixcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICBpdGVtKHBhcnQzLCBcIlx1NjcyQ1x1N0JDN1x1NUJGQ1x1OEJGQlwiKSxcbiAgICAgICAgY2hpbGQocGFydDMsIFwiXHU3QjJDIDIyIFx1N0FFMCBcdTYyNTNcdTkwMjBza2lsbFx1RkYxQVx1NUMwNlx1NEU2Nlx1NTQ4Q1x1ODlDNlx1OTg5MVx1ODRCOFx1OTk4Rlx1NEUzQVx1NTNFRlx1NjI2N1x1ODg0QyBTa2lsbFwiKSxcbiAgICAgICAgY2hpbGQocGFydDMsIFwiXHU3QjJDIDIzIFx1N0FFMCBcdTUxNzZcdTRFRDZcdTc1MjhcdTZDRDVcdTg4NjVcdTUxNDVcdUZGMUFXb3JrQnVkZHkgXHU1QjlFXHU2NENEXHU2ODQ4XHU0RjhCXHU5NkM2XCIpLFxuICAgICAgICBjaGlsZChwYXJ0MywgXCJcdTdCMkMgMjQgXHU3QUUwIFx1NTk4Mlx1NEY1NVx1OEZEQlx1ODg0Q1x1NTkxQSBBZ2VudCBcdTdDRkJcdTdFREZcdThCQkVcdThCQTFcIiksXG4gICAgICAgIGNoaWxkKHBhcnQzLCBcIlx1N0IyQyAyNSBcdTdBRTAgXHU4MUVBXHU1MkE4XHU1MzE2XHU1REU1XHU0RjVDXHU2RDQxXHU3Njg0XHU1M0VGXHU5NzYwXHU2MDI3XCIpLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU3QjJDXHU1NkRCXHU3QkM3IFx1MDBCNyBcdTVDOTdcdTRGNERcdTRFMEVcdTg4NENcdTRFMUFcIixcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICBpdGVtKHBhcnQ0LCBcIlx1NjcyQ1x1N0JDN1x1NUJGQ1x1OEJGQlwiKSxcbiAgICAgICAgY2hpbGQocGFydDQsIFwiXHU3QjJDIDI2IFx1N0FFMCBcdTVDOTdcdTRGNERcdThERUZcdTdFQkZcdTU2RkVcdUZGMUFcdTRFMERcdTU0MENcdTVDOTdcdTRGNERcdTU5ODJcdTRGNTVcdTYyOEEgV29ya0J1ZGR5IFx1NzUyOFx1NkRGMVwiKSxcbiAgICAgICAgY2hpbGQocGFydDQsIFwiXHU3QjJDIDI3IFx1N0FFMCBcdTg4NENcdTRFMUFcdThERUZcdTdFQkZcdTU2RkVcdUZGMUFcdTRFQ0VcdTkwMUFcdTc1MjhcdTgwRkRcdTUyOUJcdTUyMzBcdTg4NENcdTRFMUFcdTVERTVcdTRGNUNcdTZENDFcIiksXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTk2NDRcdTVGNTVcIixcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICBpdGVtKGFwcGVuZGl4LCBcIlx1OTY0NFx1NUY1NVx1NUJGQ1x1OEJGQlwiKSxcbiAgICAgICAgY2hpbGQoYXBwZW5kaXgsIFwiXHU5NjQ0XHU1RjU1IEEgXHU1RTM4XHU3NTI4XHU2MzA3XHU0RUU0XHU2QTIxXHU2NzdGXCIpLFxuICAgICAgICBjaGlsZChhcHBlbmRpeCwgXCJcdTk2NDRcdTVGNTUgQiBcdTU3M0FcdTY2NkZcdTkwMUZcdTY3RTVcdTg4NjhcIiksXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBjYXNlc0RpcmVjdG9yeSA9IGZpbGVVUkxUb1BhdGgoXG4gIG5ldyBVUkwoXCIuLi9jYXNlcy9zdWJtaXNzaW9ucy9cIiwgaW1wb3J0Lm1ldGEudXJsKSxcbik7XG5cbmNvbnN0IGNhc2VJdGVtcyA9IHJlYWRkaXJTeW5jKGNhc2VzRGlyZWN0b3J5LCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcbiAgLmZpbHRlcigoZW50cnkpID0+IGVudHJ5LmlzRGlyZWN0b3J5KCkpXG4gIC5tYXAoKGVudHJ5KSA9PiB7XG4gICAgY29uc3QgbWFya2Rvd24gPSByZWFkRmlsZVN5bmMoXG4gICAgICBuZXcgVVJMKGAuLi9jYXNlcy9zdWJtaXNzaW9ucy8ke2VudHJ5Lm5hbWV9L2luZGV4Lm1kYCwgaW1wb3J0Lm1ldGEudXJsKSxcbiAgICAgIFwidXRmOFwiLFxuICAgICk7XG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBtYXJrZG93bi5tYXRjaCgvXi0tLVxccypcXG4oW1xcc1xcU10qPylcXG4tLS0vKT8uWzFdIHx8IFwiXCI7XG4gICAgY29uc3QgcmVhZEZpZWxkID0gKGZpZWxkOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgICAgIGZyb250bWF0dGVyXG4gICAgICAgIC5tYXRjaChuZXcgUmVnRXhwKGBeJHtmaWVsZH06XFxcXHMqKC4rKSRgLCBcIm1cIikpPy5bMV1cbiAgICAgICAgPy50cmltKClcbiAgICAgICAgLnJlcGxhY2UoL15bJ1wiXXxbJ1wiXSQvZywgXCJcIikgfHwgXCJcIjtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiByZWFkRmllbGQoXCJkYXRlXCIpLFxuICAgICAgaXRlbToge1xuICAgICAgICB0ZXh0OiByZWFkRmllbGQoXCJ0aXRsZVwiKSB8fCBlbnRyeS5uYW1lLFxuICAgICAgICBsaW5rOiBlbmNvZGVVUkkoYC9jYXNlcy9zdWJtaXNzaW9ucy8ke2VudHJ5Lm5hbWV9L2ApLFxuICAgICAgfSBzYXRpc2ZpZXMgRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtLFxuICAgIH07XG4gIH0pXG4gIC5zb3J0KChsZWZ0LCByaWdodCkgPT4gbGVmdC5kYXRlLmxvY2FsZUNvbXBhcmUocmlnaHQuZGF0ZSkpXG4gIC5tYXAoKHsgaXRlbTogY2FzZUl0ZW0gfSkgPT4gY2FzZUl0ZW0pO1xuXG5jb25zdCBjYXNlc1NpZGViYXI6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdID0gW1xuICB7IHRleHQ6IFwiXHU2ODQ4XHU0RjhCXHU5NkM2XHU5OTk2XHU5ODc1XCIsIGxpbms6IFwiL2Nhc2VzL1wiIH0sXG4gIHsgdGV4dDogXCJcdTU5ODJcdTRGNTVcdTYzRDBcdTRFQTQgQ2FzZVwiLCBsaW5rOiBcIi9jb21tdW5pdHkvY2FzZS1jb250cmlidXRpbmdcIiB9LFxuICB7XG4gICAgdGV4dDogXCJcdTc5M0VcdTUzM0EgQ2FzZVwiLFxuICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgaXRlbXM6IGNhc2VJdGVtcyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzaXRlU2lkZWJhcjogRGVmYXVsdFRoZW1lLlNpZGViYXIgPSB7XG4gIC4uLmJsdWVib29rU2lkZWJhcixcbiAgXCIvY2FzZXMvXCI6IGNhc2VzU2lkZWJhcixcbiAgXCIvY29tbXVuaXR5L2Nhc2UtY29udHJpYnV0aW5nXCI6IGNhc2VzU2lkZWJhcixcbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXDExMVxcXFwyMDI2LTA4LTA2LTE0LTQzLTU0XFxcXFdvcmtCdWRkeUd1aWRlXFxcXFdvcmtCdWRkeUd1aWRlLW1haW5cXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwxMTFcXFxcMjAyNi0wOC0wNi0xNC00My01NFxcXFxXb3JrQnVkZHlHdWlkZVxcXFxXb3JrQnVkZHlHdWlkZS1tYWluXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxtZXJtYWlkLW1hcmtkb3duLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8xMTEvMjAyNi0wOC0wNi0xNC00My01NC9Xb3JrQnVkZHlHdWlkZS9Xb3JrQnVkZHlHdWlkZS1tYWluL2RvY3MvLnZpdGVwcmVzcy9tZXJtYWlkLW1hcmtkb3duLnRzXCI7aW1wb3J0IHR5cGUgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZU1lcm1haWRNYXJrZG93bihtZDogTWFya2Rvd25JdCkge1xuICBjb25zdCBmYWxsYmFja0ZlbmNlID0gbWQucmVuZGVyZXIucnVsZXMuZmVuY2U/LmJpbmQobWQucmVuZGVyZXIucnVsZXMpO1xuXG4gIG1kLnJlbmRlcmVyLnJ1bGVzLmZlbmNlID0gKHRva2VucywgaW5kZXgsIG9wdGlvbnMsIGVudiwgc2VsZikgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2luZGV4XTtcblxuICAgIGlmICh0b2tlbi5pbmZvLnRyaW0oKSAhPT0gXCJtZXJtYWlkXCIpIHtcbiAgICAgIHJldHVybiBmYWxsYmFja0ZlbmNlPy4odG9rZW5zLCBpbmRleCwgb3B0aW9ucywgZW52LCBzZWxmKSA/PyBzZWxmLnJlbmRlclRva2VuKHRva2VucywgaW5kZXgsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNvbnN0IGdyYXBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuLmNvbnRlbnQpO1xuICAgIHJldHVybiBgPE1lcm1haWREaWFncmFtIGdyYXBoPVwiJHtncmFwaH1cIiAvPmA7XG4gIH07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXDExMVxcXFwyMDI2LTA4LTA2LTE0LTQzLTU0XFxcXFdvcmtCdWRkeUd1aWRlXFxcXFdvcmtCdWRkeUd1aWRlLW1haW5cXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwxMTFcXFxcMjAyNi0wOC0wNi0xNC00My01NFxcXFxXb3JrQnVkZHlHdWlkZVxcXFxXb3JrQnVkZHlHdWlkZS1tYWluXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxzZW8udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LzExMS8yMDI2LTA4LTA2LTE0LTQzLTU0L1dvcmtCdWRkeUd1aWRlL1dvcmtCdWRkeUd1aWRlLW1haW4vZG9jcy8udml0ZXByZXNzL3Nlby50c1wiO2ltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gXCJub2RlOmZzXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcIm5vZGU6cGF0aFwiO1xuXG5pbXBvcnQgdHlwZSB7IEhlYWRDb25maWcsIFBhZ2VEYXRhLCBUcmFuc2Zvcm1Db250ZXh0IH0gZnJvbSBcInZpdGVwcmVzc1wiO1xuXG5jb25zdCBTSVRFX05BTUUgPSBcIldvcmtCdWRkeSBcdTAwRDcgemxza1wiO1xuY29uc3QgU0lURV9BTFRFUk5BVEVfTkFNRSA9IFwiV29ya0J1ZGR5IFx1MDBENyB6bHNrIFx1ODRERFx1NzZBRVx1NEU2NlwiO1xuY29uc3QgT1JHQU5JWkFUSU9OX05BTUUgPSBcInpsc2tcIjtcbmNvbnN0IERFRkFVTFRfREVTQ1JJUFRJT04gPVxuICBcIlx1NEVDRVx1NUI4OVx1ODhDNVx1NEY3Rlx1NzUyOFx1NTIzMCBBSSBcdTVERTVcdTRGNUNcdTdDRkJcdTdFREZcdUZGMUEyNyBcdTdBRTAgV29ya0J1ZGR5IFx1NUI5RVx1NjIxOFx1NjMwN1x1NTM1N1x1NEUwRVx1NTZFMlx1OTYxRlx1ODQzRFx1NTczMFx1NjVCOVx1NkNENVx1MzAwMlwiO1xuXG5mdW5jdGlvbiBjbGVhblBhZ2VQYXRoKHBhZ2U6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChwYWdlID09PSBcImluZGV4Lm1kXCIpIHJldHVybiBcIi9cIjtcbiAgaWYgKHBhZ2UuZW5kc1dpdGgoXCIvaW5kZXgubWRcIikpIHtcbiAgICByZXR1cm4gYC8ke3BhZ2Uuc2xpY2UoMCwgLVwiaW5kZXgubWRcIi5sZW5ndGgpfWA7XG4gIH1cblxuICByZXR1cm4gYC8ke3BhZ2UucmVwbGFjZSgvXFwubWQkLywgXCJcIil9YDtcbn1cblxuZnVuY3Rpb24gYWJzb2x1dGVQYWdlVXJsKHNpdGVVcmw6IHN0cmluZywgcGFnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIG5ldyBVUkwoY2xlYW5QYWdlUGF0aChwYWdlKSwgYCR7c2l0ZVVybH0vYCkuaHJlZjtcbn1cblxuZnVuY3Rpb24gc3RyaXBNYXJrZG93bih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2UoLyFcXFtbXlxcXV0qXFxdXFwoW14pXSpcXCkvZywgXCJcIilcbiAgICAucmVwbGFjZSgvXFxbKFteXFxdXSspXFxdXFwoW14pXSpcXCkvZywgXCIkMVwiKVxuICAgIC5yZXBsYWNlKC88W14+XSs+L2csIFwiXCIpXG4gICAgLnJlcGxhY2UoL1tgKl9+XS9nLCBcIlwiKVxuICAgIC5yZXBsYWNlKC9cXFxcKFtcXFxcYCp7fVxcW1xcXSgpIytcXC0uIV8+XSkvZywgXCIkMVwiKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxuICAgIC50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUh0bWxFbnRpdGllcyh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2UoLyZuYnNwOy9nLCBcIiBcIilcbiAgICAucmVwbGFjZSgvJmFtcDsvZywgXCImXCIpXG4gICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKVxuICAgIC5yZXBsYWNlKC8mIzM5O3wmYXBvczsvZywgXCInXCIpXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgXCI8XCIpXG4gICAgLnJlcGxhY2UoLyZndDsvZywgXCI+XCIpXG4gICAgLnJlcGxhY2UoLyYjKFxcZCspOy9nLCAoXywgY29kZVBvaW50OiBzdHJpbmcpID0+XG4gICAgICBTdHJpbmcuZnJvbUNvZGVQb2ludChOdW1iZXIoY29kZVBvaW50KSksXG4gICAgKVxuICAgIC5yZXBsYWNlKC8mI3goWzAtOWEtZl0rKTsvZ2ksIChfLCBjb2RlUG9pbnQ6IHN0cmluZykgPT5cbiAgICAgIFN0cmluZy5mcm9tQ29kZVBvaW50KE51bWJlci5wYXJzZUludChjb2RlUG9pbnQsIDE2KSksXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gdHJ1bmNhdGVEZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nLCBtYXhMZW5ndGggPSAxNTUpOiBzdHJpbmcge1xuICBjb25zdCBjaGFyYWN0ZXJzID0gQXJyYXkuZnJvbSh2YWx1ZSk7XG4gIGlmIChjaGFyYWN0ZXJzLmxlbmd0aCA8PSBtYXhMZW5ndGgpIHJldHVybiB2YWx1ZTtcblxuICBjb25zdCBzaG9ydGVuZWQgPSBjaGFyYWN0ZXJzLnNsaWNlKDAsIG1heExlbmd0aCkuam9pbihcIlwiKTtcbiAgY29uc3QgcHVuY3R1YXRpb25JbmRleCA9IE1hdGgubWF4KFxuICAgIHNob3J0ZW5lZC5sYXN0SW5kZXhPZihcIlx1MzAwMlwiKSxcbiAgICBzaG9ydGVuZWQubGFzdEluZGV4T2YoXCJcdUZGMUJcIiksXG4gICAgc2hvcnRlbmVkLmxhc3RJbmRleE9mKFwiXHVGRjBDXCIpLFxuICApO1xuXG4gIHJldHVybiBgJHtcbiAgICBwdW5jdHVhdGlvbkluZGV4ID49IE1hdGguZmxvb3IobWF4TGVuZ3RoICogMC42NSlcbiAgICAgID8gc2hvcnRlbmVkLnNsaWNlKDAsIHB1bmN0dWF0aW9uSW5kZXgpXG4gICAgICA6IHNob3J0ZW5lZFxuICB9XHUyMDI2YDtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdERlc2NyaXB0aW9uKG1hcmtkb3duOiBzdHJpbmcsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBtYWluU3RhcnQgPSBtYXJrZG93bi5pbmRleE9mKFwiPG1haW5cIik7XG4gIGNvbnN0IG1haW5FbmQgPSBtYWluU3RhcnQgPj0gMCA/IG1hcmtkb3duLmluZGV4T2YoXCI8L21haW4+XCIsIG1haW5TdGFydCkgOiAtMTtcbiAgY29uc3QgcGFnZUNvbnRlbnQgPVxuICAgIG1haW5TdGFydCA+PSAwICYmIG1haW5FbmQgPiBtYWluU3RhcnRcbiAgICAgID8gbWFya2Rvd24uc2xpY2UobWFpblN0YXJ0LCBtYWluRW5kKVxuICAgICAgOiBtYXJrZG93bjtcbiAgY29uc3QgaHRtbFBhcmFncmFwaHMgPSBBcnJheS5mcm9tKFxuICAgIHBhZ2VDb250ZW50Lm1hdGNoQWxsKC88cCg/Olxcc1tePl0qKT8+KFtcXHNcXFNdKj8pPFxcL3A+L2dpKSxcbiAgICAobWF0Y2gpID0+IGRlY29kZUh0bWxFbnRpdGllcyhzdHJpcE1hcmtkb3duKG1hdGNoWzFdKSksXG4gICkuZmlsdGVyKChwYXJhZ3JhcGgpID0+IEFycmF5LmZyb20ocGFyYWdyYXBoKS5sZW5ndGggPj0gMTIpO1xuXG4gIGlmIChodG1sUGFyYWdyYXBocy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQ6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBwYXJhZ3JhcGggb2YgaHRtbFBhcmFncmFwaHMpIHtcbiAgICAgIHNlbGVjdGVkLnB1c2gocGFyYWdyYXBoKTtcbiAgICAgIGlmIChBcnJheS5mcm9tKHNlbGVjdGVkLmpvaW4oXCIgXCIpKS5sZW5ndGggPj0gOTApIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVuY2F0ZURlc2NyaXB0aW9uKHNlbGVjdGVkLmpvaW4oXCIgXCIpKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnQgPSBtYXJrZG93bi5yZXBsYWNlKFxuICAgIC9eLS0tXFxzKltcXHJcXG5dK1tcXHNcXFNdKj9bXFxyXFxuXSstLS1cXHMqW1xcclxcbl0rLyxcbiAgICBcIlwiLFxuICApO1xuICBjb25zdCBjYW5kaWRhdGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudC5zcGxpdCgvXFxyP1xcblxccypcXHI/XFxuLykpIHtcbiAgICBjb25zdCB0cmltbWVkID0gYmxvY2sudHJpbSgpO1xuICAgIGlmIChcbiAgICAgICF0cmltbWVkIHx8XG4gICAgICB0cmltbWVkLnN0YXJ0c1dpdGgoXCIjXCIpIHx8XG4gICAgICB0cmltbWVkLnN0YXJ0c1dpdGgoXCJgYGBcIikgfHxcbiAgICAgIHRyaW1tZWQuc3RhcnRzV2l0aChcIn5+flwiKSB8fFxuICAgICAgdHJpbW1lZC5zdGFydHNXaXRoKFwiaW1wb3J0IFwiKSB8fFxuICAgICAgdHJpbW1lZC5zdGFydHNXaXRoKFwiZXhwb3J0IFwiKSB8fFxuICAgICAgdHJpbW1lZC5zdGFydHNXaXRoKFwiPCEtLVwiKSB8fFxuICAgICAgdHJpbW1lZC5zdGFydHNXaXRoKFwiPFwiKSB8fFxuICAgICAgdHJpbW1lZC5zdGFydHNXaXRoKFwifFwiKSB8fFxuICAgICAgL15bLSorXVxccy8udGVzdCh0cmltbWVkKSB8fFxuICAgICAgL15cXGQrWy4pXVxccy8udGVzdCh0cmltbWVkKVxuICAgICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhaW5UZXh0ID0gc3RyaXBNYXJrZG93bih0cmltbWVkKTtcbiAgICBpZiAoQXJyYXkuZnJvbShwbGFpblRleHQpLmxlbmd0aCA8IDEyKSBjb250aW51ZTtcblxuICAgIGNhbmRpZGF0ZXMucHVzaChwbGFpblRleHQpO1xuICAgIGlmIChBcnJheS5mcm9tKGNhbmRpZGF0ZXMuam9pbihcIiBcIikpLmxlbmd0aCA+PSA5MCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdHJ1bmNhdGVEZXNjcmlwdGlvbihjYW5kaWRhdGVzLmpvaW4oXCIgXCIpIHx8IGZhbGxiYWNrIHx8IERFRkFVTFRfREVTQ1JJUFRJT04pO1xufVxuXG5mdW5jdGlvbiBicmVhZGNydW1iTmFtZShzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgZGVjb2RlZFNlZ21lbnQgPSBzZWdtZW50O1xuXG4gIHRyeSB7XG4gICAgZGVjb2RlZFNlZ21lbnQgPSBkZWNvZGVVUklDb21wb25lbnQoc2VnbWVudCk7XG4gIH0gY2F0Y2gge1xuICAgIC8vIEtlZXAgdGhlIG9yaWdpbmFsIHNlZ21lbnQgd2hlbiBpdCBpcyBub3QgdmFsaWQgVVJJLWVuY29kZWQgdGV4dC5cbiAgfVxuXG4gIGNvbnN0IGxhYmVsczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBibHVlYm9vazogXCJXb3JrQnVkZHkgXHU1QjlFXHU2MjE4XHU4NEREXHU3NkFFXHU0RTY2XCIsXG4gICAgY2FzZXM6IFwiXHU3OTNFXHU1MzNBXHU2ODQ4XHU0RjhCXHU5NkM2XCIsXG4gICAgY29tbXVuaXR5OiBcIlx1NzkzRVx1NTMzQVx1NTE3MVx1NTIxQlwiLFxuICAgIGhlbHA6IFwiXHU1RTJFXHU0RjYwXHU4OUUzXHU1MUIzXCIsXG4gICAgXCJyZWFkaW5nLWd1aWRlXCI6IFwiV29ya0J1ZGR5IFx1NUI2Nlx1NEU2MFx1NjMwN1x1NTM1N1wiLFxuICB9O1xuXG4gIHJldHVybiBsYWJlbHNbZGVjb2RlZFNlZ21lbnRdIHx8IGRlY29kZWRTZWdtZW50LnJlcGxhY2UoL1stX10vZywgXCIgXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCcmVhZGNydW1icyhcbiAgc2l0ZVVybDogc3RyaW5nLFxuICBwYWdlOiBzdHJpbmcsXG4gIHBhZ2VUaXRsZTogc3RyaW5nLFxuICBjYW5vbmljYWxVcmw6IHN0cmluZyxcbikge1xuICBjb25zdCBwYXRoID0gY2xlYW5QYWdlUGF0aChwYWdlKS5yZXBsYWNlKC9eXFwvfFxcLyQvZywgXCJcIik7XG4gIGlmICghcGF0aCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgY29uc3QgaXRlbUxpc3RFbGVtZW50ID0gW1xuICAgIHtcbiAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgcG9zaXRpb246IDEsXG4gICAgICBuYW1lOiBcIlx1OTk5Nlx1OTg3NVwiLFxuICAgICAgaXRlbTogbmV3IFVSTChcIi9cIiwgYCR7c2l0ZVVybH0vYCkuaHJlZixcbiAgICB9LFxuICAgIC4uLnNlZ21lbnRzLm1hcCgoc2VnbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGlzTGFzdCA9IGluZGV4ID09PSBzZWdtZW50cy5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgcGFyZW50UGF0aCA9IGAvJHtzZWdtZW50cy5zbGljZSgwLCBpbmRleCArIDEpLmpvaW4oXCIvXCIpfS9gO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgcG9zaXRpb246IGluZGV4ICsgMixcbiAgICAgICAgbmFtZTogaXNMYXN0ID8gcGFnZVRpdGxlIDogYnJlYWRjcnVtYk5hbWUoc2VnbWVudCksXG4gICAgICAgIGl0ZW06IGlzTGFzdCA/IGNhbm9uaWNhbFVybCA6IG5ldyBVUkwocGFyZW50UGF0aCwgYCR7c2l0ZVVybH0vYCkuaHJlZixcbiAgICAgIH07XG4gICAgfSksXG4gIF07XG5cbiAgcmV0dXJuIHtcbiAgICBcIkB0eXBlXCI6IFwiQnJlYWRjcnVtYkxpc3RcIixcbiAgICBcIkBpZFwiOiBgJHtjYW5vbmljYWxVcmx9I2JyZWFkY3J1bWJgLFxuICAgIGl0ZW1MaXN0RWxlbWVudCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplSnNvbkxkKHZhbHVlOiB1bmtub3duKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC88L2csIFwiXFxcXHUwMDNjXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZURlc2NyaXB0aW9uKFxuICBzb3VyY2VEaXJlY3Rvcnk6IHN0cmluZyxcbiAgcGFnZURhdGE6IFBhZ2VEYXRhLFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHBhZ2VEYXRhLmRlc2NyaXB0aW9uIHx8IHBhZ2VEYXRhLmlzTm90Rm91bmQgfHwgIXBhZ2VEYXRhLmZpbGVQYXRoKSB7XG4gICAgcmV0dXJuIHBhZ2VEYXRhLmRlc2NyaXB0aW9uIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IGZhbGxiYWNrID0gYCR7cGFnZURhdGEudGl0bGV9XHVGRjFBJHtERUZBVUxUX0RFU0NSSVBUSU9OfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtYXJrZG93biA9IHJlYWRGaWxlU3luYyhcbiAgICAgIHJlc29sdmUoc291cmNlRGlyZWN0b3J5LCBwYWdlRGF0YS5maWxlUGF0aCksXG4gICAgICBcInV0ZjhcIixcbiAgICApO1xuICAgIHJldHVybiBleHRyYWN0RGVzY3JpcHRpb24obWFya2Rvd24sIGZhbGxiYWNrKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHRydW5jYXRlRGVzY3JpcHRpb24oZmFsbGJhY2spO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZW9IZWFkKFxuICBzaXRlVXJsOiBzdHJpbmcsXG4gIGNvbnRleHQ6IFRyYW5zZm9ybUNvbnRleHQsXG4pOiBIZWFkQ29uZmlnW10ge1xuICBjb25zdCB7IHBhZ2UsIHBhZ2VEYXRhLCB0aXRsZSwgY29udGVudCB9ID0gY29udGV4dDtcblxuICBpZiAocGFnZURhdGEuaXNOb3RGb3VuZCkge1xuICAgIHJldHVybiBbXG4gICAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJyb2JvdHNcIiwgY29udGVudDogXCJub2luZGV4LCBub2ZvbGxvd1wiIH1dLFxuICAgIF07XG4gIH1cblxuICBjb25zdCBjYW5vbmljYWxVcmwgPSBhYnNvbHV0ZVBhZ2VVcmwoc2l0ZVVybCwgcGFnZSk7XG4gIGNvbnN0IHNvY2lhbEltYWdlVXJsID0gbmV3IFVSTChcIi9vZy93b3JrYnVkZHktZ3VpZGUucG5nXCIsIGAke3NpdGVVcmx9L2ApLmhyZWY7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcGFnZURhdGEuZGVzY3JpcHRpb25cbiAgICA/IHRydW5jYXRlRGVzY3JpcHRpb24ocGFnZURhdGEuZGVzY3JpcHRpb24pXG4gICAgOiBleHRyYWN0RGVzY3JpcHRpb24oXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGAke3BhZ2VEYXRhLnRpdGxlfVx1RkYxQSR7Y29udGV4dC5kZXNjcmlwdGlvbiB8fCBERUZBVUxUX0RFU0NSSVBUSU9OfWAsXG4gICAgICApO1xuICBjb25zdCBpc0hvbWUgPSBwYWdlID09PSBcImluZGV4Lm1kXCI7XG4gIGNvbnN0IGlzQmx1ZWJvb2tQYWdlID0gcGFnZS5zdGFydHNXaXRoKFwiYmx1ZWJvb2svXCIpO1xuICBjb25zdCBtb2RpZmllZFRpbWUgPSBwYWdlRGF0YS5sYXN0VXBkYXRlZFxuICAgID8gbmV3IERhdGUocGFnZURhdGEubGFzdFVwZGF0ZWQpLnRvSVNPU3RyaW5nKClcbiAgICA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBvcmdhbml6YXRpb24gPSB7XG4gICAgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgIFwiQGlkXCI6IGAke3NpdGVVcmx9LyNvcmdhbml6YXRpb25gLFxuICAgIG5hbWU6IE9SR0FOSVpBVElPTl9OQU1FLFxuICAgIHVybDogYCR7c2l0ZVVybH0vYCxcbiAgfTtcbiAgY29uc3Qgd2Vic2l0ZSA9IHtcbiAgICBcIkB0eXBlXCI6IFwiV2ViU2l0ZVwiLFxuICAgIFwiQGlkXCI6IGAke3NpdGVVcmx9LyN3ZWJzaXRlYCxcbiAgICB1cmw6IGAke3NpdGVVcmx9L2AsXG4gICAgbmFtZTogU0lURV9OQU1FLFxuICAgIGFsdGVybmF0ZU5hbWU6IFNJVEVfQUxURVJOQVRFX05BTUUsXG4gICAgZGVzY3JpcHRpb246IERFRkFVTFRfREVTQ1JJUFRJT04sXG4gICAgaW5MYW5ndWFnZTogXCJ6aC1DTlwiLFxuICAgIHB1Ymxpc2hlcjogeyBcIkBpZFwiOiBgJHtzaXRlVXJsfS8jb3JnYW5pemF0aW9uYCB9LFxuICB9O1xuICBjb25zdCBicmVhZGNydW1iVGl0bGUgPVxuICAgIHR5cGVvZiBwYWdlRGF0YS5mcm9udG1hdHRlci5icmVhZGNydW1iVGl0bGUgPT09IFwic3RyaW5nXCJcbiAgICAgID8gcGFnZURhdGEuZnJvbnRtYXR0ZXIuYnJlYWRjcnVtYlRpdGxlXG4gICAgICA6IHBhZ2VEYXRhLnRpdGxlO1xuICBjb25zdCBicmVhZGNydW1icyA9IGNyZWF0ZUJyZWFkY3J1bWJzKFxuICAgIHNpdGVVcmwsXG4gICAgcGFnZSxcbiAgICBicmVhZGNydW1iVGl0bGUsXG4gICAgY2Fub25pY2FsVXJsLFxuICApO1xuICBjb25zdCBwYWdlRW50aXR5ID0gaXNIb21lXG4gICAgPyBudWxsXG4gICAgOiB7XG4gICAgICAgIFwiQHR5cGVcIjogaXNCbHVlYm9va1BhZ2UgPyBcIkFydGljbGVcIiA6IFwiV2ViUGFnZVwiLFxuICAgICAgICBcIkBpZFwiOiBgJHtjYW5vbmljYWxVcmx9I3dlYnBhZ2VgLFxuICAgICAgICB1cmw6IGNhbm9uaWNhbFVybCxcbiAgICAgICAgbmFtZTogcGFnZURhdGEudGl0bGUsXG4gICAgICAgIC4uLihpc0JsdWVib29rUGFnZSA/IHsgaGVhZGxpbmU6IHBhZ2VEYXRhLnRpdGxlIH0gOiB7fSksXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBpbkxhbmd1YWdlOiBcInpoLUNOXCIsXG4gICAgICAgIGlzUGFydE9mOiB7IFwiQGlkXCI6IGAke3NpdGVVcmx9LyN3ZWJzaXRlYCB9LFxuICAgICAgICBicmVhZGNydW1iOiBicmVhZGNydW1ic1xuICAgICAgICAgID8geyBcIkBpZFwiOiBgJHtjYW5vbmljYWxVcmx9I2JyZWFkY3J1bWJgIH1cbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgLi4uKGlzQmx1ZWJvb2tQYWdlXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIG1haW5FbnRpdHlPZlBhZ2U6IGNhbm9uaWNhbFVybCxcbiAgICAgICAgICAgICAgaW1hZ2U6IFtzb2NpYWxJbWFnZVVybF0sXG4gICAgICAgICAgICAgIGF1dGhvcjogeyBcIkBpZFwiOiBgJHtzaXRlVXJsfS8jb3JnYW5pemF0aW9uYCB9LFxuICAgICAgICAgICAgICBwdWJsaXNoZXI6IHsgXCJAaWRcIjogYCR7c2l0ZVVybH0vI29yZ2FuaXphdGlvbmAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgICAgLi4uKG1vZGlmaWVkVGltZSA/IHsgZGF0ZU1vZGlmaWVkOiBtb2RpZmllZFRpbWUgfSA6IHt9KSxcbiAgICAgIH07XG4gIGNvbnN0IGpzb25MZEdyYXBoID0gW29yZ2FuaXphdGlvbiwgd2Vic2l0ZSwgcGFnZUVudGl0eSwgYnJlYWRjcnVtYnNdLmZpbHRlcihcbiAgICBCb29sZWFuLFxuICApO1xuXG4gIGNvbnN0IGhlYWQ6IEhlYWRDb25maWdbXSA9IFtcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJkZXNjcmlwdGlvblwiLCBjb250ZW50OiBkZXNjcmlwdGlvbiB9XSxcbiAgICBbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJyb2JvdHNcIixcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBcImluZGV4LCBmb2xsb3csIG1heC1pbWFnZS1wcmV2aWV3OmxhcmdlLCBtYXgtc25pcHBldDotMSwgbWF4LXZpZGVvLXByZXZpZXc6LTFcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXCJsaW5rXCIsIHsgcmVsOiBcImNhbm9uaWNhbFwiLCBocmVmOiBjYW5vbmljYWxVcmwgfV0sXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOmxvY2FsZVwiLCBjb250ZW50OiBcInpoX0NOXCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOnNpdGVfbmFtZVwiLCBjb250ZW50OiBTSVRFX05BTUUgfV0sXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOnR5cGVcIiwgY29udGVudDogaXNCbHVlYm9va1BhZ2UgPyBcImFydGljbGVcIiA6IFwid2Vic2l0ZVwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzp0aXRsZVwiLCBjb250ZW50OiB0aXRsZSB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6ZGVzY3JpcHRpb25cIiwgY29udGVudDogZGVzY3JpcHRpb24gfV0sXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOnVybFwiLCBjb250ZW50OiBjYW5vbmljYWxVcmwgfV0sXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOmltYWdlXCIsIGNvbnRlbnQ6IHNvY2lhbEltYWdlVXJsIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzppbWFnZTp0eXBlXCIsIGNvbnRlbnQ6IFwiaW1hZ2UvcG5nXCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOmltYWdlOndpZHRoXCIsIGNvbnRlbnQ6IFwiMTI4MFwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzppbWFnZTpoZWlnaHRcIiwgY29udGVudDogXCI3MjBcIiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6aW1hZ2U6YWx0XCIsIGNvbnRlbnQ6IFwiV29ya0J1ZGR5IFx1NUI5RVx1NjIxOFx1ODRERFx1NzZBRVx1NEU2Nlx1OTk5Nlx1OTg3NVx1OTg4NFx1ODlDOFwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcInR3aXR0ZXI6Y2FyZFwiLCBjb250ZW50OiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJ0d2l0dGVyOnRpdGxlXCIsIGNvbnRlbnQ6IHRpdGxlIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiwgY29udGVudDogZGVzY3JpcHRpb24gfV0sXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwidHdpdHRlcjppbWFnZVwiLCBjb250ZW50OiBzb2NpYWxJbWFnZVVybCB9XSxcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJ0d2l0dGVyOmltYWdlOmFsdFwiLCBjb250ZW50OiBcIldvcmtCdWRkeSBcdTVCOUVcdTYyMThcdTg0RERcdTc2QUVcdTRFNjZcdTk5OTZcdTk4NzVcdTk4ODRcdTg5QzhcIiB9XSxcbiAgICBbXG4gICAgICBcInNjcmlwdFwiLFxuICAgICAgeyB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIiB9LFxuICAgICAgc2VyaWFsaXplSnNvbkxkKHsgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLCBcIkBncmFwaFwiOiBqc29uTGRHcmFwaCB9KSxcbiAgICBdLFxuICBdO1xuXG4gIGlmIChtb2RpZmllZFRpbWUgJiYgaXNCbHVlYm9va1BhZ2UpIHtcbiAgICBoZWFkLnB1c2goW1xuICAgICAgXCJtZXRhXCIsXG4gICAgICB7IHByb3BlcnR5OiBcImFydGljbGU6bW9kaWZpZWRfdGltZVwiLCBjb250ZW50OiBtb2RpZmllZFRpbWUgfSxcbiAgICBdKTtcbiAgfVxuXG4gIHJldHVybiBoZWFkO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErWixTQUFTLG9CQUFvQjs7O0FDQTdCLFNBQVMsY0FBYyxtQkFBbUI7QUFDemMsU0FBUyxxQkFBcUI7QUFENk8sSUFBTSwyQ0FBMkM7QUFLNVQsSUFBTSxRQUFRLElBQUksYUFDaEIsVUFBVSxhQUFhLFNBQVMsSUFBSSxDQUFDLFlBQVksUUFBUSxLQUFLLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHO0FBRS9FLElBQU0sUUFBUTtBQUNkLElBQU0sUUFBUTtBQUNkLElBQU0sUUFBUTtBQUNkLElBQU0sUUFBUTtBQUNkLElBQU0sV0FBVztBQUVqQixJQUFNLE9BQU8sQ0FBQyxXQUFtQixPQUFPLGVBQXlDO0FBQUEsRUFDL0U7QUFBQSxFQUNBLE1BQU0sTUFBTSxTQUFTO0FBQ3ZCO0FBRUEsSUFBTSxRQUFRLENBQ1osUUFDQSxXQUNBLE9BQU8sZUFDdUI7QUFBQSxFQUM5QjtBQUFBLEVBQ0EsTUFBTSxNQUFNLFFBQVEsU0FBUztBQUMvQjtBQUVPLElBQU0s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

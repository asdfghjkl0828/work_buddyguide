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
var SITE_NAME = "WorkBuddy \u5B9E\u6218\u84DD\u76AE\u4E66";
var SITE_ALTERNATE_NAME = "WorkBuddy Guide";
var ORGANIZATION_NAME = "WorkBuddy \u5B9E\u6218\u84DD\u76AE\u4E66";
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
  title: "WorkBuddy \u5B9E\u6218\u84DD\u76AE\u4E66",
  titleTemplate: ":title \xB7 WorkBuddy \u5B9E\u6218\u84DD\u76AE\u4E66",
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
    siteTitle: "WorkBuddy Guide",
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u5F00\u59CB\u9605\u8BFB", link: "/bluebook/" },
      { text: "\u6848\u4F8B\u96C6", link: "/cases/" },
      { text: "\u5E2E\u4F60\u89E3\u51B3", link: "/help/" },
      { text: "\u9605\u8BFB\u6307\u5357", link: "/reading-guide" }
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
      message: "\u4EE5\u771F\u5B9E\u4EFB\u52A1\u4E3A\u4E3B\u7EBF\u7684 WorkBuddy \u793E\u533A\u5B9E\u6218\u8BFB\u672C"
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL3NpZGViYXIudHMiLCAiZG9jcy8udml0ZXByZXNzL21lcm1haWQtbWFya2Rvd24udHMiLCAiZG9jcy8udml0ZXByZXNzL3Nlby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXDExMVxcXFwyMDI2LTA4LTA2LTE0LTQzLTU0XFxcXFdvcmtCdWRkeUd1aWRlXFxcXFdvcmtCdWRkeUd1aWRlLW1haW5cXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwxMTFcXFxcMjAyNi0wOC0wNi0xNC00My01NFxcXFxXb3JrQnVkZHlHdWlkZVxcXFxXb3JrQnVkZHlHdWlkZS1tYWluXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8xMTEvMjAyNi0wOC0wNi0xNC00My01NC9Xb3JrQnVkZHlHdWlkZS9Xb3JrQnVkZHlHdWlkZS1tYWluL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xuXG5pbXBvcnQgeyBzaXRlU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZU1lcm1haWRNYXJrZG93biB9IGZyb20gXCIuL21lcm1haWQtbWFya2Rvd25cIjtcbmltcG9ydCB7IGNyZWF0ZVBhZ2VEZXNjcmlwdGlvbiwgY3JlYXRlU2VvSGVhZCB9IGZyb20gXCIuL3Nlb1wiO1xuXG5jb25zdCBzaXRlVXJsID0gcHJvY2Vzcy5lbnYuVklURVBSRVNTX1NJVEVfVVJMIHx8IFwiaHR0cHM6Ly93b3JrYnVkZHkuaG9tZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBsYW5nOiBcInpoLUNOXCIsXG4gICAgdGl0bGU6IFwiV29ya0J1ZGR5IFx1NUI5RVx1NjIxOFx1ODRERFx1NzZBRVx1NEU2NlwiLFxuICAgIHRpdGxlVGVtcGxhdGU6IFwiOnRpdGxlIFx1MDBCNyBXb3JrQnVkZHkgXHU1QjlFXHU2MjE4XHU4NEREXHU3NkFFXHU0RTY2XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXHU0RUNFXHU1Qjg5XHU4OEM1XHU0RjdGXHU3NTI4XHU1MjMwIEFJIFx1NURFNVx1NEY1Q1x1N0NGQlx1N0VERlx1RkYxQTI3IFx1N0FFMCBXb3JrQnVkZHkgXHU1QjlFXHU2MjE4XHU2MzA3XHU1MzU3XHU0RTBFXHU1NkUyXHU5NjFGXHU4NDNEXHU1NzMwXHU2NUI5XHU2Q0Q1XHUzMDAyXCIsXG4gICAgY2xlYW5VcmxzOiB0cnVlLFxuICAgIGxhc3RVcGRhdGVkOiB0cnVlLFxuICAgIHNyY0V4Y2x1ZGU6IFtcIioqL3NvdXJjZS5tZFwiLCBcInBsYW5zLyoqXCJdLFxuICAgIHNpdGVtYXA6IHtcbiAgICAgIGhvc3RuYW1lOiBzaXRlVXJsLFxuICAgIH0sXG4gICAgdHJhbnNmb3JtUGFnZURhdGE6IChwYWdlRGF0YSwgeyBzaXRlQ29uZmlnIH0pID0+IHtcbiAgICAgIGlmIChwYWdlRGF0YS5yZWxhdGl2ZVBhdGguc3RhcnRzV2l0aChcImNhc2VzL1wiKSkge1xuICAgICAgICBwYWdlRGF0YS5mcm9udG1hdHRlci5hc2lkZSA9IGZhbHNlO1xuICAgICAgICBwYWdlRGF0YS5mcm9udG1hdHRlci5vdXRsaW5lID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBjcmVhdGVQYWdlRGVzY3JpcHRpb24oc2l0ZUNvbmZpZy5zcmNEaXIsIHBhZ2VEYXRhKSxcbiAgICAgIH07XG4gICAgfSxcbiAgICB0cmFuc2Zvcm1IZWFkOiAoY29udGV4dCkgPT4gY3JlYXRlU2VvSGVhZChzaXRlVXJsLCBjb250ZXh0KSxcbiAgICBoZWFkOiBbXG4gICAgICBbXCJsaW5rXCIsIHsgcmVsOiBcImljb25cIiwgdHlwZTogXCJpbWFnZS9zdmcreG1sXCIsIGhyZWY6IFwiL2Zhdmljb24uc3ZnXCIgfV0sXG4gICAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJ0aGVtZS1jb2xvclwiLCBjb250ZW50OiBcIiNkOGYyMzhcIiB9XSxcbiAgICAgIFtcbiAgICAgICAgXCJtZXRhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImJhaWR1LXNpdGUtdmVyaWZpY2F0aW9uXCIsXG4gICAgICAgICAgY29udGVudDogXCJjb2RldmEtUkYxWnFMNGc5MFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgXCJtZXRhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImtleXdvcmRzXCIsXG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgIFwiV29ya0J1ZGR5LFdvcmtCdWRkeSBcdTY1NTlcdTdBMEIsQUkgQWdlbnQsQUkgXHU1REU1XHU0RjVDXHU3Q0ZCXHU3RURGLFNraWxscyxNQ1AsXHU4MUVBXHU1MkE4XHU1MzE2LFx1NTkxQVx1NjY3QVx1ODBGRFx1NEY1MyxcdTgwNENcdTU3M0EgQUlcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgXSxcbiAgICBtYXJrZG93bjoge1xuICAgICAgY29uZmlnOiBjb25maWd1cmVNZXJtYWlkTWFya2Rvd24sXG4gICAgICBpbWFnZToge1xuICAgICAgICBsYXp5TG9hZGluZzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB0aGVtZToge1xuICAgICAgICBsaWdodDogXCJnaXRodWItbGlnaHRcIixcbiAgICAgICAgZGFyazogXCJnaXRodWItZGFya1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRoZW1lQ29uZmlnOiB7XG4gICAgICBzaXRlVGl0bGU6IFwiV29ya0J1ZGR5IEd1aWRlXCIsXG4gICAgICBuYXY6IFtcbiAgICAgICAgeyB0ZXh0OiBcIlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9cIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHU1RjAwXHU1OUNCXHU5NjA1XHU4QkZCXCIsIGxpbms6IFwiL2JsdWVib29rL1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTY4NDhcdTRGOEJcdTk2QzZcIiwgbGluazogXCIvY2FzZXMvXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlx1NUUyRVx1NEY2MFx1ODlFM1x1NTFCM1wiLCBsaW5rOiBcIi9oZWxwL1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTk2MDVcdThCRkJcdTYzMDdcdTUzNTdcIiwgbGluazogXCIvcmVhZGluZy1ndWlkZVwiIH0sXG4gICAgICBdLFxuICAgICAgc2lkZWJhcjogc2l0ZVNpZGViYXIsXG4gICAgICBzZWFyY2g6IHtcbiAgICAgICAgcHJvdmlkZXI6IFwibG9jYWxcIixcbiAgICAgIH0sXG4gICAgICBvdXRsaW5lOiB7XG4gICAgICAgIGxldmVsOiBbMiwgM10sXG4gICAgICAgIGxhYmVsOiBcIlx1NjcyQ1x1OTg3NVx1NzZFRVx1NUY1NVwiLFxuICAgICAgfSxcbiAgICAgIGRvY0Zvb3Rlcjoge1xuICAgICAgICBwcmV2OiBcIlx1NEUwQVx1NEUwMFx1N0JDN1wiLFxuICAgICAgICBuZXh0OiBcIlx1NEUwQlx1NEUwMFx1N0JDN1wiLFxuICAgICAgfSxcbiAgICAgIGxhc3RVcGRhdGVkOiB7XG4gICAgICAgIHRleHQ6IFwiXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXCIsXG4gICAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgICBkYXRlU3R5bGU6IFwibWVkaXVtXCIsXG4gICAgICAgICAgdGltZVN0eWxlOiBcInNob3J0XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZm9vdGVyOiB7XG4gICAgICAgIG1lc3NhZ2U6IFwiXHU0RUU1XHU3NzFGXHU1QjlFXHU0RUZCXHU1MkExXHU0RTNBXHU0RTNCXHU3RUJGXHU3Njg0IFdvcmtCdWRkeSBcdTc5M0VcdTUzM0FcdTVCOUVcdTYyMThcdThCRkJcdTY3MkNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXDExMVxcXFwyMDI2LTA4LTA2LTE0LTQzLTU0XFxcXFdvcmtCdWRkeUd1aWRlXFxcXFdvcmtCdWRkeUd1aWRlLW1haW5cXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwxMTFcXFxcMjAyNi0wOC0wNi0xNC00My01NFxcXFxXb3JrQnVkZHlHdWlkZVxcXFxXb3JrQnVkZHlHdWlkZS1tYWluXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxzaWRlYmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8xMTEvMjAyNi0wOC0wNi0xNC00My01NC9Xb3JrQnVkZHlHdWlkZS9Xb3JrQnVkZHlHdWlkZS1tYWluL2RvY3MvLnZpdGVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgcmVhZEZpbGVTeW5jLCByZWFkZGlyU3luYyB9IGZyb20gXCJub2RlOmZzXCI7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5cbmltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xuXG5jb25zdCByb3V0ZSA9ICguLi5zZWdtZW50czogc3RyaW5nW10pOiBzdHJpbmcgPT5cbiAgZW5jb2RlVVJJKGAvYmx1ZWJvb2svJHtzZWdtZW50cy5tYXAoKHNlZ21lbnQpID0+IHNlZ21lbnQudHJpbSgpKS5qb2luKFwiL1wiKX0vYCk7XG5cbmNvbnN0IHBhcnQxID0gXCJcdTdCMkNcdTRFMDBcdTdCQzcgXHU0RjdGXHU3NTI4XHU2MjRCXHU1MThDXHVGRjFBXHU1MTQ4XHU2MjhBIFdvcmtCdWRkeSBcdTc1MjhcdThENzdcdTY3NjVcIjtcbmNvbnN0IHBhcnQyID0gXCJcdTdCMkNcdTRFOENcdTdCQzcgXHU2ODQ4XHU0RjhCXHU3QkM3XHVGRjFBXHU0RUNFXHU0RTAwXHU5ODc5XHU0RUZCXHU1MkExXHU1MjMwXHU0RTAwXHU2NTJGIEFJIFx1NTZFMlx1OTYxRlwiO1xuY29uc3QgcGFydDMgPSBcIlx1N0IyQ1x1NEUwOVx1N0JDNyBcdThGREJcdTk2MzZcdTdCQzdcdUZGMUFcdTYyOEFcdTY4NDhcdTRGOEJcdTUzRDhcdTYyMTBcdTgxRUFcdTVERjFcdTc2ODRcdTVERTVcdTRGNUNcdTdDRkJcdTdFREZcIjtcbmNvbnN0IHBhcnQ0ID0gXCJcdTdCMkNcdTU2REJcdTdCQzcgXHU1Qzk3XHU0RjREXHU0RTBFXHU4ODRDXHU0RTFBXHU4NDNEXHU1NzMwXCI7XG5jb25zdCBhcHBlbmRpeCA9IFwiXHU5NjQ0XHU1RjU1XCI7XG5cbmNvbnN0IGl0ZW0gPSAoZGlyZWN0b3J5OiBzdHJpbmcsIHRleHQgPSBkaXJlY3RvcnkpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW0gPT4gKHtcbiAgdGV4dCxcbiAgbGluazogcm91dGUoZGlyZWN0b3J5KSxcbn0pO1xuXG5jb25zdCBjaGlsZCA9IChcbiAgcGFyZW50OiBzdHJpbmcsXG4gIGRpcmVjdG9yeTogc3RyaW5nLFxuICB0ZXh0ID0gZGlyZWN0b3J5LFxuKTogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtID0+ICh7XG4gIHRleHQsXG4gIGxpbms6IHJvdXRlKHBhcmVudCwgZGlyZWN0b3J5KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYmx1ZWJvb2tTaWRlYmFyOiBEZWZhdWx0VGhlbWUuU2lkZWJhciA9IHtcbiAgXCIvYmx1ZWJvb2svXCI6IFtcbiAgICB7IHRleHQ6IFwiXHU4NEREXHU3NkFFXHU0RTY2XHU2MDNCXHU4OUM4XCIsIGxpbms6IFwiL2JsdWVib29rL1wiIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTdCMkNcdTRFMDBcdTdCQzcgXHUwMEI3IFx1NEY3Rlx1NzUyOFx1NjI0Qlx1NTE4Q1wiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIGl0ZW0ocGFydDEsIFwiXHU2NzJDXHU3QkM3XHU1QkZDXHU4QkZCXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MSwgXCJcdTdCMkMgMSBcdTdBRTAgXHU1MjFEXHU4QkM2IFdvcmtCdWRkeVwiKSxcbiAgICAgICAgY2hpbGQocGFydDEsIFwiXHU3QjJDIDIgXHU3QUUwIFdvcmtCdWRkeVx1NzY4NFx1NEUwQlx1OEY3RFx1MzAwMVx1NUI4OVx1ODhDNVx1MzAwMVx1NzY3Qlx1NUY1NVx1NEUwRVx1NjZGNFx1NjVCMFwiKSxcbiAgICAgICAgY2hpbGQocGFydDEsIFwiXHU3QjJDIDMgXHU3QUUwIFdvcmtCdWRkeSBcdTc2ODRcdTRFM0JcdTc1NENcdTk3NjJcdTMwMDFcdTRFRkJcdTUyQTFcdTRFMEVcdTVERTVcdTRGNUNcdTUzM0FcIiksXG4gICAgICAgIGNoaWxkKHBhcnQxLCBcIlx1N0IyQyA0IFx1N0FFMCBcdTVGRUJcdTkwMUZcdTVCOENcdTYyMTBcdTdCMkNcdTRFMDBcdTRFMkEgV29ya0J1ZGR5IFx1NEVGQlx1NTJBMVwiKSxcbiAgICAgICAgY2hpbGQocGFydDEsIFwiXHU3QjJDIDUgXHU3QUUwIFdvcmtCdWRkeVx1NTJBMFx1OEY3RFx1NEUwMFx1NEUyQVx1NzcxRlx1NkI2M1x1NzUyOFx1NUY5N1x1NEUwQVx1NzY4NCBTa2lsbFwiKSxcbiAgICAgICAgY2hpbGQocGFydDEsIFwiXHU3QjJDIDYgXHU3QUUwIFdvcmtCdWRkeVx1NzY4NFx1NEUxM1x1NUJCNlx1NTQ4Q1x1NEUxM1x1NUJCNlx1NTZFMlwiKSxcbiAgICAgICAgY2hpbGQocGFydDEsIFwiXHU3QjJDIDcgXHU3QUUwIFdvcmtCdWRkeSBcdTRGN0ZcdTc1MjhcdThGREVcdTYzQTVcdTU2NjhcIiksXG4gICAgICAgIGNoaWxkKHBhcnQxLCBcIlx1N0IyQyA4IFx1N0FFMCBXb3JrQnVkZHkgXHU2M0E1XHU1MTY1XHU1QzBGXHU3QTBCXHU1RThGXHU0RTBFIElNIFx1NTJBOVx1NzQwNlwiKSxcbiAgICAgICAgY2hpbGQocGFydDEsIFwiXHU3QjJDIDkgXHU3QUUwIFx1NTk4Mlx1NEY1NVx1NjNBNVx1NTE2NVx1NTkxNlx1OTBFOCBBUElcIiksXG4gICAgICAgIGNoaWxkKHBhcnQxLCBcIlx1N0IyQyAxMCBcdTdBRTAgV29ya0J1ZGR5IFx1ODFFQVx1NTJBOFx1NTMxNlx1NEVGQlx1NTJBMVwiKSxcbiAgICAgICAgY2hpbGQocGFydDEsIFwiXHU4QkZFXHU1OTE2XHU5NjA1XHU4QkZCXHVGRjFBXHU0RTAwXHU3QUUwXHU3NzBCXHU2MUMyIEFJIFx1NURFNVx1NEY1Q1x1N0NGQlx1N0VERlwiKSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1N0IyQ1x1NEU4Q1x1N0JDNyBcdTAwQjcgXHU1QjlFXHU2MjE4XHU2ODQ4XHU0RjhCXCIsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgaXRlbShwYXJ0MiwgXCJcdTY3MkNcdTdCQzdcdTVCRkNcdThCRkJcIiksXG4gICAgICAgIGNoaWxkKHBhcnQyLCBcIlx1N0IyQyAxMSBcdTdBRTAgXHU1MjlFXHU1MTZDXHU0RTA5XHU0RUY2XHU1OTU3XHVGRjFBV29yZFx1MzAwMUV4Y2VsXHUzMDAxUFBUXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MiwgXCJcdTdCMkMgMTIgXHU3QUUwIFx1NEVDRVx1NjU3NFx1NzQwNlx1Njg0Q1x1OTc2Mlx1NjU4N1x1NEVGNlx1OEZEOVx1NEU5Qlx1NUMwRlx1NEU4Qlx1NTA1QVx1OEQ3N1wiKSxcbiAgICAgICAgY2hpbGQocGFydDIsIFwiXHU3QjJDIDEzIFx1N0FFMCBcdThGRENcdTdBMEJcdTYzQTdcdTUyMzZcdTRGNjBcdTc2ODRcdTc1MzVcdTgxMTFcdUZGMENcdTRFMERcdTc1MjhcdTUzRDFcdTYxMDFcdTRFMERcdTU3MjhcdTc1MzVcdTgxMTFcdTUyNERcIiksXG4gICAgICAgIGNoaWxkKHBhcnQyLCBcIlx1N0IyQyAxNCBcdTdBRTAgXHU3NTFGXHU2RDNCXHU1MkE5XHU2MjRCXHU3Njg0XHU0RUY3XHU1MDNDXHVGRjBDXHU2NjJGXHU1MUNGXHU1QzExXHU3NDEwXHU3ODhFXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MiwgXCJcdTdCMkMgMTUgXHU3QUUwIFx1OEQ0NFx1OEJBRlx1NjU3NFx1NTQwOFx1RkYxQVx1NjI4QVx1NEZFMVx1NjA2Rlx1NkQ0MVx1NTNEOFx1NjIxMFx1NkJDRlx1NjVFNVx1OTAxQVx1NzdFNVwiKSxcbiAgICAgICAgY2hpbGQocGFydDIsIFwiXHU3QjJDIDE2IFx1N0FFMCBcdTY1MzZcdTg1Q0ZcdTRFMERcdTY2MkZcdTc3RTVcdThCQzZcdTdCQTFcdTc0MDZcdUZGMENcdTgwRkRcdTUxOERcdTZCMjFcdTc1MjhcdThENzdcdTY3NjVcdTYyNERcdTY2MkZcIiksXG4gICAgICAgIGNoaWxkKHBhcnQyLCBcIlx1N0IyQyAxNyBcdTdBRTAgXHU0RjFBXHU4QkFFXHU3RUQzXHU2NzVGXHU0RTBEXHU2NjJGXHU3RUM4XHU3MEI5XHVGRjBDXHU1REU1XHU0RjVDXHU2MjREXHU1MjFBXHU1MjFBXHU1RjAwXHU1OUNCXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MiwgXCJcdTdCMkMgMTggXHU3QUUwIFx1NjI4QVx1NjI5NVx1OEQ0NFx1NTIwNlx1Njc5MFx1NTNEOFx1NjIxMFx1NEY2MFx1NzY4NFx1NjVFNVx1NUUzOFwiKSxcbiAgICAgICAgY2hpbGQocGFydDIsIFwiXHU3QjJDIDE5IFx1N0FFMCBcdTRFMDBcdTUzRTVcdThCRERcdTUzRUNcdTU1MjQgQUkgXHU4OUM2XHU5ODkxXHU1NkUyXHU5NjFGXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MiwgXCJcdTdCMkMgMjAgXHU3QUUwIFx1ODFFQVx1NUE5Mlx1NEY1M1x1NEUwRFx1NTNFQVx1NjYyRlx1OTc2MFx1NTJBQVx1NTI5Qlx1RkYwQ1x1ODAwQ1x1NjYyRlx1NEUwMFx1Njc2MVx1NTg5RVx1OTU3Rlx1OTVFRFx1NzNBRlwiKSxcbiAgICAgICAgY2hpbGQocGFydDIsIFwiXHU3QjJDIDIxIFx1N0FFMCBXb3JrQnVkZHlcdTRFNUZcdTgwRkRcdTUwNUFHRU9cdTRFMTNcdTVCQjZcIiksXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTdCMkNcdTRFMDlcdTdCQzcgXHUwMEI3IFx1OEZEQlx1OTYzNlx1N0NGQlx1N0VERlwiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIGl0ZW0ocGFydDMsIFwiXHU2NzJDXHU3QkM3XHU1QkZDXHU4QkZCXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MywgXCJcdTdCMkMgMjIgXHU3QUUwIFx1NjI1M1x1OTAyMHNraWxsXHVGRjFBXHU1QzA2XHU0RTY2XHU1NDhDXHU4OUM2XHU5ODkxXHU4NEI4XHU5OThGXHU0RTNBXHU1M0VGXHU2MjY3XHU4ODRDIFNraWxsXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MywgXCJcdTdCMkMgMjMgXHU3QUUwIFx1NTE3Nlx1NEVENlx1NzUyOFx1NkNENVx1ODg2NVx1NTE0NVx1RkYxQVdvcmtCdWRkeSBcdTVCOUVcdTY0Q0RcdTY4NDhcdTRGOEJcdTk2QzZcIiksXG4gICAgICAgIGNoaWxkKHBhcnQzLCBcIlx1N0IyQyAyNCBcdTdBRTAgXHU1OTgyXHU0RjU1XHU4RkRCXHU4ODRDXHU1OTFBIEFnZW50IFx1N0NGQlx1N0VERlx1OEJCRVx1OEJBMVwiKSxcbiAgICAgICAgY2hpbGQocGFydDMsIFwiXHU3QjJDIDI1IFx1N0FFMCBcdTgxRUFcdTUyQThcdTUzMTZcdTVERTVcdTRGNUNcdTZENDFcdTc2ODRcdTUzRUZcdTk3NjBcdTYwMjdcIiksXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTdCMkNcdTU2REJcdTdCQzcgXHUwMEI3IFx1NUM5N1x1NEY0RFx1NEUwRVx1ODg0Q1x1NEUxQVwiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIGl0ZW0ocGFydDQsIFwiXHU2NzJDXHU3QkM3XHU1QkZDXHU4QkZCXCIpLFxuICAgICAgICBjaGlsZChwYXJ0NCwgXCJcdTdCMkMgMjYgXHU3QUUwIFx1NUM5N1x1NEY0RFx1OERFRlx1N0VCRlx1NTZGRVx1RkYxQVx1NEUwRFx1NTQwQ1x1NUM5N1x1NEY0RFx1NTk4Mlx1NEY1NVx1NjI4QSBXb3JrQnVkZHkgXHU3NTI4XHU2REYxXCIpLFxuICAgICAgICBjaGlsZChwYXJ0NCwgXCJcdTdCMkMgMjcgXHU3QUUwIFx1ODg0Q1x1NEUxQVx1OERFRlx1N0VCRlx1NTZGRVx1RkYxQVx1NEVDRVx1OTAxQVx1NzUyOFx1ODBGRFx1NTI5Qlx1NTIzMFx1ODg0Q1x1NEUxQVx1NURFNVx1NEY1Q1x1NkQ0MVwiKSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1OTY0NFx1NUY1NVwiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIGl0ZW0oYXBwZW5kaXgsIFwiXHU5NjQ0XHU1RjU1XHU1QkZDXHU4QkZCXCIpLFxuICAgICAgICBjaGlsZChhcHBlbmRpeCwgXCJcdTk2NDRcdTVGNTUgQSBcdTVFMzhcdTc1MjhcdTYzMDdcdTRFRTRcdTZBMjFcdTY3N0ZcIiksXG4gICAgICAgIGNoaWxkKGFwcGVuZGl4LCBcIlx1OTY0NFx1NUY1NSBCIFx1NTczQVx1NjY2Rlx1OTAxRlx1NjdFNVx1ODg2OFwiKSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmNvbnN0IGNhc2VzRGlyZWN0b3J5ID0gZmlsZVVSTFRvUGF0aChcbiAgbmV3IFVSTChcIi4uL2Nhc2VzL3N1Ym1pc3Npb25zL1wiLCBpbXBvcnQubWV0YS51cmwpLFxuKTtcblxuY29uc3QgY2FzZUl0ZW1zID0gcmVhZGRpclN5bmMoY2FzZXNEaXJlY3RvcnksIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KVxuICAuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkuaXNEaXJlY3RvcnkoKSlcbiAgLm1hcCgoZW50cnkpID0+IHtcbiAgICBjb25zdCBtYXJrZG93biA9IHJlYWRGaWxlU3luYyhcbiAgICAgIG5ldyBVUkwoYC4uL2Nhc2VzL3N1Ym1pc3Npb25zLyR7ZW50cnkubmFtZX0vaW5kZXgubWRgLCBpbXBvcnQubWV0YS51cmwpLFxuICAgICAgXCJ1dGY4XCIsXG4gICAgKTtcbiAgICBjb25zdCBmcm9udG1hdHRlciA9IG1hcmtkb3duLm1hdGNoKC9eLS0tXFxzKlxcbihbXFxzXFxTXSo/KVxcbi0tLS8pPy5bMV0gfHwgXCJcIjtcbiAgICBjb25zdCByZWFkRmllbGQgPSAoZmllbGQ6IHN0cmluZyk6IHN0cmluZyA9PlxuICAgICAgZnJvbnRtYXR0ZXJcbiAgICAgICAgLm1hdGNoKG5ldyBSZWdFeHAoYF4ke2ZpZWxkfTpcXFxccyooLispJGAsIFwibVwiKSk/LlsxXVxuICAgICAgICA/LnRyaW0oKVxuICAgICAgICAucmVwbGFjZSgvXlsnXCJdfFsnXCJdJC9nLCBcIlwiKSB8fCBcIlwiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IHJlYWRGaWVsZChcImRhdGVcIiksXG4gICAgICBpdGVtOiB7XG4gICAgICAgIHRleHQ6IHJlYWRGaWVsZChcInRpdGxlXCIpIHx8IGVudHJ5Lm5hbWUsXG4gICAgICAgIGxpbms6IGVuY29kZVVSSShgL2Nhc2VzL3N1Ym1pc3Npb25zLyR7ZW50cnkubmFtZX0vYCksXG4gICAgICB9IHNhdGlzZmllcyBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW0sXG4gICAgfTtcbiAgfSlcbiAgLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0LmRhdGUubG9jYWxlQ29tcGFyZShyaWdodC5kYXRlKSlcbiAgLm1hcCgoeyBpdGVtOiBjYXNlSXRlbSB9KSA9PiBjYXNlSXRlbSk7XG5cbmNvbnN0IGNhc2VzU2lkZWJhcjogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10gPSBbXG4gIHsgdGV4dDogXCJcdTY4NDhcdTRGOEJcdTk2QzZcdTk5OTZcdTk4NzVcIiwgbGluazogXCIvY2FzZXMvXCIgfSxcbiAgeyB0ZXh0OiBcIlx1NTk4Mlx1NEY1NVx1NjNEMFx1NEVBNCBDYXNlXCIsIGxpbms6IFwiL2NvbW11bml0eS9jYXNlLWNvbnRyaWJ1dGluZ1wiIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1NzkzRVx1NTMzQSBDYXNlXCIsXG4gICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICBpdGVtczogY2FzZUl0ZW1zLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNpdGVTaWRlYmFyOiBEZWZhdWx0VGhlbWUuU2lkZWJhciA9IHtcbiAgLi4uYmx1ZWJvb2tTaWRlYmFyLFxuICBcIi9jYXNlcy9cIjogY2FzZXNTaWRlYmFyLFxuICBcIi9jb21tdW5pdHkvY2FzZS1jb250cmlidXRpbmdcIjogY2FzZXNTaWRlYmFyLFxufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcMTExXFxcXDIwMjYtMDgtMDYtMTQtNDMtNTRcXFxcV29ya0J1ZGR5R3VpZGVcXFxcV29ya0J1ZGR5R3VpZGUtbWFpblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXDExMVxcXFwyMDI2LTA4LTA2LTE0LTQzLTU0XFxcXFdvcmtCdWRkeUd1aWRlXFxcXFdvcmtCdWRkeUd1aWRlLW1haW5cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXG1lcm1haWQtbWFya2Rvd24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LzExMS8yMDI2LTA4LTA2LTE0LTQzLTU0L1dvcmtCdWRkeUd1aWRlL1dvcmtCdWRkeUd1aWRlLW1haW4vZG9jcy8udml0ZXByZXNzL21lcm1haWQtbWFya2Rvd24udHNcIjtpbXBvcnQgdHlwZSBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlTWVybWFpZE1hcmtkb3duKG1kOiBNYXJrZG93bkl0KSB7XG4gIGNvbnN0IGZhbGxiYWNrRmVuY2UgPSBtZC5yZW5kZXJlci5ydWxlcy5mZW5jZT8uYmluZChtZC5yZW5kZXJlci5ydWxlcyk7XG5cbiAgbWQucmVuZGVyZXIucnVsZXMuZmVuY2UgPSAodG9rZW5zLCBpbmRleCwgb3B0aW9ucywgZW52LCBzZWxmKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xuXG4gICAgaWYgKHRva2VuLmluZm8udHJpbSgpICE9PSBcIm1lcm1haWRcIikge1xuICAgICAgcmV0dXJuIGZhbGxiYWNrRmVuY2U/Lih0b2tlbnMsIGluZGV4LCBvcHRpb25zLCBlbnYsIHNlbGYpID8/IHNlbGYucmVuZGVyVG9rZW4odG9rZW5zLCBpbmRleCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY29uc3QgZ3JhcGggPSBlbmNvZGVVUklDb21wb25lbnQodG9rZW4uY29udGVudCk7XG4gICAgcmV0dXJuIGA8TWVybWFpZERpYWdyYW0gZ3JhcGg9XCIke2dyYXBofVwiIC8+YDtcbiAgfTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcMTExXFxcXDIwMjYtMDgtMDYtMTQtNDMtNTRcXFxcV29ya0J1ZGR5R3VpZGVcXFxcV29ya0J1ZGR5R3VpZGUtbWFpblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXDExMVxcXFwyMDI2LTA4LTA2LTE0LTQzLTU0XFxcXFdvcmtCdWRkeUd1aWRlXFxcXFdvcmtCdWRkeUd1aWRlLW1haW5cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHNlby50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovMTExLzIwMjYtMDgtMDYtMTQtNDMtNTQvV29ya0J1ZGR5R3VpZGUvV29ya0J1ZGR5R3VpZGUtbWFpbi9kb2NzLy52aXRlcHJlc3Mvc2VvLnRzXCI7aW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSBcIm5vZGU6ZnNcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwibm9kZTpwYXRoXCI7XG5cbmltcG9ydCB0eXBlIHsgSGVhZENvbmZpZywgUGFnZURhdGEsIFRyYW5zZm9ybUNvbnRleHQgfSBmcm9tIFwidml0ZXByZXNzXCI7XG5cbmNvbnN0IFNJVEVfTkFNRSA9IFwiV29ya0J1ZGR5IFx1NUI5RVx1NjIxOFx1ODRERFx1NzZBRVx1NEU2NlwiO1xuY29uc3QgU0lURV9BTFRFUk5BVEVfTkFNRSA9IFwiV29ya0J1ZGR5IEd1aWRlXCI7XG5jb25zdCBPUkdBTklaQVRJT05fTkFNRSA9IFwiV29ya0J1ZGR5IFx1NUI5RVx1NjIxOFx1ODRERFx1NzZBRVx1NEU2NlwiO1xuY29uc3QgREVGQVVMVF9ERVNDUklQVElPTiA9XG4gIFwiXHU0RUNFXHU1Qjg5XHU4OEM1XHU0RjdGXHU3NTI4XHU1MjMwIEFJIFx1NURFNVx1NEY1Q1x1N0NGQlx1N0VERlx1RkYxQTI3IFx1N0FFMCBXb3JrQnVkZHkgXHU1QjlFXHU2MjE4XHU2MzA3XHU1MzU3XHU0RTBFXHU1NkUyXHU5NjFGXHU4NDNEXHU1NzMwXHU2NUI5XHU2Q0Q1XHUzMDAyXCI7XG5cbmZ1bmN0aW9uIGNsZWFuUGFnZVBhdGgocGFnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHBhZ2UgPT09IFwiaW5kZXgubWRcIikgcmV0dXJuIFwiL1wiO1xuICBpZiAocGFnZS5lbmRzV2l0aChcIi9pbmRleC5tZFwiKSkge1xuICAgIHJldHVybiBgLyR7cGFnZS5zbGljZSgwLCAtXCJpbmRleC5tZFwiLmxlbmd0aCl9YDtcbiAgfVxuXG4gIHJldHVybiBgLyR7cGFnZS5yZXBsYWNlKC9cXC5tZCQvLCBcIlwiKX1gO1xufVxuXG5mdW5jdGlvbiBhYnNvbHV0ZVBhZ2VVcmwoc2l0ZVVybDogc3RyaW5nLCBwYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gbmV3IFVSTChjbGVhblBhZ2VQYXRoKHBhZ2UpLCBgJHtzaXRlVXJsfS9gKS5ocmVmO1xufVxuXG5mdW5jdGlvbiBzdHJpcE1hcmtkb3duKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWVcbiAgICAucmVwbGFjZSgvIVxcW1teXFxdXSpcXF1cXChbXildKlxcKS9nLCBcIlwiKVxuICAgIC5yZXBsYWNlKC9cXFsoW15cXF1dKylcXF1cXChbXildKlxcKS9nLCBcIiQxXCIpXG4gICAgLnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcIilcbiAgICAucmVwbGFjZSgvW2AqX35dL2csIFwiXCIpXG4gICAgLnJlcGxhY2UoL1xcXFwoW1xcXFxgKnt9XFxbXFxdKCkjK1xcLS4hXz5dKS9nLCBcIiQxXCIpXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXG4gICAgLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlSHRtbEVudGl0aWVzKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWVcbiAgICAucmVwbGFjZSgvJm5ic3A7L2csIFwiIFwiKVxuICAgIC5yZXBsYWNlKC8mYW1wOy9nLCBcIiZcIilcbiAgICAucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpXG4gICAgLnJlcGxhY2UoLyYjMzk7fCZhcG9zOy9nLCBcIidcIilcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCBcIjxcIilcbiAgICAucmVwbGFjZSgvJmd0Oy9nLCBcIj5cIilcbiAgICAucmVwbGFjZSgvJiMoXFxkKyk7L2csIChfLCBjb2RlUG9pbnQ6IHN0cmluZykgPT5cbiAgICAgIFN0cmluZy5mcm9tQ29kZVBvaW50KE51bWJlcihjb2RlUG9pbnQpKSxcbiAgICApXG4gICAgLnJlcGxhY2UoLyYjeChbMC05YS1mXSspOy9naSwgKF8sIGNvZGVQb2ludDogc3RyaW5nKSA9PlxuICAgICAgU3RyaW5nLmZyb21Db2RlUG9pbnQoTnVtYmVyLnBhcnNlSW50KGNvZGVQb2ludCwgMTYpKSxcbiAgICApO1xufVxuXG5mdW5jdGlvbiB0cnVuY2F0ZURlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcsIG1heExlbmd0aCA9IDE1NSk6IHN0cmluZyB7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBBcnJheS5mcm9tKHZhbHVlKTtcbiAgaWYgKGNoYXJhY3RlcnMubGVuZ3RoIDw9IG1heExlbmd0aCkgcmV0dXJuIHZhbHVlO1xuXG4gIGNvbnN0IHNob3J0ZW5lZCA9IGNoYXJhY3RlcnMuc2xpY2UoMCwgbWF4TGVuZ3RoKS5qb2luKFwiXCIpO1xuICBjb25zdCBwdW5jdHVhdGlvbkluZGV4ID0gTWF0aC5tYXgoXG4gICAgc2hvcnRlbmVkLmxhc3RJbmRleE9mKFwiXHUzMDAyXCIpLFxuICAgIHNob3J0ZW5lZC5sYXN0SW5kZXhPZihcIlx1RkYxQlwiKSxcbiAgICBzaG9ydGVuZWQubGFzdEluZGV4T2YoXCJcdUZGMENcIiksXG4gICk7XG5cbiAgcmV0dXJuIGAke1xuICAgIHB1bmN0dWF0aW9uSW5kZXggPj0gTWF0aC5mbG9vcihtYXhMZW5ndGggKiAwLjY1KVxuICAgICAgPyBzaG9ydGVuZWQuc2xpY2UoMCwgcHVuY3R1YXRpb25JbmRleClcbiAgICAgIDogc2hvcnRlbmVkXG4gIH1cdTIwMjZgO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0RGVzY3JpcHRpb24obWFya2Rvd246IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG1haW5TdGFydCA9IG1hcmtkb3duLmluZGV4T2YoXCI8bWFpblwiKTtcbiAgY29uc3QgbWFpbkVuZCA9IG1haW5TdGFydCA+PSAwID8gbWFya2Rvd24uaW5kZXhPZihcIjwvbWFpbj5cIiwgbWFpblN0YXJ0KSA6IC0xO1xuICBjb25zdCBwYWdlQ29udGVudCA9XG4gICAgbWFpblN0YXJ0ID49IDAgJiYgbWFpbkVuZCA+IG1haW5TdGFydFxuICAgICAgPyBtYXJrZG93bi5zbGljZShtYWluU3RhcnQsIG1haW5FbmQpXG4gICAgICA6IG1hcmtkb3duO1xuICBjb25zdCBodG1sUGFyYWdyYXBocyA9IEFycmF5LmZyb20oXG4gICAgcGFnZUNvbnRlbnQubWF0Y2hBbGwoLzxwKD86XFxzW14+XSopPz4oW1xcc1xcU10qPyk8XFwvcD4vZ2kpLFxuICAgIChtYXRjaCkgPT4gZGVjb2RlSHRtbEVudGl0aWVzKHN0cmlwTWFya2Rvd24obWF0Y2hbMV0pKSxcbiAgKS5maWx0ZXIoKHBhcmFncmFwaCkgPT4gQXJyYXkuZnJvbShwYXJhZ3JhcGgpLmxlbmd0aCA+PSAxMik7XG5cbiAgaWYgKGh0bWxQYXJhZ3JhcGhzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzZWxlY3RlZDogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBhcmFncmFwaCBvZiBodG1sUGFyYWdyYXBocykge1xuICAgICAgc2VsZWN0ZWQucHVzaChwYXJhZ3JhcGgpO1xuICAgICAgaWYgKEFycmF5LmZyb20oc2VsZWN0ZWQuam9pbihcIiBcIikpLmxlbmd0aCA+PSA5MCkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydW5jYXRlRGVzY3JpcHRpb24oc2VsZWN0ZWQuam9pbihcIiBcIikpO1xuICB9XG5cbiAgY29uc3QgY29udGVudCA9IG1hcmtkb3duLnJlcGxhY2UoXG4gICAgL14tLS1cXHMqW1xcclxcbl0rW1xcc1xcU10qP1tcXHJcXG5dKy0tLVxccypbXFxyXFxuXSsvLFxuICAgIFwiXCIsXG4gICk7XG4gIGNvbnN0IGNhbmRpZGF0ZXM6IHN0cmluZ1tdID0gW107XG5cbiAgZm9yIChjb25zdCBibG9jayBvZiBjb250ZW50LnNwbGl0KC9cXHI/XFxuXFxzKlxccj9cXG4vKSkge1xuICAgIGNvbnN0IHRyaW1tZWQgPSBibG9jay50cmltKCk7XG4gICAgaWYgKFxuICAgICAgIXRyaW1tZWQgfHxcbiAgICAgIHRyaW1tZWQuc3RhcnRzV2l0aChcIiNcIikgfHxcbiAgICAgIHRyaW1tZWQuc3RhcnRzV2l0aChcImBgYFwiKSB8fFxuICAgICAgdHJpbW1lZC5zdGFydHNXaXRoKFwifn5+XCIpIHx8XG4gICAgICB0cmltbWVkLnN0YXJ0c1dpdGgoXCJpbXBvcnQgXCIpIHx8XG4gICAgICB0cmltbWVkLnN0YXJ0c1dpdGgoXCJleHBvcnQgXCIpIHx8XG4gICAgICB0cmltbWVkLnN0YXJ0c1dpdGgoXCI8IS0tXCIpIHx8XG4gICAgICB0cmltbWVkLnN0YXJ0c1dpdGgoXCI8XCIpIHx8XG4gICAgICB0cmltbWVkLnN0YXJ0c1dpdGgoXCJ8XCIpIHx8XG4gICAgICAvXlstKitdXFxzLy50ZXN0KHRyaW1tZWQpIHx8XG4gICAgICAvXlxcZCtbLildXFxzLy50ZXN0KHRyaW1tZWQpXG4gICAgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFpblRleHQgPSBzdHJpcE1hcmtkb3duKHRyaW1tZWQpO1xuICAgIGlmIChBcnJheS5mcm9tKHBsYWluVGV4dCkubGVuZ3RoIDwgMTIpIGNvbnRpbnVlO1xuXG4gICAgY2FuZGlkYXRlcy5wdXNoKHBsYWluVGV4dCk7XG4gICAgaWYgKEFycmF5LmZyb20oY2FuZGlkYXRlcy5qb2luKFwiIFwiKSkubGVuZ3RoID49IDkwKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiB0cnVuY2F0ZURlc2NyaXB0aW9uKGNhbmRpZGF0ZXMuam9pbihcIiBcIikgfHwgZmFsbGJhY2sgfHwgREVGQVVMVF9ERVNDUklQVElPTik7XG59XG5cbmZ1bmN0aW9uIGJyZWFkY3J1bWJOYW1lKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBkZWNvZGVkU2VnbWVudCA9IHNlZ21lbnQ7XG5cbiAgdHJ5IHtcbiAgICBkZWNvZGVkU2VnbWVudCA9IGRlY29kZVVSSUNvbXBvbmVudChzZWdtZW50KTtcbiAgfSBjYXRjaCB7XG4gICAgLy8gS2VlcCB0aGUgb3JpZ2luYWwgc2VnbWVudCB3aGVuIGl0IGlzIG5vdCB2YWxpZCBVUkktZW5jb2RlZCB0ZXh0LlxuICB9XG5cbiAgY29uc3QgbGFiZWxzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIGJsdWVib29rOiBcIldvcmtCdWRkeSBcdTVCOUVcdTYyMThcdTg0RERcdTc2QUVcdTRFNjZcIixcbiAgICBjYXNlczogXCJcdTc5M0VcdTUzM0FcdTY4NDhcdTRGOEJcdTk2QzZcIixcbiAgICBjb21tdW5pdHk6IFwiXHU3OTNFXHU1MzNBXHU1MTcxXHU1MjFCXCIsXG4gICAgaGVscDogXCJcdTVFMkVcdTRGNjBcdTg5RTNcdTUxQjNcIixcbiAgICBcInJlYWRpbmctZ3VpZGVcIjogXCJXb3JrQnVkZHkgXHU1QjY2XHU0RTYwXHU2MzA3XHU1MzU3XCIsXG4gIH07XG5cbiAgcmV0dXJuIGxhYmVsc1tkZWNvZGVkU2VnbWVudF0gfHwgZGVjb2RlZFNlZ21lbnQucmVwbGFjZSgvWy1fXS9nLCBcIiBcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJyZWFkY3J1bWJzKFxuICBzaXRlVXJsOiBzdHJpbmcsXG4gIHBhZ2U6IHN0cmluZyxcbiAgcGFnZVRpdGxlOiBzdHJpbmcsXG4gIGNhbm9uaWNhbFVybDogc3RyaW5nLFxuKSB7XG4gIGNvbnN0IHBhdGggPSBjbGVhblBhZ2VQYXRoKHBhZ2UpLnJlcGxhY2UoL15cXC98XFwvJC9nLCBcIlwiKTtcbiAgaWYgKCFwYXRoKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuICBjb25zdCBpdGVtTGlzdEVsZW1lbnQgPSBbXG4gICAge1xuICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICBwb3NpdGlvbjogMSxcbiAgICAgIG5hbWU6IFwiXHU5OTk2XHU5ODc1XCIsXG4gICAgICBpdGVtOiBuZXcgVVJMKFwiL1wiLCBgJHtzaXRlVXJsfS9gKS5ocmVmLFxuICAgIH0sXG4gICAgLi4uc2VnbWVudHMubWFwKChzZWdtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXNMYXN0ID0gaW5kZXggPT09IHNlZ21lbnRzLmxlbmd0aCAtIDE7XG4gICAgICBjb25zdCBwYXJlbnRQYXRoID0gYC8ke3NlZ21lbnRzLnNsaWNlKDAsIGluZGV4ICsgMSkuam9pbihcIi9cIil9L2A7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICBwb3NpdGlvbjogaW5kZXggKyAyLFxuICAgICAgICBuYW1lOiBpc0xhc3QgPyBwYWdlVGl0bGUgOiBicmVhZGNydW1iTmFtZShzZWdtZW50KSxcbiAgICAgICAgaXRlbTogaXNMYXN0ID8gY2Fub25pY2FsVXJsIDogbmV3IFVSTChwYXJlbnRQYXRoLCBgJHtzaXRlVXJsfS9gKS5ocmVmLFxuICAgICAgfTtcbiAgICB9KSxcbiAgXTtcblxuICByZXR1cm4ge1xuICAgIFwiQHR5cGVcIjogXCJCcmVhZGNydW1iTGlzdFwiLFxuICAgIFwiQGlkXCI6IGAke2Nhbm9uaWNhbFVybH0jYnJlYWRjcnVtYmAsXG4gICAgaXRlbUxpc3RFbGVtZW50LFxuICB9O1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVKc29uTGQodmFsdWU6IHVua25vd24pOiBzdHJpbmcge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoLzwvZywgXCJcXFxcdTAwM2NcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdlRGVzY3JpcHRpb24oXG4gIHNvdXJjZURpcmVjdG9yeTogc3RyaW5nLFxuICBwYWdlRGF0YTogUGFnZURhdGEsXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBpZiAocGFnZURhdGEuZGVzY3JpcHRpb24gfHwgcGFnZURhdGEuaXNOb3RGb3VuZCB8fCAhcGFnZURhdGEuZmlsZVBhdGgpIHtcbiAgICByZXR1cm4gcGFnZURhdGEuZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgZmFsbGJhY2sgPSBgJHtwYWdlRGF0YS50aXRsZX1cdUZGMUEke0RFRkFVTFRfREVTQ1JJUFRJT059YDtcblxuICB0cnkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gcmVhZEZpbGVTeW5jKFxuICAgICAgcmVzb2x2ZShzb3VyY2VEaXJlY3RvcnksIHBhZ2VEYXRhLmZpbGVQYXRoKSxcbiAgICAgIFwidXRmOFwiLFxuICAgICk7XG4gICAgcmV0dXJuIGV4dHJhY3REZXNjcmlwdGlvbihtYXJrZG93biwgZmFsbGJhY2spO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdHJ1bmNhdGVEZXNjcmlwdGlvbihmYWxsYmFjayk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlb0hlYWQoXG4gIHNpdGVVcmw6IHN0cmluZyxcbiAgY29udGV4dDogVHJhbnNmb3JtQ29udGV4dCxcbik6IEhlYWRDb25maWdbXSB7XG4gIGNvbnN0IHsgcGFnZSwgcGFnZURhdGEsIHRpdGxlLCBjb250ZW50IH0gPSBjb250ZXh0O1xuXG4gIGlmIChwYWdlRGF0YS5pc05vdEZvdW5kKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcInJvYm90c1wiLCBjb250ZW50OiBcIm5vaW5kZXgsIG5vZm9sbG93XCIgfV0sXG4gICAgXTtcbiAgfVxuXG4gIGNvbnN0IGNhbm9uaWNhbFVybCA9IGFic29sdXRlUGFnZVVybChzaXRlVXJsLCBwYWdlKTtcbiAgY29uc3Qgc29jaWFsSW1hZ2VVcmwgPSBuZXcgVVJMKFwiL29nL3dvcmtidWRkeS1ndWlkZS5wbmdcIiwgYCR7c2l0ZVVybH0vYCkuaHJlZjtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBwYWdlRGF0YS5kZXNjcmlwdGlvblxuICAgID8gdHJ1bmNhdGVEZXNjcmlwdGlvbihwYWdlRGF0YS5kZXNjcmlwdGlvbilcbiAgICA6IGV4dHJhY3REZXNjcmlwdGlvbihcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgYCR7cGFnZURhdGEudGl0bGV9XHVGRjFBJHtjb250ZXh0LmRlc2NyaXB0aW9uIHx8IERFRkFVTFRfREVTQ1JJUFRJT059YCxcbiAgICAgICk7XG4gIGNvbnN0IGlzSG9tZSA9IHBhZ2UgPT09IFwiaW5kZXgubWRcIjtcbiAgY29uc3QgaXNCbHVlYm9va1BhZ2UgPSBwYWdlLnN0YXJ0c1dpdGgoXCJibHVlYm9vay9cIik7XG4gIGNvbnN0IG1vZGlmaWVkVGltZSA9IHBhZ2VEYXRhLmxhc3RVcGRhdGVkXG4gICAgPyBuZXcgRGF0ZShwYWdlRGF0YS5sYXN0VXBkYXRlZCkudG9JU09TdHJpbmcoKVxuICAgIDogdW5kZWZpbmVkO1xuXG4gIGNvbnN0IG9yZ2FuaXphdGlvbiA9IHtcbiAgICBcIkB0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgXCJAaWRcIjogYCR7c2l0ZVVybH0vI29yZ2FuaXphdGlvbmAsXG4gICAgbmFtZTogT1JHQU5JWkFUSU9OX05BTUUsXG4gICAgdXJsOiBgJHtzaXRlVXJsfS9gLFxuICB9O1xuICBjb25zdCB3ZWJzaXRlID0ge1xuICAgIFwiQHR5cGVcIjogXCJXZWJTaXRlXCIsXG4gICAgXCJAaWRcIjogYCR7c2l0ZVVybH0vI3dlYnNpdGVgLFxuICAgIHVybDogYCR7c2l0ZVVybH0vYCxcbiAgICBuYW1lOiBTSVRFX05BTUUsXG4gICAgYWx0ZXJuYXRlTmFtZTogU0lURV9BTFRFUk5BVEVfTkFNRSxcbiAgICBkZXNjcmlwdGlvbjogREVGQVVMVF9ERVNDUklQVElPTixcbiAgICBpbkxhbmd1YWdlOiBcInpoLUNOXCIsXG4gICAgcHVibGlzaGVyOiB7IFwiQGlkXCI6IGAke3NpdGVVcmx9LyNvcmdhbml6YXRpb25gIH0sXG4gIH07XG4gIGNvbnN0IGJyZWFkY3J1bWJUaXRsZSA9XG4gICAgdHlwZW9mIHBhZ2VEYXRhLmZyb250bWF0dGVyLmJyZWFkY3J1bWJUaXRsZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBwYWdlRGF0YS5mcm9udG1hdHRlci5icmVhZGNydW1iVGl0bGVcbiAgICAgIDogcGFnZURhdGEudGl0bGU7XG4gIGNvbnN0IGJyZWFkY3J1bWJzID0gY3JlYXRlQnJlYWRjcnVtYnMoXG4gICAgc2l0ZVVybCxcbiAgICBwYWdlLFxuICAgIGJyZWFkY3J1bWJUaXRsZSxcbiAgICBjYW5vbmljYWxVcmwsXG4gICk7XG4gIGNvbnN0IHBhZ2VFbnRpdHkgPSBpc0hvbWVcbiAgICA/IG51bGxcbiAgICA6IHtcbiAgICAgICAgXCJAdHlwZVwiOiBpc0JsdWVib29rUGFnZSA/IFwiQXJ0aWNsZVwiIDogXCJXZWJQYWdlXCIsXG4gICAgICAgIFwiQGlkXCI6IGAke2Nhbm9uaWNhbFVybH0jd2VicGFnZWAsXG4gICAgICAgIHVybDogY2Fub25pY2FsVXJsLFxuICAgICAgICBuYW1lOiBwYWdlRGF0YS50aXRsZSxcbiAgICAgICAgLi4uKGlzQmx1ZWJvb2tQYWdlID8geyBoZWFkbGluZTogcGFnZURhdGEudGl0bGUgfSA6IHt9KSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGluTGFuZ3VhZ2U6IFwiemgtQ05cIixcbiAgICAgICAgaXNQYXJ0T2Y6IHsgXCJAaWRcIjogYCR7c2l0ZVVybH0vI3dlYnNpdGVgIH0sXG4gICAgICAgIGJyZWFkY3J1bWI6IGJyZWFkY3J1bWJzXG4gICAgICAgICAgPyB7IFwiQGlkXCI6IGAke2Nhbm9uaWNhbFVybH0jYnJlYWRjcnVtYmAgfVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAuLi4oaXNCbHVlYm9va1BhZ2VcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgbWFpbkVudGl0eU9mUGFnZTogY2Fub25pY2FsVXJsLFxuICAgICAgICAgICAgICBpbWFnZTogW3NvY2lhbEltYWdlVXJsXSxcbiAgICAgICAgICAgICAgYXV0aG9yOiB7IFwiQGlkXCI6IGAke3NpdGVVcmx9LyNvcmdhbml6YXRpb25gIH0sXG4gICAgICAgICAgICAgIHB1Ymxpc2hlcjogeyBcIkBpZFwiOiBgJHtzaXRlVXJsfS8jb3JnYW5pemF0aW9uYCB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgICAuLi4obW9kaWZpZWRUaW1lID8geyBkYXRlTW9kaWZpZWQ6IG1vZGlmaWVkVGltZSB9IDoge30pLFxuICAgICAgfTtcbiAgY29uc3QganNvbkxkR3JhcGggPSBbb3JnYW5pemF0aW9uLCB3ZWJzaXRlLCBwYWdlRW50aXR5LCBicmVhZGNydW1ic10uZmlsdGVyKFxuICAgIEJvb2xlYW4sXG4gICk7XG5cbiAgY29uc3QgaGVhZDogSGVhZENvbmZpZ1tdID0gW1xuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcImRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IGRlc2NyaXB0aW9uIH1dLFxuICAgIFtcbiAgICAgIFwibWV0YVwiLFxuICAgICAge1xuICAgICAgICBuYW1lOiBcInJvYm90c1wiLFxuICAgICAgICBjb250ZW50OlxuICAgICAgICAgIFwiaW5kZXgsIGZvbGxvdywgbWF4LWltYWdlLXByZXZpZXc6bGFyZ2UsIG1heC1zbmlwcGV0Oi0xLCBtYXgtdmlkZW8tcHJldmlldzotMVwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcImxpbmtcIiwgeyByZWw6IFwiY2Fub25pY2FsXCIsIGhyZWY6IGNhbm9uaWNhbFVybCB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6bG9jYWxlXCIsIGNvbnRlbnQ6IFwiemhfQ05cIiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6c2l0ZV9uYW1lXCIsIGNvbnRlbnQ6IFNJVEVfTkFNRSB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6dHlwZVwiLCBjb250ZW50OiBpc0JsdWVib29rUGFnZSA/IFwiYXJ0aWNsZVwiIDogXCJ3ZWJzaXRlXCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOnRpdGxlXCIsIGNvbnRlbnQ6IHRpdGxlIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzpkZXNjcmlwdGlvblwiLCBjb250ZW50OiBkZXNjcmlwdGlvbiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6dXJsXCIsIGNvbnRlbnQ6IGNhbm9uaWNhbFVybCB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6aW1hZ2VcIiwgY29udGVudDogc29jaWFsSW1hZ2VVcmwgfV0sXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOmltYWdlOnR5cGVcIiwgY29udGVudDogXCJpbWFnZS9wbmdcIiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6aW1hZ2U6d2lkdGhcIiwgY29udGVudDogXCIxMjgwXCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOmltYWdlOmhlaWdodFwiLCBjb250ZW50OiBcIjcyMFwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzppbWFnZTphbHRcIiwgY29udGVudDogXCJXb3JrQnVkZHkgXHU1QjlFXHU2MjE4XHU4NEREXHU3NkFFXHU0RTY2XHU5OTk2XHU5ODc1XHU5ODg0XHU4OUM4XCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwidHdpdHRlcjpjYXJkXCIsIGNvbnRlbnQ6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcInR3aXR0ZXI6dGl0bGVcIiwgY29udGVudDogdGl0bGUgfV0sXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwidHdpdHRlcjpkZXNjcmlwdGlvblwiLCBjb250ZW50OiBkZXNjcmlwdGlvbiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJ0d2l0dGVyOmltYWdlXCIsIGNvbnRlbnQ6IHNvY2lhbEltYWdlVXJsIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcInR3aXR0ZXI6aW1hZ2U6YWx0XCIsIGNvbnRlbnQ6IFwiV29ya0J1ZGR5IFx1NUI5RVx1NjIxOFx1ODRERFx1NzZBRVx1NEU2Nlx1OTk5Nlx1OTg3NVx1OTg4NFx1ODlDOFwiIH1dLFxuICAgIFtcbiAgICAgIFwic2NyaXB0XCIsXG4gICAgICB7IHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiIH0sXG4gICAgICBzZXJpYWxpemVKc29uTGQoeyBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsIFwiQGdyYXBoXCI6IGpzb25MZEdyYXBoIH0pLFxuICAgIF0sXG4gIF07XG5cbiAgaWYgKG1vZGlmaWVkVGltZSAmJiBpc0JsdWVib29rUGFnZSkge1xuICAgIGhlYWQucHVzaChbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHsgcHJvcGVydHk6IFwiYXJ0aWNsZTptb2RpZmllZF90aW1lXCIsIGNvbnRlbnQ6IG1vZGlmaWVkVGltZSB9LFxuICAgIF0pO1xuICB9XG5cbiAgcmV0dXJuIGhlYWQ7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStaLFNBQVMsb0JBQW9COzs7QUNBN0IsU0FBUyxjQUFjLG1CQUFtQjtBQUN6YyxTQUFTLHFCQUFxQjtBQUQ2TyxJQUFNLDJDQUEyQztBQUs1VCxJQUFNLFFBQVEsSUFBSSxhQUNoQixVQUFVLGFBQWEsU0FBUyxJQUFJLENBQUMsWUFBWSxRQUFRLEtBQUssQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEdBQUc7QUFFL0UsSUFBTSxRQUFRO0FBQ2QsSUFBTSxRQUFRO0FBQ2QsSUFBTSxRQUFRO0FBQ2QsSUFBTSxRQUFRO0FBQ2QsSUFBTSxXQUFXO0FBRWpCLElBQU0sT0FBTyxDQUFDLFdBQW1CLE9BQU8sZUFBeUM7QUFBQSxFQUMvRTtBQUFBLEVBQ0EsTUFBTSxNQUFNLFNBQVM7QUFDdkI7QUFFQSxJQUFNLFFBQVEsQ0FDWixRQUNBLFdBQ0EsT0FBTyxlQUN1QjtBQUFBLEVBQzlCO0FBQUEsRUFDQSxNQUFNLE1BQU0sUUFBUSxTQUFTO0FBQy9CO0FBRU8sSUFBTSxrQkFBd0M7QUFBQSxFQUNuRCxjQUFjO0FBQUEsSUFDWixFQUFFLE1BQU0sa0NBQVMsTUFBTSxhQUFhO0FBQUEsSUFDcEM7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxR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QUNBLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gsS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLGdCQUFNLE1BQU0sSUFBSTtBQUFBLE1BQ3hCLEVBQUUsTUFBTSw0QkFBUSxNQUFNLGFBQWE7QUFBQSxNQUNuQyxFQUFFLE1BQU0sc0JBQU8sTUFBTSxVQUFVO0FBQUEsTUFDL0IsRUFBRSxNQUFNLDRCQUFRLE1BQU0sU0FBUztBQUFBLE1BQy9CLEVBQUUsTUFBTSw0QkFBUSxNQUFNLGlCQUFpQjtBQUFBLElBQ3pDO0FBQUEsSUFDQSxTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUFBLE1BQ1osT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixlQUFlO0FBQUEsUUFDYixXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInJlYWRGaWxlU3luYyIsICJzaXRlVXJsIiwgInJlYWRGaWxlU3luYyJdCn0K

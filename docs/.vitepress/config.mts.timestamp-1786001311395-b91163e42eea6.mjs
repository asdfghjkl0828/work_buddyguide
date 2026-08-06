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
      { text: "\u9605\u8BFB\u6307\u5357", link: "/reading-guide" },
      {
        text: "\u4EA4\u6D41\u7FA4",
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
      message: "\u4EE5\u771F\u5B9E\u4EFB\u52A1\u4E3A\u4E3B\u7EBF\u7684 WorkBuddy \u793E\u533A\u5B9E\u6218\u8BFB\u672C"
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL3NpZGViYXIudHMiLCAiZG9jcy8udml0ZXByZXNzL21lcm1haWQtbWFya2Rvd24udHMiLCAiZG9jcy8udml0ZXByZXNzL3Nlby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXDExMVxcXFwyMDI2LTA4LTA2LTE0LTQzLTU0XFxcXFdvcmtCdWRkeUd1aWRlXFxcXFdvcmtCdWRkeUd1aWRlLW1haW5cXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwxMTFcXFxcMjAyNi0wOC0wNi0xNC00My01NFxcXFxXb3JrQnVkZHlHdWlkZVxcXFxXb3JrQnVkZHlHdWlkZS1tYWluXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8xMTEvMjAyNi0wOC0wNi0xNC00My01NC9Xb3JrQnVkZHlHdWlkZS9Xb3JrQnVkZHlHdWlkZS1tYWluL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xuXG5pbXBvcnQgeyBzaXRlU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZU1lcm1haWRNYXJrZG93biB9IGZyb20gXCIuL21lcm1haWQtbWFya2Rvd25cIjtcbmltcG9ydCB7IGNyZWF0ZVBhZ2VEZXNjcmlwdGlvbiwgY3JlYXRlU2VvSGVhZCB9IGZyb20gXCIuL3Nlb1wiO1xuXG5jb25zdCBzaXRlVXJsID0gcHJvY2Vzcy5lbnYuVklURVBSRVNTX1NJVEVfVVJMIHx8IFwiaHR0cHM6Ly93b3JrYnVkZHkuaG9tZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBsYW5nOiBcInpoLUNOXCIsXG4gICAgdGl0bGU6IFwiV29ya0J1ZGR5IFx1NUI5RVx1NjIxOFx1ODRERFx1NzZBRVx1NEU2NlwiLFxuICAgIHRpdGxlVGVtcGxhdGU6IFwiOnRpdGxlIFx1MDBCNyBXb3JrQnVkZHkgXHU1QjlFXHU2MjE4XHU4NEREXHU3NkFFXHU0RTY2XCIsXG4gICAgZGVzY3JpcHRpb246IFwiXHU0RUNFXHU1Qjg5XHU4OEM1XHU0RjdGXHU3NTI4XHU1MjMwIEFJIFx1NURFNVx1NEY1Q1x1N0NGQlx1N0VERlx1RkYxQTI3IFx1N0FFMCBXb3JrQnVkZHkgXHU1QjlFXHU2MjE4XHU2MzA3XHU1MzU3XHU0RTBFXHU1NkUyXHU5NjFGXHU4NDNEXHU1NzMwXHU2NUI5XHU2Q0Q1XHUzMDAyXCIsXG4gICAgY2xlYW5VcmxzOiB0cnVlLFxuICAgIGxhc3RVcGRhdGVkOiB0cnVlLFxuICAgIHNyY0V4Y2x1ZGU6IFtcIioqL3NvdXJjZS5tZFwiLCBcInBsYW5zLyoqXCJdLFxuICAgIHNpdGVtYXA6IHtcbiAgICAgIGhvc3RuYW1lOiBzaXRlVXJsLFxuICAgIH0sXG4gICAgdHJhbnNmb3JtUGFnZURhdGE6IChwYWdlRGF0YSwgeyBzaXRlQ29uZmlnIH0pID0+IHtcbiAgICAgIGlmIChwYWdlRGF0YS5yZWxhdGl2ZVBhdGguc3RhcnRzV2l0aChcImNhc2VzL1wiKSkge1xuICAgICAgICBwYWdlRGF0YS5mcm9udG1hdHRlci5hc2lkZSA9IGZhbHNlO1xuICAgICAgICBwYWdlRGF0YS5mcm9udG1hdHRlci5vdXRsaW5lID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBjcmVhdGVQYWdlRGVzY3JpcHRpb24oc2l0ZUNvbmZpZy5zcmNEaXIsIHBhZ2VEYXRhKSxcbiAgICAgIH07XG4gICAgfSxcbiAgICB0cmFuc2Zvcm1IZWFkOiAoY29udGV4dCkgPT4gY3JlYXRlU2VvSGVhZChzaXRlVXJsLCBjb250ZXh0KSxcbiAgICBoZWFkOiBbXG4gICAgICBbXCJsaW5rXCIsIHsgcmVsOiBcImljb25cIiwgdHlwZTogXCJpbWFnZS9zdmcreG1sXCIsIGhyZWY6IFwiL2Zhdmljb24uc3ZnXCIgfV0sXG4gICAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJ0aGVtZS1jb2xvclwiLCBjb250ZW50OiBcIiNkOGYyMzhcIiB9XSxcbiAgICAgIFtcbiAgICAgICAgXCJtZXRhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImJhaWR1LXNpdGUtdmVyaWZpY2F0aW9uXCIsXG4gICAgICAgICAgY29udGVudDogXCJjb2RldmEtUkYxWnFMNGc5MFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgXCJtZXRhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImtleXdvcmRzXCIsXG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgIFwiV29ya0J1ZGR5LFdvcmtCdWRkeSBcdTY1NTlcdTdBMEIsQUkgQWdlbnQsQUkgXHU1REU1XHU0RjVDXHU3Q0ZCXHU3RURGLFNraWxscyxNQ1AsXHU4MUVBXHU1MkE4XHU1MzE2LFx1NTkxQVx1NjY3QVx1ODBGRFx1NEY1MyxcdTgwNENcdTU3M0EgQUlcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgXSxcbiAgICBtYXJrZG93bjoge1xuICAgICAgY29uZmlnOiBjb25maWd1cmVNZXJtYWlkTWFya2Rvd24sXG4gICAgICBpbWFnZToge1xuICAgICAgICBsYXp5TG9hZGluZzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB0aGVtZToge1xuICAgICAgICBsaWdodDogXCJnaXRodWItbGlnaHRcIixcbiAgICAgICAgZGFyazogXCJnaXRodWItZGFya1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRoZW1lQ29uZmlnOiB7XG4gICAgICBzaXRlVGl0bGU6IFwiV29ya0J1ZGR5IEd1aWRlXCIsXG4gICAgICBuYXY6IFtcbiAgICAgICAgeyB0ZXh0OiBcIlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9cIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHU1RjAwXHU1OUNCXHU5NjA1XHU4QkZCXCIsIGxpbms6IFwiL2JsdWVib29rL1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTY4NDhcdTRGOEJcdTk2QzZcIiwgbGluazogXCIvY2FzZXMvXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlx1NUUyRVx1NEY2MFx1ODlFM1x1NTFCM1wiLCBsaW5rOiBcIi9oZWxwL1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTk2MDVcdThCRkJcdTYzMDdcdTUzNTdcIiwgbGluazogXCIvcmVhZGluZy1ndWlkZVwiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlx1NEVBNFx1NkQ0MVx1N0ZBNFwiLFxuICAgICAgICAgIGl0ZW1zOiBbeyBjb21wb25lbnQ6IFwiR3JvdXBRck1lbnVcIiB9XSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzaWRlYmFyOiBzaXRlU2lkZWJhcixcbiAgICAgIHNlYXJjaDoge1xuICAgICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgICAgfSxcbiAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgbGV2ZWw6IFsyLCAzXSxcbiAgICAgICAgbGFiZWw6IFwiXHU2NzJDXHU5ODc1XHU3NkVFXHU1RjU1XCIsXG4gICAgICB9LFxuICAgICAgZG9jRm9vdGVyOiB7XG4gICAgICAgIHByZXY6IFwiXHU0RTBBXHU0RTAwXHU3QkM3XCIsXG4gICAgICAgIG5leHQ6IFwiXHU0RTBCXHU0RTAwXHU3QkM3XCIsXG4gICAgICB9LFxuICAgICAgbGFzdFVwZGF0ZWQ6IHtcbiAgICAgICAgdGV4dDogXCJcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcIixcbiAgICAgICAgZm9ybWF0T3B0aW9uczoge1xuICAgICAgICAgIGRhdGVTdHlsZTogXCJtZWRpdW1cIixcbiAgICAgICAgICB0aW1lU3R5bGU6IFwic2hvcnRcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmb290ZXI6IHtcbiAgICAgICAgbWVzc2FnZTogXCJcdTRFRTVcdTc3MUZcdTVCOUVcdTRFRkJcdTUyQTFcdTRFM0FcdTRFM0JcdTdFQkZcdTc2ODQgV29ya0J1ZGR5IFx1NzkzRVx1NTMzQVx1NUI5RVx1NjIxOFx1OEJGQlx1NjcyQ1wiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcMTExXFxcXDIwMjYtMDgtMDYtMTQtNDMtNTRcXFxcV29ya0J1ZGR5R3VpZGVcXFxcV29ya0J1ZGR5R3VpZGUtbWFpblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXDExMVxcXFwyMDI2LTA4LTA2LTE0LTQzLTU0XFxcXFdvcmtCdWRkeUd1aWRlXFxcXFdvcmtCdWRkeUd1aWRlLW1haW5cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LzExMS8yMDI2LTA4LTA2LTE0LTQzLTU0L1dvcmtCdWRkeUd1aWRlL1dvcmtCdWRkeUd1aWRlLW1haW4vZG9jcy8udml0ZXByZXNzL3NpZGViYXIudHNcIjtpbXBvcnQgeyByZWFkRmlsZVN5bmMsIHJlYWRkaXJTeW5jIH0gZnJvbSBcIm5vZGU6ZnNcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuaW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tIFwidml0ZXByZXNzXCI7XG5cbmNvbnN0IHJvdXRlID0gKC4uLnNlZ21lbnRzOiBzdHJpbmdbXSk6IHN0cmluZyA9PlxuICBlbmNvZGVVUkkoYC9ibHVlYm9vay8ke3NlZ21lbnRzLm1hcCgoc2VnbWVudCkgPT4gc2VnbWVudC50cmltKCkpLmpvaW4oXCIvXCIpfS9gKTtcblxuY29uc3QgcGFydDEgPSBcIlx1N0IyQ1x1NEUwMFx1N0JDNyBcdTRGN0ZcdTc1MjhcdTYyNEJcdTUxOENcdUZGMUFcdTUxNDhcdTYyOEEgV29ya0J1ZGR5IFx1NzUyOFx1OEQ3N1x1Njc2NVwiO1xuY29uc3QgcGFydDIgPSBcIlx1N0IyQ1x1NEU4Q1x1N0JDNyBcdTY4NDhcdTRGOEJcdTdCQzdcdUZGMUFcdTRFQ0VcdTRFMDBcdTk4NzlcdTRFRkJcdTUyQTFcdTUyMzBcdTRFMDBcdTY1MkYgQUkgXHU1NkUyXHU5NjFGXCI7XG5jb25zdCBwYXJ0MyA9IFwiXHU3QjJDXHU0RTA5XHU3QkM3IFx1OEZEQlx1OTYzNlx1N0JDN1x1RkYxQVx1NjI4QVx1Njg0OFx1NEY4Qlx1NTNEOFx1NjIxMFx1ODFFQVx1NURGMVx1NzY4NFx1NURFNVx1NEY1Q1x1N0NGQlx1N0VERlwiO1xuY29uc3QgcGFydDQgPSBcIlx1N0IyQ1x1NTZEQlx1N0JDNyBcdTVDOTdcdTRGNERcdTRFMEVcdTg4NENcdTRFMUFcdTg0M0RcdTU3MzBcIjtcbmNvbnN0IGFwcGVuZGl4ID0gXCJcdTk2NDRcdTVGNTVcIjtcblxuY29uc3QgaXRlbSA9IChkaXJlY3Rvcnk6IHN0cmluZywgdGV4dCA9IGRpcmVjdG9yeSk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbSA9PiAoe1xuICB0ZXh0LFxuICBsaW5rOiByb3V0ZShkaXJlY3RvcnkpLFxufSk7XG5cbmNvbnN0IGNoaWxkID0gKFxuICBwYXJlbnQ6IHN0cmluZyxcbiAgZGlyZWN0b3J5OiBzdHJpbmcsXG4gIHRleHQgPSBkaXJlY3RvcnksXG4pOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW0gPT4gKHtcbiAgdGV4dCxcbiAgbGluazogcm91dGUocGFyZW50LCBkaXJlY3RvcnkpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBibHVlYm9va1NpZGViYXI6IERlZmF1bHRUaGVtZS5TaWRlYmFyID0ge1xuICBcIi9ibHVlYm9vay9cIjogW1xuICAgIHsgdGV4dDogXCJcdTg0RERcdTc2QUVcdTRFNjZcdTYwM0JcdTg5QzhcIiwgbGluazogXCIvYmx1ZWJvb2svXCIgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1N0IyQ1x1NEUwMFx1N0JDNyBcdTAwQjcgXHU0RjdGXHU3NTI4XHU2MjRCXHU1MThDXCIsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgaXRlbShwYXJ0MSwgXCJcdTY3MkNcdTdCQzdcdTVCRkNcdThCRkJcIiksXG4gICAgICAgIGNoaWxkKHBhcnQxLCBcIlx1N0IyQyAxIFx1N0FFMCBcdTUyMURcdThCQzYgV29ya0J1ZGR5XCIpLFxuICAgICAgICBjaGlsZChwYXJ0MSwgXCJcdTdCMkMgMiBcdTdBRTAgV29ya0J1ZGR5XHU3Njg0XHU0RTBCXHU4RjdEXHUzMDAxXHU1Qjg5XHU4OEM1XHUzMDAxXHU3NjdCXHU1RjU1XHU0RTBFXHU2NkY0XHU2NUIwXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MSwgXCJcdTdCMkMgMyBcdTdBRTAgV29ya0J1ZGR5IFx1NzY4NFx1NEUzQlx1NzU0Q1x1OTc2Mlx1MzAwMVx1NEVGQlx1NTJBMVx1NEUwRVx1NURFNVx1NEY1Q1x1NTMzQVwiKSxcbiAgICAgICAgY2hpbGQocGFydDEsIFwiXHU3QjJDIDQgXHU3QUUwIFx1NUZFQlx1OTAxRlx1NUI4Q1x1NjIxMFx1N0IyQ1x1NEUwMFx1NEUyQSBXb3JrQnVkZHkgXHU0RUZCXHU1MkExXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MSwgXCJcdTdCMkMgNSBcdTdBRTAgV29ya0J1ZGR5XHU1MkEwXHU4RjdEXHU0RTAwXHU0RTJBXHU3NzFGXHU2QjYzXHU3NTI4XHU1Rjk3XHU0RTBBXHU3Njg0IFNraWxsXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MSwgXCJcdTdCMkMgNiBcdTdBRTAgV29ya0J1ZGR5XHU3Njg0XHU0RTEzXHU1QkI2XHU1NDhDXHU0RTEzXHU1QkI2XHU1NkUyXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MSwgXCJcdTdCMkMgNyBcdTdBRTAgV29ya0J1ZGR5IFx1NEY3Rlx1NzUyOFx1OEZERVx1NjNBNVx1NTY2OFwiKSxcbiAgICAgICAgY2hpbGQocGFydDEsIFwiXHU3QjJDIDggXHU3QUUwIFdvcmtCdWRkeSBcdTYzQTVcdTUxNjVcdTVDMEZcdTdBMEJcdTVFOEZcdTRFMEUgSU0gXHU1MkE5XHU3NDA2XCIpLFxuICAgICAgICBjaGlsZChwYXJ0MSwgXCJcdTdCMkMgOSBcdTdBRTAgXHU1OTgyXHU0RjU1XHU2M0E1XHU1MTY1XHU1OTE2XHU5MEU4IEFQSVwiKSxcbiAgICAgICAgY2hpbGQocGFydDEsIFwiXHU3QjJDIDEwIFx1N0FFMCBXb3JrQnVkZHkgXHU4MUVBXHU1MkE4XHU1MzE2XHU0RUZCXHU1MkExXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MSwgXCJcdThCRkVcdTU5MTZcdTk2MDVcdThCRkJcdUZGMUFcdTRFMDBcdTdBRTBcdTc3MEJcdTYxQzIgQUkgXHU1REU1XHU0RjVDXHU3Q0ZCXHU3RURGXCIpLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU3QjJDXHU0RThDXHU3QkM3IFx1MDBCNyBcdTVCOUVcdTYyMThcdTY4NDhcdTRGOEJcIixcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICBpdGVtKHBhcnQyLCBcIlx1NjcyQ1x1N0JDN1x1NUJGQ1x1OEJGQlwiKSxcbiAgICAgICAgY2hpbGQocGFydDIsIFwiXHU3QjJDIDExIFx1N0FFMCBcdTUyOUVcdTUxNkNcdTRFMDlcdTRFRjZcdTU5NTdcdUZGMUFXb3JkXHUzMDAxRXhjZWxcdTMwMDFQUFRcIiksXG4gICAgICAgIGNoaWxkKHBhcnQyLCBcIlx1N0IyQyAxMiBcdTdBRTAgXHU0RUNFXHU2NTc0XHU3NDA2XHU2ODRDXHU5NzYyXHU2NTg3XHU0RUY2XHU4RkQ5XHU0RTlCXHU1QzBGXHU0RThCXHU1MDVBXHU4RDc3XCIpLFxuICAgICAgICBjaGlsZChwYXJ0MiwgXCJcdTdCMkMgMTMgXHU3QUUwIFx1OEZEQ1x1N0EwQlx1NjNBN1x1NTIzNlx1NEY2MFx1NzY4NFx1NzUzNVx1ODExMVx1RkYwQ1x1NEUwRFx1NzUyOFx1NTNEMVx1NjEwMVx1NEUwRFx1NTcyOFx1NzUzNVx1ODExMVx1NTI0RFwiKSxcbiAgICAgICAgY2hpbGQocGFydDIsIFwiXHU3QjJDIDE0IFx1N0FFMCBcdTc1MUZcdTZEM0JcdTUyQTlcdTYyNEJcdTc2ODRcdTRFRjdcdTUwM0NcdUZGMENcdTY2MkZcdTUxQ0ZcdTVDMTFcdTc0MTBcdTc4OEVcIiksXG4gICAgICAgIGNoaWxkKHBhcnQyLCBcIlx1N0IyQyAxNSBcdTdBRTAgXHU4RDQ0XHU4QkFGXHU2NTc0XHU1NDA4XHVGRjFBXHU2MjhBXHU0RkUxXHU2MDZGXHU2RDQxXHU1M0Q4XHU2MjEwXHU2QkNGXHU2NUU1XHU5MDFBXHU3N0U1XCIpLFxuICAgICAgICBjaGlsZChwYXJ0MiwgXCJcdTdCMkMgMTYgXHU3QUUwIFx1NjUzNlx1ODVDRlx1NEUwRFx1NjYyRlx1NzdFNVx1OEJDNlx1N0JBMVx1NzQwNlx1RkYwQ1x1ODBGRFx1NTE4RFx1NkIyMVx1NzUyOFx1OEQ3N1x1Njc2NVx1NjI0RFx1NjYyRlwiKSxcbiAgICAgICAgY2hpbGQocGFydDIsIFwiXHU3QjJDIDE3IFx1N0FFMCBcdTRGMUFcdThCQUVcdTdFRDNcdTY3NUZcdTRFMERcdTY2MkZcdTdFQzhcdTcwQjlcdUZGMENcdTVERTVcdTRGNUNcdTYyNERcdTUyMUFcdTUyMUFcdTVGMDBcdTU5Q0JcIiksXG4gICAgICAgIGNoaWxkKHBhcnQyLCBcIlx1N0IyQyAxOCBcdTdBRTAgXHU2MjhBXHU2Mjk1XHU4RDQ0XHU1MjA2XHU2NzkwXHU1M0Q4XHU2MjEwXHU0RjYwXHU3Njg0XHU2NUU1XHU1RTM4XCIpLFxuICAgICAgICBjaGlsZChwYXJ0MiwgXCJcdTdCMkMgMTkgXHU3QUUwIFx1NEUwMFx1NTNFNVx1OEJERFx1NTNFQ1x1NTUyNCBBSSBcdTg5QzZcdTk4OTFcdTU2RTJcdTk2MUZcIiksXG4gICAgICAgIGNoaWxkKHBhcnQyLCBcIlx1N0IyQyAyMCBcdTdBRTAgXHU4MUVBXHU1QTkyXHU0RjUzXHU0RTBEXHU1M0VBXHU2NjJGXHU5NzYwXHU1MkFBXHU1MjlCXHVGRjBDXHU4MDBDXHU2NjJGXHU0RTAwXHU2NzYxXHU1ODlFXHU5NTdGXHU5NUVEXHU3M0FGXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MiwgXCJcdTdCMkMgMjEgXHU3QUUwIFdvcmtCdWRkeVx1NEU1Rlx1ODBGRFx1NTA1QUdFT1x1NEUxM1x1NUJCNlwiKSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1N0IyQ1x1NEUwOVx1N0JDNyBcdTAwQjcgXHU4RkRCXHU5NjM2XHU3Q0ZCXHU3RURGXCIsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgaXRlbShwYXJ0MywgXCJcdTY3MkNcdTdCQzdcdTVCRkNcdThCRkJcIiksXG4gICAgICAgIGNoaWxkKHBhcnQzLCBcIlx1N0IyQyAyMiBcdTdBRTAgXHU2MjUzXHU5MDIwc2tpbGxcdUZGMUFcdTVDMDZcdTRFNjZcdTU0OENcdTg5QzZcdTk4OTFcdTg0QjhcdTk5OEZcdTRFM0FcdTUzRUZcdTYyNjdcdTg4NEMgU2tpbGxcIiksXG4gICAgICAgIGNoaWxkKHBhcnQzLCBcIlx1N0IyQyAyMyBcdTdBRTAgXHU1MTc2XHU0RUQ2XHU3NTI4XHU2Q0Q1XHU4ODY1XHU1MTQ1XHVGRjFBV29ya0J1ZGR5IFx1NUI5RVx1NjRDRFx1Njg0OFx1NEY4Qlx1OTZDNlwiKSxcbiAgICAgICAgY2hpbGQocGFydDMsIFwiXHU3QjJDIDI0IFx1N0FFMCBcdTU5ODJcdTRGNTVcdThGREJcdTg4NENcdTU5MUEgQWdlbnQgXHU3Q0ZCXHU3RURGXHU4QkJFXHU4QkExXCIpLFxuICAgICAgICBjaGlsZChwYXJ0MywgXCJcdTdCMkMgMjUgXHU3QUUwIFx1ODFFQVx1NTJBOFx1NTMxNlx1NURFNVx1NEY1Q1x1NkQ0MVx1NzY4NFx1NTNFRlx1OTc2MFx1NjAyN1wiKSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1N0IyQ1x1NTZEQlx1N0JDNyBcdTAwQjcgXHU1Qzk3XHU0RjREXHU0RTBFXHU4ODRDXHU0RTFBXCIsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgaXRlbShwYXJ0NCwgXCJcdTY3MkNcdTdCQzdcdTVCRkNcdThCRkJcIiksXG4gICAgICAgIGNoaWxkKHBhcnQ0LCBcIlx1N0IyQyAyNiBcdTdBRTAgXHU1Qzk3XHU0RjREXHU4REVGXHU3RUJGXHU1NkZFXHVGRjFBXHU0RTBEXHU1NDBDXHU1Qzk3XHU0RjREXHU1OTgyXHU0RjU1XHU2MjhBIFdvcmtCdWRkeSBcdTc1MjhcdTZERjFcIiksXG4gICAgICAgIGNoaWxkKHBhcnQ0LCBcIlx1N0IyQyAyNyBcdTdBRTAgXHU4ODRDXHU0RTFBXHU4REVGXHU3RUJGXHU1NkZFXHVGRjFBXHU0RUNFXHU5MDFBXHU3NTI4XHU4MEZEXHU1MjlCXHU1MjMwXHU4ODRDXHU0RTFBXHU1REU1XHU0RjVDXHU2RDQxXCIpLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU5NjQ0XHU1RjU1XCIsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgaXRlbShhcHBlbmRpeCwgXCJcdTk2NDRcdTVGNTVcdTVCRkNcdThCRkJcIiksXG4gICAgICAgIGNoaWxkKGFwcGVuZGl4LCBcIlx1OTY0NFx1NUY1NSBBIFx1NUUzOFx1NzUyOFx1NjMwN1x1NEVFNFx1NkEyMVx1Njc3RlwiKSxcbiAgICAgICAgY2hpbGQoYXBwZW5kaXgsIFwiXHU5NjQ0XHU1RjU1IEIgXHU1NzNBXHU2NjZGXHU5MDFGXHU2N0U1XHU4ODY4XCIpLFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgY2FzZXNEaXJlY3RvcnkgPSBmaWxlVVJMVG9QYXRoKFxuICBuZXcgVVJMKFwiLi4vY2FzZXMvc3VibWlzc2lvbnMvXCIsIGltcG9ydC5tZXRhLnVybCksXG4pO1xuXG5jb25zdCBjYXNlSXRlbXMgPSByZWFkZGlyU3luYyhjYXNlc0RpcmVjdG9yeSwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gIC5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5pc0RpcmVjdG9yeSgpKVxuICAubWFwKChlbnRyeSkgPT4ge1xuICAgIGNvbnN0IG1hcmtkb3duID0gcmVhZEZpbGVTeW5jKFxuICAgICAgbmV3IFVSTChgLi4vY2FzZXMvc3VibWlzc2lvbnMvJHtlbnRyeS5uYW1lfS9pbmRleC5tZGAsIGltcG9ydC5tZXRhLnVybCksXG4gICAgICBcInV0ZjhcIixcbiAgICApO1xuICAgIGNvbnN0IGZyb250bWF0dGVyID0gbWFya2Rvd24ubWF0Y2goL14tLS1cXHMqXFxuKFtcXHNcXFNdKj8pXFxuLS0tLyk/LlsxXSB8fCBcIlwiO1xuICAgIGNvbnN0IHJlYWRGaWVsZCA9IChmaWVsZDogc3RyaW5nKTogc3RyaW5nID0+XG4gICAgICBmcm9udG1hdHRlclxuICAgICAgICAubWF0Y2gobmV3IFJlZ0V4cChgXiR7ZmllbGR9OlxcXFxzKiguKykkYCwgXCJtXCIpKT8uWzFdXG4gICAgICAgID8udHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9eWydcIl18WydcIl0kL2csIFwiXCIpIHx8IFwiXCI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogcmVhZEZpZWxkKFwiZGF0ZVwiKSxcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdGV4dDogcmVhZEZpZWxkKFwidGl0bGVcIikgfHwgZW50cnkubmFtZSxcbiAgICAgICAgbGluazogZW5jb2RlVVJJKGAvY2FzZXMvc3VibWlzc2lvbnMvJHtlbnRyeS5uYW1lfS9gKSxcbiAgICAgIH0gc2F0aXNmaWVzIERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbSxcbiAgICB9O1xuICB9KVxuICAuc29ydCgobGVmdCwgcmlnaHQpID0+IGxlZnQuZGF0ZS5sb2NhbGVDb21wYXJlKHJpZ2h0LmRhdGUpKVxuICAubWFwKCh7IGl0ZW06IGNhc2VJdGVtIH0pID0+IGNhc2VJdGVtKTtcblxuY29uc3QgY2FzZXNTaWRlYmFyOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSA9IFtcbiAgeyB0ZXh0OiBcIlx1Njg0OFx1NEY4Qlx1OTZDNlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9jYXNlcy9cIiB9LFxuICB7IHRleHQ6IFwiXHU1OTgyXHU0RjU1XHU2M0QwXHU0RUE0IENhc2VcIiwgbGluazogXCIvY29tbXVuaXR5L2Nhc2UtY29udHJpYnV0aW5nXCIgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU3OTNFXHU1MzNBIENhc2VcIixcbiAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgIGl0ZW1zOiBjYXNlSXRlbXMsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2l0ZVNpZGViYXI6IERlZmF1bHRUaGVtZS5TaWRlYmFyID0ge1xuICAuLi5ibHVlYm9va1NpZGViYXIsXG4gIFwiL2Nhc2VzL1wiOiBjYXNlc1NpZGViYXIsXG4gIFwiL2NvbW11bml0eS9jYXNlLWNvbnRyaWJ1dGluZ1wiOiBjYXNlc1NpZGViYXIsXG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwxMTFcXFxcMjAyNi0wOC0wNi0xNC00My01NFxcXFxXb3JrQnVkZHlHdWlkZVxcXFxXb3JrQnVkZHlHdWlkZS1tYWluXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcMTExXFxcXDIwMjYtMDgtMDYtMTQtNDMtNTRcXFxcV29ya0J1ZGR5R3VpZGVcXFxcV29ya0J1ZGR5R3VpZGUtbWFpblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcbWVybWFpZC1tYXJrZG93bi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovMTExLzIwMjYtMDgtMDYtMTQtNDMtNTQvV29ya0J1ZGR5R3VpZGUvV29ya0J1ZGR5R3VpZGUtbWFpbi9kb2NzLy52aXRlcHJlc3MvbWVybWFpZC1tYXJrZG93bi50c1wiO2ltcG9ydCB0eXBlIE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVNZXJtYWlkTWFya2Rvd24obWQ6IE1hcmtkb3duSXQpIHtcbiAgY29uc3QgZmFsbGJhY2tGZW5jZSA9IG1kLnJlbmRlcmVyLnJ1bGVzLmZlbmNlPy5iaW5kKG1kLnJlbmRlcmVyLnJ1bGVzKTtcblxuICBtZC5yZW5kZXJlci5ydWxlcy5mZW5jZSA9ICh0b2tlbnMsIGluZGV4LCBvcHRpb25zLCBlbnYsIHNlbGYpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpbmRleF07XG5cbiAgICBpZiAodG9rZW4uaW5mby50cmltKCkgIT09IFwibWVybWFpZFwiKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2tGZW5jZT8uKHRva2VucywgaW5kZXgsIG9wdGlvbnMsIGVudiwgc2VsZikgPz8gc2VsZi5yZW5kZXJUb2tlbih0b2tlbnMsIGluZGV4LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBjb25zdCBncmFwaCA9IGVuY29kZVVSSUNvbXBvbmVudCh0b2tlbi5jb250ZW50KTtcbiAgICByZXR1cm4gYDxNZXJtYWlkRGlhZ3JhbSBncmFwaD1cIiR7Z3JhcGh9XCIgLz5gO1xuICB9O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwxMTFcXFxcMjAyNi0wOC0wNi0xNC00My01NFxcXFxXb3JrQnVkZHlHdWlkZVxcXFxXb3JrQnVkZHlHdWlkZS1tYWluXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcMTExXFxcXDIwMjYtMDgtMDYtMTQtNDMtNTRcXFxcV29ya0J1ZGR5R3VpZGVcXFxcV29ya0J1ZGR5R3VpZGUtbWFpblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcc2VvLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8xMTEvMjAyNi0wOC0wNi0xNC00My01NC9Xb3JrQnVkZHlHdWlkZS9Xb3JrQnVkZHlHdWlkZS1tYWluL2RvY3MvLnZpdGVwcmVzcy9zZW8udHNcIjtpbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwibm9kZTpmc1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJub2RlOnBhdGhcIjtcblxuaW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnLCBQYWdlRGF0YSwgVHJhbnNmb3JtQ29udGV4dCB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcblxuY29uc3QgU0lURV9OQU1FID0gXCJXb3JrQnVkZHkgXHU1QjlFXHU2MjE4XHU4NEREXHU3NkFFXHU0RTY2XCI7XG5jb25zdCBTSVRFX0FMVEVSTkFURV9OQU1FID0gXCJXb3JrQnVkZHkgR3VpZGVcIjtcbmNvbnN0IE9SR0FOSVpBVElPTl9OQU1FID0gXCJXb3JrQnVkZHkgXHU1QjlFXHU2MjE4XHU4NEREXHU3NkFFXHU0RTY2XCI7XG5jb25zdCBERUZBVUxUX0RFU0NSSVBUSU9OID1cbiAgXCJcdTRFQ0VcdTVCODlcdTg4QzVcdTRGN0ZcdTc1MjhcdTUyMzAgQUkgXHU1REU1XHU0RjVDXHU3Q0ZCXHU3RURGXHVGRjFBMjcgXHU3QUUwIFdvcmtCdWRkeSBcdTVCOUVcdTYyMThcdTYzMDdcdTUzNTdcdTRFMEVcdTU2RTJcdTk2MUZcdTg0M0RcdTU3MzBcdTY1QjlcdTZDRDVcdTMwMDJcIjtcblxuZnVuY3Rpb24gY2xlYW5QYWdlUGF0aChwYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAocGFnZSA9PT0gXCJpbmRleC5tZFwiKSByZXR1cm4gXCIvXCI7XG4gIGlmIChwYWdlLmVuZHNXaXRoKFwiL2luZGV4Lm1kXCIpKSB7XG4gICAgcmV0dXJuIGAvJHtwYWdlLnNsaWNlKDAsIC1cImluZGV4Lm1kXCIubGVuZ3RoKX1gO1xuICB9XG5cbiAgcmV0dXJuIGAvJHtwYWdlLnJlcGxhY2UoL1xcLm1kJC8sIFwiXCIpfWA7XG59XG5cbmZ1bmN0aW9uIGFic29sdXRlUGFnZVVybChzaXRlVXJsOiBzdHJpbmcsIHBhZ2U6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBuZXcgVVJMKGNsZWFuUGFnZVBhdGgocGFnZSksIGAke3NpdGVVcmx9L2ApLmhyZWY7XG59XG5cbmZ1bmN0aW9uIHN0cmlwTWFya2Rvd24odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKC8hXFxbW15cXF1dKlxcXVxcKFteKV0qXFwpL2csIFwiXCIpXG4gICAgLnJlcGxhY2UoL1xcWyhbXlxcXV0rKVxcXVxcKFteKV0qXFwpL2csIFwiJDFcIilcbiAgICAucmVwbGFjZSgvPFtePl0rPi9nLCBcIlwiKVxuICAgIC5yZXBsYWNlKC9bYCpffl0vZywgXCJcIilcbiAgICAucmVwbGFjZSgvXFxcXChbXFxcXGAqe31cXFtcXF0oKSMrXFwtLiFfPl0pL2csIFwiJDFcIilcbiAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcbiAgICAudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVIdG1sRW50aXRpZXModmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKC8mbmJzcDsvZywgXCIgXCIpXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csIFwiJlwiKVxuICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJylcbiAgICAucmVwbGFjZSgvJiMzOTt8JmFwb3M7L2csIFwiJ1wiKVxuICAgIC5yZXBsYWNlKC8mbHQ7L2csIFwiPFwiKVxuICAgIC5yZXBsYWNlKC8mZ3Q7L2csIFwiPlwiKVxuICAgIC5yZXBsYWNlKC8mIyhcXGQrKTsvZywgKF8sIGNvZGVQb2ludDogc3RyaW5nKSA9PlxuICAgICAgU3RyaW5nLmZyb21Db2RlUG9pbnQoTnVtYmVyKGNvZGVQb2ludCkpLFxuICAgIClcbiAgICAucmVwbGFjZSgvJiN4KFswLTlhLWZdKyk7L2dpLCAoXywgY29kZVBvaW50OiBzdHJpbmcpID0+XG4gICAgICBTdHJpbmcuZnJvbUNvZGVQb2ludChOdW1iZXIucGFyc2VJbnQoY29kZVBvaW50LCAxNikpLFxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlRGVzY3JpcHRpb24odmFsdWU6IHN0cmluZywgbWF4TGVuZ3RoID0gMTU1KTogc3RyaW5nIHtcbiAgY29uc3QgY2hhcmFjdGVycyA9IEFycmF5LmZyb20odmFsdWUpO1xuICBpZiAoY2hhcmFjdGVycy5sZW5ndGggPD0gbWF4TGVuZ3RoKSByZXR1cm4gdmFsdWU7XG5cbiAgY29uc3Qgc2hvcnRlbmVkID0gY2hhcmFjdGVycy5zbGljZSgwLCBtYXhMZW5ndGgpLmpvaW4oXCJcIik7XG4gIGNvbnN0IHB1bmN0dWF0aW9uSW5kZXggPSBNYXRoLm1heChcbiAgICBzaG9ydGVuZWQubGFzdEluZGV4T2YoXCJcdTMwMDJcIiksXG4gICAgc2hvcnRlbmVkLmxhc3RJbmRleE9mKFwiXHVGRjFCXCIpLFxuICAgIHNob3J0ZW5lZC5sYXN0SW5kZXhPZihcIlx1RkYwQ1wiKSxcbiAgKTtcblxuICByZXR1cm4gYCR7XG4gICAgcHVuY3R1YXRpb25JbmRleCA+PSBNYXRoLmZsb29yKG1heExlbmd0aCAqIDAuNjUpXG4gICAgICA/IHNob3J0ZW5lZC5zbGljZSgwLCBwdW5jdHVhdGlvbkluZGV4KVxuICAgICAgOiBzaG9ydGVuZWRcbiAgfVx1MjAyNmA7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3REZXNjcmlwdGlvbihtYXJrZG93bjogc3RyaW5nLCBmYWxsYmFjazogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgbWFpblN0YXJ0ID0gbWFya2Rvd24uaW5kZXhPZihcIjxtYWluXCIpO1xuICBjb25zdCBtYWluRW5kID0gbWFpblN0YXJ0ID49IDAgPyBtYXJrZG93bi5pbmRleE9mKFwiPC9tYWluPlwiLCBtYWluU3RhcnQpIDogLTE7XG4gIGNvbnN0IHBhZ2VDb250ZW50ID1cbiAgICBtYWluU3RhcnQgPj0gMCAmJiBtYWluRW5kID4gbWFpblN0YXJ0XG4gICAgICA/IG1hcmtkb3duLnNsaWNlKG1haW5TdGFydCwgbWFpbkVuZClcbiAgICAgIDogbWFya2Rvd247XG4gIGNvbnN0IGh0bWxQYXJhZ3JhcGhzID0gQXJyYXkuZnJvbShcbiAgICBwYWdlQ29udGVudC5tYXRjaEFsbCgvPHAoPzpcXHNbXj5dKik/PihbXFxzXFxTXSo/KTxcXC9wPi9naSksXG4gICAgKG1hdGNoKSA9PiBkZWNvZGVIdG1sRW50aXRpZXMoc3RyaXBNYXJrZG93bihtYXRjaFsxXSkpLFxuICApLmZpbHRlcigocGFyYWdyYXBoKSA9PiBBcnJheS5mcm9tKHBhcmFncmFwaCkubGVuZ3RoID49IDEyKTtcblxuICBpZiAoaHRtbFBhcmFncmFwaHMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgcGFyYWdyYXBoIG9mIGh0bWxQYXJhZ3JhcGhzKSB7XG4gICAgICBzZWxlY3RlZC5wdXNoKHBhcmFncmFwaCk7XG4gICAgICBpZiAoQXJyYXkuZnJvbShzZWxlY3RlZC5qb2luKFwiIFwiKSkubGVuZ3RoID49IDkwKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1bmNhdGVEZXNjcmlwdGlvbihzZWxlY3RlZC5qb2luKFwiIFwiKSk7XG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gbWFya2Rvd24ucmVwbGFjZShcbiAgICAvXi0tLVxccypbXFxyXFxuXStbXFxzXFxTXSo/W1xcclxcbl0rLS0tXFxzKltcXHJcXG5dKy8sXG4gICAgXCJcIixcbiAgKTtcbiAgY29uc3QgY2FuZGlkYXRlczogc3RyaW5nW10gPSBbXTtcblxuICBmb3IgKGNvbnN0IGJsb2NrIG9mIGNvbnRlbnQuc3BsaXQoL1xccj9cXG5cXHMqXFxyP1xcbi8pKSB7XG4gICAgY29uc3QgdHJpbW1lZCA9IGJsb2NrLnRyaW0oKTtcbiAgICBpZiAoXG4gICAgICAhdHJpbW1lZCB8fFxuICAgICAgdHJpbW1lZC5zdGFydHNXaXRoKFwiI1wiKSB8fFxuICAgICAgdHJpbW1lZC5zdGFydHNXaXRoKFwiYGBgXCIpIHx8XG4gICAgICB0cmltbWVkLnN0YXJ0c1dpdGgoXCJ+fn5cIikgfHxcbiAgICAgIHRyaW1tZWQuc3RhcnRzV2l0aChcImltcG9ydCBcIikgfHxcbiAgICAgIHRyaW1tZWQuc3RhcnRzV2l0aChcImV4cG9ydCBcIikgfHxcbiAgICAgIHRyaW1tZWQuc3RhcnRzV2l0aChcIjwhLS1cIikgfHxcbiAgICAgIHRyaW1tZWQuc3RhcnRzV2l0aChcIjxcIikgfHxcbiAgICAgIHRyaW1tZWQuc3RhcnRzV2l0aChcInxcIikgfHxcbiAgICAgIC9eWy0qK11cXHMvLnRlc3QodHJpbW1lZCkgfHxcbiAgICAgIC9eXFxkK1suKV1cXHMvLnRlc3QodHJpbW1lZClcbiAgICApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWluVGV4dCA9IHN0cmlwTWFya2Rvd24odHJpbW1lZCk7XG4gICAgaWYgKEFycmF5LmZyb20ocGxhaW5UZXh0KS5sZW5ndGggPCAxMikgY29udGludWU7XG5cbiAgICBjYW5kaWRhdGVzLnB1c2gocGxhaW5UZXh0KTtcbiAgICBpZiAoQXJyYXkuZnJvbShjYW5kaWRhdGVzLmpvaW4oXCIgXCIpKS5sZW5ndGggPj0gOTApIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHRydW5jYXRlRGVzY3JpcHRpb24oY2FuZGlkYXRlcy5qb2luKFwiIFwiKSB8fCBmYWxsYmFjayB8fCBERUZBVUxUX0RFU0NSSVBUSU9OKTtcbn1cblxuZnVuY3Rpb24gYnJlYWRjcnVtYk5hbWUoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGRlY29kZWRTZWdtZW50ID0gc2VnbWVudDtcblxuICB0cnkge1xuICAgIGRlY29kZWRTZWdtZW50ID0gZGVjb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpO1xuICB9IGNhdGNoIHtcbiAgICAvLyBLZWVwIHRoZSBvcmlnaW5hbCBzZWdtZW50IHdoZW4gaXQgaXMgbm90IHZhbGlkIFVSSS1lbmNvZGVkIHRleHQuXG4gIH1cblxuICBjb25zdCBsYWJlbHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgYmx1ZWJvb2s6IFwiV29ya0J1ZGR5IFx1NUI5RVx1NjIxOFx1ODRERFx1NzZBRVx1NEU2NlwiLFxuICAgIGNhc2VzOiBcIlx1NzkzRVx1NTMzQVx1Njg0OFx1NEY4Qlx1OTZDNlwiLFxuICAgIGNvbW11bml0eTogXCJcdTc5M0VcdTUzM0FcdTUxNzFcdTUyMUJcIixcbiAgICBoZWxwOiBcIlx1NUUyRVx1NEY2MFx1ODlFM1x1NTFCM1wiLFxuICAgIFwicmVhZGluZy1ndWlkZVwiOiBcIldvcmtCdWRkeSBcdTVCNjZcdTRFNjBcdTYzMDdcdTUzNTdcIixcbiAgfTtcblxuICByZXR1cm4gbGFiZWxzW2RlY29kZWRTZWdtZW50XSB8fCBkZWNvZGVkU2VnbWVudC5yZXBsYWNlKC9bLV9dL2csIFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnJlYWRjcnVtYnMoXG4gIHNpdGVVcmw6IHN0cmluZyxcbiAgcGFnZTogc3RyaW5nLFxuICBwYWdlVGl0bGU6IHN0cmluZyxcbiAgY2Fub25pY2FsVXJsOiBzdHJpbmcsXG4pIHtcbiAgY29uc3QgcGF0aCA9IGNsZWFuUGFnZVBhdGgocGFnZSkucmVwbGFjZSgvXlxcL3xcXC8kL2csIFwiXCIpO1xuICBpZiAoIXBhdGgpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IGl0ZW1MaXN0RWxlbWVudCA9IFtcbiAgICB7XG4gICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgIHBvc2l0aW9uOiAxLFxuICAgICAgbmFtZTogXCJcdTk5OTZcdTk4NzVcIixcbiAgICAgIGl0ZW06IG5ldyBVUkwoXCIvXCIsIGAke3NpdGVVcmx9L2ApLmhyZWYsXG4gICAgfSxcbiAgICAuLi5zZWdtZW50cy5tYXAoKHNlZ21lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpc0xhc3QgPSBpbmRleCA9PT0gc2VnbWVudHMubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IHBhcmVudFBhdGggPSBgLyR7c2VnbWVudHMuc2xpY2UoMCwgaW5kZXggKyAxKS5qb2luKFwiL1wiKX0vYDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgIHBvc2l0aW9uOiBpbmRleCArIDIsXG4gICAgICAgIG5hbWU6IGlzTGFzdCA/IHBhZ2VUaXRsZSA6IGJyZWFkY3J1bWJOYW1lKHNlZ21lbnQpLFxuICAgICAgICBpdGVtOiBpc0xhc3QgPyBjYW5vbmljYWxVcmwgOiBuZXcgVVJMKHBhcmVudFBhdGgsIGAke3NpdGVVcmx9L2ApLmhyZWYsXG4gICAgICB9O1xuICAgIH0pLFxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgXCJAdHlwZVwiOiBcIkJyZWFkY3J1bWJMaXN0XCIsXG4gICAgXCJAaWRcIjogYCR7Y2Fub25pY2FsVXJsfSNicmVhZGNydW1iYCxcbiAgICBpdGVtTGlzdEVsZW1lbnQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUpzb25MZCh2YWx1ZTogdW5rbm93bik6IHN0cmluZyB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvPC9nLCBcIlxcXFx1MDAzY1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2VEZXNjcmlwdGlvbihcbiAgc291cmNlRGlyZWN0b3J5OiBzdHJpbmcsXG4gIHBhZ2VEYXRhOiBQYWdlRGF0YSxcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGlmIChwYWdlRGF0YS5kZXNjcmlwdGlvbiB8fCBwYWdlRGF0YS5pc05vdEZvdW5kIHx8ICFwYWdlRGF0YS5maWxlUGF0aCkge1xuICAgIHJldHVybiBwYWdlRGF0YS5kZXNjcmlwdGlvbiB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCBmYWxsYmFjayA9IGAke3BhZ2VEYXRhLnRpdGxlfVx1RkYxQSR7REVGQVVMVF9ERVNDUklQVElPTn1gO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgbWFya2Rvd24gPSByZWFkRmlsZVN5bmMoXG4gICAgICByZXNvbHZlKHNvdXJjZURpcmVjdG9yeSwgcGFnZURhdGEuZmlsZVBhdGgpLFxuICAgICAgXCJ1dGY4XCIsXG4gICAgKTtcbiAgICByZXR1cm4gZXh0cmFjdERlc2NyaXB0aW9uKG1hcmtkb3duLCBmYWxsYmFjayk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB0cnVuY2F0ZURlc2NyaXB0aW9uKGZhbGxiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VvSGVhZChcbiAgc2l0ZVVybDogc3RyaW5nLFxuICBjb250ZXh0OiBUcmFuc2Zvcm1Db250ZXh0LFxuKTogSGVhZENvbmZpZ1tdIHtcbiAgY29uc3QgeyBwYWdlLCBwYWdlRGF0YSwgdGl0bGUsIGNvbnRlbnQgfSA9IGNvbnRleHQ7XG5cbiAgaWYgKHBhZ2VEYXRhLmlzTm90Rm91bmQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgW1wibWV0YVwiLCB7IG5hbWU6IFwicm9ib3RzXCIsIGNvbnRlbnQ6IFwibm9pbmRleCwgbm9mb2xsb3dcIiB9XSxcbiAgICBdO1xuICB9XG5cbiAgY29uc3QgY2Fub25pY2FsVXJsID0gYWJzb2x1dGVQYWdlVXJsKHNpdGVVcmwsIHBhZ2UpO1xuICBjb25zdCBzb2NpYWxJbWFnZVVybCA9IG5ldyBVUkwoXCIvb2cvd29ya2J1ZGR5LWd1aWRlLnBuZ1wiLCBgJHtzaXRlVXJsfS9gKS5ocmVmO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHBhZ2VEYXRhLmRlc2NyaXB0aW9uXG4gICAgPyB0cnVuY2F0ZURlc2NyaXB0aW9uKHBhZ2VEYXRhLmRlc2NyaXB0aW9uKVxuICAgIDogZXh0cmFjdERlc2NyaXB0aW9uKFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBgJHtwYWdlRGF0YS50aXRsZX1cdUZGMUEke2NvbnRleHQuZGVzY3JpcHRpb24gfHwgREVGQVVMVF9ERVNDUklQVElPTn1gLFxuICAgICAgKTtcbiAgY29uc3QgaXNIb21lID0gcGFnZSA9PT0gXCJpbmRleC5tZFwiO1xuICBjb25zdCBpc0JsdWVib29rUGFnZSA9IHBhZ2Uuc3RhcnRzV2l0aChcImJsdWVib29rL1wiKTtcbiAgY29uc3QgbW9kaWZpZWRUaW1lID0gcGFnZURhdGEubGFzdFVwZGF0ZWRcbiAgICA/IG5ldyBEYXRlKHBhZ2VEYXRhLmxhc3RVcGRhdGVkKS50b0lTT1N0cmluZygpXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgY29uc3Qgb3JnYW5pemF0aW9uID0ge1xuICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICBcIkBpZFwiOiBgJHtzaXRlVXJsfS8jb3JnYW5pemF0aW9uYCxcbiAgICBuYW1lOiBPUkdBTklaQVRJT05fTkFNRSxcbiAgICB1cmw6IGAke3NpdGVVcmx9L2AsXG4gIH07XG4gIGNvbnN0IHdlYnNpdGUgPSB7XG4gICAgXCJAdHlwZVwiOiBcIldlYlNpdGVcIixcbiAgICBcIkBpZFwiOiBgJHtzaXRlVXJsfS8jd2Vic2l0ZWAsXG4gICAgdXJsOiBgJHtzaXRlVXJsfS9gLFxuICAgIG5hbWU6IFNJVEVfTkFNRSxcbiAgICBhbHRlcm5hdGVOYW1lOiBTSVRFX0FMVEVSTkFURV9OQU1FLFxuICAgIGRlc2NyaXB0aW9uOiBERUZBVUxUX0RFU0NSSVBUSU9OLFxuICAgIGluTGFuZ3VhZ2U6IFwiemgtQ05cIixcbiAgICBwdWJsaXNoZXI6IHsgXCJAaWRcIjogYCR7c2l0ZVVybH0vI29yZ2FuaXphdGlvbmAgfSxcbiAgfTtcbiAgY29uc3QgYnJlYWRjcnVtYlRpdGxlID1cbiAgICB0eXBlb2YgcGFnZURhdGEuZnJvbnRtYXR0ZXIuYnJlYWRjcnVtYlRpdGxlID09PSBcInN0cmluZ1wiXG4gICAgICA/IHBhZ2VEYXRhLmZyb250bWF0dGVyLmJyZWFkY3J1bWJUaXRsZVxuICAgICAgOiBwYWdlRGF0YS50aXRsZTtcbiAgY29uc3QgYnJlYWRjcnVtYnMgPSBjcmVhdGVCcmVhZGNydW1icyhcbiAgICBzaXRlVXJsLFxuICAgIHBhZ2UsXG4gICAgYnJlYWRjcnVtYlRpdGxlLFxuICAgIGNhbm9uaWNhbFVybCxcbiAgKTtcbiAgY29uc3QgcGFnZUVudGl0eSA9IGlzSG9tZVxuICAgID8gbnVsbFxuICAgIDoge1xuICAgICAgICBcIkB0eXBlXCI6IGlzQmx1ZWJvb2tQYWdlID8gXCJBcnRpY2xlXCIgOiBcIldlYlBhZ2VcIixcbiAgICAgICAgXCJAaWRcIjogYCR7Y2Fub25pY2FsVXJsfSN3ZWJwYWdlYCxcbiAgICAgICAgdXJsOiBjYW5vbmljYWxVcmwsXG4gICAgICAgIG5hbWU6IHBhZ2VEYXRhLnRpdGxlLFxuICAgICAgICAuLi4oaXNCbHVlYm9va1BhZ2UgPyB7IGhlYWRsaW5lOiBwYWdlRGF0YS50aXRsZSB9IDoge30pLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgaW5MYW5ndWFnZTogXCJ6aC1DTlwiLFxuICAgICAgICBpc1BhcnRPZjogeyBcIkBpZFwiOiBgJHtzaXRlVXJsfS8jd2Vic2l0ZWAgfSxcbiAgICAgICAgYnJlYWRjcnVtYjogYnJlYWRjcnVtYnNcbiAgICAgICAgICA/IHsgXCJAaWRcIjogYCR7Y2Fub25pY2FsVXJsfSNicmVhZGNydW1iYCB9XG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIC4uLihpc0JsdWVib29rUGFnZVxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBtYWluRW50aXR5T2ZQYWdlOiBjYW5vbmljYWxVcmwsXG4gICAgICAgICAgICAgIGltYWdlOiBbc29jaWFsSW1hZ2VVcmxdLFxuICAgICAgICAgICAgICBhdXRob3I6IHsgXCJAaWRcIjogYCR7c2l0ZVVybH0vI29yZ2FuaXphdGlvbmAgfSxcbiAgICAgICAgICAgICAgcHVibGlzaGVyOiB7IFwiQGlkXCI6IGAke3NpdGVVcmx9LyNvcmdhbml6YXRpb25gIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSksXG4gICAgICAgIC4uLihtb2RpZmllZFRpbWUgPyB7IGRhdGVNb2RpZmllZDogbW9kaWZpZWRUaW1lIH0gOiB7fSksXG4gICAgICB9O1xuICBjb25zdCBqc29uTGRHcmFwaCA9IFtvcmdhbml6YXRpb24sIHdlYnNpdGUsIHBhZ2VFbnRpdHksIGJyZWFkY3J1bWJzXS5maWx0ZXIoXG4gICAgQm9vbGVhbixcbiAgKTtcblxuICBjb25zdCBoZWFkOiBIZWFkQ29uZmlnW10gPSBbXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgY29udGVudDogZGVzY3JpcHRpb24gfV0sXG4gICAgW1xuICAgICAgXCJtZXRhXCIsXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwicm9ib3RzXCIsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgXCJpbmRleCwgZm9sbG93LCBtYXgtaW1hZ2UtcHJldmlldzpsYXJnZSwgbWF4LXNuaXBwZXQ6LTEsIG1heC12aWRlby1wcmV2aWV3Oi0xXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1wibGlua1wiLCB7IHJlbDogXCJjYW5vbmljYWxcIiwgaHJlZjogY2Fub25pY2FsVXJsIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzpsb2NhbGVcIiwgY29udGVudDogXCJ6aF9DTlwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzpzaXRlX25hbWVcIiwgY29udGVudDogU0lURV9OQU1FIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzp0eXBlXCIsIGNvbnRlbnQ6IGlzQmx1ZWJvb2tQYWdlID8gXCJhcnRpY2xlXCIgOiBcIndlYnNpdGVcIiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6dGl0bGVcIiwgY29udGVudDogdGl0bGUgfV0sXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOmRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IGRlc2NyaXB0aW9uIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzp1cmxcIiwgY29udGVudDogY2Fub25pY2FsVXJsIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzppbWFnZVwiLCBjb250ZW50OiBzb2NpYWxJbWFnZVVybCB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6aW1hZ2U6dHlwZVwiLCBjb250ZW50OiBcImltYWdlL3BuZ1wiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzppbWFnZTp3aWR0aFwiLCBjb250ZW50OiBcIjEyODBcIiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6aW1hZ2U6aGVpZ2h0XCIsIGNvbnRlbnQ6IFwiNzIwXCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOmltYWdlOmFsdFwiLCBjb250ZW50OiBcIldvcmtCdWRkeSBcdTVCOUVcdTYyMThcdTg0RERcdTc2QUVcdTRFNjZcdTk5OTZcdTk4NzVcdTk4ODRcdTg5QzhcIiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJ0d2l0dGVyOmNhcmRcIiwgY29udGVudDogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwidHdpdHRlcjp0aXRsZVwiLCBjb250ZW50OiB0aXRsZSB9XSxcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IGRlc2NyaXB0aW9uIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcInR3aXR0ZXI6aW1hZ2VcIiwgY29udGVudDogc29jaWFsSW1hZ2VVcmwgfV0sXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwidHdpdHRlcjppbWFnZTphbHRcIiwgY29udGVudDogXCJXb3JrQnVkZHkgXHU1QjlFXHU2MjE4XHU4NEREXHU3NkFFXHU0RTY2XHU5OTk2XHU5ODc1XHU5ODg0XHU4OUM4XCIgfV0sXG4gICAgW1xuICAgICAgXCJzY3JpcHRcIixcbiAgICAgIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgfSxcbiAgICAgIHNlcmlhbGl6ZUpzb25MZCh7IFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIiwgXCJAZ3JhcGhcIjoganNvbkxkR3JhcGggfSksXG4gICAgXSxcbiAgXTtcblxuICBpZiAobW9kaWZpZWRUaW1lICYmIGlzQmx1ZWJvb2tQYWdlKSB7XG4gICAgaGVhZC5wdXNoKFtcbiAgICAgIFwibWV0YVwiLFxuICAgICAgeyBwcm9wZXJ0eTogXCJhcnRpY2xlOm1vZGlmaWVkX3RpbWVcIiwgY29udGVudDogbW9kaWZpZWRUaW1lIH0sXG4gICAgXSk7XG4gIH1cblxuICByZXR1cm4gaGVhZDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1osU0FBUyxvQkFBb0I7OztBQ0E3QixTQUFTLGNBQWMsbUJBQW1CO0FBQ3pjLFNBQVMscUJBQXFCO0FBRDZPLElBQU0sMkNBQTJDO0FBSzVULElBQU0sUUFBUSxJQUFJLGFBQ2hCLFVBQVUsYUFBYSxTQUFTLElBQUksQ0FBQyxZQUFZLFFBQVEsS0FBSyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRztBQUUvRSxJQUFNLFFBQVE7QUFDZCxJQUFNLFFBQVE7QUFDZCxJQUFNLFFBQVE7QUFDZCxJQUFNLFFBQVE7QUFDZCxJQUFNLFdBQVc7QUFFakIsSUFBTSxPQUFPLENBQUMsV0FBbUIsT0FBTyxlQUF5QztBQUFBLEVBQy9FO0FBQUEsRUFDQSxNQUFNLE1BQU0sU0FBUztBQUN2QjtBQUVBLElBQU0sUUFBUSxDQUNaLFFBQ0EsV0FDQSxPQUFPLGVBQ3VCO0FBQUEsRUFDOUI7QUFBQSxFQUNBLE1BQU0sTUFBTSxRQUFRLFNBQVM7QUFDL0I7QUFFTyxJQUFNLGtCQUF3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

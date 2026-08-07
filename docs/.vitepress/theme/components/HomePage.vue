<script setup lang="ts">
import PixelIcon from "./PixelIcon.vue";
import PixelIconSprite from "./PixelIconSprite.vue";
</script>

<template>
  <main class="wb-home">
    <PixelIconSprite />
    <section class="wb-hero" aria-labelledby="wb-hero-title">
      <div class="wb-hero__stage">
        <div class="wb-hero__copy">
          <p class="wb-pixel-label">OPEN-SOURCE · 27 CHAPTERS · 2026</p>
          <h1 id="wb-hero-title" class="wb-hero__title--bluebook">WorkBuddy蓝皮书</h1>
          <p class="wb-hero__summary">
            WorkBuddy能干嘛？一套以真实工作为主线的WorkBuddy实践路径。带你从0到1先用起来，再从1到100把每次成功沉淀为可复用的工作系统，真正把AI变成生产力！
          </p>
          <div class="wb-hero__actions">
            <a class="wb-button wb-button--primary" href="https://asdfghjkl0828.github.io/work_buddyguide/bluebook/">
              <span>开始阅读</span>
              <PixelIcon name="arrow-right" />
            </a>
            <a class="wb-button wb-button--outline" href="https://asdfghjkl0828.github.io/work_buddyguide/reading-guide">查看阅读路线</a>
          </div>
        </div>

        <div class="wb-hero__art" aria-label="WorkBuddy 像素图标组合">
          <span class="wb-hero__monogram">WB_</span>
          <span class="wb-icon-card wb-icon-card--buddy">
            <PixelIcon name="face-grin" />
          </span>
          <span class="wb-icon-card wb-icon-card--book">
            <PixelIcon name="book" />
          </span>
          <span class="wb-icon-card wb-icon-card--flow">
            <PixelIcon name="sitemap" />
          </span>
          <span class="wb-icon-card wb-icon-card--work">
            <PixelIcon name="briefcase" />
          </span>
          <div class="wb-hero__metrics" aria-label="蓝皮书内容规模">
            <span><b>27</b> CHAPTERS</span>
            <span><b>4</b> PARTS</span>
            <span><b>∞</b> WORKFLOWS</span>
          </div>
        </div>
      </div>

      <div class="wb-value-strip" aria-label="蓝皮书价值">
        <div class="wb-value-strip__item">
          <PixelIcon name="check-box" />
          <span><b>真实任务</b><small>REAL TASKS</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="refresh" />
          <span><b>可复现</b><small>REPRODUCIBLE</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="handshake" />
          <span><b>社区共创</b><small>OPEN SOURCE</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="grid" />
          <span><b>系统沉淀</b><small>WORK SYSTEM</small></span>
        </div>
      </div>
    </section>

    <section class="wb-section wb-reading" aria-labelledby="wb-reading-title">
      <div class="wb-section__heading">
        <div>
          <p class="wb-pixel-label">READING PATH / 01—04</p>
          <h2 id="wb-reading-title">四段路径，按你的目标进入</h2>
        </div>
        <p>从个人上手到组织落地，循序渐进，构建你的 WorkBuddy 工作系统。</p>
      </div>

      <div class="wb-reading-grid">
        <a class="wb-reading-card" href="https://asdfghjkl0828.github.io/work_buddyguide/bluebook/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C%EF%BC%9A%E5%85%88%E6%8A%8A%20WorkBuddy%20%E7%94%A8%E8%B5%B7%E6%9D%A5/">
          <span class="wb-reading-card__icon"><PixelIcon name="user" /></span>
          <span class="wb-reading-card__content">
            <small>PART 01 · CH. 01—10</small>
            <strong>从 0 到 1：先把 WorkBuddy 用起来</strong>
            <span>安装、界面、第一个任务、Skill、连接器、API 与自动化。</span>
            <em><b>新手推荐</b><b>先完成一项任务</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="https://asdfghjkl0828.github.io/work_buddyguide/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E4%BB%8E%E4%B8%80%E9%A1%B9%E4%BB%BB%E5%8A%A1%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9B%A2%E9%98%9F/">
          <span class="wb-reading-card__icon"><PixelIcon name="briefcase" /></span>
          <span class="wb-reading-card__content">
            <small>PART 02 · CH. 11—21</small>
            <strong>进入真实案例：让任务开始流动</strong>
            <span>办公、文件、远程、资讯、知识、会议、投资和内容增长。</span>
            <em><b>11 个案例</b><b>任务驱动</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="https://asdfghjkl0828.github.io/work_buddyguide/bluebook/%E7%AC%AC%E4%B8%89%E7%AF%87%20%E8%BF%9B%E9%98%B6%E7%AF%87%EF%BC%9A%E6%8A%8A%E6%A1%88%E4%BE%8B%E5%8F%98%E6%88%90%E8%87%AA%E5%B7%B1%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%B3%BB%E7%BB%9F/">
          <span class="wb-reading-card__icon"><PixelIcon name="sitemap" /></span>
          <span class="wb-reading-card__content">
            <small>PART 03 · CH. 22—25</small>
            <strong>把案例变成可复用的工作系统</strong>
            <span>打造 Skill、多 Agent 系统设计与可靠的自动化工作流。</span>
            <em><b>系统进阶</b><b>可靠自动化</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="https://asdfghjkl0828.github.io/work_buddyguide/bluebook/%E7%AC%AC%E5%9B%9B%E7%AF%87%20%E5%B2%97%E4%BD%8D%E4%B8%8E%E8%A1%8C%E4%B8%9A%E8%90%BD%E5%9C%B0/">
          <span class="wb-reading-card__icon"><PixelIcon name="users" /></span>
          <span class="wb-reading-card__content">
            <small>PART 04 · CH. 26—27</small>
            <strong>落到岗位与行业，组建 AI 团队</strong>
            <span>从通用能力出发，设计适合不同岗位和行业的工作流。</span>
            <em><b>团队落地</b><b>行业路线</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>
      </div>
    </section>

    <section class="wb-section wb-task-index" aria-labelledby="wb-task-index-title">
      <div class="wb-section__heading wb-section__heading--compact">
        <div>
          <p class="wb-pixel-label">START WITH A REAL TASK</p>
          <h2 id="wb-task-index-title">你现在想让 AI 帮你做什么？</h2>
        </div>
        <p>不必从头读。带着问题进来，先跑通一个能验收的结果。</p>
      </div>

      <div class="wb-task-grid">
        <a href="https://asdfghjkl0828.github.io/work_buddyguide/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E4%BB%8E%E4%B8%80%E9%A1%B9%E4%BB%BB%E5%8A%A1%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9B%A2%E9%98%9F/%E7%AC%AC%2011%20%E7%AB%A0%20%E5%8A%9E%E5%85%AC%E4%B8%89%E4%BB%B6%E5%A5%97%EF%BC%9AWord%E3%80%81Excel%E3%80%81PPT/">
          <PixelIcon name="briefcase" /><strong>办公文档</strong><span>Word · Excel · PPT</span>
        </a>
        <a href="https://asdfghjkl0828.github.io/work_buddyguide/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E4%BB%8E%E4%B8%80%E9%A1%B9%E4%BB%BB%E5%8A%A1%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9B%A2%E9%98%9F/%E7%AC%AC%2012%20%E7%AB%A0%20%E4%BB%8E%E6%95%B4%E7%90%86%E6%A1%8C%E9%9D%A2%E6%96%87%E4%BB%B6%E8%BF%99%E4%BA%9B%E5%B0%8F%E4%BA%8B%E5%81%9A%E8%B5%B7/">
          <PixelIcon name="folder-open" /><strong>文件与远程</strong><span>整理 · 查找 · 执行</span>
        </a>
        <a href="https://asdfghjkl0828.github.io/work_buddyguide/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E4%BB%8E%E4%B8%80%E9%A1%B9%E4%BB%BB%E5%8A%A1%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9B%A2%E9%98%9F/%E7%AC%AC%2015%20%E7%AB%A0%20%E8%B5%84%E8%AE%AF%E6%95%B4%E5%90%88%EF%BC%9A%E6%8A%8A%E4%BF%A1%E6%81%AF%E6%B5%81%E5%8F%98%E6%88%90%E6%AF%8F%E6%97%A5%E9%80%9A%E7%9F%A5/">
          <PixelIcon name="newspaper" /><strong>资讯与知识</strong><span>收集 · 筛选 · 复用</span>
        </a>
        <a href="https://asdfghjkl0828.github.io/work_buddyguide/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E4%BB%8E%E4%B8%80%E9%A1%B9%E4%BB%BB%E5%8A%A1%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9B%A2%E9%98%9F/%E7%AC%AC%2018%20%E7%AB%A0%20%E6%8A%8A%E6%8A%95%E8%B5%84%E5%88%86%E6%9E%90%E5%8F%98%E6%88%90%E4%BD%A0%E7%9A%84%E6%97%A5%E5%B8%B8/">
          <PixelIcon name="chart-line" /><strong>专业分析</strong><span>投资 · 研究 · 诊断</span>
        </a>
        <a href="https://asdfghjkl0828.github.io/work_buddyguide/bluebook/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E6%A1%88%E4%BE%8B%E7%AF%87%EF%BC%9A%E4%BB%8E%E4%B8%80%E9%A1%B9%E4%BB%BB%E5%8A%A1%E5%88%B0%E4%B8%80%E6%94%AF%20AI%20%E5%9B%A2%E9%98%9F/%E7%AC%AC%2019%20%E7%AB%A0%20%E4%B8%80%E5%8F%A5%E8%AF%9D%E5%8F%AC%E5%94%A4%20AI%20%E8%A7%86%E9%A2%91%E5%9B%A2%E9%98%9F/">
          <PixelIcon name="video-camera" /><strong>内容生产</strong><span>视频 · 自媒体 · GEO</span>
        </a>
        <a href="https://asdfghjkl0828.github.io/work_buddyguide/bluebook/%E7%AC%AC%E4%B8%89%E7%AF%87%20%E8%BF%9B%E9%98%B6%E7%AF%87%EF%BC%9A%E6%8A%8A%E6%A1%88%E4%BE%8B%E5%8F%98%E6%88%90%E8%87%AA%E5%B7%B1%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E7%AC%AC%2024%20%E7%AB%A0%20%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E5%A4%9A%20Agent%20%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/">
          <PixelIcon name="robot" /><strong>AI 工作系统</strong><span>Skill · Agent · 自动化</span>
        </a>
      </div>
    </section>

    <section class="wb-section wb-system" aria-labelledby="wb-system-title">
      <div class="wb-system__intro">
        <p class="wb-pixel-label">FROM TASK TO TEAM</p>
        <h2 id="wb-system-title">一次成功，不该只发生一次。</h2>
        <p>蓝皮书真正关心的不是“AI 会什么”，而是如何把一个结果沉淀成稳定、可协作、可复用的工作系统。</p>
      </div>
      <ol class="wb-system__steps">
        <li><b>01</b><strong>TASK</strong><span>完成一个真实任务</span></li>
        <li><b>02</b><strong>CASE</strong><span>复盘成可复现案例</span></li>
        <li><b>03</b><strong>WORKFLOW</strong><span>沉淀 Skill 与自动化</span></li>
        <li><b>04</b><strong>AI TEAM</strong><span>组合成协作团队</span></li>
      </ol>
    </section>

  </main>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    screenMenu?: boolean;
  }>(),
  {
    screenMenu: false,
  },
);
</script>

<template>
  <figure class="wb-group-qr" :class="{ 'is-screen-menu': screenMenu }">
    <div class="wb-group-qr__frame">
      <img
        src="/contact/wechat-owner.jpg"
        alt="站长微信二维码"
        loading="lazy"
      />
    </div>
    <figcaption>
      <span>WECHAT</span>
      微信扫码联系我们
    </figcaption>
  </figure>
</template>

<style scoped>
.wb-group-qr {
  width: 300px;
  margin: 0;
  color: var(--wb-ink);
}

.wb-group-qr__frame {
  padding: 6px;
  border: 2px solid var(--wb-ink);
  border-radius: 8px;
  background: #fff;
  box-shadow: 5px 5px 0 var(--wb-acid);
}

.wb-group-qr img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.wb-group-qr figcaption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  white-space: nowrap;
}

.wb-group-qr figcaption span {
  color: var(--vp-c-text-2);
  font-family: "Silkscreen", monospace;
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0.04em;
}

.wb-group-qr.is-screen-menu {
  width: min(100%, 320px);
  padding: 8px 4px 12px;
}

.wb-group-qr.is-screen-menu .wb-group-qr__frame {
  box-shadow: 4px 4px 0 var(--wb-acid);
}

.wb-group-qr.is-screen-menu figcaption {
  white-space: normal;
}

@media (prefers-color-scheme: dark) {
  .wb-group-qr__frame {
    border-color: var(--vp-c-brand-2);
    box-shadow: 5px 5px 0 var(--vp-c-brand-2);
  }

  .wb-group-qr.is-screen-menu .wb-group-qr__frame {
    box-shadow: 4px 4px 0 var(--vp-c-brand-2);
  }
}
</style>

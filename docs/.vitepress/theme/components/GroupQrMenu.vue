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
    <figcaption>
      <span>WECHAT GROUP</span>
      微信扫码加入交流群
    </figcaption>
  </figure>
</template>

<style scoped>
.wb-group-qr {
  width: 244px;
  margin: 0;
  color: var(--wb-ink);
}

.wb-group-qr figcaption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 0;
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
  width: min(100%, 272px);
  padding: 8px 4px 12px;
}

.wb-group-qr.is-screen-menu figcaption {
  white-space: normal;
}
</style>

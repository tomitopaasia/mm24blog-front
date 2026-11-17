<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem'

const menuItems: MenuItem[] = [
  { label: 'Avaleht', route: '/' },
  { label: 'Cats', route: '/cats' },
  { label: 'Kittens', route: '/kittens' },
  { label: 'Nuustik', route: '/kittens/nuustik' },
  { label: 'Suvaline kass', route: '/kittens/anycatnamehere' },
]
</script>

<template>
  <div class="blog">
    <header>
      <Menubar
        :model="menuItems"
        aria-label="Peamenüü"
        :button-props="{ 'aria-label': 'Peamenüü' }"
      >
        <template #start>
          <span class="blog-name">MM24 blogi</span>
        </template>
        <template #item="{ item, props }">
          <NuxtLink :to="item.route" custom v-slot="{ href, navigate, isExactActive }">
            <a
              v-bind="props.action"
              :href="href"
              :aria-current="isExactActive ? 'page' : undefined"
              @click="navigate"
            >{{ item.label }}</a>
          </NuxtLink>
        </template>
      </Menubar>
    </header>
    <NuxtRouteAnnouncer />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.blog {
  max-width: 64rem;
  margin: 1rem auto;
  font-family: system-ui, sans-serif;
}

.blog-name {
  margin-inline: 0.5rem;
  font-weight: 650;
  white-space: nowrap;
}

.blog a[aria-current='page'] {
  background: var(--p-highlight-background);
  color: var(--p-highlight-color);
}

main {
  padding-inline: 0.75rem;
}
</style>

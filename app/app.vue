<script setup lang="ts">
const route = useRoute()

const links = [
  { label: 'Avaleht', to: '/' },
  { label: 'Cats', to: '/cats' },
  { label: 'Kittens', to: '/kittens' },
  { label: 'Nuustik', to: '/kittens/nuustik' },
  { label: 'Suvaline kass', to: '/kittens/anycatnamehere' },
]
</script>

<template>
  <div class="blog">
    <header class="blog-header">
      <nav aria-label="Peamenüü">
        <ElMenu :default-active="route.path" class="blog-menu" role="list">
          <ElMenuItem v-for="link in links" :key="link.to" :index="link.to" role="listitem">
            <NuxtLink :to="link.to" class="menu-link" @click.stop>
              {{ link.label }}
            </NuxtLink>
          </ElMenuItem>
        </ElMenu>
      </nav>
    </header>

    <NuxtRouteAnnouncer />
    <main class="blog-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.blog {
  color: #18222b;
  font-family: system-ui, sans-serif;
}

.blog-header {
  border-bottom: 1px solid #e4e9ec;
  background: #f6f8f9;
}

.blog-menu,
.blog-content {
  box-sizing: border-box;
  max-width: 70rem;
  margin-inline: auto;
  padding-inline: 1rem;
}

.blog-menu {
  --el-menu-bg-color: transparent;
  --el-menu-active-color: #135148;
  --el-menu-hover-bg-color: #e8eeef;
  --el-menu-item-height: 2.75rem;

  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding-block: 0.5rem;
  border: 0;
}

.blog-menu :deep(.el-menu-item) {
  padding: 0;
  border-radius: 0.5rem;
}

.blog-menu :deep(.el-menu-item.is-active) {
  background: #dbebe7;
  font-weight: 600;
}

.menu-link {
  display: flex;
  align-items: center;
  height: 100%;
  padding-inline: 0.75rem;
  border-radius: inherit;
  color: inherit;
  text-decoration: none;
}

.menu-link:focus-visible {
  outline: 2px solid #135148;
  outline-offset: -2px;
}

.blog-content {
  padding-block: 1rem;
}
</style>

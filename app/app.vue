<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Home', to: '/', exact: true },
  { label: 'Cats', to: '/cats', exact: true },
  { label: 'Kittens', to: '/kittens', exact: true },
  { label: 'Nuustik', to: '/kittens/nuustik', exact: true },
  { label: 'Any cat name', to: '/kittens/anycatnamehere', exact: true },
]
</script>

<template>
  <UApp>
    <header class="border-b border-default">
      <UContainer class="py-2">
        <UNavigationMenu
          :items="items"
          :ui="{ list: 'flex-wrap' }"
          aria-label="Main navigation"
        />
      </UContainer>
    </header>
    <NuxtRouteAnnouncer />
    <UContainer as="main" class="py-6">
      <NuxtPage />
    </UContainer>
  </UApp>
</template>

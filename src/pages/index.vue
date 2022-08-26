<script setup lang="ts">
import { useTodoStore } from '~/store/todo'
const userStore = useTodoStore()
</script>

<template>
  <div text-3xl>
    {{ userStore.text }}
  </div>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary">
      Tertiary
    </n-button>
    <n-button type="primary">
      Primary
    </n-button>
    <n-button type="info">
      Info
    </n-button>
    <n-button type="success">
      Success
    </n-button>
    <n-button type="warning">
      Warning
    </n-button>
    <n-button type="error">
      Error
    </n-button>
  </n-space>
</template>

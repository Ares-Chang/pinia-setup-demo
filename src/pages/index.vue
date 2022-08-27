<script setup lang="ts">
import { useTodoStore } from '~/store/todo'
const userStore = useTodoStore()
</script>

<template>
  <div text-3xl text-center>
    {{ userStore.text }}
  </div>
  <div flex justify-center>
    <n-input />
    <n-button type="primary" ghost>
      搜索
    </n-button>
  </div>
</template>

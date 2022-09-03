<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoStore } from '~/store/todo'
const store = useTodoStore()
// storeToRefs 只会返回响应式变量
const { title, value, dataList } = storeToRefs(store)
</script>

<template>
  <div text-3xl text-center mt3>
    {{ title }}
  </div>
  <div w-5xl ma flex justify-center my-5 gap-2>
    <n-input
      v-model:value="value"
      type="textarea"
      size="large"
      :autosize="{
        minRows: 1,
        maxRows: 5,
      }"
    />
    <n-button type="primary" ghost size="large" @click="store.handleClick">
      添加
    </n-button>
  </div>
  <n-scrollbar max-h-75vh trigger="none">
    <n-list v-if="dataList.length" hoverable clickable bordered>
      <n-list-item v-for="item in dataList" :key="item.id">
        <n-thing :title="item.info" content-style="margin-top: 10px;">
          <template #header-extra>
            {{ item.time }}
          </template>
        </n-thing>
      </n-list-item>
    </n-list>
    <n-card v-else>
      <div min-h-60 h-full flex justify-center items-center>
        <n-empty description="你什么也没有哦~" size="large">
          <template #extra>
            <n-button size="small">
              点击添加一条
            </n-button>
          </template>
        </n-empty>
      </div>
    </n-card>
  </n-scrollbar>
</template>

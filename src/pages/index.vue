<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { InputInst } from 'naive-ui'
import { useTodoStore } from '~/store/todo'
const store = useTodoStore()
// storeToRefs 只会返回响应式变量
const { title, value, count, dataList } = storeToRefs(store)
const time = computed(() => useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss').value)

const inputRef = $ref<InputInst | null>(null)
function handleAdd() {
  inputRef?.focus()
}
</script>

<template>
  <div text-3xl text-center mt3>
    {{ title }}
  </div>
  <div w="90%" ma flex justify-center my-5 gap-2>
    <n-input
      ref="inputRef"
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
  <div flex justify-center my-5 gap-2>
    <n-tag type="success" size="large">
      count: {{ count }}
    </n-tag>
    <n-tag type="info" size="large">
      time: {{ time }}
    </n-tag>
  </div>
  <n-scrollbar max-h-75vh trigger="none">
    <n-list v-if="dataList.length" hoverable clickable bordered>
      <n-list-item v-for="(item, index) in dataList" :key="item.id">
        <n-thing :title="item.info" content-style="margin-top: 10px;">
          <template #header-extra>
            {{ item.time }}
          </template>
        </n-thing>
        <template #suffix>
          <n-button type="error" ghost @click="store.handleRemove(index)">
            remove
          </n-button>
        </template>
      </n-list-item>
    </n-list>
    <n-card v-else>
      <div min-h-60 h-full flex justify-center items-center>
        <n-empty description="你什么也没有哦~" size="large">
          <template #extra>
            <n-button size="small" @click="handleAdd">
              点击添加一条
            </n-button>
          </template>
        </n-empty>
      </div>
    </n-card>
  </n-scrollbar>
</template>

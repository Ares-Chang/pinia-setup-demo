<script setup lang="ts">
import { useTodoStore } from '~/store/todo'
const userStore = useTodoStore()

interface DataInfo {
  title: string
  tag: string[]
  info: string
}
const dataList: DataInfo[] = [
  {
    title: '相见恨晚',
    tag: ['暑夜', '晚春'],
    info: '奋勇呀然后休息呀，完成你伟大的人生',
  },
  {
    title: '他在时间门外',
    tag: ['环形公路', '潜水艇司机'],
    info: '最新的打印机，复制着彩色傀儡，早上好我的罐头先生，让他带你去被工厂敲击',
  },
]
</script>

<template>
  <div text-3xl text-center mt3>
    {{ userStore.title }}
  </div>
  <div w-5xl ma flex justify-center my-5 gap-2>
    <n-input
      type="textarea"
      size="large"
      :autosize="{
        minRows: 1,
        maxRows: 5,
      }"
    />
    <n-button type="primary" ghost size="large">
      添加
    </n-button>
  </div>
  <n-scrollbar max-h-75vh trigger="none">
    <n-list v-if="dataList.length" hoverable clickable bordered>
      <n-list-item v-for="(item, index) in dataList" :key="index">
        <n-thing :title="item.title" content-style="margin-top: 10px;">
          <template #description>
            <n-space size="small" style="margin-top: 4px">
              <n-tag
                v-for="(tag, _index) in item.tag" :key="_index"
                type="info" size="small" :bordered="false"
              >
                {{ tag }}
              </n-tag>
            </n-space>
          </template>
          {{ item.info }}
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

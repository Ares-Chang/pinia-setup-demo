import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const title = ref('待办列表')

  const dataList = ref([
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
  ])

  return {
    title,
    dataList,
  }
})

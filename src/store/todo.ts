import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const title = '待办列表'

  return {
    title,
  }
})

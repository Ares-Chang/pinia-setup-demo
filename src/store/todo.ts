import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const text = 'Hello World!'

  return {
    text,
  }
})

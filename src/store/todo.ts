import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const title = ref('待办列表')

  const input = ref()

  const dataList = $ref([
    {
      info: '输入内容，添加备忘，然后永远忘记。。。',
      time: '2022-09-03 20:49:07',
    },
  ])

  function handleClick() {
    dataList.push({
      info: input.value,
      time: useDateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').value,
    })
  }

  return {
    title,
    value: input,
    handleClick,
    dataList,
  }
})

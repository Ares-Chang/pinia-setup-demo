import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export const useTodoStore = defineStore('todo', () => {
  const title = ref('待办列表')

  const input = ref()

  interface TodoInfo {
    id: string
    info: string
    time: string
  }
  const dataList = $ref<TodoInfo[]>([
    {
      id: 'default',
      info: '输入内容，添加备忘，然后永远忘记。。。',
      time: '2022-09-03 20:49:07',
    },
  ])

  const count = computed(() => dataList.length)

  function handleClick() {
    dataList.push({
      id: nanoid(),
      info: input.value,
      time: useDateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').value,
    })
    input.value = ''
  }

  function handleRemove(index: number) {
    dataList.splice(index, 1)
  }

  return {
    title,
    value: input,
    count,
    dataList,
    handleClick,
    handleRemove,
  }
})

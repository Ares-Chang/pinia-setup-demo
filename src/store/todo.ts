import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import type {
  ConfigProviderProps,
} from 'naive-ui'
import {
  createDiscreteApi,
  darkTheme,
  lightTheme,
} from 'naive-ui'

export const useTodoStore = defineStore('todo', () => {
  const title = ref('待办列表')

  const input = ref('')

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

  /** S created message */
  const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
    theme: isDark.value ? darkTheme : lightTheme,
  }))
  const count = computed(() => dataList.length)

  const { message } = createDiscreteApi(
    ['message'],
    {
      configProviderProps: configProviderPropsRef,
    },
  )
  /** E created mesage */

  function handleClick() {
    const info = input.value.trim()
    if (!info.length)
      return message.warning('想偷懒？被抓包了吧~')
    dataList.push({
      id: nanoid(),
      info,
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

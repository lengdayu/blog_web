import { ref, type Ref } from 'vue'

const nowTime = ref('0000:00:00')

const refreshTime = (myTime: Ref<string>): void => {
  const now = new Date()
  // 时间字符串格式化（如果是一位数则前置0）
  const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
  const minu = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
  const sec = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()
  // 拼接时间并储存在变量myTime中
  myTime.value = `${hour}:${minu}:${sec}`
  // 实现时钟自走效果
  setTimeout(() => refreshTime(myTime), 1000)
}

export { nowTime, refreshTime }

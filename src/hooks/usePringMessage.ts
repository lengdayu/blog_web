import { ref, type Ref } from 'vue'
import { pinyin } from 'pinyin'

const splitMessage = (message: string): string => {
  //带拼音拼接的完整输出内容
  let finallMessage: string = ''
  //所有字符的拼音
  let _pinyinArray: string[][] = pinyin(message)
  //完整输出字符   转  数组
  let totalMessageArray = message.split('')
  _pinyinArray.map((item, index) => {
    //先拼接每个字的拼音
    item.map((secItem, secIndex) => {
      finallMessage += secItem
    })
    //在拼接每个字
    if (item[0] !== '，' && item[0] !== '。') {
      finallMessage += totalMessageArray[index]
    }
  })
  return finallMessage
}
/**
 *
 * @param message {Ref<string>} 显示文本
 * @param totalMessage {String} 原始文本
 * @param duringTime {Number} 输入间隔时间 秒 s
 */
const usePirntMessage = (
  totalMessage: string, // 原始文本
  duringTime: number
): Ref<string> => {
  // 当前索引
  let index = 0
  // 汉字内容
  let chinese = ''
  // 显示文本
  const message = ref('')
  // 原始文本
  const originalText = splitMessage(totalMessage)

  // 定义一个函数，根据索引和显示模式，更新显示文本
  const updateText = () => {
    // 如果索引超出原始文本长度，停止更新
    if (index >= originalText.length) {
      clearInterval(timer)
      return
    }
    // 获取当前字符
    const char = originalText[index]
    // 判断是否是汉字及标点的正则表达式
    const isChineseAndMark = /[\u4e00-\u9fa5\p{P}\p{S}]/u.test(char)

    // 如果是汉字,追加到汉字内容里
    if (isChineseAndMark) {
      chinese += char
      message.value = chinese
    } else {
      message.value += char
    }

    // 索引加一
    index++
  }

  // 使用setInterval函数，每隔一秒调用一次updateText函数
  const timer = setInterval(updateText, duringTime * 1000)

  return message
}

export { usePirntMessage }

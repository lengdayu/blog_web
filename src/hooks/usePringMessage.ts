import type { Ref } from 'vue'
import { pinyin } from 'pinyin'

const splitMessage = (message: string): string[] => {
  //带拼音拼接的完整输出内容
  let finallMessage: string[] = []
  //所有字符的拼音
  let _pinyinArray: string[][] = pinyin(message)
  //完整输出字符   转  数组
  let totalMessageArray = message.split('')
  _pinyinArray.map((item, index) => {
    //先拼接每个字的拼音
    item.map((secItem, secIndex) => {
      finallMessage[index * 2] = secItem
    })
    //在拼接每个字
    if (item[0] !== '，' && item[0] !== '。') {
      finallMessage[index * 2 + 1] = totalMessageArray[index]
    }
  })
  console.log(finallMessage)
  return finallMessage
}
/**
 *
 * @param message {Ref<string>} 输出的字符内容
 * @param totalMessage {String} 需要输出的完整内容
 * @param index {Number} 打印起始位置，默认0
 * @param duringTime {Number} 输入间隔时间 秒 s
 */
const usePirntMessage = (
  message: Ref<string>,
  totalMessage: string[],
  index: number,
  duringTime: number
): Ref<string> => {
  console.log(totalMessage[index])
  if (index <= totalMessage[index].length) {
    message.value += totalMessage[index].charAt(index)
    index++
    setTimeout(() => usePirntMessage(message, totalMessage, index, duringTime), duringTime * 1000)
  }
  return message
}

export { splitMessage, usePirntMessage }

const numberToWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
/**
 * 字符串日期加减
 * @param str:'yyyy-mm-dd'
 * @param offset: 正负偏移值
 */
export const dateStrMove = (str, offset) => {
  let aTmp = str.split('-')
  let oDate = new Date()
  oDate.setFullYear(aTmp[0], aTmp[1] - 1, aTmp[2])
  oDate.setDate(oDate.getDate() + offset)
  let m = (oDate.getMonth() + 1) >= 10 ? '' + (oDate.getMonth() + 1) : '0' + (oDate.getMonth() + 1)
  let d = oDate.getDate() >= 10 ? '' + oDate.getDate() : '0' + oDate.getDate()
  return oDate.getFullYear() + '-' + m + '-' + d
}

/**
 * 根据日期字符串找出星期几
 * str:'yyyy-mm-dd'
 * 返回0-6:对应日，一，二，三，四，五，六
 */
export const dateStrToWeek = (str) => {
  let dateArr = str.split('-')
  let index = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]).getDay()
  return numberToWeek[index]
}

/**
 * 比较两个日期字符串前后关系
 * str1:'yyyy-mm-dd'
 * str2:'yyyy-mm-dd'
 * 返回1:str2日期大于str1日期
 * 返回0:str2日期等于str1日期
 * 返回-1:str2日期小于str1日期
 */
export const checkDateStr = (str1, str2) => {
  let atmp1 = str1.split('-')
  let atmp2 = str2.split('-')
  if (atmp2[0] > atmp1[0]) {
    atmp1 = null
    atmp2 = null
    return 1
  } else if (atmp2[0] === atmp1[0] && atmp2[1] > atmp1[1]) {
    atmp1 = null
    atmp2 = null
    return 1
  } else if (atmp2[0] === atmp1[0] && atmp2[1] === atmp1[1] && atmp2[2] > atmp1[2]) {
    atmp1 = null
    atmp2 = null
    return 1
  } else if (atmp2[0] === atmp1[0] && atmp2[1] === atmp1[1] && atmp2[2] === atmp1[2]) {
    atmp1 = null
    atmp2 = null
    return 0
  } else {
    atmp1 = null
    atmp2 = null
    return -1
  }
}

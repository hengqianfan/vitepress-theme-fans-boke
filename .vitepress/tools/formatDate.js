export const formatDate = (mo) => {


    if (mo == null || undefined) {
        return `⏰ 未知时间`


    }
    // 将数子转化为字符串操作
    mo = mo.toString()
    let year = mo.slice(0, 2)
    let month = mo.slice(2, 4)
    let day = mo.slice(4, 6)
    return `⏰20${year}年${month}月${day}日`

}


export const formatDate2 = (momo) => {
    let year = momo.slice(0, 2)
    let month = momo.slice(2, 4)
    let day = momo.slice(4, 6)
    return `20${year}/${month}/${day}`
}
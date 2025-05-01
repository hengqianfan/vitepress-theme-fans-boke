export const getIconFontClassName = (mo) => {
    return `iconfont icon-` + mo
}


export const getIconUrl = (momo) => {
    if (momo == null || momo == undefined) {
        return `/icon/logo.png`


    }
    return `/icon/${momo}.png`
}
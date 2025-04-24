export const getPostName = (mo) => {
    let res = mo
    res = res.split(' ')[1]
    res = res.split('.h')[0]
    return res
}
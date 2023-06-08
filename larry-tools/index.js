// 包的入口文件

// 定义格式化时间的方法
function dateFormat(dtStr) {
    const dt = new Date(dtStr)
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 定义补零的函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}

module.exports = {
    dateFormat,
    htmlEscape,
    htmlUnEscape
}

// 定义转义HTML字符的函数
function htmlEscape(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, match =>{
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

function htmlUnEscape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match=>{
        switch (match) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}
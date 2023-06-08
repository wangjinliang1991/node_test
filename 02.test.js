const larry = require('./larry-tools')

// 格式化时间
const dtStr = larry.dateFormat(new Date())
console.log(dtStr);

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'

const str = larry.htmlEscape(htmlStr)
console.log(str);

const str2 = larry.htmlUnEscape(str)
console.log(str2);
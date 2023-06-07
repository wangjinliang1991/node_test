// 1. 创建两个正则表达式，分别匹配<style>和<script>标签
// 2. 使用fs模块，读取要被处理的html文件
// 3. 自定义resolveCSS方法，写入index.css样式文件
// 4. 自定义resolveJS方法，写入index.js脚本文件
// 5. 自定义resolveHTML方法，写入index.html文件
// fs.writeFile() 新内容会覆盖旧的内容；只能创建文件，不能创建路径

const fs = require('fs')
const path = require('path')
// [] 所有的字符 \s表示空白字符 \S表示非空白字符 *表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './resources/index.html'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('read html file failed, ' + err.message);
    } else {
        // read file success, resolve css js html
        resolveCSS(dataStr)
        resolveJS(dataStr)
        resolveHtml(dataStr)
    }
})

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    // 将提取的css写入到clock目录
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err) {
        if (err) {
            return console.log('write css style failed,'+err.message);
        }
        console.log('write css style success');
    })
}

function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname,'./clock/index.js'), newJS, function (err) {
        if (err) {
            return console.log('write js file failed,'+err.message);
        }
        console.log('write js file success');
    })
}

function resolveHtml(htmlStr) {
    const newHtml = htmlStr
    .replace(regStyle,'<link rel="stylesheet" href="./index.css" />')
    .replace(regScript, '<script src="./index.js"></script>')

    // write into index.html
    fs.writeFile(path.join(__dirname,'./clock/index.html'), newHtml, function (err) {
        if (err) {
            return console.log('write html file failed, '+err.message);
        }
        console.log('write html file success');
    })
}
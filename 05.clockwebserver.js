//导入http模块
const http = require('http')
//导入文件模块
const fs = require('fs')
//导入路径模块
const path = require('path')
const { url } = require('inspector')

//创建web服务器
const server = http.createServer()
// 监听web服务器的request事件
server.on('request', (req,res)=>{
    const url = req.url;
    // const fpath = path.join(__dirname,url)

    // 5.1 预定义一个空白的文件存放路径
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname,'/clock/index.html')
    }else{
        fpath = path.join(__dirname, '/clock', url)
    }

    // 根据映射过来的文件路径读取文件的内容
    fs.readFile(fpath, 'utf8', (err,dataStr)=>{
        if (err) {
            return res.end('404 not found')
        }
        res.end(dataStr)
    })
})

//启动服务器
server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1');
})
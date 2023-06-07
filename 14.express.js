const express = require('express')
// 创建实例
const app = express()

// 导入路由模块
const router = require('./16.apiRouter')
// register router to app
app.use('/api',router)

// 启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})
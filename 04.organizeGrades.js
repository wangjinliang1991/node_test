const fs = require('fs')

fs.readFile('./resources/成绩.txt','utf8',function(err,dataStr) {
    if (err) {
        return console.log('read file failed, '+err.message)
    }
    // console.log('read file success, '+ dataStr);

    // 1. 先把成绩的数据，按照空格分隔
    const oldGradArray = dataStr.split(' ')
    // 2. 循环分隔后的数据，对每一项数据，进行字符串的替换操作
    const newGradArray = []
    oldGradArray.forEach(item => {
        newGradArray.push(item.replace('=',': '))
    });
    // 3. 把新数组的每一项，进行合并，得到一个新的字符串
    const newStr = newGradArray.join('\r\n')


    // 4. 写入新文件
    fs.writeFile('./resources/成绩2.txt',newStr,function(err) {
        if (err) {
            return console.log('write file failed, '+err.message);
        }
        console.log("write success");
    })
})
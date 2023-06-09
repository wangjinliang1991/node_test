var obj1 = {foo: 'bar', x:42}
var obj2 = {foo: 'baz', y:13}

var cloneObj = {...obj1}
console.log(cloneObj);

var mergedObj = {...obj1, ...obj2}
console.log(mergedObj);


let person = {name:'tom', age:18}
// 外面加上{} 表示拷贝对象
let person2 = {...person}
console.log(person2);
// console.log(...person); //展开运算符不能展开对象

// 函数中的展开语法
function sum(...numbers) {
    return numbers.reduce((preValue,currentValue) =>{
        return preValue+currentValue
    })
}

console.log(sum(1,2,3,4));
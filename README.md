# json-filter
---

根据用户定义的数据结构过滤掉不需要的字段
例如，原始数据:
```
    let obj = {
        const obj = {
        id: 1,
        name: "wanglihui",
        password: "test",
        family: {
            first: 1,
            second: 'two'
        },
        birthday: new Date(),
        // willNull: null,
    };
```
现在只想返回, id 和family中的second，可以定义如下数据结构:
```
        const destObj = {
            id: 'number',
            family: {
                second: 'string'
            }
        }
```
最终拿到的结果是:
``` 
    {
        id: 1,
        family: {
            second: 'test'
        }
    }
```

### 返回数据结构定义
---

数据结构定义
date 日期， 对应javascript Date类型
boolean 布尔,对应 boolean
number 数值, 对应number
string 字符串，对应字符串
其他当做对象处理

### test
---
mocha

### Usage
---
npm install json-filter --save
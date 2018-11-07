import assert = require("assert");
export function filter(obj: any, descObj: any, checkType: boolean = true) { 
    if (obj.toJSON && typeof obj.toJSON == 'function') { 
        obj = obj.toJSON();
    }
    let keys = Object.keys(descObj);
    let returnObj: any = {};
    let simpleType = ['string', 'number', 'boolean'];
    let dateType = ['date'];
    for (let key of keys) { 
        let typestr = descObj[key];
        let val = obj[key];
        let isAllowEmpty = false;
        if (typeof typestr == 'string' && typestr.indexOf("?") == 0) { //允许为空
            typestr = typestr.replace(/^\?/, '');
            isAllowEmpty = true;
        }
        if (val == undefined && val == null && isAllowEmpty) { 
            returnObj[key] = val;
            continue;
        }
        //简单类型直接挑选出来
        if (simpleType.indexOf(typestr) >= 0) { 
            if (checkType) { 
                assert.equal(typeof val, typestr);
            }
            returnObj[key] = val;
            continue;
        }
        if (dateType.indexOf(typestr) >= 0) { 
            if (checkType) { 
                assert.equal(val instanceof Date, true);
            }
            returnObj[key] = val;
            continue;
        }
        //复杂类型
        returnObj[key] = filter(obj[key], descObj[key]);
    }
    return returnObj;
}
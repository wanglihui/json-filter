import { filter } from '../index';
import assert = require("assert");

describe("index.ts", () => { 
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

    it("should be ok", () => { 
        const destObj = {
        };
        let retObj = filter(obj, destObj);
        assert.equal(retObj.id, undefined);
    })

    it("should be ok", () => {
        const destObj = {
            id: 'number'
        }
        let retObj = filter(obj, destObj);
        assert.equal(retObj.id, obj.id);
    });

    it("should be ok", () => { 
        const destObj = {
            id: 'number',
            family: {
                second: 'string'
            }
        }
        let retObj = filter(obj, destObj);
        assert.equal(retObj.id, obj.id);
        assert.equal(retObj.family.second, obj.family.second);
        assert.equal(retObj.family.first, undefined);
    })

    it("should be ok", () => {
        const destObj = {
            id: 'number',
            family: {
                second: 'string'
            },
            birthday: 'date'
        }
        let retObj = filter(obj, destObj);
        assert.equal(retObj.id, obj.id);
        assert.equal(retObj.family.second, obj.family.second);
        assert.equal(retObj.family.first, undefined);
        assert.equal(retObj.birthday, obj.birthday);
    })

    it("should throw error when type not correct", () => {
        const destObj = {
            id: 'string',
            family: {
                second: 'string'
            },
            birthday: 'date'
        }
        try {
            filter(obj, destObj)
            throw new Error("should throw err!");
        } catch (e) { 
        }
    })

    it("should be support ?", () => {
        const destObj = {
            id: 'number',
            family: {
                second: 'string'
            },
            birthday: 'date',
            canBeNull: '?string'
        }
        let retObj = filter(obj, destObj)
        assert.equal(retObj.canBeNull, undefined);
    })
})

const LinkedLists = require('./linkedLists')

describe('#insertAtHead', ()=>{
    test('it adds element to start of list',()=>{
        const li = new LinkedLists()
        li.insertAtHead(10)
        const oldHead = li.head
li.insertAtHead(20)
expect(li.head.value).toBe(20)
expect(li.head.next).toBe(oldHead)
expect(li.length).toBe(2)
    })
})

describe('#getByIndex',()=>{
describe('with index less than 0',()=>{
test('it returns null',()=>{
    const li = LinkedLists.fromValues(10,20)
expect(li.getByIndex(-1)).toBeNull()
})
})

describe('with index greater thank list length',()=>{
    test('it returns null',()=>{
        const li = LinkedLists.fromValues(10,20)
    expect(li.getByIndex(5)).toBeNull()
    })
    })

    
describe('with index 0',()=>{
    test('it returns the head',()=>{
        const li = LinkedLists.fromValues(10,20)
    expect(li.getByIndex(0)).toBe(10)
    })
    })

})

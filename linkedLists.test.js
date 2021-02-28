
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
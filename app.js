const LinkedLists = require('./linkedLists')

const li = LinkedLists.fromValues(10,20,30,40)

li.print()

console.log(li.getByIndex(2).value)
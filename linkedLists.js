class LinkedLists{
    //no intial val so no params
    constructor(){
        this.head = null //we dont have first yet so null
        this.length = 0 //starts of as 0
    }
    insertAtHead(data){
 const newNode = new LinkedListNode(data, this.head)
 this.head = newNode 
 length++
    } //inserts into beginning of list
}

class LinkedListNode{
constructor(value, next){
    this.value = value //value of node
    this.next = next //next linkedlist node
}
}
//each node in linked list
module.exports = LinkedLists
//so we can access in test file
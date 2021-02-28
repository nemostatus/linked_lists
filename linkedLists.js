class LinkedLists{
    //no intial val so no params
    constructor(){
        this.head = null //we dont have first yet so null
        this.length = 0 //starts of as 0
    }
    insertAtHead(data){
 const newNode = new LinkedListNode(data, this.head)
 this.head = newNode 
 this.length++
    } //inserts into beginning of list
}

class LinkedListNode{
constructor(value, next){
    this.value = value //value of node
    this.next = next //next linkedlist node
}
}

LinkedLists.fromValues= function(...values){
    const li = new LinkedLists()
    for(let i = values.length - 1; i >=0;i--){
        li.insertAtHead(values[i])
    }
} //this is a helper function so test can be ran without depending on other tested methods
//each node in linked list
module.exports = LinkedLists
//so we can access in test file
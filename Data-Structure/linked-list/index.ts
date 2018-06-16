// linked-list class
class LinkedList {
    private head: LinkedListNode;
    constructor(node: LinkedListNode) {
        this.head = node;
    }

    // adds an item at the end of linked list
    public append (item) {
        let currentItem: LinkedListNode = this.head;
        let newItem = new LinkedListNode(item);
        // If list is Empty add the element and make it head
        if(!currentItem) {
            this.head = newItem;
        } else {
            // iterate to the end of the list
            while(currentItem.next) {
                currentItem = currentItem.next;
            }
            // add node
            currentItem.next = newItem;
        }
    } 

    // prints the list items
    public printList() {
        let currentItem = this.head;
        let str = "";
        while(currentItem) {
            str += currentItem.value + " ";
            currentItem = currentItem.next;
        }
        return str;
    }
}


// User defined class LinkedListNode
class LinkedListNode {
    public value: any;
    public next: LinkedListNode;
    // constructor
    constructor(item) {
        this.value = item;
        this.next = null;
    }
}

let h = new LinkedListNode(4);
let l = new LinkedList(h);
l.append(3);
console.log(l.printList());
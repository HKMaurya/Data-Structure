// linked-list class
class LinkedList {
    private head: LinkedListNode;
    private size: number;
    constructor(node: LinkedListNode) {
        this.head = node;
        this.size = 1;
    }

    // adds an item at the end of linked list
    public append(item) {
        let currentItem: LinkedListNode = this.head;
        let newItem = new LinkedListNode(item);
        // If list is Empty add the element and make it head
        if (!currentItem) {
            this.head = newItem;
        } else {
            // iterate to the end of the list
            while (currentItem.next) {
                currentItem = currentItem.next;
            }
            // add node
            currentItem.next = newItem;
        }
        this.size++;
    }

    // Add the element at the beginning of the linked list
    public prepend(item) {
        let newItem = new LinkedListNode(item);
        let currentItem = this.head;
        this.head = newItem;
        newItem.next = currentItem;
        this.size++;
    }

    // prints the list items
    public printList() {
        let currentItem = this.head;
        let str = "";
        while (currentItem) {
            str += currentItem.value + " ";
            currentItem = currentItem.next;
        }
        return str;
    }

    // Gives the size of the list
    public sizeOfList() {
        return this.size;
    }

    // checks the list for empty
    public isEmpty() {
        return this.size === 0;
    }

    // Finds the index of element
    public indexOf(item) {
        let count = 0;
        let currentItem = this.head;
        // iterate over the list
        while (currentItem != null) {
            // compare each element of the list with given element
            if (currentItem.value === item) {
                return count;
            } else {
                count++;
                currentItem = currentItem.next;
            }
        }
        // not found
        return -1;
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
console.log(l.sizeOfList());
console.log(l.isEmpty());
console.log(l.indexOf(3));
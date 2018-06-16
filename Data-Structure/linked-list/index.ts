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
        // If list is Empty add the item and make it head
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

    // Add the item at the beginning of the linked list
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

    // Finds the index of item
    public indexOf(item) {
        let count = 0;
        let currentItem = this.head;
        // iterate over the list
        while (currentItem != null) {
            // compare each item of the list with given item
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

    // Removes a given item from the list
    public removeItem(item) {
        let currentItem = this.head;
        let previous = null;
        // Iterate over the list
        while(currentItem != null) {
            // Comparing item with current element if found then remove and return true
            if(currentItem.value === item) {
                if(previous == null) {
                    this.head = currentItem.next;
                } else {
                    previous.next = currentItem.next;
                }
                this.size--;
                return currentItem.value;
            }
            previous = currentItem;
            currentItem = currentItem.next;
        }
        return -1;
    } 

    // Removes an element from the specified location
    public removeFrom(index) {
        if(index > 0 && index > this.size) {
            return -1;
        } else {
            let currentItem = this.head;
            let previous = currentItem;
            let it = 0;
            // deleting first element
            if(index === 0) {
                this.head = currentItem.next;
            } else {
                // iterate over the list to the position to remove an item
                while(it < index) {
                    it++;
                    previous = currentItem;
                    currentItem = currentItem.next;
                }
                //remove the item
                previous.next  = currentItem.next;
            }
            this.size--;
            // return the remove element
            return currentItem.value; 
        }
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
console.log(l.printList()); // print 4 3
console.log(l.sizeOfList()); // print 2
console.log(l.isEmpty()); // print false
l.prepend(13);
console.log(l.printList()); // print 13 4 3
console.log(l.indexOf(3)); // print 2
console.log(l.removeItem(4)); // print 4
console.log(l.printList()); // print 13 3
console.log(l.removeFrom(0)); // print 13
console.log(l.printList()); // print 3

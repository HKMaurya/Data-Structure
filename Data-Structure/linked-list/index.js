// linked-list class
var LinkedList = /** @class */ (function () {
    function LinkedList(node) {
        this.head = node;
        this.size = 1;
    }
    // adds an item at the end of linked list
    LinkedList.prototype.append = function (item) {
        var currentItem = this.head;
        var newItem = new LinkedListNode(item);
        // If list is Empty add the element and make it head
        if (!currentItem) {
            this.head = newItem;
        }
        else {
            // iterate to the end of the list
            while (currentItem.next) {
                currentItem = currentItem.next;
            }
            // add node
            currentItem.next = newItem;
        }
        this.size++;
    };
    // Add the element at the beginning of the linked list
    LinkedList.prototype.prepend = function (item) {
        var newItem = new LinkedListNode(item);
        var currentItem = this.head;
        this.head = newItem;
        newItem.next = currentItem;
        this.size++;
    };
    // prints the list items
    LinkedList.prototype.printList = function () {
        var currentItem = this.head;
        var str = "";
        while (currentItem) {
            str += currentItem.value + " ";
            currentItem = currentItem.next;
        }
        return str;
    };
    // Gives the size of the list
    LinkedList.prototype.sizeOfList = function () {
        return this.size;
    };
    // checks the list for empty
    LinkedList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    // Finds the index of element
    LinkedList.prototype.indexOf = function (item) {
        var count = 0;
        var currentItem = this.head;
        // iterate over the list
        while (currentItem != null) {
            // compare each element of the list with given element
            if (currentItem.value === item) {
                return count;
            }
            else {
                count++;
                currentItem = currentItem.next;
            }
        }
        // not found
        return -1;
    };
    return LinkedList;
}());
// User defined class LinkedListNode
var LinkedListNode = /** @class */ (function () {
    // constructor
    function LinkedListNode(item) {
        this.value = item;
        this.next = null;
    }
    return LinkedListNode;
}());
var h = new LinkedListNode(4);
var l = new LinkedList(h);
l.append(3);
console.log(l.printList());
console.log(l.sizeOfList());
console.log(l.isEmpty());
console.log(l.indexOf(3));

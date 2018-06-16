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
        // If list is Empty add the item and make it head
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
    // Add the item at the beginning of the linked list
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
    // Finds the index of item
    LinkedList.prototype.indexOf = function (item) {
        var count = 0;
        var currentItem = this.head;
        // iterate over the list
        while (currentItem != null) {
            // compare each item of the list with given item
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
    // Removes a given item from the list
    LinkedList.prototype.removeItem = function (item) {
        var currentItem = this.head;
        var previous = null;
        // Iterate over the list
        while (currentItem != null) {
            // Comparing item with current element if found then remove and return true
            if (currentItem.value === item) {
                if (previous == null) {
                    this.head = currentItem.next;
                }
                else {
                    previous.next = currentItem.next;
                }
                this.size--;
                return currentItem.value;
            }
            previous = currentItem;
            currentItem = currentItem.next;
        }
        return -1;
    };
    // Removes an element from the specified location
    LinkedList.prototype.removeFrom = function (index) {
        if (index > 0 && index > this.size) {
            return -1;
        }
        else {
            var currentItem = this.head;
            var previous = currentItem;
            var it = 0;
            // deleting first element
            if (index === 0) {
                this.head = currentItem.next;
            }
            else {
                // iterate over the list to the position to remove an item
                while (it < index) {
                    it++;
                    previous = currentItem;
                    currentItem = currentItem.next;
                }
                //remove the item
                previous.next = currentItem.next;
            }
            this.size--;
            // return the remove element
            return currentItem.value;
        }
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

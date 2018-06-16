// linked-list class
var LinkedList = /** @class */ (function () {
    function LinkedList(node) {
        this.head = node;
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

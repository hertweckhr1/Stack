//with array 
// if size is constricted - go with an array 
myStack = new Stack(

class Stack {
    constructor() {
        this.limit = 4
        this.internalArray = [this.limit]
        this.size = 0
    }

    isFull() {
        if (this.size === this.limit) return true;
        return false;
    }

    // O(1) time complexity 
    push(value) {
        if (isFull()) return;
        this.internalArray(this.size) = value;
        this.size++ 
    }

    pop() {
        if (isEmpty()) return;
        this.size--
        return internalArray[this.size]
    }

    isEmpty() {
        if (this.size === 0) return true;
    }

    print(){
        console.log("The stack is: ");
        for (let i = 0; i<= this.size; i++) {
            console.log(this.internalArray[i])
            console.log(" ")
        }
    }
})

// with linked list: 
// no disadvantage with stack being full 
// not reliant on a contiguous space somewhere
// each node in a linklist takes up much more space 
// linked list always insert at the head 
myStack = new Stack(
    class Stack {
        constructor() {
            this.internalList = LinkedList.new() //assuming you already had a linked list class 
        }

        isFull() {
            // always return false since there is no size limit;
            return false;
        }

        // O(1) time complexity 
        push(value) {
            //insert is the function from the linkedlist
            this.internalList.insert(value);
        }

        pop() {
            /* 
            def remove_head() 
                return nil if @head == nil
                temp = @head.data

                //head.next.prev makes the next's nodes previous nil instead of the current head 
                @head.next.prev = nil if @head.next 
                @head = @head.next 
                @tail = nil if @head == nil

                return temp
            */
            return this.internalList.removeHead();
        }

        isEmpty() {
            let temp = this.internalList.removeHead();
            if (!temp) {
                this.internalList.insert(value);
                return false;
            }
            return true;
        }

        print() {
            //visit function in linkedlist returns all of the values 
            internalArray.visit();
        }
    })

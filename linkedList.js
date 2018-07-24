/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
    //Define the head and tail 
    let head = null;
    let tail = null;

    //Methods

    //Returns the value of the first node of the list:
    getHead = () => {
        return head;
    }

    //Returns the value of the last node of a list:
    getTail = () => {
        return tail;
    }

    //Takes in any data value and adds a new node to the end of a list and returns the new node
    add = value => {
        //create a new node 
        let addThisNode = {
            value: value, 
            next: null
        }

        //First check if the list is empty:
        if (head === null) {  //using (!head) works too 
            head = addThisNode;
            tail = addThisNode;
        } 
        //Else - if it is not empty 
        else {
            tail.next = addThisNode;
            tail = addThisNode
        }
        //Return the new tail - which should be the new node 
        return tail;
    }

    get = number => {
        if (head < 0 || head === 0) {
            return false;
        } 
        // else if (head === null) {
        //     return false;
        // }
        else {
            let getThisNode = head;
            for (let i = 0; i < number; i++) {
                if (getThisNode.next !== null) {
                    getThisNode = getThisNode.next;
                }
                else {
                    return false;
                }
            }
            return getThisNode;
        }
    }

    remove = number => {
        let previousNode = get(number - 1);
        let removeCurrentNode = get(number);

        // if (removeThisNode === null) { //this didn't work 
        if (!removeCurrentNode) {              
            return false;                   //this returns false
        }
        // else if (previousNode === null) { //this didn't work
        else if (!previousNode) {                       //if the previous node doesn't exist
            head = removeCurrentNode;                   //the target node must be head
        }
        else if (!removeCurrentNode.next) {    //if the target node is the tail  
            tail = previousNode;                       //set the tail to be the previous node 
            tail.next = null;                          //now the node next to the tail shouldn't exist
        }
        else {
            previousNode.next = removeCurrentNode.next;
        }
    }

    insert = (value, number) => {
        
    }
    

    return {
        getHead,
        getTail, 
        add,
        get, 
        remove,
        insert
    }

}
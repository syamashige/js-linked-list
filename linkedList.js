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
        if (head === null) {
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

    }

    remove = number => {

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
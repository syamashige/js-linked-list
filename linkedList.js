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
    const getHead = () => {
        return head;
    }

    //Returns the value of the last node of a list:
    const getTail = () => {
        return tail;
    }

    //Takes in any data value and adds a new node to the end of a list and returns the new node
    const add = value => {
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

    const get = number => {
        if (number < 0 || number === null) {
            return false;
        } 
        // else if (number === null) {
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

    const remove = number => {
        let previousNode = get(number - 1);
        let removeCurrentNode = get(number);

        // console.log("Number is: ", number)
        // console.log("PreviousNode is: ", previousNode)
        // console.log("CurrentNode: ", removeCurrentNode)

        // if (removeThisNode === null) { //this didn't work 
        if (!removeCurrentNode) {                        //if the current node does not exist       
            // console.log("!Current is: ", !removeCurrentNode)
            return false;                                //this returns false
        }
        // else if (previousNode === null) { //this didn't work
        else if (!previousNode) {                       //if the previous node doesn't exist - the target node would be the head 
            // console.log("!Previous is: ", !previousNode)    
            head = removeCurrentNode.next;              //the head then becomes the node next to what you want to remove 
            // console.log("New Head is: ", head)
        }
        else if (removeCurrentNode.next === null) {    //if the target node is the tail  
            tail = previousNode;                       //set the tail to be the previous node 
            tail.next = null;                          //now the node next to the tail shouldn't exist
            // console.log("New Tail is: ", tail)
        }
        else {                                          //else
            previousNode.next = removeCurrentNode.next; //the current node gets replaced with it's next node 
        }
    }

    const insert = (value, number) => {                                
        let previousNode = get(number - 1)
        let currentNode = get(number)
        let insertThisNode = {
            value: value,
            next: null
        }

        if (!currentNode) {
            return false;
        }
        else if (!previousNode) {
            insertThisNode.next = head;
            head = insertThisNode;
        }
        else {
            previousNode.next = insertThisNode;
            insertThisNode.next = currentNode;
        }
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
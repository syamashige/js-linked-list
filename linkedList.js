/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {

    let head = null;                //the head and tail starts as null
    let tail = null;

    const getHead = () => {         //Another way of writing it: getHead = () => head
        return head;
    }

    const getTail = () => {
        return tail;
    }

    const add = (value) => {        //can technically be written as: add = value =>

        const newNode = {           //establish the new node
            value: value,
            next: null 
        } 

        if (head === null) {        //if there is no head, there's nothing in the list
            head = newNode;         //set the head and tail to equal the new node - this sets it as the one item in the list
            tail = newNode;
        } else {                    //if there is something in the list
            tail.next = newNode;    //set the new node to be next to the tail/at the end of the list
            tail = newNode;         //set the tail to be the new node
        }
        return tail;
     }

    const get = (number) => {
        
        // console.log("number", number)
        if (number < 0 || !head) {    // if the number is negative, or if nothing exists
            // console.log("no number")
            return false 
        } else if (number === 0) {
            return head
        } else {
            let getThis = head
            // console.log("getThis", getThis)
            for (let i = 0; i < number; i++) {
                if (getThis.next !== null) {
                    getThis = getThis.next
    
                } else {
                    return false
                }
                // getThis = getThis.next
                // console.log("through the loop")
            }
            // getThis = getThis.next;
            // console.log("index is", number)
            // console.log("WTF", getThis)
            console.log("Get This", getThis )
            return getThis;
        }
        // return getThis;
    }

    const remove = (number) => {
        // console.log("index", number)
        let previousThing = get(number - 1);
        // console.log("previous", previousThing);
        // console.log("!previous", !previousThing)
        let thing = get(number);
        // console.log("get number", get(number))
        // console.log("thing", thing);
        // console.log("!thing", !thing)

        if (!thing) {
            return false
        } 
        else if (!previousThing) {
            head = thing.next
        } 
        else if (thing.next === null) {
            tail = previousThing;
            // console.log("tail", tail)
            tail.next = null
        }    
        else {
            previousThing.next = thing.next
        }
    }

    const insert = (value, number) => {
        console.log("Value:", value);
        console.log("Number: ", number)

        let previousNode = get(number - 1);
        let thisNode = get(number)
        let insertThis = {
            value: value, 
            next: null
        }
        console.log("previousNode", previousNode);
        console.log("thisNode", thisNode)

        if (!thisNode) {                            //if the current node is false
            console.log("!thisNode", !thisNode)
            return false;                           //return false
        }
        else if (!previousNode) {                   //if the previous node is false
            console.log("!previousNode", previousNode)
            insertThis.next = head;                 //the inserted node will be the new head
            head = insertThis;                      //the current head will be the new node
        }
        else {
            previousNode.next = insertThis;         //the previous node is now the new node 
            insertThis.next = thisNode;             //the node next to the new node is now what used to be the current node 
        }


        
        // previousNode.next = insertThis;
        // insertThis.next = previousNode;
        

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
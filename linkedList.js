/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
    let head = null;
    let tail = null;

    //Another way to write it: 
    //getHead = () => head;
    //let getHead = () => head;
    const getHead = () => {
        return head;
    }

    const getTail = () => {
        return tail;
    }

    const add = (value) => {

        const newNode = {
            value: value,
            next: null
        } 

        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
        return tail;
     }

    const get = (number) => {
        
        console.log("number", number)
        if (number < 0) {
            console.log("negative number")
            return false 
        } else if (number === 0) {
            console.log("zero", number)
            return head
        } else {
            let getThis = head
            for (let i = 0; i < number; i++) {
                if (getThis.next ===  null) {
                    return false
    
                } else {
                    getThis = getThis.next
                }
            }
            console.log("index is", number)
            console.log("WTF", getThis)
            return getThis;
        }
    }

    const remove = (number) => {
        let previousNode = get(number - 1)
        let nodeToRemove = get(number)

        console.log("previousNode", previousNode)
        console.log("!previousNode", !previousNode)
// Not working in the same way
        if (nodeToRemove === false) {
            return false;
        } 
        else if (previousNode === false) {
            head = nodeToRemove.next
        }
        else if (nodeToRemove === null) {
            tail = previousNode
            tail.next = null
        }
        else {
            previousNode.next = nodeToRemove.next
        }

    }

    const insert = (value, number) => {

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
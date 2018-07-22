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
        if (number < 0 || !head) {
            console.log("no number")
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
            console.log("index is", number)
            console.log("WTF", getThis)
            return getThis;
        }
        // return getThis;
    }

    const remove = (number) => {

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
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

    add = value => {

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
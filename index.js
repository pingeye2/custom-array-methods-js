//array for test cases, change if needed
const arr = [10,6,3,'foo',[1,2,3]];

const cm = {
    //converts all items to numbers
    meth1: (arr) => arr.map(x => +x),
    //converts all items to the name of their data-types
    meth2: (arr) => arr.map(x => typeof x),
    //Filters out all non-numbers 
    meth3: (arr) => arr.filter(x => {if(typeof x === 'number') return true;}),
    //filters out all data types that are not passed in as argument 2 
    meth4: (arr, dataType) => arr.filter(x => {if(typeof x === dataType) return true;}),
    //sorts numeric array in ascending order 
    meth5: (arr) => arr.sort((a,b) => a - b),
    //sorts numeric array in descending order  
    meth6: (arr) => arr.sort((a,b) => b - a),

}

console.log(cm.meth4(arr, 'string'));
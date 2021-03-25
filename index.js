//array for test cases, change if needed
const arr = [1,2,3,'foo',[1,2,3]];

const cam = {
    meth1: (arr) => {return arr.map(x => +x);},
    meth2: (arr) => {return arr.map(x => typeof x);},
}

let res = cam.meth2(arr);
console.log(res);
import ArrayData from '../data/array-data';

const array1 = [1, 2, 3, 4, 5];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 4, 6, 8, 10]


function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  console.log(displayName);
  
  


function ArrayList({numbers}) {
    return (
        <>
        {numbers.map((number) =>
                <h1 key={number}>{number}</h1>
            )
        }
        </>
    );  
}           

export default function ArrayMap() {
    return (
    <>     
        <ArrayList numbers={ArrayData} /> 
    </> 
    );
}
import ArrayData from '../data/array-data';

const array1 = [1, 2, 3, 4, 5];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [1, 4, 6, 8, 10]


function ArrayList({numbers}) {
    return (
        <>
        {[1,2,3,4,5].map((number) =>
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
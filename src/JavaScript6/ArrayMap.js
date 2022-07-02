import ArrayData from '../data/array-data';

const product1 = [1, 2, 3, 2, 2];
const product2 = product1.find(x => x === 2);
console.log(product2);
// expected output: 2



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
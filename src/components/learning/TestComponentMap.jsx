function TestItem({currentNumber}) {
    if(currentNumber % 2 === 0 ){
        return <div>{currentNumber} - Even</div>
    }
   return <h1>{currentNumber}</h1>; 
}

function TestComponentMap() {
    const a = [1,2,3,4];

    return <>
        {a.map(c => <TestItem currentNumber={c}/>)}
    </>
}

export default TestComponentMap;
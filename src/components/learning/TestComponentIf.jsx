function TestComponentIf() {
    const items = [1];

    let output;

    if(items.length === 0) {
        output = <h1>No items found</h1>
    } else {
        output = <h1>You have {items.length} items</h1>
    }
  
    let isLogin = true;
    return <>
        {output}
        <h2 style={{color: items.length === 0 ? 'white': 'blue'}}>See your items ({items.length})</h2>
    </>
}

export default TestComponentIf;
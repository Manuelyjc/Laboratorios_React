const products = [
    {title:"Cabbage", isFruit: false, id:1},
    {title:"Orange", isFruit: true, id:4},
    {title:"Garlic", isFruit: false, id:2},
    {title:"Apple", isFruit: true, id:3}
];

function ShoppingList() {
    const listItems = products.map(product =>
        //<li>  representa un elemento individual en una lista.
        <li
            key={product.id}
            style={{
                //Si es afirmativo lo pondra magenta
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    return (
         //<ul>  crear una lista que no tiene un orden específico.
        <ul>{listItems}</ul>
    );
}


export  default ShoppingList;

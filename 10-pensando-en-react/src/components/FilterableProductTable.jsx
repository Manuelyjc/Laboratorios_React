//import ProductTable from "./ProductTable.jsx";
//import SearchBar from "./SearchBar.jsx";

//function FilterableProductTable ({products}){
  //  return(
//    <>
  //      <SearchBar/>
  //      <ProductTable products={products}/>
        //    </>

//    );
//}

//export default FilterableProductTable;



// FilterableProductTable.jsx´

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

// filtrar
function FilterableProductTable ({ products }) {
    const [Stocke, setStocked] = useState(false);

    const handleCheckboxChange = () => {
        setStocked(!Stocke);
    }

    const filteredProducts = Stocke ? products.filter(product => product.stocked) : products;
// fin de filtrar

    return (
        <div>
            <SearchBar onCheckboxChange={handleCheckboxChange} />
            <ProductTable products={filteredProducts} />
        </div>
    );
}

export default FilterableProductTable;

import ProductTable from "./ProductTable.jsx";
import SearchBar from "./SearchBar.jsx";
function FilterableProductTable ({products}){
    return(
    <>
        <SearchBar/>
        <ProductTable products={products}/>
    </>

    );
}

export default FilterableProductTable;
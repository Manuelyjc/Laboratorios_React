//import ProductCategoryRow from "./ProductCategoryRow.jsx";
//import ProductRow from "./ProductRow.jsx";

//function ProductTable({products}){
  //  const rows = [];
   // let lastCategory = null;

  //  products.forEach( (product) => {
     //   if (product.category !== lastCategory) {
          //  rows.push(
             //   <ProductCategoryRow
              //      category={ product.category}
              //      key={product.category}/>
     //       );
     //   }
     //   rows.push(
    ////        <ProductRow
       //         product={product }
    //            key={ product.name}/>
    //    );
    //    lastCategory = product.category
    //    }
  //  );

  //  return(
     //   <>
     //       <table>
            //           <thead>
                //           <tr>
                //               <th>Name</th>
                    //               <th>Price</th>
                    //            </tr>
                    //            </thead>
                //             <tbody>
                //                 {rows}
                    //             </tbody>
                //         </table>
            //       </>
//    );
//}

//export default ProductTable;



 
import React from 'react';

function ProductTable({ products }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.name}>
                        <td style={{ color: product.stocked ? 'black' : 'red' }}>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;

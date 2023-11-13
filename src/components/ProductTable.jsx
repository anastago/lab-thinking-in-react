import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div>
      <table>
        <tbody>
          <ProductRow filteredItems={props.filteredItems} />
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;

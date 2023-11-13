import React from 'react';

function ProductRow(props) {
  return (
    <>
      {props.filteredItems.map((product) => (
        <tr key={product.id}>
          <td style={{ color: product.inStock ? 'black' : 'red' }}>
            {product.name}
          </td>
          <td>{product.price}</td>
          <td>{product.category}</td>
        </tr>
      ))}
    </>
  );
}

export default ProductRow;

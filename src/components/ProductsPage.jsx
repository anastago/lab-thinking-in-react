import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [items, setItems] = useState(jsonData);
  const [filteredItems, setFilteredItems] = useState(items);

  const filterItems = (searchText) => {
    const updatedItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItems(updatedItems);
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>IronStore</h1>
      <SearchBar filterItems={filterItems}></SearchBar>
      <ProductTable filteredItems={filteredItems}></ProductTable>
    </div>
  );
}
export default ProductsPage;

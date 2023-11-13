import React from 'react';

function SearchBar(props) {
  const handleSearch = (e) => {
    props.filterItems(e.target.value);
  };
  return (
    <div>
      <h3>Search</h3>
      <form>
        <input
          type="search"
          onChange={handleSearch}
          placeholder="Search"
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;

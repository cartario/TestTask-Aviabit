import React from 'react';

const SearchBar = (props) => {
  const {term, data, updateData} = props;
  const dataSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filter = data.filter(flight => {      
      return flight.flight.toString().toLowerCase().includes(value);
    });

    updateData({
      data: filter,
      term: value
    });
  };

  return (
    <div className="searchbar">
      <input
        value={term}
        type="text"
        className="searchbar__control"
        placeholder="Найти по номеру рейса...Пример запроса ab-3377"
        onChange={dataSearch}        
      />
    </div>
  );  
};

export default SearchBar;

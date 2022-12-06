import React, { useState } from 'react';

function SearchFeature(props) {
  const [SearchTerm, setSearchTerm] = useState('');

  const searchHandler = (event) => {
    setSearchTerm(event.currentTarget.value);
    props.refreshFunction(event.currentTarget.value);
  };

  return (
    <div>
      <input
        placeholder=" 상품명 검색"
        onChange={searchHandler}
        style={{ width: 200, height: 33 }}
        value={SearchTerm}
      />
    </div>
  );
}

export default SearchFeature;

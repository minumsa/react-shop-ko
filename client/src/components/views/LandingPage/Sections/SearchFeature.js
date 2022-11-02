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
        placeholder="검색어를 입력하세요"
        onChange={searchHandler}
        style={{ width: 200 }}
        value={SearchTerm}
      />
    </div>
  );
}

export default SearchFeature;

import React from 'react';
import './UserCardBlock.css';

function UserCardBlock(props) {
  const renderCartImages = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const renderItems = () =>
    props.products &&
    props.products.map((product, index) => (
      <tr key={index}>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox"></input>
        </td>
        <td>
          <img
            style={{ width: '48px' }}
            alt="product"
            src={renderCartImages(product.images)}
          />
        </td>
        <td style={{ textAlign: 'center' }}>
          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </td>
        <td style={{ textAlign: 'center' }}>{product.quantity}</td>
        <td style={{ textAlign: 'center' }}>
          <button onClick={() => props.removeItem(product._id)}>
            상품삭제
          </button>
        </td>
      </tr>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ width: '50px' }}>
              <input type="checkbox"></input>
            </th>
            <th style={{ width: '450px' }}>상품명</th>
            <th style={{ width: '150px' }}>주문금액</th>
            <th style={{ width: '120px' }}>수량</th>
            <th style={{ width: '100px' }}>주문</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;

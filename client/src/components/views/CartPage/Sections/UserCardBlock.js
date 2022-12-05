import React from "react";
import "./UserCardBlock.css";

function UserCardBlock(props) {
  const renderCartImages = images => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const renderItems = () =>
    props.products &&
    props.products.map((product, index) => (
      <tr key={index}>
        <td>
          <img
            style={{ width: "70px" }}
            alt="product"
            src={renderCartImages(product.images)}
          />
        </td>
        <td>{product.quantity}</td>
        <td>
          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </td>
        <td>
          <button onClick={() => props.removeItem(product._id)}>삭제</button>
        </td>
      </tr>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>상품명(옵션)</th>
            <th>수량</th>
            <th>주문금액</th>
            <th>선택삭제</th>
          </tr>
        </thead>

        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;

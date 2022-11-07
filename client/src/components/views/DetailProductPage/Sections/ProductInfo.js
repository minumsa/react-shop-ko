import React from 'react';
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {
  const clickHandler = () => {};

  return (
    <div>
      <Descriptions bordered>
        <Descriptions.Item label="PRICE">
          {props.detail.price}
        </Descriptions.Item>
        <Descriptions.Item label="SOLD">{props.detail.sold}</Descriptions.Item>
        <Descriptions.Item label="VIEW">{props.detail.views}</Descriptions.Item>
        <Descriptions.Item label="ITEM INFO">
          {props.detail.description}
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button size="large" shape="round" onClick={clickHandler}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;

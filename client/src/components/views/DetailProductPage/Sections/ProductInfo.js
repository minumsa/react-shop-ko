import React from "react";
import { Button, Descriptions } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../_actions/user_actions";

function ProductInfo(props) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    // 필요한 정보를 Cart 필드에다가 넣어준다.
    dispatch(addToCart(props.detail._id));
  };

  return (
    <div>
      <Descriptions bordered>
        <Descriptions.Item label="PRICE">
          {props?.detail?.price
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button size="large" shape="round" onClick={clickHandler}>
          장바구니
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;

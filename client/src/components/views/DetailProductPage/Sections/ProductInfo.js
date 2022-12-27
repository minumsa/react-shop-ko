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
    <div style={{ color: "black" }}>
      <Descriptions bordered>
        <Descriptions.Item label="PRICE">
          <div style={{ color: "black" }}>
            {props?.detail?.price
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
        </Descriptions.Item>
        <Descriptions.Item label="SOLD">
          <div style={{ color: "black" }}>{props.detail.sold}</div>
        </Descriptions.Item>
        <Descriptions.Item label="VIEW">
          <div style={{ color: "black" }}>{props.detail.views}</div>
        </Descriptions.Item>
        <Descriptions.Item label="ITEM INFO">
          <div style={{ whiteSpace: "pre-wrap", color: "black" }}>
            {props.detail.description}
          </div>
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Button size="large" shape="round">
            구매하기
          </Button>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <Button size="large" shape="round" onClick={clickHandler}>
            장바구니
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;

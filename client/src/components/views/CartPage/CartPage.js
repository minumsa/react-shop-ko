import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCartItems,
  removeCartItem,
  onSuccessBuy,
} from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import { Empty, Result } from "antd";
import Paypal from "../../utils/Paypal";

function CartPage(props) {
  const dispatch = useDispatch();
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [ShowSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let cartItems = [];

    // 리덕스 User state의 cart 안에 상품이 들어있는지 확인
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach(item => {
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          response => {
            setShowTotal(true);
          }
        );
      }
    }
  }, [props.user.userData]);

  useEffect(() => {
    let total = 0;
    if (props.user.cartDetail) {
      props.user.cartDetail.forEach((item, index) => {
        if (
          props.user.userData.selectCartIndexes &&
          props.user.userData.selectCartIndexes.includes(index)
        ) {
          console.log(item);
          console.log(total);
          total += parseInt(item.price, 10) * item.quantity;
        }
      });
    }
    setTotal(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  }, [props.user.userData]);

  let removeFromCart = productId => {
    dispatch(removeCartItem(productId)).then(response => {
      if (response.payload.productInfo.length <= 0) {
        setShowTotal(false);
      }
    });
  };

  const transactionSuccess = data => {
    dispatch(
      onSuccessBuy({
        paymentData: data,
        cartDetail: props.user.cartDetail,
      })
    ).then(response => {
      if (response.payload.success) {
        setShowTotal(false);
        setShowSuccess(true);
      }
    });
  };

  let cartCount;
  if (props.user.userData && props.user.userData.selectCartIndexes) {
    cartCount = props.user.userData.selectCartIndexes.length;
  } else {
    cartCount = 0;
  }

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div
        style={{
          color: "black",
          fontSize: "19px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "45px",
        }}
      >
        <span>장바구니</span>
        <span style={{ marginLeft: "2px" }}>({cartCount})</span>
      </div>
      <div>
        <UserCardBlock
          products={props.user.cartDetail}
          selectCartIndexes={
            props.user.userData && props.user.userData.selectCartIndexes
          }
          removeItem={removeFromCart}
        />
      </div>
      {ShowTotal ? (
        <div style={{ marginTop: "1rem", textAlign: "right" }}>
          <p style={{ color: "black" }}>
            <span style={{ fontSize: "15px", marginRight: "10px" }}>
              전체합계:
            </span>
            <span style={{ fontSize: "23px", fontWeight: "bold" }}>
              {Total}원
            </span>
          </p>
        </div>
      ) : ShowSuccess ? (
        <Result status="success" title="Successfully Purchased Items!" />
      ) : (
        <>
          <br />
          <Empty description={false} />
        </>
      )}
      {/* ShowTotal이 있을 때만 Paypal버튼을 보여주기 */}
      <div style={{ textAlign: "right" }}>
        {ShowTotal && <Paypal total={Total} onSuccess={transactionSuccess} />}
      </div>
    </div>
  );
}

export default CartPage;

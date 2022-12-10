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
  const [TotalAmount, setTotalAmount] = useState(0);

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
            calculateTotal(response.payload);
          }
        );
      }
    }
  }, [props.user.userData]);

  let calculateTotal = cartDetail => {
    let total = 0;
    cartDetail.map(item => {
      total += parseInt(item.price, 10) * item.quantity;
    });

    setTotal(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    setShowTotal(true);
  };

  // TODO: 총 개수 React Hooks
  useEffect(() => {
    let cartItems = [];

    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach(item => {
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          response => {
            console.log(response.payload);
            calculateTotalAmount(response.payload);
          }
        );
      }
    }
  }, [props.user.userData]);

  // TODO: 총 개수 함수
  let calculateTotalAmount = cartDetail => {
    let totalAmount = 0;
    cartDetail.map(item => {
      totalAmount += parseInt(item.quantity);
    });

    setTotalAmount(totalAmount);
  };

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
        <span style={{ marginLeft: "2px" }}>({TotalAmount})</span>
      </div>
      <div>
        <UserCardBlock
          products={props.user.cartDetail}
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

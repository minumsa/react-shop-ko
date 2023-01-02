import React, { useEffect, useState } from "react";
import { Row } from "antd";
import axios from "axios";
import { renderCards } from "../LandingPage/LandingPage";

function OuterPage() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    let body = {
      skip: 0,
      limit: 100,
    };
    getProducts(body);
  }, []);

  const getProducts = body => {
    axios.post("/api/product/products", body).then(response => {
      if (response.data.success) {
        let outerProduct = response.data.productInfo.filter(value => value.categories === 1);
        setProducts(outerProduct);
      } else {
        alert("상품들을 가져오는 데 실패했습니다.");
      }
    });
  };
  return (
    <div>
      <Row gutter={[16, 16]}>{renderCards(Products)}</Row>
    </div>
  );
}

export default OuterPage;

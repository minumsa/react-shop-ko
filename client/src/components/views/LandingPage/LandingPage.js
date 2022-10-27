import React, { useEffect, useState } from 'react';
import { FaCode, FaSortAmountDown } from 'react-icons/fa';
import axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(4);

  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };

    axios.post('/api/product/products', body).then((response) => {
      if (response.data.success) {
        setProducts(response.data.productInfo);
      } else {
        alert('상품들을 가져오는 데 실패했습니다.');
      }
    });
  }, []);

  const loadMoreHandler = () => {};

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card cover={<ImageSlider images={product.images} />}>
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  return (
    <div style={{ width: '75%', margin: '3rem auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h3>NEW ARRIVAL</h3>
        <h3>신상품</h3>
        <br></br>
      </div>

      {/* Filter */}

      {/* Search */}

      {/* Cards */}

      <Row gutter={[16, 16]}>{renderCards}</Row>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={loadMoreHandler}>더보기</button>
      </div>
    </div>
  );
}

export default LandingPage;

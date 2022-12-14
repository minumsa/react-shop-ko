import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import ImageSlider from "../../utils/ImageSlider";
import Checkbox from "./Sections/Checkbox";
import Radiobox from "./Sections/Radiobox";
import { brands, price } from "./Sections/Datas";
import SearchFeature from "./Sections/SearchFeature";
import Clock from "./Sections/Clock";
import DayOrNight from "./Sections/DayOrNight";

export const renderCards = Products =>
  Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          cover={
            <a href={`/product/${product._id}`}>
              <ImageSlider images={product.images} />
            </a>
          }
        >
          <Meta title={product.title} description={`₩${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`} />
        </Card>
      </Col>
    );
  });

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();
  const [Filters, setFilters] = useState({
    brands: [],
    price: [],
  });

  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };
    getProducts(body);
  }, []);

  const getProducts = body => {
    axios.post("/api/product/products", body).then(response => {
      if (response.data.success) {
        let itemSortedByCreated = response.data.productInfo.sort(function (a, b) {
          if (a.createdAt < b.createdAt) {
            return 1;
          }
          if (a.createdAt > b.createdAt) {
            return -1;
          }
          return 0;
        });
        if (body.loadMore) {
          setProducts([...Products, ...itemSortedByCreated]);
        } else {
          setProducts(itemSortedByCreated);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("상품들을 가져오는 데 실패했습니다.");
      }
    });
  };

  const loadMoreHandler = () => {
    let skip = Skip + Limit;
    let body = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };

    getProducts(body);
    setSkip(skip);
  };

  const showFilteredResults = filters => {
    let body = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };

    getProducts(body);
    setSkip(0);
  };

  const handlePrice = value => {
    const data = price;
    let array = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    console.log("filters", filters);

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchTerm = newSearchTerm => {
    let body = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };
    setSkip(0);
    setSearchTerm(newSearchTerm);
    getProducts(body);
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h3>NEW ARRIVAL</h3>
        <h3>신상품</h3>
        <br></br>
      </div>

      {/* Filter */}

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          {/* CheckBox */}
          <Checkbox list={brands} handleFilters={filters => handleFilters(filters, "brands")} />
        </Col>
        <Col lg={12} xs={24}>
          {/* RadioBox */}
          <Radiobox list={price} handleFilters={filters => handleFilters(filters, "price")} />
        </Col>
      </Row>

      {/* Search */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto",
          alignItems: "center",
        }}
      >
        {/* Clock */}
        <div style={{ marginRight: "1px", color: "black" }}>{/* <DayOrNight /> */}</div>
        <div style={{ marginRight: "10px", color: "black" }}>{/* <Clock /> */}</div>
        <SearchFeature refreshFunction={updateSearchTerm} />
      </div>

      {/* Cards */}

      <Row gutter={[16, 16]}>{renderCards(Products)}</Row>
      <br />

      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHandler}>더보기</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;

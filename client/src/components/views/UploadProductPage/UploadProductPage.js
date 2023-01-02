import React, { useState } from "react";
import { Form, Input } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";
// import { response } from 'express';

const { TextArea } = Input;

const Brands = [
  { key: 1, value: "ASICS" },
  { key: 2, value: "BLANKOF" },
  { key: 3, value: "BLUEPEACE FISHING CLUB" },
  { key: 4, value: "CESPA" },
  { key: 5, value: "DETAIL INC" },
  { key: 6, value: "DOCUMENT" },
  { key: 7, value: "FRESH SERVICE" },
  { key: 8, value: "GARMENT DYEING SERVICE" },
  { key: 9, value: "HATSKI" },
  { key: 10, value: "NEITHERS" },
  { key: 11, value: "NEW BALANCE" },
];

const Categories = [
  { key: 1, value: "OUTER" },
  { key: 2, value: "TOP" },
  { key: 3, value: "BOTTOM" },
  { key: 4, value: "SHOES" },
  { key: 5, value: "BAG" },
  { key: 6, value: "ACCESSORY" },
  { key: 7, value: "LIFESTYLE" },
];

function UploadProductPage(props) {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Brand, setBrand] = useState(1);
  const [Category, setCategory] = useState(1);
  const [Images, setImages] = useState([]);

  const titleChangeHandler = event => {
    setTitle(event.currentTarget.value);
  };

  const descriptionChangeHandler = event => {
    setDescription(event.currentTarget.value);
  };

  const priceChangeHandler = event => {
    setPrice(event.currentTarget.value);
  };

  const brandChangeHandler = event => {
    setBrand(event.currentTarget.value);
  };

  const categoryChangeHandler = event => {
    setCategory(event.currentTarget.value);
  };

  const updateImages = newImages => {
    setImages(newImages);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (!Title || !Description || !Price || !Brand || !Images.length === 0) {
      return alert("모든 값을 넣어주셔야 합니다.");
    }

    // 서버에 채운 값들을 request로 보낸다.

    const body = {
      // 로그인 된 사람의 ID
      writer: props.user.userData._id,
      title: Title,
      description: Description,
      price: Price,
      images: Images,
      brands: Brand,
      categories: Category,
    };

    Axios.post("/api/product", body).then(response => {
      if (response.data.success) {
        alert("상품 업로드에 성공했습니다.");
        props.history.push("/");
      } else {
        alert("상품 업로드에 실패했습니다.");
      }
    });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "3rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2>상품 업로드</h2>
      </div>

      <Form onSubmit={submitHandler}>
        {/* DropZone */}

        <FileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>이름</label>
        <Input onChange={titleChangeHandler} value={Title} />
        <br />
        <br />
        <label>설명</label>
        <TextArea onChange={descriptionChangeHandler} value={Description} style={{ height: 250 }} />
        <br />
        <br />
        <label>가격(₩)</label>
        <Input type="number" onChange={priceChangeHandler} value={Price} />
        <br />
        <br />
        <label>브랜드</label>
        <div>
          <select onChange={brandChangeHandler} value={Brand} style={{ height: 30, width: 250 }}>
            {Brands.map(item => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginTop: "20px" }}>
          <label>카테고리</label>
        </div>
        <div>
          <select onChange={categoryChangeHandler} value={Category} style={{ height: 30, width: 250 }}>
            {Categories.map(item => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginTop: "30px" }}>
          <button>확인</button>
        </div>
      </Form>
    </div>
  );
}

export default UploadProductPage;

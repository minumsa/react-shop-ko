import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
      <Carousel autoplay>
        {/* AUTOPLAY */}
        {props.images.map((image, index) => (
          <div key={index}>
            <img
              style={{
                // FIXME: 창 크기에 따라 이미지 깨짐
                width: "100%",
                maxHeight: "100%",
              }}
              src={`http://localhost:5001/${image}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;

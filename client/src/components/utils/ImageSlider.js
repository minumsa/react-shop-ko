import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
      <Carousel>
        {/* AUTOPLAY */}
        {props.images.map((image, index) => (
          <div key={index}>
            <img
              style={{
                // FIXME: 창 크기에 따라 이미지 깨짐
                maxWidth: "auto",
                maxHeight: "350px",
              }}
              src={`http://localhost:5000/${image}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;

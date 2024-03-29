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

import React from 'react';
import { Carousel } from 'antd';

function ImageSlider(props) {
  return (
    <div>
      <Carousel autoplay>
        {props.images.map((image, index) => (
          <div key={index}>
            <img
              style={{
                // 이 부분이 문제인 듯
                maxWidth: 'auto',
                maxHeight: '350px',
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

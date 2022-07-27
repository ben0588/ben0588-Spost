import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousels(props) {
  const [index, setIndex] = useState(0);
  const [img , setImg] = useState({});
  const [style, setStyle] = useState(['60vh'])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect( () => {
    setImg([])
    setImg(props.gif)
  }, [props])

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={1500} style={{ height: style[0] }} >
      {Object.values(img).map( (val, idx) => {
        return (
          <Carousel.Item key={idx}>
            <div className='d-flex w-100 justify-content-center' >
              <img
                src={`data:image/jpeg;base64,${val.img}`}
                style={{ height: style[0]}}
              />
            </div>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default Carousels;
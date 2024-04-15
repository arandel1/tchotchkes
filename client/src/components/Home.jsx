import React from "react";
import { Carousel } from "react-bootstrap";

export default function Home () {
  return (
    <div>
      <h2>Carousel of Featured Products</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block max-w-50 max-h-25"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Custom_Lego_Chess_Set.jpg/1600px-Custom_Lego_Chess_Set.jpg?20201229212027"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Slide 1</h3>
            <p>Lego Chess Set</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block max-w-50 max-h-25"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Perfume_set_from_Sovjetunio_cca_1965.jpg/1200px-Perfume_set_from_Sovjetunio_cca_1965.jpg?20100417190340"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Slide 2</h3>
            <p>Purple Perfume Bottle</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block max-w-50 max-h-25"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Victorian_Style_Steampunk_lamp.jpg/920px-Victorian_Style_Steampunk_lamp.jpg?20180814155821"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Slide 3</h3>
            <p>Steampunk Lamp</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
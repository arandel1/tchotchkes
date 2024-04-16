import React from "react";
import { Carousel } from "react-bootstrap";
import AeroTransistorRadio from '../assets/Carousel-Images/AeroTransistorRadio.png';
import AlladinTableLamp from '../assets/Carousel-Images/AlladinTableLamp.png';
import BeatrixPotterBook from '../assets/Carousel-Images/BeatrixPotterBook.png';
import Cameo from '../assets/Carousel-Images/Cameo.png';
import PollyGasNeon from '../assets/Carousel-Images/PollyGasNeon.png';




export default function Home () {
  return (
    <div>
      <h2>Carousel of Featured Products</h2>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={AeroTransistorRadio} alt="Transistor Radio" />
          <Carousel.Caption>
            <h3>Aero Transistor Radio</h3>
            <p>Vintage Aero Transistor Radio, circa 1960s</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={AlladinTableLamp} alt="Lamp Shaped Table Lighter" />
          <Carousel.Caption>
            <h3>Alladin Lamp Table Lighter</h3>
            <p>Vintage Aladdin Table Lamp-Style Cigarette Lighter, Made In Japan</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={BeatrixPotterBook} alt="Vintage Book of Nursery Rhymes" />
          <Carousel.Caption>
            <h3>Cecily Parsley's Nursery Rhymes Book</h3>
            <p>By Beatrix Potter, First Edition, circa 1922</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Cameo} alt="Cameo Brooch" />
          <Carousel.Caption>
            <h3>Perfume Brooch</h3>
            <p>Vintage "Perfume" Cameo in Original Box</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={PollyGasNeon} alt="Neon Parrot Sign" />
          <Carousel.Caption>
            <h3>Neon Polly Gas Sign</h3>
            <p>Vintage Polly Gas Parrot Sign, circa 1950s</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
  );
}
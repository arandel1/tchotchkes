import React from "react";
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import AeroTransistorRadio from '../assets/Carousel-Images/AeroTransistorRadio.png';
import AlladinTableLamp from '../assets/Carousel-Images/AlladinTableLamp.png';
import PurplePerfumeBottle from '../assets/Carousel-Images/PurplePerfumeBottle.png';
import BeatrixPotterBook from '../assets/Carousel-Images/BeatrixPotterBook.png';
import Cameo from '../assets/Carousel-Images/Cameo.png';
import PollyGasNeon from '../assets/Carousel-Images/PollyGasNeon.png';




export default function Home () {
  return (
    <> 
      <div className="container" style={{ backgroundColor: 'lightblue', padding: '5px', margin: '5px'}}>
        <h2 id="carouselHeading" className="carousel-heading text-uppercase">Featured Items</h2>
          <Carousel className="custom-carousel" data-bs-theme="dark" style={{ display: 'flex', justifyContent: 'center' }}>
            <CarouselItem>
              <img className="d-block w-100 py-3 px-3 mb-3 mt-0" 
              src={AeroTransistorRadio} 
              alt="Transistor Radio" />
              <CarouselCaption className="carousel-caption d-block text-dark w-75 py-2 mt-3 mb-2 px-3 d-md-block d-none" >
                <h3 className="font-weight-bold text-uppercase">Aero Transistor Radio</h3>
                <p>Vintage Aero Transistor Radio, circa 1960s</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img className="d-block w-100 h-50 py-3 px-3 mb-7 mt-0" 
              src={PurplePerfumeBottle} 
              alt="Purple Perfume Bottle" />
              <CarouselCaption className="carousel-caption d-block text-dark w-75 py-2 mt-5 mb-2 px-3 d-md-block d-none" style={{ marginBottom: '10px' }}>
                <h3 className="font-weight-bold text-uppercase">Purple Perfume Bottle</h3>
                <p>Vintage Perfume Set, circa 1965</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img className="d-block w-100 py-3 px-3 mb-3 mt-0" 
              src={BeatrixPotterBook} 
              alt="Vintage Book of Nursery Rhymes" />
              <CarouselCaption className="carousel-caption d-block text-dark w-75 py-2 mt-3 mb-2 px-3 d-md-block d-none">
                <h3 className="font-weight-bold text-uppercase">Cecily Parsley's Nursery Rhymes Book</h3>
                <p>By Beatrix Potter, First Edition, circa 1922</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img className="d-block w-100 py-3 px-3 mb-3 mt-0" 
              src={Cameo} 
              alt="Cameo Brooch" />
              <CarouselCaption className="carousel-caption d-block text-dark w-75 py-2 mt-3 mb-2 px-3 d-md-block d-none">
                <h3 className="font-weight-bold text-uppercase">Perfume Brooch</h3>
                <p>Vintage "Perfume" Cameo in Original Box</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img className="d-block w-100 py-3 px-3 mb-3 mt-0" 
              src={PollyGasNeon} 
              alt="Neon Parrot Sign" />
              <CarouselCaption className="carousel-caption d-block text-dark w-75 py-2 mt-3 mb-2 px-3 d-md-block d-none">
                <h3 className="font-weight-bold text-uppercase">Neon Polly Gas Sign</h3>
                <p>Vintage Polly Gas Parrot Sign, circa 1950s</p>
              </CarouselCaption>
            </CarouselItem>
          </Carousel>
      </div>
    </> 
  );
}
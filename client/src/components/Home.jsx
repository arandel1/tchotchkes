﻿import React from "react";
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import AeroTransistorRadio from '../assets/Carousel-Images/AeroTransistorRadio.png';
import PurplePerfumeBottle from '../assets/Carousel-Images/PurplePerfumeBottle.png';
import BeatrixPotterBook from '../assets/Carousel-Images/BeatrixPotterBook.png';
import Cameo from '../assets/Carousel-Images/Cameo.png';
import PollyGasNeon from '../assets/Carousel-Images/PollyGasNeon.png';


export default function Home () {
  return (
    <> 
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4 text-uppercase">&#x2022; Welcome to Tchotchkes! &#x2022;</h1> <br />
          <p className="lead">
            <a className="btn btn-dark btn-lg" href="https://en.wikipedia.org/wiki/Tchotchke" role="button">Wait, What's a Tchotchke?</a>
          </p>
          <hr className="my-3"></hr>
        </div>
      </div>
      <div className="container custom-carousel-container">
      <h4 id="carouselHeading" className="carousel-heading d-block mt-3">Check out some featured products below!</h4>
        <Carousel className="custom-carousel" data-bs-theme="dark" style={{ display: 'flex', justifyContent: 'center', width: '75%', margin: '0 auto' }}> 
            <CarouselItem>
              <img className="d-block w-100 img-fluid py-5 px-3 mb-3 mt-0" 
              src={AeroTransistorRadio} 
              alt="Transistor Radio" />
            <CarouselCaption className="carousel-caption d-block text-dark w-75 d-md-block d-none" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translateX(-50%)' }}>
                <h3 className="font-weight-bold text-uppercase">Aero Transistor Radio</h3>
                <p>Vintage Aero Transistor Radio, circa 1960s</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img className="d-block w-100 py-5 px-5 mb-3 mt-0" 
              src={PurplePerfumeBottle} 
              alt="Purple Perfume Bottle" />
             <CarouselCaption className="carousel-caption d-block text-dark w-75 py-2 mt-3 mb-2 px-3 d-md-block d-none" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                <h3 className="font-weight-bold text-uppercase">Purple Perfume Bottle</h3>
                <p>Vintage Perfume Set, circa 1965</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img className="d-block w-100 py-5 px-5 mb-3 mt-3" 
              src={BeatrixPotterBook} 
              alt="Vintage Book of Nursery Rhymes" />
              <CarouselCaption className="carousel-caption d-block text-dark w-75 py-2 mt-3 mb-2 px-3 d-md-block d-none" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                <h3 className="font-weight-bold text-uppercase">Vintage Book of Nursery Rhymes</h3>
                <p>By Beatrix Potter, circa 1922</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img className="d-block w-100 py-5 px-5 mb-3 mt-0" 
              src={Cameo} 
              alt="Cameo Brooch" />
              <CarouselCaption className="carousel-caption d-block text-dark w-75 py-2 mt-3 mb-2 px-3 d-md-block d-none" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                <h3 className="font-weight-bold text-uppercase">Perfume Brooch</h3>
                <p>Vintage "Perfume" Cameo in Original Box</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <img className="d-block w-100 py-5 px-5 mb-3 mt-0" 
              src={PollyGasNeon} 
              alt="Neon Parrot Sign" />
              <CarouselCaption className="carousel-caption d-block text-dark w-75 py-2 mt-3 mb-2 px-3 d-md-block d-none" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                <h3 className="font-weight-bold text-uppercase">Neon Polly Gas Sign</h3>
                <p>Vintage Polly Gas Parrot Sign, circa 1950s</p>
              </CarouselCaption>
            </CarouselItem>
          </Carousel>
      </div>
    </> 
  );
}
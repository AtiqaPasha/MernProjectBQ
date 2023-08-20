import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
 
   <Carousel>
      <Carousel.Item interval={1000}>
        <img
         style={{height:'80vh'}}
          className="d-block w-100"
          src="https://st4.depositphotos.com/1023934/37752/i/450/depositphotos_377527168-stock-photo-interior-design-modern-living-room.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 style={{marginBottom:"30px", color:"black"}}>Creating a better life for you</h1>
          <h3 style={{marginBottom:"200px",color:"black"}}>Abrish Furniture</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
         style={{height:'80vh'}}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNPkInF_G6V40RNkYIoeeGUKthXYhmt8KakhB6gECL&s"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 style={{marginBottom:"30px"}}>Creating a better life for you</h1>
          <h3 style={{marginBottom:"200px"}}>Abrish Furniture</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
       style={{height:'80vh'}}
          className="d-block w-100 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uOLR-_59KeqH08zTPOBX71XilcjCfhp3r1pUfR-VBj23Nt0H4HFZ991FjoOOyHBNrF0&usqp=CAU"
          alt="Third slide"
        />
        <Carousel.Caption >
          <h1 style={{marginBottom:"30px"}}>Creating a better life for you</h1>
          <h3 style={{marginBottom:"200px"}}>Abrish Furniture</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

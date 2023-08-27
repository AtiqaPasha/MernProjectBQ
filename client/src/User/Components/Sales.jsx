import React from 'react'
import './App.css'
import { AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'


export default function Sales() {
  return (
   <>
    


        {/* upcoming sale card */}

        <div id="services" className="container">
          <div className="card-row row justify-content-center">
            <div className="col-md-4 col-sm-6 mb-4 text-center ">
              <div className="card-container">
                <figure className="card w-100" style={{height:'45vh '}}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLkkWVkFXAaKcbEg5iHn0Ldw0k2bku6yG4A&usqp=CAU"
                    alt=""
                    className="card__image"
                  />
                  <figcaption className="card__body">
                    <h2 className="card__title">Living Room Furniture</h2>
                    <div>
                      <p className="card__description text-dark">
                        Some description about this card and its purpose.
                      </p>
                    </div>
                    <button className="card__sale-button">Sale</button>
                  </figcaption>
                </figure>
                <div className="product-details">
                  <h5 className="card__heading">Living Room Furniture</h5>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <BsStarHalf></BsStarHalf>
                  <h5 className="card__price">Price: $125.5</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4 text-center">
              <div className="card-container">
                <figure className="card w-100" style={{height:'45vh '}}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KkiC-NTQWBRwK6XMfPWNdaev-J_X0E-wNA&usqp=CAU"
                    alt=""
                    className="card__image"
                  />
                  <figcaption className="card__body">
                    <h2 className="card__title">Side Board</h2>
                    <p className="card__description text-dark">
                      Some description about this card and its purpose.
                    </p>
                    <button className="card__sale-button">Sale</button>
                  </figcaption>
                </figure>
                <div className="product-details">
                  <h5 className="card__heading">Side Board </h5>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <BsStarHalf></BsStarHalf>
                  <h5 className="card__price">$350.6</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4 text-center">
              <div className="card-container">
                <figure className="card w-100 " style={{height:'45vh '}}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YuXbITnbkaNJ4YfK2Z5nNa6o3jI2VnN7oA&usqp=CAU"
                    alt=""
                    className="card__image"
                  />
                  <figcaption className="card__body">
                    <h2 className="card__title">Living Room Furniture</h2>
                    <p className="card__description text-dark">
                      Some description about this card and its purpose.
                    </p>
                    <button className="card__sale-button">Sale</button>
                  </figcaption>
                </figure>
                <div className="product-details">
                  <h5 className="card__heading">Living Room Furniture</h5>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <BsStarHalf></BsStarHalf>
                  <h5 className="card__price">$150</h5>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* upcoming sale banner */}

    <div className="background mb-5">
          <h1 className="fw-bold text-center col-sm-12">NEW ARRIVALS</h1>
          <h2 className="fw-bold text-center col-sm-12">COMING SOON</h2>
          <div className="blinking-cover"></div>
        </div>
   
   </>
  )
}

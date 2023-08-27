import React from 'react'
import './App.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css'

export default function Services() {

    // useEffect(() => {
    //     AOS.init({
    //       offset: 300,
    //       duration: 3000
    //     });
      
    //   },[])
  return (
   < >
   <h2 className="text-center " >Our Services</h2>

<div className="my-container">
  <article className="my-card">
    <div className="my-card__inner">
      <div className="my-card__side my-card__side--front">
        <div className="my-card__image-wrapper">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc809JYYmn-zkO8m0UEgZcSII3MIGYWnaRvzqdRlV8G-VRQlvXcLFxQbEoWViWPAfe4HI&usqp=CAU"
            alt=""
            className="my-card__image"
          />
        </div>
        <div className="my-card__body my-card__body--flex">
          <h2 className="my-card__title">FREE DELIVERY ALL OVER KARACHI</h2>
          <span className="my-card__arrow">→</span>
        </div>
      </div>
      <div className="my-card__side my-card__side--back">
        <div className="my-card__body">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam unde adipisci quas nulla dolores esse dolor magnam repudiandae perferendis eaque, ex eveniet inventore iure ipsum incidunt quaerat, obcaecati sint hic.
          </p>
        </div>
      </div>
    </div>
  </article>
  <article className="my-card">
    <div className="my-card__inner">
      <div className="my-card__side my-card__side--front">
        <div className="my-card__image-wrapper">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLu9rx5HrPJ-uLaxwugQGizw2TCagNrQsgY2TcUHa8lLBt79_VwGxblV31cBF0oh6V6k&usqp=CAU"
            alt=""
            className="my-card__image"
          />
        </div>
        <div className="my-card__body my-card__body--flex">
          <h2 className="my-card__title">REFUND POLICY WITH IN A WEEK</h2>
          <span className="my-card__arrow">→</span>
        </div>
      </div>
      <div className="my-card__side my-card__side--back">
        <div className="my-card__body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur ex dignissimos est sunt corrupti commodi aut autem culpa, aperiam saepe consectetur. Enim consectetur nostrum itaque iure eligendi id tempore.
          </p>
        </div>
      </div>
    </div>
  </article>
  <article className="my-card">
    <div className="my-card__inner">
      <div className="my-card__side my-card__side--front">
        <div className="my-card__image-wrapper">
          <img
            src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-6685.jpg"
            alt=""
            className="my-card__image"
          />
        </div>
        <div className="my-card__body my-card__body--flex">
          <h2 className="my-card__title">FAQs</h2>
          <span className="my-card__arrow">→</span>
        </div>
      </div>
      <div className="my-card__side my-card__side--back">
        <div className="my-card__body">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dolorem quasi saepe. Repellendus et provident, sit quidem aliquam eligendi animi nam voluptatum nobis sapiente itaque nulla perspiciatis odio distinctio facilis.
          </p>
        </div>
      </div>
    </div>
  </article>
</div>
   </>
  )
}

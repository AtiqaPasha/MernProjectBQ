import React from 'react'
import './App.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
// import AOS from 'aos';
// import 'aos/dist/aos.css'


export default function ContactUs() {

  // useEffect(() => {
  //   AOS.init({
  //     offset: 300,
  //     duration: 3000
  //   });
  
  // },[])
  
  return (
    <>
 
  <section id="contact" className="contact mb-5" >
    <div className="container" data-aos="fade-up">
      <div className="section-title text-center pb-5">
        <h2  className="text-center">Contact Us</h2>
        <small className="text-secondary ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
        {/* <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
        </p> */}
      </div>
      <div className="row" data-aos="fade-up" data-aos-delay={100}>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-md-12">
              <div className="info-box">
                {/* <i className="bx bx-map" /> */}
                <HiOutlineLocationMarker className="bx " ></HiOutlineLocationMarker>
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box mt-4">
                {/* <i className="bx bx-envelope" /> */}
                <HiOutlineMail className="bx "></HiOutlineMail>
                <h3>Email Us</h3>
                <p>
                  info@example.com
                  <br />
                  contact@example.com
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box mt-4">
                {/* <i className="bx bx-phone-call" /> */}
               < FiPhoneCall className="bx "></FiPhoneCall>
                <h3>Call Us</h3>
                <p>
                  +1 5589 55488 55
                  <br />
                  +1 6678 254445 41
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="col form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="col form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required=""
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Section */}
</>

  )
}

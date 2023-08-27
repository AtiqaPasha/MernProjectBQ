import React from 'react'

export default function NewArrival() {
  return (
   <>
    {/* new arrival heading */}

    <section className="products" >
          <div className="container-fluid my-5" data-aos="fade-up"
            data-aos-duration="3000">
            <div>
              <h2 className="text-center col-sm-12 glowing-text" >
                New Arrival
              </h2>
              <hr className="w-25 m-auto" />
            </div>
          </div>
        </section>

        {/* new arrival cards  */}

        <div id='arrival'>
          <div className="many-row">
            <div>
              <div className="responsive-card">
                <div className="responsive-imgbox">
                  <img src="https://media.istockphoto.com/id/1177589023/photo/light-bulb-hanging-by-the-ceiling-in-a-restaurant.webp?b=1&s=170667a&w=0&k=20&c=WEBVPscDAL3MiPrWWzbgrA3qupXbq3RG4lsQkao0qhw=" className="responsive-img" />
                </div>
                <div className="responsive-content">
                  <h2>Lights</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <h5 className="card__price">Price: $9.5</h5>
                </div>
              </div>
            </div>
            <div>
              <div className="responsive-card">
                <div className="responsive-imgbox">
                  <img src="https://st3.depositphotos.com/1177973/15307/i/600/depositphotos_153075942-stock-photo-jewelry-accessories-in-box.jpg" className="responsive-img" />
                </div>
                <div className="responsive-content">
                  <h2>Jewellery</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <h5 className="card__price">Price: $9.5</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="responsive-card">
                <div className="responsive-imgbox">
                  <img src="https://www.webbikeworld.com/wp-content/uploads/2020/08/wallpaperflare.com_wallpaper-2.jpg" className="responsive-img" />
                </div>
                <div className="responsive-content">
                  <h2>Motorcycle</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <h5 className="card__price">Price: $9.5</h5>
                </div>
              </div>
            </div>
          </div>
        </div>


   
   </>
  )
}

import React from 'react'
import Slider from '../Components/Slider'
import Sales from '../Components/Sales'
import ContactUs from '../Components/ContactUs'
import Counter from '../Components/Counter'
// import Services from '../Components/Services'




export default function Home() {
    return (
        < >
       <div style={{overflow:'hidden'}} >
       <Slider />
        <Sales />
          <ContactUs />
          <Counter />
       </div>
       </>
     
    )
}

import React from 'react'
import Brand from '../Components/Brands'
import Category from '../Components/Category'
import Slider from '../Components/Slider'
import ContactUs from '../Components/ContactUs'
import Counter from '../Components/Counter'
import Services from '../Components/Services'
import Sales from '../Components/Sales'


export default function Home() {
    return (
        <div style={{overflow:'hidden'}}>
             <Slider />
            <Category />
            <Brand />
            <Sales />
            <Services />
          <ContactUs />
          <Counter />
        </div>
    )
}

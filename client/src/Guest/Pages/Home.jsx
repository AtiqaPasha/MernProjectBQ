import React from 'react'
import Brand from '../Components/Brands'
import Category from '../Components/Category'
import Slider from '../Components/Slider'

export default function Home() {
    return (
        <div>
             <Slider />
            <Category />
            <Brand />
        </div>
    )
}

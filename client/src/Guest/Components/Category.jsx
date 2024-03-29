import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Category() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('/api/all-categories')
            .then(json => setCategory(json.data.categories))
            .catch(err => alert(err.message))

    }, [])


    useEffect(() => {
        AOS.init({
          offset: 300,
          duration: 3000
        });
      
      },[])

    return (
        <div className="container my-5" data-aos="fade-up">
            <div className="text-center">
                <h2 >Category</h2>
                <hr className='m-auto w-25 h-35  mb-2' style={{ color : '#01F9C6' }} />
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    category.map((val, key) => <GuestCards key={key} image={val.CategoryImage} name={val.CategoryName} />)
                }

            </div>
        </div>
    )
}

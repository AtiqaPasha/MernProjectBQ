import React from 'react'
import { Link } from 'react-router-dom'

export default function UserCards({ name, image, url }) {
    return (
        <div className="col-md-4 mb-5">
            <Link to={url} className='text-decoration-none'>
                <div className="card">
                    <img src={image} className="card-img-top p-0   " alt={name} style={{ height: '40vh', objectFit: 'cover' }} />
                    <div className="card-body ">
                        <h5 className="card-title ">{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

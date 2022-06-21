import React from   'react';

import './App.css';

import image15 from './images/image-15.jpg';

import { FaStar } from 'react-icons/fa';

function Card() {
    return(
        <div className=" container card-group">
        <div className="card m-2  text-white" style={{width: '22rem',}}>
  <img className="card-img rounded" style={{height: '23rem'}} src={image15}  alt="..."></img>
  <div className="card-img-overlay">
    <h5 className="card-title bg-white text-dark p-2 rounded-pill text-center" style={{width: '8rem', }}>Booked</h5>
    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p> */}
  </div>
  <div class="card-body m-1">
    <p class="card-text text-dark fs-2"><span className='text-danger'><FaStar/></span> 5.0 <span className='lead fs-2'>(6).KENYA</span></p>
    <p className="card-text text-dark fs-5">Life lessons with Peter Hannahs</p>
    <p className="card-text text-dark fs-5"><span className='fw-bold'>From Ksh 10,000</span> / <span>person</span> </p>
  </div>
</div>

<div className="card m-2  text-white" style={{width: '22rem',}}>
  <img className="card-img rounded" style={{height: '23rem'}} src={image15}  alt="..."></img>
  <div className="card-img-overlay">
    <h5 className="card-title bg-white text-dark p-2 rounded-pill text-center" style={{width: '8rem', }}>Booked</h5>
    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p> */}
  </div>
  <div class="card-body m-1">
    <p class="card-text text-dark fs-2"><span className='text-danger'><FaStar/></span> 5.0 <span className='lead fs-2'>(6).KENYA</span></p>
    <p className="card-text text-dark fs-5">Life lessons with Peter Hannahs</p>
    <p className="card-text text-dark fs-5"><span className='fw-bold'>From Ksh 10,000</span> / <span>person</span> </p>
  </div>
</div>
<div className="card m-2  text-white" style={{width: '22rem',}}>
  <img className="card-img rounded" style={{height: '23rem'}} src={image15}  alt="..."></img>
  <div className="card-img-overlay">
    <h5 className="card-title bg-white text-dark p-2 rounded-pill text-center" style={{width: '8rem', }}>Booked</h5>
    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p> */}
  </div>
  <div class="card-body m-1">
    <p class="card-text text-dark fs-2"><span className='text-danger'><FaStar/></span> 5.0 <span className='lead fs-2'>(6).KENYA</span></p>
    <p className="card-text text-dark fs-5">Life lessons with Peter Hannahs</p>
    <p className="card-text text-dark fs-5"><span className='fw-bold'>From Ksh 10,000</span> / <span>person</span> </p>
  </div>
</div>
</div>

    )
}

export default Card;
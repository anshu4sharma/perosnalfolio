import React from 'react'
import './Doctors.css'
import random from '../assets/random.png'
function Doctors() {
  return (
    <>

<div className='doctors_page'>

<h1 style={{textAlign:"center"}}>Our Doctors</h1>


<div className='degree'> 

    <div> <img src={random} alt="" className='random' /></div>
    <div > <h3> Unknown  Doctor</h3>
    <p>MBBS PHD </p>
    </div>
    <div> <img src={random} alt="" className='random' /></div>
    <div > <h3> Unknown  Doctor</h3>
    <p>MBBS PHD </p>
    </div>
    <div> <img src={random} alt="" className='random' /></div>
    <div > <h3> Unknown  Doctor</h3>
    <p>MBBS PHD </p>
    </div>
    <div> <img src={random} alt="" className='random' /></div>
    <div > <h3> Unknown  Doctor</h3>
    <p>MBBS PHD </p>
    </div>
    <div> <img src={random} alt="" className='random' /></div>
    <div > <h3> Unknown  Doctor</h3>
    <p>MBBS PHD </p>
    </div>
    <div> <img src={random} alt="" className='random' /></div>
    <div > <h3> Unknown  Doctor</h3>
    <p>MBBS PHD </p>
    </div>
</div>

</div>

    </>
  )
}

export default Doctors
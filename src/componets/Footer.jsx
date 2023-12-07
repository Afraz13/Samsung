import React from "react";
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column bg-secondary mt-5'>
        <div className='d-flex justify-content-evenly w-100'>
          <div className='website' style={{width:'400px'}}>
          <h4 className="text-primary fs-2" style={{color:'black'}}>
          <i class="fa-solid fa-cart-shopping fa-1x me-2"></i>
            Info
          </h4>
            <p style={{color:"black"}} >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero, a voluptas inventore dolorum nobis nam expedita consectetur magni aliquam explicabo quis odit necessitatibus dignissimos fugiat quibusdam perferendis amet culpa?
            </p>
            
          </div>
          <div className='links d-flex flex-column '>
            <h4 className='mb-3' style={{color:'black'}}>Account</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'black'}}>My Page  </Link>
            <Link to={''}style={{textDecoration:'none',color:'black'}}> My Product</Link>
            <Link to={''}style={{textDecoration:'none',color:'black'}}> Orders</Link>
            <Link to={''}style={{textDecoration:'none',color:'black'}}> Vouchers</Link>
            <Link to={''}style={{textDecoration:'none',color:'black'}}> Community</Link>
          </div>
          <div className='guides d-flex flex-column'>
            <h4 className='mb-3'>About Us</h4>
            <Link to={''} style={{textDecoration:'none',color:'black'}}>Company Info </Link>
            <Link to={''} style={{textDecoration:'none',color:'black'}}>Business Area</Link>
            <Link to={''} style={{textDecoration:'none',color:'black'}}>Carees </Link>
            <Link to={''} style={{textDecoration:'none',color:'black'}}>Samsag Design</Link>
          </div>
          <div className='contacts d-flex flex-column'>
            <h4 className='mb-3'>Contact Us</h4>
            {/* <div className='d-flex'>
              <input type="text" placeholder='Enter here' className='form-control' />
              <button className="btn btn-warning ms-3">Subscribe</button>
            </div> */}
            <div className='d-flex justify-content-evenly align-items-center mt-4'>
              <Link to={'/'} style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-instagram fa-3x me-3"></i></Link>
              <Link to={'/home'} style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-facebook fa-3x me-3 "></i></Link>
              
              <Link to={'/wathchistory'} style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-twitter fa-3x me-3"></i></Link>
              <Link to={'/wathchistory'} style={{textDecoration:'none',color:'black'}}>
              <i class="fa-brands fa-linkedin fa-3x me-3"></i>
              </Link>
            </div>
          </div>
        </div>
        <p className='mt-2'>Afraz_Apru @2023 ,Built with react</p>
      </div>
    )
}
export default Footer
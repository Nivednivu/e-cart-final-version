import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div style={{height:'300px',width:'100%',color:'white'}} className='d-flex justify-content-center align-item-center flex-column w-100 mt-5'>
      <div className="footer d-flex justify-content-evenly align-item-center w-100 mb-5 bg-primary ">
        <div className="Website" style={{width:'400px'}}>
          <h4>  <i class="fa-solid fa-cart-shopping me-3"></i>
            E-CART
            </h4>
        <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aspernatur placeat quam error sunt doloribus repellat, aperiam earum molestias voluptas ex suscipit optio facere excepturi. Ab voluptatem praesentium dolor assumenda? </h6>

      <p>simique kdolor sit amet </p>
       
        </div>
        <div className="links d-flex flex-column">
          <h4 className=''>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home page</Link>
          <Link to={'/Wishlist'}style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
          <Link to={'/Cart'}style={{textDecoration:'none',color:'white'}}>Cart</Link>

        </div>
        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:'none',color:'white'}}>React Bootsstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>

        </div>

        <div className="contact">
          <h4 className='mb-3'>Contact Us</h4>
          <div className='d-flex mb-4'>
                <input type="text" className='form-control' placeholder='Enter your email id'/>
                <button className='btn btn-warning text-white ms-2'>Subscribe</button>
          </div>
          <div className="icons d-flex justify-content-evenly ">
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>

          </div>
        </div>
      </div>
      <p className='d-flex justify-content-center align-item-center'>copyright @ 2023 Meadia player.Built with React</p>
    </div>
    </div>
  )
}

export default Footer

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  const Wishlist = useSelector((state)=>state.wishlistreducer)
  console.log(Wishlist);

  const cart = useSelector ((state)=>state.cartReducer)
  console.log(cart);
  return (
    <div>
       <Navbar expand="lg" className="bg-primary fixed-top">
      <Container >
        <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-cart-shopping fa-bounce me-3"></i>E-cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded border-secondary ms-4 mt-2'><Link to={'/Wishlist'}style={{textDecoration:'none',color:'white'}}> <i class="fa-solid fa-heart me-2" style={{color: '#e61b05'}}></i>Wishlist <Badge bg="secondary" className='rounded ms-2'>{Wishlist.length} </Badge></Link></Nav.Link>
            <Nav.Link className='btn border rounded border-secondary ms-4 mt-2'><Link to={'Cart'}style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-cart-shopping me-2" style={{color:'yellow'}}></i> Cart <Badge bg="secondary" className='rounded ms-2'>{cart.length} </Badge></Link></Nav.Link>
    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header

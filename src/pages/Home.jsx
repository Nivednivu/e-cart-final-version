import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import usefetch from '../hooks/usefetch';
import { useDispatch } from 'react-redux';
import { addtowishlist } from '../redux/slices/wishlistslice';
import { addTocart } from '../redux/slices/cartslise';

function Home() { 
  const data = usefetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()
  return (
<p>
      <Row className='m-5 me-3'style={{marginTop:'100px'}}>
       { data?.length>0?
       data.map((item)=>( <Col className='mb-5'sm={12} md={6} lg={4} xl={3} >
       <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
       <Card.Img variant="top" src={item.image} style={{height:'200px'}}/>
       <Card.Body>
         <Card.Title className='fw-bolder'>{item.title.slice(0,20)}..</Card.Title>
         <Card.Text>
           <p>{item.description.slice(0,40)}... </p>
           <p className='fw-bolder'>price: ₹{item.price} </p>
         </Card.Text>
        
      <div className='d-flex align-item-center justify-content-between'>
           <Button onClick={()=>dispatch(addtowishlist(item))} variant="outline-danger btn rounded"><i class="fa-solid fa-heart"></i></Button>
           <Button onClick={()=>dispatch(addTocart(item))} variant="outline-success btn rounded"><i class="fa-solid fa-cart-plus"></i></Button>
      </div>

       </Card.Body>
     </Card>
       </Col>))
      :<p>Nothing to display</p> }
      </Row>
  
</p>  )
}

export default Home

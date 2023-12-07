import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
//     <Navbar className="bg-dark ">
//     <Container>
//         <p ><i class="fa-solid fa-bowl-food text-info fa-3x me-2" ></i></p>
     
//       <Navbar.Brand href="#home" className='text-primary' style={{fontSize:'40px'}}><span className='text-danger'>Food</span> Circle</Navbar.Brand>
//       <Navbar.Toggle />
//       <Navbar.Collapse className="justify-content-end">
       
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>

<Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand className='text fw-5 fs-2' style={{fontWeight:'bold'}} href="">samsung</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
          <Nav.Link style={{color:'black'}}  href="#home">Shop</Nav.Link>
            <Nav.Link style={{color:'black'}}  href="#link">Mobile</Nav.Link>
            <Nav.Link style={{color:'black'}}  href="#home">TV & AV</Nav.Link>
            <Nav.Link style={{color:'black'}}  href="#link">Home Appliance</Nav.Link>
            <Nav.Link style={{color:'black'}}  href="#home">Laptop</Nav.Link>
            <Nav.Link style={{color:'black'}}  href="#link">Displays</Nav.Link>
           
            
            
          </Nav>
          <Nav className="ms-2  ">
          <Nav.Link style={{color:'black'}}  href="#home">Support</Nav.Link>
            <Nav.Link style={{color:'black'}}  href="#link">For Business</Nav.Link>
            <i class="fa-solid fa-magnifying-glass fa-2x ms-4"></i>
            <i class="fa-solid fa-cart-shopping fa-2x ms-4"></i>
            <i class="fa-regular fa-user fa-2x ms-4"></i>
           
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
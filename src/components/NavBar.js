import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Navbar, Nav } from 'react-bootstrap';
import Modal from './Modal';

function NavBar() {
  const [formData, setFormData] = useState({
    prodName: '',
    prodDesc: '',
    prodPrice:'',
    prodLarge: '',
    prodMedium: '',
    prodSmall: ''
  });

  const [showCart,setShowCart] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  const handleCartClick = () => {
    
    setShowCart(true);

  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {showCart && <Modal showCart={showCart} setShowCart={setShowCart} />}
        <Navbar.Brand>Shoe Shop</Navbar.Brand>
        <Nav className="mr-auto">
        
          <Form onSubmit={handleSubmit} inline>
            <Row>
              <Col md={3}>
                <Form.Control
                  type="text"
                  placeholder="Name of the product"
                  name="prodName"
                  value={formData.prodName}
                  onChange={handleChange}
                  className="mr-2"
                />
              </Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  name="prodDesc"
                  value={formData.prodDesc}
                  onChange={handleChange}
                  className="mr-2"
                />
              </Col>
              <Col md={1}>
                <Form.Control
                  type= 'number'
                  placeholder='price'
                  min={0}
                  name="prodPrice"
                  value={formData.prodPrice}
                  onChange={handleChange}
                  className="mr-2"
                />
              </Col>
              <Col md={1}>
                <Form.Control
                  type= 'number'
                  placeholder='large quantities'
                  min={0}
                  name="prodLarge"
                  value={formData.prodLarge}
                  onChange={handleChange}
                  className="mr-2"
                />
              </Col>
             
              <Col md={1}>
                <Form.Control
                  type="number"
                  name="prodMedium"
                  min={0}
                   placeholder='medium quantities'
                  value={formData.prodMedium}
                  onChange={handleChange}
                  className="mr-2"
                />
              </Col>
              <Col md={1}>
                <Form.Control
                  type="number"
                  name="prodSmall"
                  min={0}
                   placeholder='small quantities'
                  value={formData.prodSmall}
                  onChange={handleChange}
                  className="mr-2"
                />
              </Col>
              <Col md={1}>
                <Button type="submit" variant="primary" className="mr-2">
                  Submit
                </Button>
              </Col>
              <Col md={1}>
                <Button
                  variant="outline-success"
                  onClick={handleCartClick}
                  className="mr-2"
                >
                  Cart {0}
                </Button>
              </Col>
            </Row>
          </Form>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

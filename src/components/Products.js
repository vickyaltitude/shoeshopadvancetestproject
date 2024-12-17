import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup, Form } from 'react-bootstrap';

function Products() {

  const products = [
    {
      id: 1,
      name: 'Product A',
      description: 'This is the description for Product A.',
      price: 100,
      large: 50,
      medium: 20,
      small: 10,

    },
    {
      id: 2,
      name: 'Product B',
      description: 'This is the description for Product B.',
      price: 200,
      large: 50,
      medium: 20,
      small: 10,
    },
    {
      id: 3,
      name: 'Product C',
      description: 'This is the description for Product C.',
      price: 150,
      large: 50,
      medium: 20,
      small: 10,
    },
    {
        id: 4,
        name: 'Product d',
        description: 'This is the description for Product d.',
        price: 150,
        large: 50,
        medium: 20,
        small: 10,
      }
  ];

   function handleAddToCart(){
    
   }

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ${product.price}
                </Card.Text>
                <Form>
                  <Form.Group controlId="formBasicCheckbox">
                    <ButtonGroup>
                      <Button
                        variant="outline-primary"
                        onClick={() => handleAddToCart(product, 'small')}
                      >
                      Buy Small {product.small}
                      </Button>
                      <Button
                        variant="outline-primary"
                        onClick={() => handleAddToCart(product, 'medium')}
                      >
                      Buy Medium {product.medium}
                      </Button>
                      <Button
                        variant="outline-primary"
                        onClick={() => handleAddToCart(product, 'large')}
                      >
                       Buy Large {product.large}
                      </Button>
                    </ButtonGroup>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;

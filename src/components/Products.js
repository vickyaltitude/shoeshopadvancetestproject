import React, { useContext } from 'react';
import { CartContext } from '../store/ContextProvider';
import { Container, Row, Col, Card, Button, ButtonGroup, Form } from 'react-bootstrap';

function Products() {

  const cartCtx = useContext(CartContext) ;
 
   function handleAddToCart(event,prod,size){
    event.preventDefault();
    if(Number(prod[size]) === 0) return
    cartCtx.setCartItems(prod,size)
   }

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        {cartCtx.products.map((product) => (
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
                        onClick={(event) => handleAddToCart(event,product, 'small')}
                      >
                      Buy Small {product.small}
                      </Button>
                      <Button
                        variant="outline-primary"
                        onClick={(event) => handleAddToCart(event,product, 'medium')}
                      >
                      Buy Medium {product.medium}
                      </Button>
                      <Button
                        variant="outline-primary"
                        onClick={(event) => handleAddToCart(event,product, 'large')}
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

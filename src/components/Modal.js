import React,{useState} from 'react'
import { Modal,Container,Row,Col,Button } from 'react-bootstrap'

const Modals = ({showCart,setShowCart}) => {

    const [cart, setCart] = useState([
        { id: 1, name: 'Product A', price: 100, quantity: 2 },
        { id: 2, name: 'Product B', price: 200, quantity: 1 },
        { id: 3, name: 'Product C', price: 150, quantity: 3 },
      ]);
  
    
      const handleCloseCart = () => setShowCart(false);

  return (
    <>
        <Modal show={showCart} onHide={handleCloseCart} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {cart.length === 0 ? (
              <p>Your cart is empty!</p>
            ) : (
              <>
                <Row>
                  <Col>
                    <ul className="list-group">
                      {cart.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                          <div>
                            <strong>{item.name}</strong>
                            <p>Price: ${item.price}</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <span>Qty: {item.quantity}</span>
                          </div>
                          <div>
                            <strong>${item.price * item.quantity}</strong>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <h5>Total: ${6}</h5>
                  </Col>
                </Row>
              </>
            )}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close
          </Button>
          <Button variant="primary">
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Modals
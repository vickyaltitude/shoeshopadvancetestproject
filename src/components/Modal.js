import React,{useContext} from 'react'
import { Modal,Container,Row,Col,Button } from 'react-bootstrap'
import { CartContext } from '../store/ContextProvider';

const Modals = ({showCart,setShowCart}) => {

      const cartCtx = useContext(CartContext)
      const cart = cartCtx.cartItems;
    
      const handleCloseCart = () => setShowCart(false);

      const total = cartCtx.cartItems.reduce((mis,cur)=> mis+= (Number(cur.price) * (Number(cur.large || 0) + Number(cur.medium || 0) + Number(cur.small||0))),0)
    
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
                            <span>Large: {item.large}</span> &nbsp;&nbsp;
                            <span>Medium: {item.medium}</span>&nbsp;&nbsp;
                            <span>Small: {item.small}</span>&nbsp;&nbsp;
                          </div>
                          <div>
                            <strong>${Number(item.price) * (Number(item.large || 0) + Number(item.medium || 0) + Number(item.small || 0))}</strong>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-end">
                    <h5>Total: ${total}</h5>
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
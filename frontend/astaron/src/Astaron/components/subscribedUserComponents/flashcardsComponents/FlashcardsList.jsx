import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'

export const FlashcardsList = () => {
  return (
    <Container>
      <Row>
        <Col>
        <div className="fc-intro d-flex justify-content-between m-5">
            <div className="fc-title">
              <h1 style={{fontWeight: "800"}}>Flash Cards</h1>
              <p>Click any card to flip and reveal the answer</p>
            </div>
            <Button style={{border: "none", backgroundColor: "#39FF14", color: "black", width: "11rem", height: "3rem", fontWeight: '800', transition: "200ms"}} className='rounded-4 add-doc'>+ Add Flashcard</Button>
          </div>

          <Row>
            <Col lg={4} className=' border p-5 rounded-4 m-4'>
              <div className="q-num d-flex justify-content-between" style={{color: "gray"}}>
                <h5 style={{fontWeight: "400"}}>Question #1</h5>
                <p>☻</p>
              </div>
              <h1 style={{fontWeight: "700"}}>What's React Router?</h1>
            </Col>
          </Row>


          
        </Col>
      </Row>
    </Container>
  )
}

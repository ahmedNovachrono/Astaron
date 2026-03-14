import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faNoteSticky, faClipboard } from '@fortawesome/free-regular-svg-icons'
import "../../../App.css";

export const PagesCards = () => {
  return (
    <Container >
    <Row >
        <Col >
            <h1 style={{fontWeight: "700"}}>Welcom Back</h1>
            <p>Here's what's happening with your learning today</p>
            <div className="pages-cards flex-wrap d-flex justify-content-around mt-5 ">

              <div className="card m-2 rounded-4 d-flex flex-row justify-content-between p-3 align-items-center" style={{width: "380px", height: "131.2px", color: "rgb(71, 71, 71)"}}>
                <div style={{fontSize: "1.2rem"}} className="card-title d-flex flex-column">
                <FontAwesomeIcon icon={faFile} />
                  <p className='mt-3' style={{fontWeight: "500"}}>Documents</p>
                </div>
                <div style={{color: "#39FF14", fontWeight: "900", fontSize: "1.7rem"}} className="card-count">127</div>
              </div>

              <div className="card m-2 rounded-4 d-flex flex-row justify-content-between p-3 align-items-center" style={{width: "380px", height: "131.2px", color: "rgb(71, 71, 71)"}}>
                <div style={{fontSize: "1.2rem"}} className="card-title d-flex flex-column">
                <FontAwesomeIcon icon={faNoteSticky} />
                  <p className='mt-3' style={{fontWeight: "500"}}>Flash Cards</p>
                </div>
                <div style={{color: "#39FF14", fontWeight: "900", fontSize: "1.7rem"}} className="card-count">127</div>
              </div>

              <div className="card m-2 d-flex rounded-4 flex-row justify-content-between p-3 align-items-center" style={{width: "380px", height: "131.2px", color: "rgb(71, 71, 71)"}}>
                <div style={{fontSize: "1.2rem"}} className="card-title d-flex flex-column">
                <FontAwesomeIcon icon={faClipboard} />
                  <p className='mt-3' style={{fontWeight: "500"}}>Quizes</p>
                </div>
                <div style={{color: "#39FF14", fontWeight: "900", fontSize: "1.7rem"}} className="card-count">127</div>
              </div>
            </div>
        </Col>
    </Row>
</Container>
  )
}

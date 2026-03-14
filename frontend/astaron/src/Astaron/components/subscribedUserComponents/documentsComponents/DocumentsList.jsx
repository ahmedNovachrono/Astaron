import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const DocumentsList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="docs-intro d-flex justify-content-between m-5">
            <div className="docs-title">
              <h1 style={{fontWeight: "800"}}>Simplified Documents</h1>
              <p>Your collection of easy-to-understand learning materials</p>
            </div>
            <Button style={{border: "none", backgroundColor: "#39FF14", color: "black", width: "11rem", height: "3rem", fontWeight: '800', transition: "200ms"}} className='rounded-4 add-doc'>+ Add Document</Button>
          </div>
          
          <Row className='docs-cards-holder d-flex flex-column'>
            <Col className='d-flex justify-content-between border rounded-4 p-5 shadow mt-3'>

              <div className="doc-holder m-2 d-flex">
              <FontAwesomeIcon style={{width: "2.5rem", height: "2.5rem", backgroundColor: "#39FF14", color: "black"}} className='me-5 p-3 rounded-4' icon={faFile}/>

              <div className="doc-info-holder">
                <div className="doc-info">
                    <h1 className='doc.title'>Introduction to Machine Learning</h1>
                    <p className='doc.dis'>A comprehensive guide covering the basics of ML algorithms and their applications</p>
                  </div>
                  <div className="tags">
                    <p>Data Scince</p>
                  </div>
                  <p className="updated-at">Last updated: Feb 15, 2026</p>
                  </div>
              </div>

              <Button style={{backgroundColor: "transparent", color: "black", fontWeight: "500", width: "7rem", height: "3rem", borderColor: "gray"}} >View</Button>

            </Col>
            

          </Row>
        </Col>
      </Row>
    </Container>
  )
}

import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { AstarothLogo } from '../Logo/AstaronLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'



export const Header = () => {
  return (
    <Container fluid>
        <Row>
            <Col className='d-flex justify-content-between m-2'>
                <div className="header-logo d-flex ">
                <div className='rounded-4' style={{width: "50px", height: "50px", backgroundColor: "black", boxShadow: "0px 0px 12px 1px #39FF14"}}><AstarothLogo /></div>
                <h2 className='ms-3 mt-1 font-weight-bolder'>Astaron Learn</h2>
                </div>
                <Button style={{background: "none", border: "none", color: "gray", fontWeight: "500"}}><FontAwesomeIcon  icon={faArrowRightFromBracket}/> Log Out</Button>
            </Col>
            <hr className='mt-1' />
        </Row>
    </Container>
  )
}

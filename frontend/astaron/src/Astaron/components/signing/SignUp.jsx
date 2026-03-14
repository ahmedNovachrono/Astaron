import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AstarothLogo } from '../Logo/AstaronLogo';
export const SignUp = () => {
  return (
    <Container fluid className="mt-2 mb-5 d-flex align-items-center flex-column">
      <Row className='mb-2'>
        <Col>
          <div style={{textAlign: "center"}} className="logo d-flex">
            <div style={{width: "4.2rem", borderRadius: "25px", height: "4.2rem", borderStyle: "solid", border: "5px", borderColor: "#39FF14", padding: "0.2rem"}} className=" me-4  bg-black"><AstarothLogo animate={true} size={60} className='me-3' /></div>
            <h2 style={{fontWeight: "700"}} className='mt-3'>Astaron Learn</h2>
          </div>
        </ Col>
      </Row>

      <Row className="w-100 mt-1 justify-content-center">
        <Col  xs={10} md={6} lg={4}>
          <div className="p-4 shadow rounded-5 bg-light">
            <h2 style={{fontWeight: "900"}} className="mb-3">Welcome</h2>
            <p style={{color: "gray"}}>Sign Up to start learning</p>

            <Form>
            <Form.Group controlId='usernameId' className="mb-3">
                <Form.Label style={{fontWeight: "600"}}>Username</Form.Label>
                <Form.Control className='p-3 rounded-4' type="text" style={{fontWeight: "400"}} placeholder="Enter Username" />
              </Form.Group>
              
              <Form.Group controlId='emailId' className="mb-3">
                <Form.Label style={{fontWeight: "600"}}>Email</Form.Label>
                <Form.Control className='p-3 rounded-4' type="email" style={{fontWeight: "400"}} placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId='passwordId' className="mb-3">
                <Form.Label style={{fontWeight: "600"}}>Password</Form.Label>
                <Form.Control className='p-3 rounded-4' type="password" style={{fontWeight: "400"}} placeholder="Enter password" />
              </Form.Group>

              <Button style={{backgroundColor: "#39FF14", borderStyle: "none", fontWeight:"600"}} className="w-100 mb-3 p-3 rounded-4" type='submit'>
                Sign In
              </Button>
              <p className='text-center' style={{color: "gray"}}>اave an account already ? <Link to="/auth/sign-in" style={{fontWeight: "700", textDecoration: "none", color: "gray"}}>Sign In</Link></p>
            </Form>
          </div>
        </Col>

      </Row>
    </Container>
  )
}

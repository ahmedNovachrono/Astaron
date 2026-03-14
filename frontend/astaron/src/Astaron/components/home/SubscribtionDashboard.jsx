import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import "../../../App.css";

export const SubscribtionDashboard = () => {
  return (
    <Container>
      <Row className="mt-5 rounded-5 p-5 shadow border">
        <Col>
          <div className="sec-title d-flex justify-content-between">
            <div className="title-info">
                <h1>Your Subscription</h1>
                <p>Manage your plan and billing</p>
            </div>
            <FontAwesomeIcon icon={faCreditCard} className="p-2 rounded-4" style={{width: "2.4rem", color: "black", height: "2.4rem", color: "black", backgroundColor: "#39FF14"}} />
          </div>

          <Row className="mt-4 g-3">
            <Col xs={12} md={6}>
              <div className="info">
                <p className="m-1">Plan</p>
                <h4>Premium Plan</h4>
              </div>
            </Col>

            <Col xs={12} md={6} >
              <div className="info">
                <p className="m-1">Status</p>
                <h4>Active</h4>
              </div>
            </Col>

            <Col xs={12} md={6} >
              <div className="info">
                <p className="m-1">Price</p>
                <h4>$9.99/month</h4>
              </div>
            </Col>

            <Col xs={12} md={6}>
              <div className="info">
                <p className="m-1">Payment Method</p>
                <h4>Visa •••• 4242</h4>
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
             
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="border rounded-4 p-1 ps-3"> 
                <div className="next-date">
                    <p className="m-1">Next billing date</p>
                    <h4>March 21, 2026</h4>
                </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
            <Button className="w-100 mt-4 rounded-4 ms-btn" style={{backgroundColor: "#39FF14", border: "none", height: "3.3rem", color: "black", fontWeight: "700", transition: "300ms"}}>Manage Subscribtion</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
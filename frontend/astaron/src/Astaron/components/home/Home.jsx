import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faNoteSticky, faClipboard } from '@fortawesome/free-regular-svg-icons'
import "../../../App.css";
import { PagesCards } from './PagesCards';
import { SubscribtionDashboard } from './SubscribtionDashboard';

export const Home = () => {
  return (
      <Container>
        <Row>
          <Col>
            <PagesCards />
            <SubscribtionDashboard />
          </Col>
        </Row>
      </Container>
  )
}

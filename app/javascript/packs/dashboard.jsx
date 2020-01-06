// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { getUser } from './api';
import PropTypes from 'prop-types';

import {Container, Col, Row, Nav} from 'react-bootstrap';

import {EditActivity} from './editActivity'

const Dashboard = (props) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser('Lucas');
  }, []);

  return (
    <Container fluid={true}>
      <Row>
        <Col className="menu">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Dashboard</Nav.Link>
          </Nav>
        </Col>
        <Col xs={12}>
          <Row>Hello {user}!</Row>
          <Row>
            <EditActivity />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.getElementById('root'),
  )
})

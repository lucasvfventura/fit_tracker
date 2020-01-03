// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Container, Col, Row, Nav} from 'react-bootstrap';

const Hello = props => (
  <Container fluid={true}>
    <Row>
      <Col xs={1}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Dashboard</Nav.Link>
        </Nav>
      </Col>
      <Col xs={11}>
        Hello {props.name}!
      </Col>
    </Row>
  </Container>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.getElementById('root'),
  )
})

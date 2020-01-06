import React, {useState} from 'react';

import {Container, Col, Row, Form, Button} from 'react-bootstrap';

export const EditActivity = (props) => {
  const [fitFile, setFitFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileUpload = (event) => {
    setFitFile(event.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('description', description);
    formData.append('fit_file', fitFile);

    const options = {
      method: 'POST',
      body: formData,
    };
    fetch('/activities', options);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Description:</Form.Label>
              <Form.Control type="text" onChange={e => setDescription(e.target.value)} placeholder="Describe your activity" />
            </Form.Group>
            <Form.Group>
              <Form.Label>File:</Form.Label>
              <Form.Control type="file" onChange={handleFileUpload} placeholder="Fit file" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={fitFile == null} onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
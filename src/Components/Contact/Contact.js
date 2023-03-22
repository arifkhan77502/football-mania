import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./Contact.css";

const Contact = () => {
    return (
        <div className='formContainer'>
            <Form className='formBox'>
                <div className='formTitle'>
                    <h1><b>Contact Us</b></h1>
                    <p><b>We will get back to you asap!</b></p>
                </div>
                <Row>
                    <Col>
                        <input type='text' className='shadow' placeholder="First name" />
                    </Col>
                    <Col>
                        <input className='shadow' placeholder="Last name" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                            <input className='mb-3 mt-3 shadow' type="email" placeholder="Enter email" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type='number' className='shadow' placeholder="Phone" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <textarea className="textArea mb-3 mt-3 shadow" placeholder='Leave a comment here' rows="3"></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='submitBtn' type="text">
                            Submit
                        </Button>
                    </Col>
                </Row>

                <h6><b>You may also call us at 333-33-33</b></h6>
            </Form>
        </div>
    );
};

export default Contact;
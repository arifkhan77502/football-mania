import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Button from 'react-bootstrap/Button';
import "./Information.css";

const Information = (props) => {
    const {name, info, birthdate, birthplace, club, position, salary, image} = props.detail;

    return (
        <div className='info-container'>
            <Offcanvas show={props.detail} onHide={()=> props.onHide(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Player Information</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='img'>
                        <img src={image} alt="" />
                    </div>

                    <div className='info'>
                        <h1><b>{name}</b></h1>
                        <p>{info}</p>
                        <p><b>Birth Place: </b>{birthplace}</p>
                        <p><b>Birth Date: </b>{birthdate}</p>
                        <p><b>Club: </b>{club}</p>
                        <p><b>Position: </b>{position}</p>
                        <p><b>Salary: </b>{salary} Million</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Information;
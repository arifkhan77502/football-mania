import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./PlayerList.css";

const PlayerList = (props) => {
    const {image, name} = props.player;

    
    return (
            <div className='card-container'>
                <Card style={{ width: '17rem' }} className='cardBox'>
                <Card.Img className='card-img' variant="top" src= {image} />
                <Card.Body className='cardBody'>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={()=> props.addPlayer(props.player)} variant="primary">Add Players</Button>
                </Card.Footer>
            </Card>
            </div>
    );
};

export default PlayerList;
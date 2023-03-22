import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./SelectedPlayers.css";

const SelectedPlayers = (props) => {
    const {name, image, salary, id} = props.selector;
    
    return (
        <div className='playersContainer'>
            <ul className='playersBox'>
                <li className='playersInfo'>
                    <img src={image} alt="" />
                    <h6><b>{name}</b></h6>
                    <p><b>{salary} Million</b></p>
                    <FontAwesomeIcon onClick={()=> props.removePlayer(id)} icon={faTrash} />
                </li>
            </ul>
        </div>
    );
};

export default SelectedPlayers;
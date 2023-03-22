import React from 'react';
import { Link} from "react-router-dom";
import playerAddIcon from "../../data/image/icon/players.png";
import "./BudgetButton.css";


const BudgetButton = (props) => {
    const player = props.selections;
    console.log(player);
    let count = 0;
    
    for (let i = 0; i < player.length; i++) {
        const element = player[i];
        if(element){
            count++;
        }
    }

    return (
        <div className='budgetBtn'>
            <Link className='budgetLink' onClick={()=> props.togglePlayerList()}>
                <div className='budgetIcon'>
                <img src= {playerAddIcon} width="25" height="25" className="d-inline-block align-top"alt="React Bootstrap logo"/>
                </div>
                
                <div className='count'>
                <p>{count}</p>
                </div>
            </Link>
        </div>
    );
};

export default BudgetButton;
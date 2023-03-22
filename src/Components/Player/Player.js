import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PlayerList from '../PlayerList/PlayerList';
import "./Player.css";
import fakeData from './../../data/fakeData';
import Information from './../Information/Information';
import SelectedPlayers from './../SelectedPlayers/SelectedPlayers';
import BudgetButton from './../BudgetButton/BudgetButton';

const Player = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => setPlayers(fakeData), []);
    const [details, setDetails] = useState([]);
    const [selections, setSelections] = useState([]);
    const [showPlayerList, setShowPlayerList] = useState(true);
    const [showSelectedList, setShowSelectedList] = useState(false);

    const detailsClose = () => {
        setDetails([]);
    }

    const addPlayer = (player) => {
        const newDetails = [...details, player];
        setDetails(newDetails);

        const newSelections = [...selections, player];
        setSelections(newSelections);
    }

    const togglePlayerList = () => {
        setShowPlayerList(!showPlayerList);
        setShowSelectedList(!showSelectedList);
    };

    const toggleSelectedPlayers = () => {
        setShowPlayerList(!showPlayerList);
        setShowSelectedList(!showSelectedList);
    }

    const removePlayer = (id) => {
        const newList = selections.filter((item) => item.id !== id);
        setSelections(newList);
    }
    let totalSalary = 0;
    selections.map(selection => {
        totalSalary += selection.salary;
        return totalSalary;
    });

    return (
        <div id='playersBox'>
            <div className='budgetBtn'>
                <BudgetButton togglePlayerList = {togglePlayerList} selections = {selections}></BudgetButton>
            </div>


            <div className="players-container">
{showPlayerList && (<div className='title'>
                <h5>FOOTBALL MANIA</h5>
                </div>)}
            
{showSelectedList  &&  (<div className='slection'>
            <h3 className='totalSalary'><b>Total Budgets :</b> {totalSalary} Millon</h3>

            <div className='cross'>
                <FontAwesomeIcon className="fa-sharp" onClick={()=> toggleSelectedPlayers()} icon={faXmark} />
            </div>
                {
                    selections.map(selector => <SelectedPlayers addPlayer = {addPlayer} removePlayer = {removePlayer} selector = {selector} key = {selector.id}></SelectedPlayers>)
                }
            </div>)}
            <div className='information'>
                {
                    details.map(detail => <Information detail = {detail} onHide={() => detailsClose()} key = {detail.id}></Information>)
                }
            </div>
{showPlayerList && (<div className="players">
                {
                players.map(player => <PlayerList player = {player} addPlayer = {addPlayer} key = {player.id}></PlayerList> )
                }
            </div>)}
            </div>
        </div>
    );
};

export default Player;
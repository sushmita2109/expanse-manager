import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faPlaneDeparture,faHeart,faAsterisk } from "@fortawesome/free-solid-svg-icons";
import{faApple,faAndroid} from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import {ReactComponent as House} from './house.svg';
import {ReactComponent as Plane} from './aeroplane.svg';
import {ReactComponent as Heart} from './heart.svg';
import {ReactComponent as Multiply} from './multiply.svg';

const messageList=[
    {"id":"1","mess":" on trips.","image":<Plane/>},
    {"id":"2","mess":" with housemates.","image":<House/>},
    {"id":"3","mess":" with your partner.","image":<Heart/>},
    {"id":"4","mess":" with anyone.","image":<Multiply/>}
]
// console.log(messageList[0].image)
export const HomePage = () => {
    const [message,setMessage]=useState([]);
    const clickPlaneDeparture=()=>{
        setMessage(messageList[0]);
    }
    const clickHome=()=>{
        setMessage(messageList[1])
    }
    const clickHeart=()=>{
        setMessage(messageList[2]);
    }
    const clickMul=()=>{
        setMessage(messageList[3]);
    }
    return (
        <div>
            <h1 className="headerText">Less stress when sharing expenses<strong>{message.mess}</strong></h1> 
           <div>{message.image}</div> 
            <div className="imgIcons">
            <FontAwesomeIcon className="iconImg" icon={faPlaneDeparture} onClick={()=>clickPlaneDeparture()}/>
            <FontAwesomeIcon className="iconImg" icon={faHome} onClick={()=>clickHome()}/>
            <FontAwesomeIcon className="iconImg" icon={faHeart} onClick={()=>clickHeart()}/>
            <FontAwesomeIcon className="iconImg" icon={faAsterisk} onClick={()=>clickMul()}/>
            {/* <House/> */}
            </div>
            
            <p>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
            <small>
                Free for 
                <a href="https://apps.apple.com/us/app/splitwise/id458023433">
                <FontAwesomeIcon icon={faApple}/>
               <span> iphone,</span> 
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.Splitwise.SplitwiseMobile&pli=1">
                <FontAwesomeIcon icon={faAndroid}/>
                <span> Android, </span>
                </a>
                <span>and web.</span>
            </small>
        </div>
    );
}
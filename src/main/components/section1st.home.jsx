
import { useState,useCallback } from "react";
import './css/nav.css'
import Icon from './Icon';
import MenuSvg from '../assets/menu.svg'
import ExitSvg from '../assets/exit.svg'
import { Routes, Route, Link } from "react-router-dom";
import BackgroundPng from '../assets/Apekings andfrineds thumpnail.png'
export default function SrctionFirstHome ({props}){
    const [open,setOpen]=useState(false);
    const okThenOpenMenu =useCallback(()=>{
        setOpen(!open)
    },[open])
    
    return(
    <div className="slider">
        <div className="slidercontent">
                <img className="imageslider" src={BackgroundPng} />
                <div className="floatingbackground">
                        <h2 className="title">
                            First Series Evil Ape and Friends
                        </h2>
                        <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Tier</th>
                                    <th>Crypto</th>
                                    <th>Total Supply</th>
                                    <th>Floor Price </th>
                                </tr>
                                <tr>
                                    <td> ApeKings&Friend 1st </td>
                                    <td> BRONZE </td>
                                    <td> ETH on Polygon  </td>
                                    <td> 19 </td>
                                    <td> 0.03 ETH </td>
                                </tr>
                                </table>
                        <p className="content"> Evil Ape Kings is stronger in Piceaia Kingdoms has 1 of 21 kingdoms of Carcea World, he is Dangerous with the enemy and soft with allies. He got the name Evil Ape Kings because when he command war to defend his land from the Dashcia Kingdom he killed a Normeder known as The Sanctuary Dash the king of Dashcia, Normeder has 100 years of undefeated.</p>
                    </div>
        </div>
    </div>
       
    )
} 

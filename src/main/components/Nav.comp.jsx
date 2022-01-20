
import { useState,useCallback } from "react";
import './css/nav.css'
import Icon from './Icon';
import MenuSvg from '../assets/menu.svg'
import ExitSvg from '../assets/exit.svg'
import { Routes, Route, Link } from "react-router-dom";
export default function Navigation ({props}){
    const [open,setOpen]=useState(false);
    const okThenOpenMenu =useCallback(()=>{
        setOpen(!open)
    },[open])
    
    return(
        <div className="navbar">
        <div className="container">
            <a className="logo" href="#">EvilApe<span>&Friends</span></a>
                <img id="mobile-cta" className="mobile-menu" src={MenuSvg} alt="navigation" onClick={okThenOpenMenu}/>
            <nav className={`${open==true?'menu-btn':null}`}>
                <img  id="mobile-exit" className="mobile-menu-exit" src={ExitSvg} alt="" onClick={okThenOpenMenu}/>    
                <ul className="primary-nav">
                    <li className="current"><a href="/">Home</a></li>
                    <li><a href="/story">Storyline</a></li>
                    <li><a href="https://evilapeandfriends.fandom.com/wiki/EvilApeAndFriends_Wiki">Wiki & Fandom</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Animation</a></li>
                </ul>

                <ul className="secondary-nav">
                    <li><a href="#">Contact</a></li>
                    <li className="go-premium-cta"><a href="https://opensea.io/collection/evil-ape-kings-and-friends">Go My NFT</a></li>
                </ul>
            </nav>
        </div>
    </div>
       
    )
} 

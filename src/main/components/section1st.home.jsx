
import { useState,useCallback } from "react";
import './css/nav.css'
import Icon from './Icon';
import MenuSvg from '../assets/menu.svg'
import ExitSvg from '../assets/exit.svg'
import { Routes, Route, Link } from "react-router-dom";
import BackgroundPng from '../assets/Apekings andfrineds thumpnail.png'
import BackgroundS2 from '../assets/2obor.jpg'
import TrheerdSeries from '../assets/themages.png'
import TwondSeriesTumbnail from '../assets/The-King-servent-revive-the-ally.png'
import Sercent from '../assets/Sercent.png'
export default function SrctionFirstHome ({props}){
    const [open,setOpen]=useState(false);
    const okThenOpenMenu =useCallback(()=>{
        setOpen(!open)
    },[open])
    
    return(
    <div className="slider">
        <div className="slidercontent">
                <img className="imageslider" src={TrheerdSeries} />
                <div className="floatingbackground">
                        <h2 className="title">
                            4nd Series of Evil Ape and Friends | The Friends of Mages
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
                                    <td> Ape King Founder </td>
                                    <td> Silver **** </td>
                                    <td> ETH on Polygon  </td>
                                    <td> 1000 </td>
                                    <td> 0.02 ETH </td>
                                </tr>
                                </table>
                        <p className="content">The friends of mages had a story of the childhood of king 1st of Peceaia kingdom, occurred the names of the legendary monsters Treantdiabolic,.... </p>
                    </div>
        </div>
        <div className="slidercontent">
                <img className="imageslider" src={TrheerdSeries} />
                <div className="floatingbackground">
                        <h2 className="title">
                            4nd Series of Evil Ape and Friends | The Friends of Mages
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
                                    <td> Ape King Founder </td>
                                    <td> Silver **** </td>
                                    <td> ETH on Polygon  </td>
                                    <td> 1000 </td>
                                    <td> 0.02 ETH </td>
                                </tr>
                                </table>
                        <p className="content">The friends of mages had a story of the childhood of king 1st of Peceaia kingdom, occurred the names of the legendary monsters Treantdiabolic,.... </p>
                    </div>
        </div>
        <div className="slidercontent">
                <img className="imageslider" src={TwondSeriesTumbnail} />
                <div className="floatingbackground">
                        <h2 className="title">
                            3rd Series of Evil Ape and Friends | The Sercent make a contract 
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
                                    <td> Ape King Founder </td>
                                    <td> Silver </td>
                                    <td> ETH on Polygon  </td>
                                    <td> 1000 </td>
                                    <td> 0.02 ETH </td>
                                </tr>
                                </table>
                        <p className="content">The Servant Summoner by the Sercent in the highland cave, it is said that he became able to use two different magic attributes from his own element, and got two attributes from the servent that served him</p>
                    </div>
        </div>
        <div className="slidercontent">
                <img className="imageslider" src={Sercent} />
                <div className="floatingbackground">
                        <h2 className="title">
                            2nd Series of Evil Ape and Friends | King Founder Piceaia
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
                                    <td> Ape King Founder </td>
                                    <td> Silver </td>
                                    <td> ETH on Polygon  </td>
                                    <td> 1000 </td>
                                    <td> 0.02 ETH </td>
                                </tr>
                                </table>
                        <p className="content">The Evil Ape Kings Founder a Piceaia feudal kingdom names Sercent Rouldy, he had two servants names leas and lias, they are Rabbat. Rabbat its race both rabbit and African bat had specification to cast wind, aeria, and water magic. Both the servent has become controller an Etherion fraction weapon system to another region</p>
                    </div>
        </div>
        <div className="slidercontent">
                <img className="imageslider" src={BackgroundPng} />
                <div className="floatingbackground">
                        <h2 className="title">
                            First Series Evil Ape and Friends | intro
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

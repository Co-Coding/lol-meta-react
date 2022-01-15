import Tippy from "@tippyjs/react"
import 'tippy.js/dist/tippy.css';
import { useNavigate } from "react-router-dom";
import MatchDetails from "../MatchDetails/MatchDetails";
import { useState } from "react";

export function SummonerDetails(props) {

    const navigate = useNavigate();

    const [showMatchDetails, setShowMatchDetails] = useState({})

    const { data, summonerName, childToParent } = props
    console.log(props)
    console.log(summonerName)

    const handleClick = async (summonerName) => {
        navigate(`/summoner/${summonerName}`)
        childToParent(summonerName)
    }

    const matchDetails = (index) => {
         setShowMatchDetails(prev => {
            return {...prev, [index]: !prev[index] }
         })
    }


    return (
        <div>
            {
                data.map((data, index) => {
                    return (
                        <div>
                            <div class="grid" onClick={() => matchDetails(index)}>
                                {data.info.participants.filter(participant => participant.summonerName.toLowerCase() === summonerName.toLowerCase()).map(filteredSumm => {
                                    return (
                                        <div class="items">
                                            <img src={filteredSumm.item0}></img>
                                            <img src={filteredSumm.item1}></img>
                                            <img src={filteredSumm.item2}></img>
                                            <img src={filteredSumm.item3}></img>
                                            <img src={filteredSumm.item4}></img>
                                            <img src={filteredSumm.item5}></img>
                                            <img src={filteredSumm.item6}></img>
                                        </div>
                                    )
                                })}
                                {data.info.participants.filter(participant => participant.summonerName.toLowerCase() === summonerName.toLowerCase()).map(filteredSumm => {
                                    return (
                                        <div class="summoner">
                                            {filteredSumm.summonerName}
                                            <br></br>
                                            <Tippy content={filteredSumm.championData[0].id}>
                                                <a>
                                                    <img src={filteredSumm.championAsset}></img>
                                                </a>
                                            </Tippy>
                                        </div>
                                    )
                                })}
                                <div></div>
                                <div></div>
                                <div></div>
                                <div >
                                    <div class="teams">
                                        {data.info.participants.filter(summoner => summoner.win === true).map(filteredSumm => {
                                            return (
                                                <div class="participants">
                                                    <div class="left summPointer">
                                                        <img src={filteredSumm.championAsset}></img>
                                                    </div>
                                                    <div
                                                        onClick={() => handleClick(filteredSumm.summonerName)}
                                                        class="right summPointer">
                                                        {filteredSumm.summonerName}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div class="teams">
                                        {data.info.participants.filter(summoner => summoner.win === false).map(filteredSumm => {
                                            return (
                                                <div class="participants">
                                                    <div class="left summPointer">
                                                        <img src={filteredSumm.championAsset} ></img>
                                                    </div>
                                                    <div
                                                        onClick={() => handleClick(filteredSumm.summonerName)}
                                                        class="right summPointer" >
                                                        {filteredSumm.summonerName}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div key={index}>
                            {console.log('match details: ' + JSON.stringify(showMatchDetails))}
                            { showMatchDetails[index] ? <p>{index}</p> : null }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
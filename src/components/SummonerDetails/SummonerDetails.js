import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useNavigate } from "react-router-dom";
import MatchDetails from "../MatchDetails/MatchDetails";
import { useState } from "react";
import { Tooltip } from "@mui/material";

export function SummonerDetails(props) {
  const navigate = useNavigate();

  const [showMatchDetails, setShowMatchDetails] = useState({});

  const { data, summonerName, childToParent } = props;
  console.log(props);
  console.log(summonerName);

  const handleClick = async (summonerName) => {
    navigate(`/summoner/${summonerName}`);
    childToParent(summonerName);
  };

  const matchDetails = (index) => {
    setShowMatchDetails((prev) => {
      return { ...prev, [index]: !prev[index] };
    });
  };

  return (
    <div className="summoner-details-body">
      {data.map((data, index) => {
        console.log('data: ', data)
        return (
          <div className="summoner-details-container">
            <div
              className="summoner-details-columns"
              onClick={() => matchDetails(index)}
            >
              <div className="summoners-column-one">
                {data.info.participants
                  .filter(
                    (participant) =>
                      participant.summonerName.toLowerCase() ===
                      summonerName.toLowerCase()
                  )
                  .map((filteredSumm) => {
                    return (
                      <div className="items">
                        <div>
                          <img src={filteredSumm.item0}></img>
                        </div>
                        <div>
                          <img src={filteredSumm.item1}></img>
                        </div>
                        <div>
                          <img src={filteredSumm.item2}></img>
                        </div>
                        <div>
                          <img src={filteredSumm.item3}></img>
                        </div>
                        <div>
                          <img src={filteredSumm.item4}></img>
                        </div>
                        <div>
                          <img src={filteredSumm.item5}></img>
                        </div>
                        <div>
                          <img
                            className="trinket"
                            src={filteredSumm.item6}
                          ></img>
                        </div>
                      </div>
                    );
                  })}
                {data.info.participants
                  .filter(
                    (participant) =>
                      participant.summonerName.toLowerCase() ===
                      summonerName.toLowerCase()
                  )
                  .map((filteredSumm) => {
                    // console.log(filteredSumm.championData[0]?.id);
                    return (
                      <div className="summoner-div">
                        <div className="summoner-perks">
                          <div>
                            <img src={filteredSumm.perks.styles[0].image}></img>
                          </div>
                          <div>
                            <img src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"></img>
                          </div>
                        </div>
                        {/* <div className="summoner-name">
                          <div>{filteredSumm.summonerName}</div>
                        </div> */}
                        <Tooltip
                          title={filteredSumm.championData[0]?.id}
                          placement="top"
                        >
                          <div className="summoner-champion">
                            <img src={filteredSumm.championAsset}></img>
                          </div>
                        </Tooltip>
                      </div>
                    );
                  })}
                <div>
                  {data.info.participants
                    .filter(
                      (participant) =>
                        participant.summonerName.toLowerCase() ===
                        summonerName.toLowerCase()
                    )
                    .map((filteredSumm) => {
                      return (
                        <div>
                          {`${filteredSumm.kills} / ${filteredSumm.assists} / ${filteredSumm.deaths}`}
                          <br></br>
                        </div>
                      );
                    })}
                </div>
                <div>
                  {data.info.participants
                    .filter(
                      (participant) =>
                        participant.summonerName.toLowerCase() ===
                        summonerName.toLowerCase()
                    )
                    .map((filteredSumm) => {
                      return (
                        <div>
                          {data.info.gameMode}
                          <br></br>
                          {filteredSumm.win === true ? "Victory" : "Defeat"}
                          <br></br>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="summoners-column-two">
                <div className="otro-content-stats"></div>
                <div>
                  <div className="teams">
                    {data.info.participants
                      .filter((summoner) => summoner.win === true)
                      .map((filteredSumm) => {
                        return (
                          <div className="participants">
                            <div className="left summPointer">
                              <img src={filteredSumm.championAsset}></img>
                            </div>
                            <div
                              onClick={() =>
                                handleClick(filteredSumm.summonerName)
                              }
                              className="right summPointer"
                            >
                              <Tooltip
                                title={filteredSumm.summonerName}
                                placement="top"
                              >
                                <label className="right summPointer">
                                  {filteredSumm.summonerName}
                                </label>
                              </Tooltip>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div className="teams">
                    {data.info.participants
                      .filter((summoner) => summoner.win === false)
                      .map((filteredSumm) => {
                        return (
                          <div className="participants">
                            <div className="left summPointer">
                              <img src={filteredSumm.championAsset}></img>
                            </div>
                            <div
                              onClick={() =>
                                handleClick(filteredSumm.summonerName)
                              }
                              className="right summPointer"
                            >
                              <Tooltip
                                title={filteredSumm.summonerName}
                                placement="top"
                              >
                                <label className="right summPointer">
                                  {filteredSumm.summonerName}
                                </label>
                              </Tooltip>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            {/* <div key={index}>
              {showMatchDetails[index] ? (
                <MatchDetails summData={data} />
              ) : null}
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

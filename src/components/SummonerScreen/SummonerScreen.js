import "./SummonerScreen.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { getRequest } from "../../utils/httpService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../Ui/Spinner";
import { SummonerDetails } from "../SummonerDetails/SummonerDetails";

export function SummonerScreen() {
  const { summonerName } = useParams();
  const [summonerData, setSummonerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [summName, setSummName] = useState("");
  console.log("pruebaName: params: " + summonerName);

  const childToParent = async (summonerName) => {
    setIsLoading(true);
    const data = await getRequest(summonerName, "la2");
    setSummonerData(data);
    setSummName(summonerName);
    setIsLoading(false);
    console.log(data);
  };

  useEffect(() => {
    async function getSummoner() {
      const data = await getRequest(summonerName, "la2");
      setSummonerData(data);
      setSummName(summonerName);
      setIsLoading(false);
      console.log(data);
    }
    getSummoner();
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div className="main-container">
      {/* <div className="container-columns"> */}
      <div>
        <aside className="aside">
          <img src="https://leaguefeed.net/wp-content/uploads/2022/01/image-11.png" ></img>
        </aside>
        </div>
        <div className="container-one">
          <h1>{summName}</h1>
        </div>
        <div className="container-two">
          {
            <SummonerDetails
              data={summonerData}
              summonerName={summName}
              childToParent={childToParent}
            />
          }
        </div>
      {/* </div> */}
    </div>
  );
}

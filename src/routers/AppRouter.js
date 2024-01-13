import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SummonerInput } from "../components/SummonerInput/SummonerInput";
import { SummonerScreen } from "../components/SummonerScreen/SummonerScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="summoner-header">
        <header>{<SummonerInput />}</header>
      </div>
      <Routes>
        <Route path="/summoner/:summonerName" element={<SummonerScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

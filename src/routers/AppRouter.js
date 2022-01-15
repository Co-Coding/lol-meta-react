import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SummonerInput } from '../components/SummonerInput/SummonerInput'
import { SummonerScreen } from '../components/SummonerScreen/SummonerScreen'

export const AppRouter = () => {
    return (      
        <BrowserRouter>
            <Routes>
                  <Route path="/" element={<SummonerInput />} />
                  <Route path="/summoner" element={<SummonerScreen />} />
                  <Route path="/summoner/:summonerName" element={<SummonerScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
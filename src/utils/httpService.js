export const getRequest = async (summonerName, region) => {
    // const baseUrl = 'https://lol-meta-backend.herokuapp.com/summName'
    const baseUrl = 'http://localhost:3000/summName'

    const response = await fetch(`${baseUrl}/${summonerName}/${region}`, {
        mode: 'cors'
    });
    const data = await response.json()

    return data.resp
}


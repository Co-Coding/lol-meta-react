export const getRequest = async (summonerName, region) => {
    const baseUrl = 'https://lol-meta-backend.herokuapp.com/summName'

    const response = await fetch(`${baseUrl}/${summonerName}/${region}`);
    const data = await response.json()

    return data.resp
}


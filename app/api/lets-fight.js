import axios from 'axios';
const backendServer = "https://lets-fight.maxisme.com/api"

const FetchCombat = async (fighters) => {
    const url = `${backendServer}/combat`
    return axios.get(url, {
        params: {
            fighters: fighters
        }
    })
}

export { FetchCombat }
import axios from 'axios';
import qs from "qs";

const backendServer = "https://lets-fight.maxisme.com/api"

const FetchCombat = async (fighters) => {
    const url = `${backendServer}/combat`
    return axios.get(url, {
        params: { fighters: fighters },
        paramsSerializer: p => qs.stringify(p, { arrayFormat: "brackets" })
    })
}

export { FetchCombat }
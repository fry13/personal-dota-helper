import axios from "axios";
import { User, UserFromSearch } from "../types"

const url = 'https://api.opendota.com/api'

// const handleResponse = (res:AxiosResponse) => {
//   if (res.status === 200) return res; else return Promise.reject(`Oops! Error: ${res.status}`);
// } 

export async function searchUsers(value: string) {
  try {
    const usersResponse = await axios.get(`${url}/search?q=${value}`)
    const users:UserFromSearch[] = usersResponse.data
    return users
  } catch (error) {
    console.error(error);
  }
}

export async function getUser(id: string) {
  try {    
    const userData = await axios.get(`${url}/players/${id}`)
    const allWinLose = await axios.get(`${url}/players/${id}/wl`)
    const allWinLose14 = await axios.get(`${url}/players/${id}/wl?date=14`)
    const allWinLose30 = await axios.get(`${url}/players/${id}/wl?date=30`)
    const allWinLose60 = await axios.get(`${url}/players/${id}/wl?date=60`)
    const rankedWinLose = await axios.get(`${url}/players/${id}/wl?lobby_type=7`)
    const rankedWinLose14 = await axios.get(`${url}/players/${id}/wl?date=14&lobby_type=7`)
    const rankedWinLose30 = await axios.get(`${url}/players/${id}/wl?date=30&lobby_type=7`)
    const rankedWinLose60 = await axios.get(`${url}/players/${id}/wl?date=60&lobby_type=7`)

    const user = {
      account_id: userData.data.profile.account_id,
      personaname: userData.data.profile.personaname,
      avatarfull: userData.data.profile.avatarfull,
      profileurl: userData.data.profile.profileurl,
      rank_tier: userData.data.rank_tier,
      all_win: allWinLose.data.win,
      all_lose: allWinLose.data.lose,
      all_win_14days: allWinLose14.data.win,
      all_lose_14days: allWinLose14.data.lose,      
      all_win_30days: allWinLose30.data.win,
      all_lose_30days: allWinLose30.data.lose,
      all_win_60days: allWinLose60.data.win,
      all_lose_60days: allWinLose60.data.lose,
      ranked_win: rankedWinLose.data.win,
      ranked_lose: rankedWinLose.data.lose,
      ranked_win_14days: rankedWinLose14.data.win,
      ranked_lose_14days: rankedWinLose14.data.lose,      
      ranked_win_30days: rankedWinLose30.data.win,
      ranked_lose_30days: rankedWinLose30.data.lose,
      ranked_win_60days: rankedWinLose60.data.win,
      ranked_lose_60days: rankedWinLose60.data.lose,
    }    
    return user
  } catch (error) {
    console.error(error);
  }
}

export async function getBaseUserData(id: string) {
  try {    
    const userData = await axios.get(`${url}/players/${id}`)

    const user:User = {
      account_id: userData.data.profile.account_id,
      personaname: userData.data.profile.personaname,
      avatarfull: userData.data.profile.avatarfull,
      profileurl: userData.data.profile.profileurl,
      rank_tier: userData.data.rank_tier,
    }    
    return user
  } catch (error) {
    console.error(error);
  }
}
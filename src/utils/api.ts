import axios, { AxiosResponse } from "axios";
import { User } from "../types"

const url = 'https://api.opendota.com/api'

const handleResponse = (res:AxiosResponse) => {
  if (res.status === 200) return res; else return Promise.reject(`Oops! Error: ${res.status}`);
} 

export async function searchUsers(id: string) {
  try {
    const usersResponse = await axios.get(`${url}/search?q=${id}`)
    const users:User[] = usersResponse.data
    return users
  } catch (error) {
    console.error(error);
  }
}
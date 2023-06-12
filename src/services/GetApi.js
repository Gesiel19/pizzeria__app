import { URL_API } from "./ApiConfig"
import axios from 'axios'

export const getPizzas = async () => {
    const { data } = await axios.get(`${URL_API}`)
    console.log(data)
    return data

}
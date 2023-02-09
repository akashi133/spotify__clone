import axios from "axios";
import { URL } from "../utils/constants";

export const instance = axios.create({
    baseURL: URL,
    params: {key: '484129036', locale: 'en-US'},
    headers: {
        'X-RapidAPI-Key': '84dad80799mshd91d541413d24f6p16f909jsna69dae1399a1',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
})
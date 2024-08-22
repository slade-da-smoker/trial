import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {


    'x-rapidapi-key':'04e522899amsh4b49b25f02fe4aap123c35jsn18a213aea761',

    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};



export const fetchFromAPI = async (url) => {
  const {data}  =  await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://gateway.marvel.com:443/v1/public/characters?apikey=77aa894d3cb1683544a162adf42ebeea853274a9",
  withCredentials: false,
  Params: {
    apikey: "77aa894d3cb1683544a162adf42ebeea853274a9",
  },
});

export default {
  getHero() {
    return apiClient.get();
  },
};

import axios from "axios";

// CREATED SINGLE AXIOS INSTANCE
const apiClient = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
// REUSABLE PARAM STRING FOR CHARACTERS. I KNOW... THIS IS NOT CORRECT WAY
const paramSecure =
  "characters?ts=12a&apikey=67d5b80b6246066e65409141d355a52a&hash=1676ffca6f2911e555cfb849a1f64c18&limit=24&";

// SINGLE CALLS WITH SPECIFIC ACTION
export default {
  getRandomHero(offset) {
    return apiClient.get(paramSecure + "offset=" + offset);
  },
  getHeroByName(name) {
    return apiClient.get(paramSecure + "nameStartsWith=" + name);
  },
  // NOT IN USE... FOR NOW
  getHeroId(id) {
    return apiClient.get(
      "characters/" +
        id +
        "?ts=12a&apikey=67d5b80b6246066e65409141d355a52a&hash=1676ffca6f2911e555cfb849a1f64c18"
    );
  },
};

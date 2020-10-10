import axios from "axios";
const lastFMAPI = "4228a7dc9f02d04d2a06295ef5d3ac49"
// Export an object containing methods we'll use for accessing the random user API
export default {
    fetchArtist: function (artist) {
        return axios
            .get("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=" + lastFMAPI + "&format=json")
    }
};
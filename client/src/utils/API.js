import axios from "axios";
const lastFMAPI = "4228a7dc9f02d04d2a06295ef5d3ac49"
const bitAPI = "c9c5bd4d98a900cc7acff614d4638962"

export default {
    // LastFM API calls
    fetchArtist: function (artist) {
        return axios
            .get("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=" + lastFMAPI + "&format=json")
    },
    fetchSongs: function (artist) {
        return axios
            .get("https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key=" + lastFMAPI + "&format=json")
    },
    // BandsInTown calls
    fetchImage: function(artist) {
        return axios.get("https://rest.bandsintown.com/artists/" + artist + "/?app_id=" + bitAPI)
    },
    fetchEvents: function(artist) {
        return axios.get("https://rest.bandsintown.com/artists/" + artist + "/events/?app_id=" + bitAPI)
    },

    // ====== All CRUD Requests ======
    // Gets all saved events
    savedEvents: function() {
        return axios.get("/api/events").then(result => result.data);
    },
    // Saves searched event to database
    saveEvent: function (eventData) {
        return axios.post("/api/events", eventData).then(result => result.data);
    },
    // Deletes a saved event with matching id
    deleteEvent: function (id) {
        return axios.delete("/api/events/" + id).then(result => result.data);
    }

};
//Materialize JQuery
$(document).ready(function(){
    $('.sidenav').sidenav();
})

//API STUFF?


//GLOBAL VARIABLES
var events = 0;

//GETTING THE SEARCHED ARTIST FROM
//THE SEARCH BAR
$("#search-button").click(function(){
    let artist = $("#search-artist").val();
    // console.log(artist)
    //This Hides the Description of our website
    //so what the user searches appears at the top
    $("#photos").addClass("hide")
    //Shows Artist & Event Info Once The Aritst is Searched
    $("#events-searched").removeClass("hide")
    $("#artist").removeClass("hide")
    lastFM(artist)
    BIT(artist)
    createCard()
})
//------------------------------------------

function lastFM(artist){
    //GETS ARTIST SUMMARY
    artist = encodeURIComponent(artist.trim())
    var queryURL1 = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=4228a7dc9f02d04d2a06295ef5d3ac49&format=json"
    $.ajax({
        url: queryURL1,
        method: "GET",
    }).then(function(response){
        console.log(response)
        $("#artist-name").text(response.artist.name)
        
        //TO GET ARTIST SUMAMRY AND CUT OFF THE URL AT THE END
        // console.log(response.artist.bio.summary)
        var summary = response.artist.bio.summary.split('<');
        $("#summary").text(summary[0])

        //TO GET THE GENRE OF THE ARTIST
        $("#genre").text("Genre: " + response.artist.tags.tag[0].name)
    })

    var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key=4228a7dc9f02d04d2a06295ef5d3ac49&format=json"
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        for(i=0;i<5;i++){
            $("#song-" + i).text((i+1) +". "+response.toptracks.track[i].name)
        }
    })
}

function BIT(artist){
    var queryURL1 = "https://rest.bandsintown.com/artists/" + artist + "/?app_id=45255e6cc480b6c589613047fb0d5749"
    $.ajax({
        url: queryURL1,
        method: "GET",
    }).then(function(response){
        console.log(response)

        //Artist Image
        $("#artist-image").attr("src", response.image_url)

        //Gets the Number of Events
        
    })
}

function createCard(){
        //ADD BUTTON
        var button = $("<button>");
        button.addClass("btn-floating waves-effect waves-light red right");
        button.css({
            "margin-right": "10px",
            "margin-top": "10px",
        });
        var symbol = $("<i>");
        symbol.addClass("material-icons").text("add")
        button.append(symbol)
        
        var newcol = $("<div>");
        newcol.addClass("col s12 m6");
        
        var newcard = $("<div>");
        newcard.addClass("card blue-grey darken-1");
    
        var cardimage = $("<div>");
        cardimage.addClass("card-image");
        cardimage.append(button);
    
        var cardbody = $("<div>");
        cardbody.addClass("card-content white-text");
    
        var cardtitle = $("<span>");
        cardtitle.addClass("card-title");
        cardtitle.text("This is created from JS");
    
        var cardinformation = $("<p>");
        cardinformation.text("This information came from JS");
    
        cardbody.append(cardtitle);
        cardbody.append(cardinformation);
        newcard.append(cardimage);
        newcard.append(cardbody);
        newcol.append(newcard);
    
        $("#events-area").append(newcol);
}

function postEvent(name, location, date) {
    $.post("/api/events", {
        name: name,
        location: location,
        date: date
    })
}

function savethis (id) {
    console.log("=======================")
    console.log(id)

    // var saveButton = $(".material-icons")
    var name = $("#search-artist").val();
    var location = $("#location-"+id).text();
    var date = $("#date-"+id).text();
    console.log(name, location, date);

    event.preventDefault();
    var eventData = {
        name: name,
        location: location,
        date: date
    };

    postEvent(eventData.name, eventData.location, eventData.date);
    
}
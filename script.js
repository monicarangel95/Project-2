//Materialize JQuery
$(document).ready(function(){
    $('.sidenav').sidenav();
})

//API STUFF?

//GETTING THE SEARCHED ARTIST FROM
//THE SEARCH BAR
$("#search-button").click(function(){
    let artist = $("#search-artist").val();
    console.log(artist);
    //This Hides the Description of our website
    //so what the user searches appears at the top
    $("#photos").addClass("hide")
    //Shows Event Info Once The Aritst is Searched
    $("#events-searched").removeClass("hide")
    $("#artist-name").text(artist)
})
//------------------------------------------

function eventSearch(artist){
    var queryURL1 = "https://rest.bandsintown.com/artists/" + artist + "/?app_id=45255e6cc480b6c589613047fb0d5749"
    $.ajax({
        url: queryURL1,
        method: "GET",
    }).then(function(response){
        console.log(response)
    })
}
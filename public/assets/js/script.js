var events = 0;

$("#search").click(function () {
    let artistSearch = $("#artist").val();
    //console.log(artistSearch)
    fmSearch(artistSearch);
    ticketSearch(artistSearch);
});

function fmSearch(artistSearch){
    $("#artistName").text(artistSearch);
    artistSearch = encodeURIComponent(artistSearch.trim())
    console.log(artistSearch)

    //Searching for Top Songs
    var queryURL1 = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artistSearch + "&api_key=c480f7f0a05a2b8e0d17968d01265fbe&format=json"

    $.ajax({
        url: queryURL1,
        method: "GET",
      }).then(function(response) {
        for(i = 0; i < 3; i++){
          $("#songTitle" + i).text(response.toptracks.track[i].name)
        }
      });

    //Searching for Artist Info
    var queryURL2 = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistSearch + "&api_key=c480f7f0a05a2b8e0d17968d01265fbe&format=json"

    $.ajax({
      url: queryURL2,
      method: "GET",
    }).then(function(response) {
      $(".subtitle").text(response.artist.tags.tag[0].name);

      console.log(response);

    });
}

function ticketSearch(artistSearch){
  var queryURL1 = "https://rest.bandsintown.com/artists/" + artistSearch + "/?app_id=45255e6cc480b6c589613047fb0d5749"

  
  $.ajax({
    url: queryURL1,
    method: "GET",
  }).then(function(response){
    //Response from API
    console.log(response)

    //Number of Events Coming Up
    console.log(response.upcoming_event_count)
    events = response.upcoming_event_count

    //Artist Image
    $("#artistImg").attr("src", response.image_url)
  

  var queryURL2 = "https://rest.bandsintown.com/artists/" + artistSearch + "/events/?app_id=45255e6cc480b6c589613047fb0d5749"

  $.ajax({
    url: queryURL2,
    method: "GET",
  }).then(function(response){
    console.log(events)
    
    if(events > 0){
      for(i = 0; i < 3; i++){
        let date = new Date( Date.parse(response[i].datetime))
        $("#time" + i).text(date)
        $("#location" + i).text(response[i].venue.location)
      }
    }else{
        for(i = 0; i < 3; i++){
          $("#time" + i).text("No Upcoming Events")
          $("#location" + i).text("")
      }
    }

    // let date0 = new Date( Date.parse(response[0].datetime))
    // $("#time0").text(date0);
    // $("#location0").text(response[0].venue.location);

    // let date1 = new Date( Date.parse(response[1].datetime))
    // $("#time1").text(date1);
    // $("#location1").text(response[1].venue.location);

    // let date2 = new Date( Date.parse(response[2].datetime))
    // $("#time2").text(date2);
    // $("#location2").text(response[2].venue.location);
})})
}
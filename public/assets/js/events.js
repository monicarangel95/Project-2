//Materialize JQuery
$(document).ready(function () {
    $('.sidenav').sidenav();
var savedEvent = JSON.parse(localStorage.getItem("savedEvent"));
console.log(savedEvent);

savedEvent.forEach(event => {
    createCard(event.datetime, event.venue.location)
});

    // Make a get request to our api route that will return every book
    $.get("/api/events", function (id) {
        // For each event that our server sends us
        console.log(events)
        for (i = 0; i < events; i++) {
            const date = new Date(Date.parse(response[i].datetime))
            const location = response[i].venue.location
            createCard(date, location, i)
        }
    })

    function createCard(date, location, number) {
        //ADD BUTTON
        var button = $("<button>");
        button.addClass("btn-floating waves-effect waves-light red right");

        button.attr('id', number)
        button.css({
            "margin-right": "10px",
            "margin-top": "10px",
        });
        var symbol = $("<i>");
        symbol.addClass("material-icons").text("add");
        button.append(symbol);

        var newCol = $("<div>");
        newCol.addClass("col s12 m6");

        var newCard = $("<div>");
        newCard.addClass("card blue-grey darken-1");

        var cardImage = $("<div>");
        cardImage.addClass("card-image");
        cardImage.append(button);

        var cardBody = $("<div>");
        cardBody.addClass("card-content white-text");

        var cardTitle = $("<span>");
        cardTitle.addClass("card-title");
        cardTitle.attr('id', 'location-' + number)
        cardTitle.text(location);

        var cardInformation = $("<p>");
        cardInformation.text(date);
        cardInformation.attr('id', 'date-' + number)

        cardBody.append(cardTitle);
        cardBody.append(cardInformation);
        newCard.append(cardImage);
        newCard.append(cardBody);
        newCol.append(newCard);
        $("#events-area").append(newCol);
    }
});
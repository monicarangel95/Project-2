//Materialize JQuery
$(document).ready(function () {
    $('.sidenav').sidenav();

    // Make a get request to our api route that will return every book
    $.get("/api/events", function (res) {
        // For each event that our server sends us
        // console.log(events)
        console.log(res)
        for (i = 0; i < res.length; i++) {
            const name = res[i].name
            const location = res[i].location
            const date = res[i].date
            const number = i
            createCard(name, location, date, number)
            console.log
        }
    })

    function createCard(name, location, date, number) {
        //ADD BUTTON
        var button = $("<button>");
        button.addClass("btn-floating waves-effect waves-light red right");
        button.attr('onClick','deletethis(this.id)')
        button.attr('id', number)
        button.css({
            "margin-right": "10px",
            "margin-top": "10px",
        });
        var symbol = $("<i>");
        symbol.addClass("material-icons").text("close");
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
        cardTitle.attr('id', 'artist-' + number)
        cardTitle.text(name);

        var cardInformation1 = $("<p>");
        cardInformation1.text(location);
        cardInformation1.attr('id', 'location-' + number)

        var cardInformation2 = $("<p>");
        cardInformation2.text(date);
        cardInformation2.attr('id', 'date-' + number)

        cardBody.append(cardTitle);
        cardBody.append(cardInformation1);
        cardBody.append(cardInformation2);
        newCard.append(cardImage);
        newCard.append(cardBody);
        newCol.append(newCard);
        $("#events-area").append(newCol);
    }
});


// // Possible code for delete get request/function

// // Make a get request to get a specific event by id
// $.get("/api/events/:id", function (res) {
//     // For each event that our server sends us
//     // console.log(events)
//     console.log(res)
//         const name = res.name
//         const location = res.location
//         const date = res.date
//         // const number = i
// })

// function deletethis (id) {
//     $.ajax({
//       method: "DELETE",
//       url: "/api/events/" + id
//     })
// };

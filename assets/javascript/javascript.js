var api = "http://api.giphy.com/v1/gifs/search";
var api_key = "&api_key=z2lOmdbTNNGpdkCWgU38kgEtCOuC0eZl&limit=10";
var query = "?q=";


function getData() {
    $('.inner').empty()
    let test = $("#searchtext").val();
    var xhr = $.get(api + query + test + api_key);
    
    xhr.done(function (response) {
        console.log("success got data", response);
        
        var jiff = response.data
        
        for (i in jiff) {
            $(".inner").append('<img src=' + jiff[i].images.original.url + '>')
        }
    });
}

$(document).on('click', '#searchgifs', getData)
















var api = "http://api.giphy.com/v1/gifs/search";
var api_key = "&api_key=z2lOmdbTNNGpdkCWgU38kgEtCOuC0eZl&limit=10";
var query = "?q=";
var keyword = "";
document.getElementById("searchtext").value = keyword;

function getData() {
    
    var xhr = $.get(api + query + keyword + api_key);
    
    xhr.done(function (response) {
        console.log("success got data", response);
        
        var jiff = response.data
        
        for (i in jiff) {
            $(".inner").append('<img src=' + jiff[i].images.original.url + '>')
        }
    });
    
}

function clickHandler() {
    $("#searchgifs").click(function() {
        console.log($("#searchtext").val());
        $("#searchtext").append(keyword);
        getData();
    })
}
clickHandler();



















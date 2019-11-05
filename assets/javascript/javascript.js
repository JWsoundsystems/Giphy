var api = "http://api.giphy.com/v1/gifs/search";
var api_key = "&api_key=z2lOmdbTNNGpdkCWgU38kgEtCOuC0eZl&limit=10";
var query = "?q=";
let button = $("#groups").val();



function getData() {
    $('.inner').empty()
    let test = $("#searchtext").val();
    var xhr = $.get(api + query + test + api_key);
    console.log(test);

    
    xhr.done(function (response) {
        console.log("success got data", response);
        
        var jiff = response.data
        
        
        for (i in jiff) {
            $(".inner").append('<img src=' + jiff[i].images.original.url + '>')
           
        }
        $("#groups").append(`<button type="button">${test}</button>`);
    });
}


$(".inner").on("click", function() {
  
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var jiff = $(this).attr("data-state");
  console.log($(this).attr("data-state"));
  
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (jiff === "still") {
    $(this).attr("src=", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still"); 
  }

});

$("#groups").on("click", function() {
  $('.inner').empty()
    let punch = $("#groups").text();
    console.log(punch)


    var xhr = $.get(api + query + punch + api_key);

    
    xhr.done(function (response) {
        console.log("success got data", response);
        
        var jiff = response.data
        
        
        for (i in jiff) {
            $(".inner").append('<img src=' + jiff[i].images.original.url + '>')
           
        }

    });
});



$(document).on('click', '#searchgifs', getData)

















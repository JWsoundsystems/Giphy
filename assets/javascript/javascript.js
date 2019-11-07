var api = "http://api.giphy.com/v1/gifs/search";
var api_key = "&api_key=z2lOmdbTNNGpdkCWgU38kgEtCOuC0eZl&limit=10";
var query = "?q=";

let array = ['cat', 'dog', 'bear']

function createButton() {
  let text = $("#searchtext").val();
  if (text.length > 1) array.push(text)
  let html = ``;
  for (let i = 0; i < array.length; i++) {
    html += `<button class="button">${array[i]}</button>`
  }
  $("#groups").html(html);
}

createButton()

function buttonClick() {
  $(".inner").empty();
  // console.log("click", $(this).text())
  let text = $(this).text();
  var xhr = $.get(api + query + text + api_key).done(function (response) {
    // console.log("success got data", response);

    var jiff = response.data


    for (i in jiff) {
      $(".inner").append(`<img data-animated="${jiff[i].images.original.url}" data-still="${jiff[i].images.original_still.url}" class="animated" src="${jiff[i].images.original.url}">`)

    }
  })
};

function imageChange() {
  console.log($(this).attr('data-still'))
  let oldClassName = $(this).attr("class")
  let newClassName = ''
  if (oldClassName === "animated") {
    newClassName = "still"
  } else {
    newClassName = "animated"
  }
  $(this).attr("class", newClassName)
  $(this).attr("src", $(this).attr(`data-${newClassName}`))
}

$(document).on('click', ".still, .animated", imageChange)
$(document).on('click', ".button", buttonClick)
$(document).on('click', '#searchgifs', createButton)
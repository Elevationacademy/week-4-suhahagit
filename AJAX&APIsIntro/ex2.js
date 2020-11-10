
//AJAX & Intro to APIs

const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            console.log(data.items[0])
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

fetch("isbn", 9789814561778) //data about From Third World to First
fetch("title", "The Wise Man's Fears") //data about The Wise Man's Fear
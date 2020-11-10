
//AJAX & Intro to APIs

const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            for(let book of data.items){
                const title = book.volumeInfo.title
                const author = book.volumeInfo.authors
                const isbn = queryValue
                console.log(`title: ${title}, author: ${author}, isbn: ${isbn}`)
            }
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

fetch("isbn", 9789814561778)
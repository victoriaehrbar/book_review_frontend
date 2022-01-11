const endPoint = "http://localhost:3000/api/v1/books"


document.addEventListener('DOMContentLoaded', () => {
    getBooks()

    const createBookForm = document.queySelector("#create-book-form")

    createBookForm.addEventListener("submit", (e) => createFormHandler(e))
})
    function getBooks() {
    fetch(endPoint);
    .then(response => response.json())
    .then(books => {
        books.data.forEach(book => {
            const syllabusMarkup = `
              <div data-id=${book.id}>
                <h3>${syllabus.attributes.title} </h3>
                <h3>${syllabus.attributes.author}</h3>
                <p>${book.attributes.category.name}</p>
                <button data-id=${book.id}>edit</button>
              </div>
              <br><br>`;
    
              document.querySelector('#book-container').innerHTML += bookMarkup
          })
        })
}

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const authorInput = document.querySelector('#input-author').value
    const descriptionInput = document.querySelector('#input-description').value
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(titleInput, authorInput, descriptionInput, categoryId)
  }

  function postFetch(title, author, description, category_id) {
    const bodyData = {title, author, description, category_id}
  
    fetch(endPoint, {
      // POST request
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(book => {
      console.log(book);
      const bookData = book.data
      // render JSON response
      let newBook = new Book(bookData, bookData.attributes)
      document.querySelector('#book-container').innerHTML += newBook.renderBookCard()
    })
  
  }
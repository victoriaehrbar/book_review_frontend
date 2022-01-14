const endPoint = "http://localhost:3000/api/v1/books"


document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is loaded");
    getBooks()
    attachDeleteButtonListener()
    const createBookForm = document.querySelector("#create-book-form")
    createBookForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getBooks() {
    fetch(endPoint)
    .then(response => response.json())
    .then(books => {
        books.data.forEach(book => {
            let newBook = new Book(book, book.attributes)

              document.querySelector('#book-container').innerHTML += newBook.renderBookCard()
          })

          attachDeleteButtonListener()
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
      // render the JSON response
      let newBook = new Book(bookData, bookData.attributes)
      document.querySelector('#book-container').innerHTML += newBook.renderBookCard()
      attachDeleteButtonListener()
    })
  }

    function deleteBook(e) {
      const { id } = e.target.dataset;
      fetch(`http://localhost:3000/api/v1/books/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          debugger
          e.target.parentElement.parentElement.remove();
        });
    }

    function attachDeleteButtonListener() {
      // const deleteBookButton = document.getElementById(`button-${this.id}`)

      document.querySelectorAll('.delete-book-button').forEach((deleteBookButton) => {
          deleteBookButton.addEventListener('click', (e) => {
            // debugger
              e.preventDefault()
              deleteBook(e)

            })
        })
}
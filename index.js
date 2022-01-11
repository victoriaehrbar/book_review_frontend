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
            // double check how your data is nested in the console so you can successfully access the attributes of each individual object
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
    postFetch(titleInput, descriptionInput, imageInput, categoryId)
  }
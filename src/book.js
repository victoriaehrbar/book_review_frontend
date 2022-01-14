class Book {

    constructor(book, bookAttributes) {
      this.id = book.id
      this.title = bookAttributes.title
      this.author = bookAttributes.author
      this.description = bookAttributes.description
      this.category = bookAttributes.category
      Book.all.push(this)
      console.log(this);
    }
  

    renderBookCard() {
        let element = document.getElementById(`book-${this.id}`)
        if(typeof(element) != 'undefined' && element != null){
            return ""
        } else { 
            return `
                <div id="book-${this.id}" data-id=${this.id}>
                <ul class="list-group">
                <li class="list-group-item"><strong>Title:</strong> ${this.title}</li>
                    <li class="list-group-item"><strong>Author:</strong> ${this.author}</li>
                    <li class="list-group-item"><strong>Description:</strong> ${this.description}</li>
                    <li class="list-group-item"><strong>Category:</strong> ${this.category.name}</li>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    <button data-id=${this.id} type="button" class="delete-book-button btn btn-sm btn-outline-secondary">Delete</button>
                </ul>
                </div>`
            }

    }

  }
  
  Book.all = [];
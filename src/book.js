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
  
    // renderBookCard() {
    //   return `
    //     <div class="col-md-4">
    //       <div class="card mb-4 shadow-sm">
            
    //         <div class="card-body">
    //           <h5 class="card-title">${this.title}</h5>
    //           <h5 class="card-author">${this.author}</h5>
    //           <p class="card-text">${this.description}</p>
    //           <small class="text-muted">Category: ${this.category.name}</small>
    //           <div class="d-flex justify-content-between align-items-center">
    //             <div class="btn-group">
    //               <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
    //               <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   `
    
    renderBookCard() {
        let element = document.getElementById(`book-${this.id}`)
        if(typeof(element) != 'undefined' && element != null){
            return ""
        } else { 
            return `
                <div id="book-${this.id}" data-id=${this.id}>
                <ul class="list-group">
                    <li class="list-group-item active"><strong>${this.title}</strong></li>
                    <li class="list-group-item"><strong>Author:</strong> ${this.author}</li>
                    <li class="list-group-item"><strong>Description:</strong> ${this.description}</li>
                    <li class="list-group-item"><strong>Category:</strong> ${this.category}</li>
                </ul>
                </div>`
            }

    }
  
  }
  
  Book.all = [];
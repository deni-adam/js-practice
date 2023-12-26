class Book{
    constructor(title, author, isCheckedOut) {
      this.title = title;
      this.author = author;
      this.isCheckedOut = isCheckedOut;
    }
  
    toggleCheckOutStatus(isCheckedOut) {
      if (isCheckedOut === true) {
        isCheckedOut = false;
      }
    }
  
    nameOfBook() {
      return this.title;
    }
  
    authorOfBook() {
      return this.author;
    }
  
    checkOutStatus() {
      return this.isCheckedOut;
    }
  }
  
  const library = [
    new Book("Harry Potter", "J.K. Rowling", false),
    new Book("The Hobbit", "J.R.R. Tolkien", true),
    new Book("1984", "George Orwell", false),
    new Book("R.U.R.", "Karel Čapek", true),
    // další knihy
  ];
  
  function listAvailableBooks(library){
    const booksToBorrow = [];
    for (var i = 0; i < library.length; i++) {
      if (library[i].isCheckedOut === false) {
        booksToBorrow.push(library[i].title, library[i].author);
      }
    }
    return booksToBorrow;
  }
  
  const availableBooks = listAvailableBooks(library);
  console.log(`Knihy k vypůjčení: ${availableBooks}`);
  
  
  function listCheckedOutBooks(library){
    for (var i = 0; i < library.length; i++) {
      if (library[i].isCheckedOut === true) {
        console.log(`Kniha vypůjčena: ${library[i].title}, ${library[i].author}`);
      }
    }
  }
  
  listCheckedOutBooks(library);
  
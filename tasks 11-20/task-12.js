class Book {
  constructor(title, author, yearOfPublishing) {
    this.title = title;
    this.author = author;
    this.yearOfPublishing = yearOfPublishing;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  getAuthor() {
    return this.author;
  }

  setAuthor(newAuthor) {
    this.author = newAuthor;
  }

  getYearOfPublising() {
    return this.yearOfPublishing + "г.";
  }

  setYearOfPublising(newYearOfPublising) {
    this.yearOfPublishing = newYearOfPublising;
  }
}

const book = new Book("Белый Бим Черное ухо", "Гавриил Троепольский", 1971);

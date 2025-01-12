const books = [
  {
    author: "Karen Armstrong",
    title: "Islam: A Short History",
    yearPublished: 2000,
    isbn: "9780812966183",
    available: "both",
    purchased: true, //new field
    imgPath:
      "https:images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403181902i/27306.jpg",
    synopsis:
      "A concise history of Islam, exploring its foundations, evolution, and cultural impact over centuries.",
    genre: ["Islam"],
  },
  {
    author: "Reza Aslan",
    title: "No God but God: The Origins, Evolution, and Future of Islam",
    yearPublished: 2005,
    isbn: "9780812982442",
    available: "physical",
    purchased: false,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528328757i/40411388.jpg",
    synopsis:
      "An engaging exploration of the history and theology of Islam, challenging misconceptions.",
    genre: ["Islam"],
  },
  {
    author: "Francis Fukuyama",
    title: "The Origins of Political Order",
    yearPublished: 2011,
    isbn: "9780374227340",
    available: "e-books",
    purchased: true,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317064084i/9704856.jpg",
    synopsis:
      "An exploration of political systems from prehistory to the French Revolution, analyzing governance evolution.",
    genre: ["Politic", "Governance"],
  },
  {
    author: "Hannah Arendt",
    title: "The Origins of Totalitarianism",
    yearPublished: 1951,
    isbn: "9780156701532",
    available: "both",
    purchased: false,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565095964i/396931.jpg",
    synopsis:
      "A detailed analysis of totalitarian regimes, focusing on Nazism and Stalinism, and their political mechanisms.",
    genre: ["Politic", "Governance"],
  },
  {
    author: "Yuval Noah Harari",
    title: "Sapiens: A Brief History of Humankind",
    yearPublished: 2011,
    isbn: "9780062316097",
    available: "both",
    purchased: true,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703329310i/23692271.jpg",
    synopsis:
      "A sweeping narrative of human history, from ancient times to modernity, examining culture and civilization.",
    genre: ["History", "Civilization"],
  },
  {
    author: "Will Durant",
    title: "The Story of Civilization",
    yearPublished: 1935,
    isbn: "9780671418007",
    available: "physical",
    purchased: true,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1652282857i/174722.jpg",
    synopsis:
      "A monumental work chronicling the development of civilization across ages and regions.",
    genre: ["History", "Civilization"],
  },
  {
    author: "Bertrand Russell",
    title: "The Problems of Philosophy",
    yearPublished: 1912,
    isbn: "9780192854239",
    available: "physical",
    purchased: false,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405495766i/31799.jpg",
    synopsis:
      "A classic introduction to philosophy, addressing questions of reality, knowledge, and existence.",
    genre: ["Philosophy", "Thought"],
  },
  {
    author: "Rene Descartes",
    title: "Meditations on First Philosophy",
    yearPublished: 1641,
    isbn: "9780872201927",
    available: "e-books",
    purchased: true,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405624402i/31862.jpg",
    synopsis:
      "A foundational philosophical text, examining the nature of reality and the existence of God.",
    genre: ["Philosophy", "Thought"],
  },
  {
    author: "Paulo Freire",
    title: "Pedagogy of the Oppressed",
    yearPublished: 1968,
    isbn: "9780826412768",
    available: "both",
    purchased: false,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388180018i/72657.jpg",
    synopsis:
      "A foundational text on social education, emphasizing critical pedagogy and empowerment.",
    genre: ["Social", "Education", "Development"],
  },
  {
    author: "Malala Yousafzai",
    title: "I Am Malala",
    yearPublished: 2013,
    isbn: "9780316322423",
    available: "physical",
    purchased: true,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1375414895i/17851885.jpg",
    synopsis:
      "The memoir of Malala Yousafzai, a young activist advocating for girls' education.",
    genre: ["Social", "Education", "Development"],
  },
  {
    author: "Nelson Mandela",
    title: "Long Walk to Freedom",
    yearPublished: 1994,
    isbn: "9780316548182",
    available: "e-books",
    purchased: false,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327997342i/318431.jpg",
    synopsis:
      "The autobiography of Nelson Mandela, chronicling his fight against apartheid and his path to leadership.",
    genre: ["Memoir", "Biography"],
  },
  {
    author: "Michelle Obama",
    title: "Becoming",
    yearPublished: 2018,
    isbn: "9781524763138",
    available: "both",
    purchased: true,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
    synopsis:
      "The deeply personal memoir of Michelle Obama, recounting her journey from childhood to the White House.",
    genre: ["Memoir", "Biography"],
  },
  {
    author: "Thomas Piketty",
    title: "Capital in the Twenty-First Century",
    yearPublished: 2013,
    isbn: "9780674430006",
    available: "both",
    purchased: false,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1390111547i/18736925.jpg",
    synopsis:
      "A deep dive into economic inequality, its historical roots, and potential solutions for the future.",
    genre: ["Economy", "Finance"],
  },
  {
    author: "Adam Smith",
    title: "The Wealth of Nations",
    yearPublished: 1776,
    isbn: "9780199535926",
    available: "physical",
    purchased: true,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1567191193i/25698.jpg",
    synopsis:
      "A foundational text in economics, exploring the principles of free markets and division of labor.",
    genre: ["Economy", "Finance"],
  },
  {
    author: "Stephen Hawking",
    title: "A Brief History of Time",
    yearPublished: 1988,
    isbn: "9780553380163",
    available: "physical",
    purchased: false,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg",
    synopsis:
      "An accessible explanation of the universe, from black holes to the Big Bang, by a legendary physicist.",
    genre: ["Science"],
  },
  {
    author: "Carl Sagan",
    title: "Cosmos",
    yearPublished: 1980,
    isbn: "9780345331359",
    available: "both",
    purchased: true,
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388620656i/55030.jpg",
    synopsis:
      "A landmark book on the universe, blending science and philosophy to explore humanity's place in the cosmos.",
    genre: ["Science", "Technology"],
  },
];

$(document).ready(function () {
  // Load Navbar (if needed)
  $("#navbarDiv").load("navbar.html", function () {
    bindEvents();
  });

  //------------BROWSE------------//
  const $bookContainer = $("#bookContainer");

  // Function to display books
  function displayBooks(booksArray) {
    $bookContainer.empty();

    if (booksArray.length === 0) {
      $bookContainer.html("<p>No results found.</p>");
      return;
    }

    for (const book of booksArray) {
      const $bookBox = $("<div>").addClass("book-box");
      const availabilityText =
        book.available === "both" ? "e-book & physical" : book.available;
      $bookBox.html(`
        <strong>${book.title}</strong>
        <p>Author: ${book.author}</p>
        <p>Year: ${book.yearPublished}</p>
        <p>Genre: ${book.genre.join(", ")}</p>
        <p>Available in: ${availabilityText}</p>
        <button class="add-to-cart-btn" data-book-index="${books.indexOf(book)}">Add to Cart</button>
      `);
      $bookContainer.append($bookBox);
    }
  }

  // Bind Events
  function bindEvents() {
    // Set active class and display books on category click
    $("#catUl").on("click", ".catLi", function () {
      $(".catLi").removeClass("active");
      $(this).addClass("active");
      filterAndDisplayBooks();
    });

    // Trigger search on button click
    $(document).on("click", "#searchIcon", function () {
      filterAndDisplayBooks();
    });

    // Trigger search on Enter keypress
    $("#searchBox").on("keypress", function (e) {
      if (e.which === 13) {
        filterAndDisplayBooks();
      }
    });

    // Add to cart button click event
    $(document).on("click", ".add-to-cart-btn", function () {
      const bookIndex = $(this).data("book-index");
      const book = books[bookIndex];

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItem = cart.find(item => item.isbn === book.isbn);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          ...book,
          quantity: 1,
          type: book.available === "both" ? "Physical" : book.available,
          price: 30, // Assuming a fixed price for all books
          availability: "In Store"
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert("Book added to cart!");
    });
  }

  // Filter and display books
  function filterAndDisplayBooks() {
    const searchText = $("#searchBox").val().trim().toLowerCase();
    const selectedCategory = $(".catLi.active").attr("value")?.split("|") || [];

    const filteredBooks = books.filter((book) => {
      // Check if the book matches the selected genre
      const matchesGenre =
        selectedCategory.length === 0 ||
        book.genre.some((genre) => selectedCategory.includes(genre));

      // Check if the book matches the search text
      const matchesSearch =
        searchText === "" ||
        book.title.toLowerCase().includes(searchText) ||
        book.author.toLowerCase().includes(searchText) ||
        book.genre.some((genre) => genre.toLowerCase().includes(searchText)) ||
        book.isbn.toLowerCase().includes(searchText);

      return matchesGenre && matchesSearch;
    });

    // Display the filtered books
    displayBooks(filteredBooks);
  }

  // Display all books on initial load
  displayBooks(books);
  //------------------------------//

  //------------HOMEPAGE------------//
  const $carousel = $(".carousel");
  const $slides = $(".carousel-slide");
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = $slides.length - 1;
    } else if (index >= $slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const offset = -currentIndex * 100;
    $carousel.css("transform", `translateX(${offset}%)`);
  }

  $("#nextBtn").click(function () {
    showSlide(currentIndex + 1);
  });

  $("#prevBtn").click(function () {
    showSlide(currentIndex - 1);
  });

  setInterval(function () {
    showSlide(currentIndex + 1);
  }, 5000);
  //--------------------------------//

  //------------LIBRARY------------//
  const $libraryContainer = $(".contentLibrary");
  const $bookCoverDisplay = $(".book-cover-display").text("No Book Selected");
  const $synopsisDisplay = $(".synopsis-display").text(
    "Select a book to see details"
  );
  const $bookList = $(".book-list");

  // Render book list with filter
  function renderBookList() {
    const $filterDropdown = $("#genreFilter");

    const genres = new Set();

    books.forEach((book, index) => {
      // Filter for purchased books only
      if (book.purchased) {
        book.genre.forEach((e) => genres.add(e));
        const $bookItem = $("<li>").text(book.title).attr("data-index", index);
        $bookItem.on("click", function () {
          displayBookDetails($(this).data("index"));
        });
        $bookList.append($bookItem);
      }
    });

    genres.forEach((genre) => {
      $filterDropdown.append(`<option value="${genre}">${genre}</option>`);
    });

    $filterDropdown.on("change", function () {
      const selectedGenre = $(this).val();
      filterBooks(selectedGenre);
    });

    $libraryContainer.append($bookCoverDisplay);
    $libraryContainer.append($synopsisDisplay);
    $libraryContainer.append($filterDropdown);
    $libraryContainer.append($bookList);
  }

  // Display selected book details
  function displayBookDetails(index) {
    const book = books[index];

    const bookCoverImage = `<img src="${book.imgPath}" alt="${book.title}">`;
    $bookCoverDisplay.html(bookCoverImage);
    $synopsisDisplay.html(`
    <strong>${book.title}</strong>
    <p>Author: ${book.author}</p>
    <p>${book.synopsis}</p>
    <p>Status: ${book.purchased ? "Purchased" : "Not Purchased"}</p>
    <button class="read-button">Read</button>
  `);
  }

  // Filter books by genre
  function filterBooks(genre) {
    $bookList.empty();
    books.forEach((book, index) => {
      if (book.purchased && (genre === "all" || book.genre.includes(genre))) {
        const $bookItem = $("<li>").text(book.title).attr("data-index", index);
        $bookItem.on("click", function () {
          displayBookDetails($(this).data("index"));
        });
        $bookList.append($bookItem);
      }
    });
  }

  renderBookList();
});

// $(document).ready(function () {
//   const $carousel = $(".carousel");
//   const $slides = $(".carousel-slide");
//   let currentIndex = 0;

//   function showSlide(index) {
//     if (index < 0) {
//       currentIndex = $slides.length - 1;
//     } else if (index >= $slides.length) {
//       currentIndex = 0;
//     } else {
//       currentIndex = index;
//     }

//     const offset = -currentIndex * 100;
//     $carousel.css("transform", `translateX(${offset}%)`);
//   }

//   $("#nextBtn").click(function () {
//     showSlide(currentIndex + 1);
//   });

//   $("#prevBtn").click(function () {
//     showSlide(currentIndex - 1);
//   });

//   setInterval(function () {
//     showSlide(currentIndex + 1);
//   }, 5000);
// }); COMMENTED FOR BACKUP

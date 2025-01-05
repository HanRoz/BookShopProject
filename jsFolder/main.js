const books = [
    {
        author: "Karen Armstrong",
        title: "Islam: A Short History",
        yearPublished: 2000,
        isbn: "9780812966183",
        available: "both",
        synopsis: "A concise history of Islam, exploring its foundations, evolution, and cultural impact over centuries.",
        genre: ["Islam"]
    },
    {
        author: "Reza Aslan",
        title: "No God but God: The Origins, Evolution, and Future of Islam",
        yearPublished: 2005,
        isbn: "9780812982442",
        available: "physical",
        synopsis: "An engaging exploration of the history and theology of Islam, challenging misconceptions.",
        genre: ["Islam"]
    },
    {
        author: "Francis Fukuyama",
        title: "The Origins of Political Order",
        yearPublished: 2011,
        isbn: "9780374227340",
        available: "e-books",
        synopsis: "An exploration of political systems from prehistory to the French Revolution, analyzing governance evolution.",
        genre: ["Politic", "Governance"]
    },
    {
        author: "Hannah Arendt",
        title: "The Origins of Totalitarianism",
        yearPublished: 1951,
        isbn: "9780156701532",
        available: "both",
        synopsis: "A detailed analysis of totalitarian regimes, focusing on Nazism and Stalinism, and their political mechanisms.",
        genre: ["Politic", "Governance"]
    },
    {
        author: "Yuval Noah Harari",
        title: "Sapiens: A Brief History of Humankind",
        yearPublished: 2011,
        isbn: "9780062316097",
        available: "both",
        synopsis: "A sweeping narrative of human history, from ancient times to modernity, examining culture and civilization.",
        genre: ["History", "Civilization"]
    },
    {
        author: "Will Durant",
        title: "The Story of Civilization",
        yearPublished: 1935,
        isbn: "9780671418007",
        available: "physical",
        synopsis: "A monumental work chronicling the development of civilization across ages and regions.",
        genre: ["History", "Civilization"]
    },
    {
        author: "Bertrand Russell",
        title: "The Problems of Philosophy",
        yearPublished: 1912,
        isbn: "9780192854239",
        available: "physical",
        synopsis: "A classic introduction to philosophy, addressing questions of reality, knowledge, and existence.",
        genre: ["Philosophy", "Thought"]
    },
    {
        author: "Rene Descartes",
        title: "Meditations on First Philosophy",
        yearPublished: 1641,
        isbn: "9780872201927",
        available: "e-books",
        synopsis: "A foundational philosophical text, examining the nature of reality and the existence of God.",
        genre: ["Philosophy", "Thought"]
    },
    {
        author: "Paulo Freire",
        title: "Pedagogy of the Oppressed",
        yearPublished: 1968,
        isbn: "9780826412768",
        available: "both",
        synopsis: "A foundational text on social education, emphasizing critical pedagogy and empowerment.",
        genre: ["Social", "Education", "Development"]
    },
    {
        author: "Malala Yousafzai",
        title: "I Am Malala",
        yearPublished: 2013,
        isbn: "9780316322423",
        available: "physical",
        synopsis: "The memoir of Malala Yousafzai, a young activist advocating for girls' education.",
        genre: ["Social", "Education", "Development"]
    },
    {
        author: "Nelson Mandela",
        title: "Long Walk to Freedom",
        yearPublished: 1994,
        isbn: "9780316548182",
        available: "e-books",
        synopsis: "The autobiography of Nelson Mandela, chronicling his fight against apartheid and his path to leadership.",
        genre: ["Memoir", "Biography"]
    },
    {
        author: "Michelle Obama",
        title: "Becoming",
        yearPublished: 2018,
        isbn: "9781524763138",
        available: "both",
        synopsis: "The deeply personal memoir of Michelle Obama, recounting her journey from childhood to the White House.",
        genre: ["Memoir", "Biography"]
    },
    {
        author: "Thomas Piketty",
        title: "Capital in the Twenty-First Century",
        yearPublished: 2013,
        isbn: "9780674430006",
        available: "both",
        synopsis: "A deep dive into economic inequality, its historical roots, and potential solutions for the future.",
        genre: ["Economy", "Finance"]
    },
    {
        author: "Adam Smith",
        title: "The Wealth of Nations",
        yearPublished: 1776,
        isbn: "9780199535926",
        available: "physical",
        synopsis: "A foundational text in economics, exploring the principles of free markets and division of labor.",
        genre: ["Economy", "Finance"]
    },
    {
        author: "Stephen Hawking",
        title: "A Brief History of Time",
        yearPublished: 1988,
        isbn: "9780553380163",
        available: "physical",
        synopsis: "An accessible explanation of the universe, from black holes to the Big Bang, by a legendary physicist.",
        genre: ["Science"]
    },
    {
        author: "Carl Sagan",
        title: "Cosmos",
        yearPublished: 1980,
        isbn: "9780345331359",
        available: "both",
        synopsis: "A landmark book on the universe, blending science and philosophy to explore humanity's place in the cosmos.",
        genre: ["Science", "Technology"]
    }
];


$(document).ready(function () {
    $("#navbarDiv").load("navbar.html", function () {
        $(document).on("click", "#searchIcon", searchBooks);

        $("#searchBox").on("keypress", function (e) {
            if (e.which === 13) {
                searchBooks();
            }
        });
    });

    const $bookContainer = $("#bookContainer");

    function displayBooks(booksArray) {
        $bookContainer.empty();

        if (booksArray.length === 0) {
            $bookContainer.html("<p>No books available in this category.</p>");
            return;
        }

        for (const book of booksArray) {
            const $bookBox = $("<div>").addClass("book-box");
            const availabilityText =
                book.available === "both" ? "e-book & physical" : book.available;
            $bookBox.html(`
                <strong>${book.title}</strong>
                <p>Author:${book.author}</p>
                <p>Year:${book.yearPublished}</p>
                <p>Genre:${book.genre.join(", ")}</p>
                <p>Available in:${availabilityText}</p>
            `);
            $bookContainer.append($bookBox);
        }
    }
    displayBooks(books);

    $("#catUl").on("click", ".catLi", function () {
        const selectedCategory = $(this).attr("value").split("|");

        const filteredBooks = books.filter((book) =>
            book.genre.some((genre) => selectedCategory.includes(genre))
        );

        displayBooks(filteredBooks);
    });

    function searchBooks() {
        const searchText = $("#searchBox").val().trim().toLowerCase();
        if (searchText === "") {
            alert("Please enter a search term!");
            return;
        }

        const filteredBooks = books.filter(
            (book) =>
                book.title.toLowerCase().includes(searchText) ||
                book.author.toLowerCase().includes(searchText) ||
                book.genre.some((genre) => genre.toLowerCase().includes(searchText)) ||
                book.isbn.toLowerCase().includes(searchText)
        );

        if (filteredBooks.length === 0) {
            $("#bookContainer").html("<p>No results found.</p>");
        } else {
            displayBooks(filteredBooks);
        }
    }
})

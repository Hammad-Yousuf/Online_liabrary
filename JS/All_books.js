let authors = JSON.parse(authors_array).authors;
let authors_length = authors.length;
let all_books_container = JSON.parse(all_books_array);
let all_books = all_books_container.books;
let all_books_length = all_books.length;
// All books

for (let i = 0; i <= all_books_length - 1; i++) {
  // Book Container
  let book = document.createElement("div");
  book.setAttribute("class", "book");
  book.setAttribute("id", "book");

  // Book Image
  let book_img = document.createElement("img");
  book_img.setAttribute("src", all_books[i].front_src);
  book.appendChild(book_img);
  all_container.appendChild(book);

  // Hover Layer
  let hover = document.createElement("div");
  hover.setAttribute("class", "hover_layer");
  book.appendChild(hover);

  // If Volumes Availabe

  if (all_books[i].volume_available == true) {
    let volume_link_container = document.createElement("div");
    let volume_link = document.createElement("a");
    volume_link.setAttribute("class", "volume_link");
    volume_link.setAttribute("href", all_books[i].volume_link);
    volume_link_container.appendChild(volume_link);
    let volume_link_text = document.createTextNode(
      "Click Here For More Volumes!"
    );
    volume_link.appendChild(volume_link_text);
    hover.appendChild(volume_link_container);
  } else {
    let volume_link_container = document.createElement("div");
    let volume_link_text = document.createTextNode(" ");
    volume_link_container.appendChild(volume_link_text);
    hover.appendChild(volume_link_container);
  }

  // Download_btn

  let download_btn = document.createElement("button");
  download_btn.setAttribute("class", "download_btn");
  let download_icon = document.createElement("i");
  download_icon.setAttribute("class", "fad fa-download");
  let download_link = document.createElement("a");
  // download_link.src = "hello";
  download_link.setAttribute("href", all_books[i].src);
  // download_link.setAttribute('download', link.all[i].name)
  download_link.appendChild(download_icon);
  download_btn.appendChild(download_link);
  hover.appendChild(download_btn);
}

// Search

let user_choice = document.getElementById("categories").value;
let user_author = document.getElementById("author").value;
let search_btn = document.getElementById("search");
let search_bar = document.getElementById("search_bar");
let searched = document.getElementById("search_bar").value;

document.getElementById('categories').addEventListener('change', ()=>{
  // user Choices
  user_choice = document.getElementById("categories").value;
  user_author = document.getElementById("author").value;
  searched = document.getElementById("search_bar").value;

  // Filter Field
  let filter_search = all_books.filter(
    (search) => search.name.match(searched)
  )

  // Filter Category
  let category_filter = filter_search.filter(
    (book) => book.category == user_choice
  );

  // Filter Author
  let author_filter = filter_search.filter(
    (author) => author.author == user_author
  );

  // Complete Filter
  let complete_filter = author_filter.filter(
    (complete) => complete.category == user_choice
  )

  let all_container = document.getElementById("all_container");
  all_container.innerHTML = "";
  
  // If Category is not sellected,
  // Author is not sellected &
  // search field is also empty

  if (user_choice == "all" && user_author == "all" && (searched == "" || searched == " ") ) {
  
    for (let i = 0; i <= all_books_length - 1; i++) {
  
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", all_books[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (all_books[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", all_books[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", all_books[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }

  } 

  // ====XX=====XX=====XX====


  else if(user_choice !== "all" && user_author !== "all" && (searched !== "" || searched !== " " )) {

    for (let i = 0; i <= complete_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", complete_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (complete_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", complete_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", complete_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice !== "all" && user_author == "all" && (searched !== "" || searched !== " " )) {

    for (let i = 0; i <= category_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", category_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (category_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", category_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", category_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author !== "all" && (searched !== "" || searched !== " " )){
    for (let i = 0; i <= author_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", author_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (author_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", author_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", filter_search[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author == "all" && (searched !== "" || searched !== " " )){
    for (let i = 0; i <= filter_search.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", filter_search[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (filter_search[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", filter_search[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", filter_search[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author == "all" && (searched == "" || searched == " " )){
    for (let i = 0; i <= complete_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", complete_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (complete_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", complete_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", complete_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice !== "all" && user_author == "all" && (searched == "" || searched == " " )){
    for (let i = 0; i <= category_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", category_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (category_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", category_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", category_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author !== "all" && (searched == "" || searched == " " )){
    for (let i = 0; i <= author_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", author_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (author_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", author_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", filter_search[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else{
    alert("Error While Filtering");
  }
});

document.getElementById('author').addEventListener('change', ()=>{
  // user Choices
  user_choice = document.getElementById("categories").value;
  user_author = document.getElementById("author").value;
  searched = document.getElementById("search_bar").value;

  // Filter Field
  let filter_search = all_books.filter(
    (search) => search.name.match(searched)
  )

  // Filter Category
  let category_filter = filter_search.filter(
    (book) => book.category == user_choice
  );

  // Filter Author
  let author_filter = filter_search.filter(
    (author) => author.author == user_author
  );

  // Complete Filter
  let complete_filter = author_filter.filter(
    (complete) => complete.category == user_choice
  )

  let all_container = document.getElementById("all_container");
  all_container.innerHTML = "";
  
  // If Category is not sellected,
  // Author is not sellected &
  // search field is also empty

  if (user_choice == "all" && user_author == "all" && (searched == "" || searched == " ") ) {
  
    for (let i = 0; i <= all_books_length - 1; i++) {
  
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", all_books[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (all_books[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", all_books[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", all_books[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }

  } 

  // ====XX=====XX=====XX====


  else if(user_choice !== "all" && user_author !== "all" && (searched !== "" || searched !== " " )) {

    for (let i = 0; i <= complete_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", complete_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (complete_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", complete_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", complete_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice !== "all" && user_author == "all" && (searched !== "" || searched !== " " )) {

    for (let i = 0; i <= category_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", category_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (category_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", category_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", category_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author !== "all" && (searched !== "" || searched !== " " )){
    for (let i = 0; i <= author_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", author_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (author_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", author_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", filter_search[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author == "all" && (searched !== "" || searched !== " " )){
    for (let i = 0; i <= filter_search.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", filter_search[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (filter_search[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", filter_search[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", filter_search[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author == "all" && (searched == "" || searched == " " )){
    for (let i = 0; i <= complete_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", complete_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (complete_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", complete_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", complete_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice !== "all" && user_author == "all" && (searched == "" || searched == " " )){
    for (let i = 0; i <= category_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", category_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (category_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", category_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", category_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author !== "all" && (searched == "" || searched == " " )){
    for (let i = 0; i <= author_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", author_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (author_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", author_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", filter_search[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else{
    alert("Error While Filtering");
  }
});

search_bar.addEventListener("keyup" || "keydown", ()=>{
    // user Choices
  user_choice = document.getElementById("categories").value;
  user_author = document.getElementById("author").value;
  searched = document.getElementById("search_bar").value;

  // Filter Field
  let filter_search = all_books.filter(
    (search) => search.name.match(searched)
  )

  // Filter Category
  let category_filter = filter_search.filter(
    (book) => book.category == user_choice
  );

  // Filter Author
  let author_filter = filter_search.filter(
    (author) => author.author == user_author
  );

  // Complete Filter
  let complete_filter = author_filter.filter(
    (complete) => complete.category == user_choice
  )

  let all_container = document.getElementById("all_container");
  all_container.innerHTML = "";
  
  // If Category is not sellected,
  // Author is not sellected &
  // search field is also empty

  if (user_choice == "all" && user_author == "all" && (searched == "" || searched == " ") ) {
  
    for (let i = 0; i <= all_books_length - 1; i++) {
  
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", all_books[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (all_books[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", all_books[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", all_books[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }

  } 

  // ====XX=====XX=====XX====


  else if(user_choice !== "all" && user_author !== "all" && (searched !== "" || searched !== " " )) {

    for (let i = 0; i <= complete_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", complete_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (complete_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", complete_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", complete_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice !== "all" && user_author == "all" && (searched !== "" || searched !== " " )) {

    for (let i = 0; i <= category_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", category_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (category_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", category_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", category_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author !== "all" && (searched !== "" || searched !== " " )){
    for (let i = 0; i <= author_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", author_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (author_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", author_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", filter_search[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author == "all" && (searched !== "" || searched !== " " )){
    for (let i = 0; i <= filter_search.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", filter_search[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (filter_search[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", filter_search[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", filter_search[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author == "all" && (searched == "" || searched == " " )){
    for (let i = 0; i <= complete_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", complete_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (complete_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", complete_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", complete_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice !== "all" && user_author == "all" && (searched == "" || searched == " " )){
    for (let i = 0; i <= category_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", category_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (category_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", category_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", category_filter[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else if(user_choice == "all" && user_author !== "all" && (searched == "" || searched == " " )){
    for (let i = 0; i <= author_filter.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", author_filter[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (author_filter[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", author_filter[i].volume_link);
        volume_link_container.appendChild(volume_link);
        let volume_link_text = document.createTextNode(
          "Click Here For More Volumes!"
        );
        volume_link.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      } else {
        let volume_link_container = document.createElement("div");
        let volume_link_text = document.createTextNode(" ");
        volume_link_container.appendChild(volume_link_text);
        hover.appendChild(volume_link_container);
      }

      // Download_btn

      let download_btn = document.createElement("button");
      download_btn.setAttribute("class", "download_btn");
      let download_icon = document.createElement("i");
      download_icon.setAttribute("class", "fad fa-download");
      let download_link = document.createElement("a");
      // download_link.src = "hello";
      download_link.setAttribute("href", filter_search[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
  else{
    alert("Error While Filtering");
  }
  }
);

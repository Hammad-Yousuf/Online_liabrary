let all_books_container = JSON.parse(all_books_array);
let all_books = all_books_container.books;
let all_books_length = all_books.length;
let user_choice = document.getElementById("categories").value;
let user_author = document.getElementById("author").value;
let search_btn = document.getElementById("search");
let search_bar = document.getElementById("search_bar");
let searched = search_bar.value;
const show_filter = document.getElementById("filter_btn");
const filter = document.getElementById("filter_container")
const results_container = document.getElementById("results");

// show_filter.addEventListener('click', ()=>{
//   filter.classList.toggle('show_filters')
// })



for (let i = 0; i <= all_books_length - 1; i++) {
  
  results_container.innerHTML = all_books_length
  // Filters
  // searched.value.toLowerCase();
  all_books[i].name.toLowerCase();
  all_books[i].author.toLowerCase();

  // Filter Search

  let filter_search = all_books.filter(
    (book) =>
      book.author.match(searched.toLowerCase()) || book.name.match(searched)
  );

  let category_filter = filter_search.filter(
    (category) => category.category == user_choice
  );
  // user_author = localStorage.getItem("author_selected")
  // Filter Author
  let author_filter = filter_search.filter(
    (author) => author.author == user_author
  );

  // Complete Filter
  let complete_filter = author_filter.filter(
    (complete) => complete.category == user_choice
  );

  all_books[i].name.toUpperCase();

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

document.getElementById("language").addEventListener("change", () => {
     // user Choices
     user_choice = document.getElementById("categories").value.toLowerCase();
     user_author = document.getElementById("author").value.toLowerCase();
     searched = document.getElementById("search_bar").value.toLowerCase();
     selected_language = language_Container.value;
  
       // Filter Field
       let filter_search = all_books.filter((search) =>
       search.name.toLowerCase().match(searched) || search.author.toLowerCase().match(searched) ||search.src.toLowerCase().match(searched)
  
       );
       // Filter Language
   
       let language_filter = filter_search.filter(
         (lang) => lang.language.toLowerCase().match(selected_language)
       )
         console.log(language_filter)
       // Filter Category
   
       let category_filter = filter_search.filter(
         (category) => category.category.toLowerCase().match(user_choice)
       );

      //  Lang_cat Filter

      let lang_cat_filter = language_filter.filter(
        (lang)=> lang.category.toLowerCase().match(user_choice)
      )
   
       // Filter Author
       let author_filter= filter_search.filter(
         (author) => author.author.toLowerCase().match(user_author)
       );
   
       //  Lang_auth Filter

      let lang_auth_filter = language_filter.filter(
        (lang)=> lang.author.toLowerCase().match(user_author)
      )
   

       // Filter Category from author
   
       let cat_auth_filter = author_filter.filter(
         (author) => author.category.toLowerCase().match(user_choice)
       )
       console.log(cat_auth_filter)
   
       // Complete Filter
       let complete_filter = lang_auth_filter.filter(
         (complete) => complete.category.toLowerCase().match(user_choice)
       );

       let all_without_lang_filter = author_filter.filter(
         (author)=> author.category.toLowerCase().match(user_choice)
       )
   
  
    let all_container = document.getElementById("all_container");
    all_container.innerHTML = "";

    // If Category is not sellected,
    // Author is not sellected &
    // search field is also empty

    if (
      user_choice == "all" &&
      user_author == "all" &&
      selected_language == "all" &&
      (searched == "" || searched == " ")

    ) {
      for (let i = 0; i <= all_books_length - 1; i++) {
        // Book Container
        results_container.innerHTML = all_books_length

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
    else if (
      user_choice !== "all" &&
      user_author !== "all" &&
      selected_language !== "all" &&
      (searched !== "" || searched !== " ")
    ) {
      for (let i = 0; i <= complete_filter.length; i++) {
        results_container.innerHTML = complete_filter.length

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
    } else if (
      user_choice !== "all" &&
      user_author == "all" &&
      selected_language == "all" &&
      (searched !== "" || searched !== " ")
    ) {
      for (let i = 0; i <= category_filter.length; i++) {
        results_container.innerHTML = category_filter.length

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
    } else if (
      user_choice == "all" &&
      user_author !== "all" &&
      selected_language == "all" &&
      (searched !== "" || searched !== " ")
    ) {
      for (let i = 0; i <= author_filter.length; i++) {
        results_container.innerHTML = author_filter.length;

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
    } else if (
      user_choice == "all" &&
      user_author == "all" &&
      selected_language == "all" &&
      (searched !== "" || searched !== " ")
    ) {
      for (let i = 0; i <= filter_search.length; i++) {
        results_container.innerHTML = filter_search.length;

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
    } else if (
      user_choice !== "all" &&
      user_author == "all" &&
      selected_language == "all" &&
      (searched == "" || searched == " ")
    ) {
      for (let i = 0; i <= category_filter.length; i++) {
        results_container.innerHTML = category_filter.length;
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
    } else if (
      user_choice == "all" &&
      user_author !== "all" &&
      selected_language == "all" &&
      (searched == "" || searched == " ")
    ) {
      for (let i = 0; i <= author_filter.length; i++) {
        results_container.innerHTML = author_filter.length;
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
    else if(
      user_choice !== "all" &&
      user_author == "all" &&
      selected_language !== "all" &&
      (searched !== "" || searched !== " ")
      ){
        for (let i = 0; i <= lang_cat_filter.length; i++) {
        results_container.innerHTML = lang_cat_filter.length

          // Book Container
          let book = document.createElement("div");
          book.setAttribute("class", "book");
          book.setAttribute("id", "book");
  
          // Book Image
          let book_img = document.createElement("img");
          book_img.setAttribute("src", lang_cat_filter[i].front_src);
          book.appendChild(book_img);
          all_container.appendChild(book);
  
          // Hover Layer
          let hover = document.createElement("div");
          hover.setAttribute("class", "hover_layer");
          book.appendChild(hover);
  
          // If Volumes Availabe
  
          if (lang_cat_filter[i].volume_available == true) {
            let volume_link_container = document.createElement("div");
            let volume_link = document.createElement("a");
            volume_link.setAttribute("class", "volume_link");
            volume_link.setAttribute("href", lang_cat_filter[i].volume_link);
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
          download_link.setAttribute("href", lang_cat_filter[i].src);
          // download_link.setAttribute('download', link.all[i].name)
          download_link.appendChild(download_icon);
          download_btn.appendChild(download_link);
          hover.appendChild(download_btn);
        }
    } 
    else if(
      user_choice == "all" &&
      user_author == "all" &&
      selected_language !== "all" &&
      (searched !== "" || searched !== " ")
    ){
      for (let i = 0; i <= language_filter.length; i++) {
        results_container.innerHTML = language_filter.length;
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", language_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (language_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", language_filter[i].volume_link);
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
    else if(
      user_choice !== "all" &&
      user_author !== "all" &&
      selected_language == "all" &&
      (searched !== "" || searched !== " ")
    ){
      for (let i = 0; i <= all_without_lang_filter.length; i++) {
        results_container.innerHTML = all_without_lang_filter.length
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", all_without_lang_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (all_without_lang_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", all_without_lang_filter[i].volume_link);
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
    else if(
      user_choice !== "all" &&
      user_author !== "all" &&
      selected_language !== "all" &&
      (searched == "" || searched == " ")
    ){
      for (let i = 0; i <= complete_filter.length; i++) {
        results_container.innerHTML = complete_filter.length
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
        download_link.setAttribute("href", filter_search[i].src);
        // download_link.setAttribute('download', link.all[i].name)
        download_link.appendChild(download_icon);
        download_btn.appendChild(download_link);
        hover.appendChild(download_btn);
      }
    }
    else if(
      user_choice !== "all" &&
      user_author == "all" &&
      selected_language !== "all" &&
      (searched == "" || searched == " ")
    ){
      for (let i = 0; i <= lang_cat_filter.length; i++) {
        results_container.innerHTML = lang_cat_filter.length
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", lang_cat_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (lang_cat_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", lang_cat_filter[i].volume_link);
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
        download_link.setAttribute("href", lang_cat_filter[i].src);
        // download_link.setAttribute('download', link.all[i].name)
        download_link.appendChild(download_icon);
        download_btn.appendChild(download_link);
        hover.appendChild(download_btn);
      }
    }
    else if (
      user_choice == "all" &&
      user_author !== "all" &&
      selected_language !== "all" &&
      (searched == "" || searched == " ")
    ) {
      for (let i = 0; i <= lang_auth_filter.length; i++) {
        results_container.innerHTML = lang_auth_filter.length;
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", lang_auth_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (lang_auth_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", lang_auth_filter[i].volume_link);
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
    else if (
      user_choice == "all" &&
      user_author == "all" &&
      selected_language !== "all" &&
      (searched == "" || searched == " ")
    ) {
      for (let i = 0; i <= language_filter.length; i++) {
        results_container.innerHTML = language_filter.length;
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", language_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (language_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", language_filter[i].volume_link);
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
    else if (
      user_choice !== "all" &&
      user_author !== "all" &&
      selected_language == "all" &&
      (searched == "" || searched == " ")
    ) {
      for (let i = 0; i <= cat_auth_filter.length; i++) {
        results_container.innerHTML = cat_auth_filter.length;
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", cat_auth_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (cat_auth_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", cat_auth_filter[i].volume_link);
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
    else {
      alert("Error While Filtering");
    }
  
});

document.getElementById("categories").addEventListener("change", () => {
  // user Choices
  user_choice = document.getElementById("categories").value.toLowerCase();
  user_author = document.getElementById("author").value.toLowerCase();
  searched = document.getElementById("search_bar").value.toLowerCase();
  selected_language = language_Container.value;

    // Filter Field
    let filter_search = all_books.filter((search) =>
    search.name.toLowerCase().match(searched) || search.author.toLowerCase().match(searched) ||search.src.toLowerCase().match(searched)

    );
    // Filter Language

    let language_filter = filter_search.filter(
      (lang) => lang.language.toLowerCase().match(selected_language)
    )
      console.log(language_filter)
    // Filter Category

    let category_filter = filter_search.filter(
      (category) => category.category.toLowerCase().match(user_choice)
    );

   //  Lang_cat Filter

   let lang_cat_filter = language_filter.filter(
     (lang)=> lang.category.toLowerCase().match(user_choice)
   )

    // Filter Author
    let author_filter= filter_search.filter(
      (author) => author.author.toLowerCase().match(user_author)
    );

    //  Lang_auth Filter

   let lang_auth_filter = language_filter.filter(
     (lang)=> lang.author.toLowerCase().match(user_author)
   )


    // Filter Category from author

    let cat_auth_filter = author_filter.filter(
      (author) => author.category.toLowerCase().match(user_choice)
    )
    console.log(cat_auth_filter)

    // Complete Filter
    let complete_filter = lang_auth_filter.filter(
      (complete) => complete.category.toLowerCase().match(user_choice)
    );

    let all_without_lang_filter = author_filter.filter(
      (author)=> author.category.toLowerCase().match(user_choice)
    )


 let all_container = document.getElementById("all_container");
 all_container.innerHTML = "";

 // If Category is not sellected,
 // Author is not sellected &
 // search field is also empty

 if (
   user_choice == "all" &&
   user_author == "all" &&
   selected_language == "all" &&
   (searched == "" || searched == " ")

 ) {
   for (let i = 0; i <= all_books_length - 1; i++) {
     // Book Container
     results_container.innerHTML = all_books_length

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
 else if (
   user_choice !== "all" &&
   user_author !== "all" &&
   selected_language !== "all" &&
   (searched !== "" || searched !== " ")
 ) {
   for (let i = 0; i <= complete_filter.length; i++) {
     results_container.innerHTML = complete_filter.length

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
 } else if (
   user_choice !== "all" &&
   user_author == "all" &&
   selected_language == "all" &&
   (searched !== "" || searched !== " ")
 ) {
   for (let i = 0; i <= category_filter.length; i++) {
     results_container.innerHTML = category_filter.length

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
 } else if (
   user_choice == "all" &&
   user_author !== "all" &&
   selected_language == "all" &&
   (searched !== "" || searched !== " ")
 ) {
   for (let i = 0; i <= author_filter.length; i++) {
     results_container.innerHTML = author_filter.length;

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
 } else if (
   user_choice == "all" &&
   user_author == "all" &&
   selected_language == "all" &&
   (searched !== "" || searched !== " ")
 ) {
   for (let i = 0; i <= filter_search.length; i++) {
     results_container.innerHTML = filter_search.length;

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
 } else if (
   user_choice !== "all" &&
   user_author == "all" &&
   selected_language == "all" &&
   (searched == "" || searched == " ")
 ) {
   for (let i = 0; i <= category_filter.length; i++) {
     results_container.innerHTML = category_filter.length;
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
 } else if (
   user_choice == "all" &&
   user_author !== "all" &&
   selected_language == "all" &&
   (searched == "" || searched == " ")
 ) {
   for (let i = 0; i <= author_filter.length; i++) {
     results_container.innerHTML = author_filter.length;
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
 else if(
   user_choice !== "all" &&
   user_author == "all" &&
   selected_language !== "all" &&
   (searched !== "" || searched !== " ")
   ){
     for (let i = 0; i <= lang_cat_filter.length; i++) {
     results_container.innerHTML = lang_cat_filter.length

       // Book Container
       let book = document.createElement("div");
       book.setAttribute("class", "book");
       book.setAttribute("id", "book");

       // Book Image
       let book_img = document.createElement("img");
       book_img.setAttribute("src", lang_cat_filter[i].front_src);
       book.appendChild(book_img);
       all_container.appendChild(book);

       // Hover Layer
       let hover = document.createElement("div");
       hover.setAttribute("class", "hover_layer");
       book.appendChild(hover);

       // If Volumes Availabe

       if (lang_cat_filter[i].volume_available == true) {
         let volume_link_container = document.createElement("div");
         let volume_link = document.createElement("a");
         volume_link.setAttribute("class", "volume_link");
         volume_link.setAttribute("href", lang_cat_filter[i].volume_link);
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
       download_link.setAttribute("href", lang_cat_filter[i].src);
       // download_link.setAttribute('download', link.all[i].name)
       download_link.appendChild(download_icon);
       download_btn.appendChild(download_link);
       hover.appendChild(download_btn);
     }
 } 
 else if(
   user_choice == "all" &&
   user_author == "all" &&
   selected_language !== "all" &&
   (searched !== "" || searched !== " ")
 ){
   for (let i = 0; i <= language_filter.length; i++) {
     results_container.innerHTML = language_filter.length;
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", language_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (language_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", language_filter[i].volume_link);
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
 else if(
   user_choice !== "all" &&
   user_author !== "all" &&
   selected_language == "all" &&
   (searched !== "" || searched !== " ")
 ){
   for (let i = 0; i <= all_without_lang_filter.length; i++) {
     results_container.innerHTML = all_without_lang_filter.length
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", all_without_lang_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (all_without_lang_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", all_without_lang_filter[i].volume_link);
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
 else if(
   user_choice !== "all" &&
   user_author !== "all" &&
   selected_language !== "all" &&
   (searched == "" || searched == " ")
 ){
   for (let i = 0; i <= complete_filter.length; i++) {
     results_container.innerHTML = complete_filter.length
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
     download_link.setAttribute("href", filter_search[i].src);
     // download_link.setAttribute('download', link.all[i].name)
     download_link.appendChild(download_icon);
     download_btn.appendChild(download_link);
     hover.appendChild(download_btn);
   }
 }
 else if(
   user_choice !== "all" &&
   user_author == "all" &&
   selected_language !== "all" &&
   (searched == "" || searched == " ")
 ){
   for (let i = 0; i <= lang_cat_filter.length; i++) {
     results_container.innerHTML = lang_cat_filter.length
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", lang_cat_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (lang_cat_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", lang_cat_filter[i].volume_link);
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
     download_link.setAttribute("href", lang_cat_filter[i].src);
     // download_link.setAttribute('download', link.all[i].name)
     download_link.appendChild(download_icon);
     download_btn.appendChild(download_link);
     hover.appendChild(download_btn);
   }
 }
 else if (
   user_choice == "all" &&
   user_author !== "all" &&
   selected_language !== "all" &&
   (searched == "" || searched == " ")
 ) {
   for (let i = 0; i <= lang_auth_filter.length; i++) {
     results_container.innerHTML = lang_auth_filter.length;
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", lang_auth_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (lang_auth_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", lang_auth_filter[i].volume_link);
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
 else if (
   user_choice == "all" &&
   user_author == "all" &&
   selected_language !== "all" &&
   (searched == "" || searched == " ")
 ) {
   for (let i = 0; i <= language_filter.length; i++) {
     results_container.innerHTML = language_filter.length;
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", language_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (language_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", language_filter[i].volume_link);
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
 else if (
   user_choice !== "all" &&
   user_author !== "all" &&
   selected_language == "all" &&
   (searched == "" || searched == " ")
 ) {
   for (let i = 0; i <= cat_auth_filter.length; i++) {
     results_container.innerHTML = cat_auth_filter.length;
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", cat_auth_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (cat_auth_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", cat_auth_filter[i].volume_link);
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
 else {
   alert("Error While Filtering");
 }

});
document.getElementById("author").addEventListener("change", () => {
  // user Choices
  user_choice = document.getElementById("categories").value.toLowerCase();
  user_author = document.getElementById("author").value.toLowerCase();
  searched = document.getElementById("search_bar").value.toLowerCase();
  selected_language = language_Container.value;

    // Filter Field
    let filter_search = all_books.filter((search) =>
    search.name.toLowerCase().match(searched) || search.author.toLowerCase().match(searched) ||search.src.toLowerCase().match(searched)

    );
    // Filter Language

    let language_filter = filter_search.filter(
      (lang) => lang.language.toLowerCase().match(selected_language)
    )
      console.log(language_filter)
    // Filter Category

    let category_filter = filter_search.filter(
      (category) => category.category.toLowerCase().match(user_choice)
    );

   //  Lang_cat Filter

   let lang_cat_filter = language_filter.filter(
     (lang)=> lang.category.toLowerCase().match(user_choice)
   )

    // Filter Author
    let author_filter= filter_search.filter(
      (author) => author.author.toLowerCase().match(user_author)
    );

    //  Lang_auth Filter

   let lang_auth_filter = language_filter.filter(
     (lang)=> lang.author.toLowerCase().match(user_author)
   )


    // Filter Category from author

    let cat_auth_filter = author_filter.filter(
      (author) => author.category.toLowerCase().match(user_choice)
    )
    console.log(cat_auth_filter)

    // Complete Filter
    let complete_filter = lang_auth_filter.filter(
      (complete) => complete.category.toLowerCase().match(user_choice)
    );

    let all_without_lang_filter = author_filter.filter(
      (author)=> author.category.toLowerCase().match(user_choice)
    )


 let all_container = document.getElementById("all_container");
 all_container.innerHTML = "";

 // If Category is not sellected,
 // Author is not sellected &
 // search field is also empty

 if (
   user_choice == "all" &&
   user_author == "all" &&
   selected_language == "all" &&
   (searched == "" || searched == " ")

 ) {
   for (let i = 0; i <= all_books_length - 1; i++) {
     // Book Container
     results_container.innerHTML = all_books_length

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
 else if (
   user_choice !== "all" &&
   user_author !== "all" &&
   selected_language !== "all" &&
   (searched !== "" || searched !== " ")
 ) {
   for (let i = 0; i <= complete_filter.length; i++) {
     results_container.innerHTML = complete_filter.length

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
 } else if (
   user_choice !== "all" &&
   user_author == "all" &&
   selected_language == "all" &&
   (searched !== "" || searched !== " ")
 ) {
   for (let i = 0; i <= category_filter.length; i++) {
     results_container.innerHTML = category_filter.length

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
 } else if (
   user_choice == "all" &&
   user_author !== "all" &&
   selected_language == "all" &&
   (searched !== "" || searched !== " ")
 ) {
   for (let i = 0; i <= author_filter.length; i++) {
     results_container.innerHTML = author_filter.length;

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
 } else if (
   user_choice == "all" &&
   user_author == "all" &&
   selected_language == "all" &&
   (searched !== "" || searched !== " ")
 ) {
   for (let i = 0; i <= filter_search.length; i++) {
     results_container.innerHTML = filter_search.length;

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
 } else if (
   user_choice !== "all" &&
   user_author == "all" &&
   selected_language == "all" &&
   (searched == "" || searched == " ")
 ) {
   for (let i = 0; i <= category_filter.length; i++) {
     results_container.innerHTML = category_filter.length;
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
 } else if (
   user_choice == "all" &&
   user_author !== "all" &&
   selected_language == "all" &&
   (searched == "" || searched == " ")
 ) {
   for (let i = 0; i <= author_filter.length; i++) {
     results_container.innerHTML = author_filter.length;
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
 else if(
   user_choice !== "all" &&
   user_author == "all" &&
   selected_language !== "all" &&
   (searched !== "" || searched !== " ")
   ){
     for (let i = 0; i <= lang_cat_filter.length; i++) {
     results_container.innerHTML = lang_cat_filter.length

       // Book Container
       let book = document.createElement("div");
       book.setAttribute("class", "book");
       book.setAttribute("id", "book");

       // Book Image
       let book_img = document.createElement("img");
       book_img.setAttribute("src", lang_cat_filter[i].front_src);
       book.appendChild(book_img);
       all_container.appendChild(book);

       // Hover Layer
       let hover = document.createElement("div");
       hover.setAttribute("class", "hover_layer");
       book.appendChild(hover);

       // If Volumes Availabe

       if (lang_cat_filter[i].volume_available == true) {
         let volume_link_container = document.createElement("div");
         let volume_link = document.createElement("a");
         volume_link.setAttribute("class", "volume_link");
         volume_link.setAttribute("href", lang_cat_filter[i].volume_link);
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
       download_link.setAttribute("href", lang_cat_filter[i].src);
       // download_link.setAttribute('download', link.all[i].name)
       download_link.appendChild(download_icon);
       download_btn.appendChild(download_link);
       hover.appendChild(download_btn);
     }
 } 
 else if(
   user_choice == "all" &&
   user_author == "all" &&
   selected_language !== "all" &&
   (searched !== "" || searched !== " ")
 ){
   for (let i = 0; i <= language_filter.length; i++) {
     results_container.innerHTML = language_filter.length;
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", language_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (language_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", language_filter[i].volume_link);
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
 else if(
   user_choice !== "all" &&
   user_author !== "all" &&
   selected_language == "all" &&
   (searched !== "" || searched !== " ")
 ){
   for (let i = 0; i <= all_without_lang_filter.length; i++) {
     results_container.innerHTML = all_without_lang_filter.length
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", all_without_lang_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (all_without_lang_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", all_without_lang_filter[i].volume_link);
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
 else if(
   user_choice !== "all" &&
   user_author !== "all" &&
   selected_language !== "all" &&
   (searched == "" || searched == " ")
 ){
   for (let i = 0; i <= complete_filter.length; i++) {
     results_container.innerHTML = complete_filter.length
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
     download_link.setAttribute("href", filter_search[i].src);
     // download_link.setAttribute('download', link.all[i].name)
     download_link.appendChild(download_icon);
     download_btn.appendChild(download_link);
     hover.appendChild(download_btn);
   }
 }
 else if(
   user_choice !== "all" &&
   user_author == "all" &&
   selected_language !== "all" &&
   (searched == "" || searched == " ")
 ){
   for (let i = 0; i <= lang_cat_filter.length; i++) {
     results_container.innerHTML = lang_cat_filter.length
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", lang_cat_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (lang_cat_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", lang_cat_filter[i].volume_link);
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
     download_link.setAttribute("href", lang_cat_filter[i].src);
     // download_link.setAttribute('download', link.all[i].name)
     download_link.appendChild(download_icon);
     download_btn.appendChild(download_link);
     hover.appendChild(download_btn);
   }
 }
 else if (
   user_choice == "all" &&
   user_author !== "all" &&
   selected_language !== "all" &&
   (searched == "" || searched == " ")
 ) {
   for (let i = 0; i <= lang_auth_filter.length; i++) {
     results_container.innerHTML = lang_auth_filter.length;
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", lang_auth_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (lang_auth_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", lang_auth_filter[i].volume_link);
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
 else if (
   user_choice == "all" &&
   user_author == "all" &&
   selected_language !== "all" &&
   (searched == "" || searched == " ")
 ) {
   for (let i = 0; i <= language_filter.length; i++) {
     results_container.innerHTML = language_filter.length;
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", language_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (language_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", language_filter[i].volume_link);
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
 else if (
   user_choice !== "all" &&
   user_author !== "all" &&
   selected_language == "all" &&
   (searched == "" || searched == " ")
 ) {
   for (let i = 0; i <= cat_auth_filter.length; i++) {
     results_container.innerHTML = cat_auth_filter.length;
     // Book Container
     let book = document.createElement("div");
     book.setAttribute("class", "book");
     book.setAttribute("id", "book");

     // Book Image
     let book_img = document.createElement("img");
     book_img.setAttribute("src", cat_auth_filter[i].front_src);
     book.appendChild(book_img);
     all_container.appendChild(book);

     // Hover Layer
     let hover = document.createElement("div");
     hover.setAttribute("class", "hover_layer");
     book.appendChild(hover);

     // If Volumes Availabe

     if (cat_auth_filter[i].volume_available == true) {
       let volume_link_container = document.createElement("div");
       let volume_link = document.createElement("a");
       volume_link.setAttribute("class", "volume_link");
       volume_link.setAttribute("href", cat_auth_filter[i].volume_link);
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
 else {
   alert("Error While Filtering");
 }

});
document.getElementById("search_bar").addEventListener("keyup", () => {
     // user Choices
     user_choice = document.getElementById("categories").value.toLowerCase();
     user_author = document.getElementById("author").value.toLowerCase();
     searched = document.getElementById("search_bar").value.toLowerCase();
     selected_language = language_Container.value;
  
       // Filter Field
       let filter_search = all_books.filter((search) =>
       search.name.toLowerCase().match(searched) || search.author.toLowerCase().match(searched) ||search.src.toLowerCase().match(searched)
  
       );
       // Filter Language
   
       let language_filter = filter_search.filter(
         (lang) => lang.language.toLowerCase().match(selected_language)
       )
         console.log(language_filter)
       // Filter Category
   
       let category_filter = filter_search.filter(
         (category) => category.category.toLowerCase().match(user_choice)
       );

      //  Lang_cat Filter

      let lang_cat_filter = language_filter.filter(
        (lang)=> lang.category.toLowerCase().match(user_choice)
      )
   
       // Filter Author
       let author_filter= filter_search.filter(
         (author) => author.author.toLowerCase().match(user_author)
       );
   
       //  Lang_auth Filter

      let lang_auth_filter = language_filter.filter(
        (lang)=> lang.author.toLowerCase().match(user_author)
      )
   

       // Filter Category from author
   
       let cat_auth_filter = author_filter.filter(
         (author) => author.category.toLowerCase().match(user_choice)
       )
       console.log(cat_auth_filter)
   
       // Complete Filter
       let complete_filter = lang_auth_filter.filter(
         (complete) => complete.category.toLowerCase().match(user_choice)
       );

       let all_without_lang_filter = author_filter.filter(
         (author)=> author.category.toLowerCase().match(user_choice)
       )
   
  
    let all_container = document.getElementById("all_container");
    all_container.innerHTML = "";

    // If Category is not sellected,
    // Author is not sellected &
    // search field is also empty

    if (
      user_choice == "all" &&
      user_author == "all" &&
      selected_language == "all" &&
      (searched == "" || searched == " ")

    ) {
      for (let i = 0; i <= all_books_length - 1; i++) {
        // Book Container
        results_container.innerHTML = all_books_length

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
    else if (
      user_choice !== "all" &&
      user_author !== "all" &&
      selected_language !== "all" &&
      (searched !== "" || searched !== " ")
    ) {
      for (let i = 0; i <= complete_filter.length; i++) {
        results_container.innerHTML = complete_filter.length

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
    } else if (
      user_choice !== "all" &&
      user_author == "all" &&
      selected_language == "all" &&
      (searched !== "" || searched !== " ")
    ) {
      for (let i = 0; i <= category_filter.length; i++) {
        results_container.innerHTML = category_filter.length

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
    } else if (
      user_choice == "all" &&
      user_author !== "all" &&
      selected_language == "all" &&
      (searched !== "" || searched !== " ")
    ) {
      for (let i = 0; i <= author_filter.length; i++) {
        results_container.innerHTML = author_filter.length;

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
    } else if (
      user_choice == "all" &&
      user_author == "all" &&
      selected_language == "all" &&
      (searched !== "" || searched !== " ")
    ) {
      for (let i = 0; i <= filter_search.length; i++) {
        results_container.innerHTML = filter_search.length;

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
    } else if (
      user_choice !== "all" &&
      user_author == "all" &&
      selected_language == "all" &&
      (searched == "" || searched == " ")
    ) {
      for (let i = 0; i <= category_filter.length; i++) {
        results_container.innerHTML = category_filter.length;
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
    } else if (
      user_choice == "all" &&
      user_author !== "all" &&
      selected_language == "all" &&
      (searched == "" || searched == " ")
    ) {
      for (let i = 0; i <= author_filter.length; i++) {
        results_container.innerHTML = author_filter.length;
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
    else if(
      user_choice !== "all" &&
      user_author == "all" &&
      selected_language !== "all" &&
      (searched !== "" || searched !== " ")
      ){
        for (let i = 0; i <= lang_cat_filter.length; i++) {
        results_container.innerHTML = lang_cat_filter.length

          // Book Container
          let book = document.createElement("div");
          book.setAttribute("class", "book");
          book.setAttribute("id", "book");
  
          // Book Image
          let book_img = document.createElement("img");
          book_img.setAttribute("src", lang_cat_filter[i].front_src);
          book.appendChild(book_img);
          all_container.appendChild(book);
  
          // Hover Layer
          let hover = document.createElement("div");
          hover.setAttribute("class", "hover_layer");
          book.appendChild(hover);
  
          // If Volumes Availabe
  
          if (lang_cat_filter[i].volume_available == true) {
            let volume_link_container = document.createElement("div");
            let volume_link = document.createElement("a");
            volume_link.setAttribute("class", "volume_link");
            volume_link.setAttribute("href", lang_cat_filter[i].volume_link);
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
          download_link.setAttribute("href", lang_cat_filter[i].src);
          // download_link.setAttribute('download', link.all[i].name)
          download_link.appendChild(download_icon);
          download_btn.appendChild(download_link);
          hover.appendChild(download_btn);
        }
    } 
    else if(
      user_choice == "all" &&
      user_author == "all" &&
      selected_language !== "all" &&
      (searched !== "" || searched !== " ")
    ){
      for (let i = 0; i <= language_filter.length; i++) {
        results_container.innerHTML = language_filter.length;
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", language_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (language_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", language_filter[i].volume_link);
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
    else if(
      user_choice !== "all" &&
      user_author !== "all" &&
      selected_language == "all" &&
      (searched !== "" || searched !== " ")
    ){
      for (let i = 0; i <= all_without_lang_filter.length; i++) {
        results_container.innerHTML = all_without_lang_filter.length
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", all_without_lang_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (all_without_lang_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", all_without_lang_filter[i].volume_link);
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
    else if(
      user_choice !== "all" &&
      user_author !== "all" &&
      selected_language !== "all" &&
      (searched == "" || searched == " ")
    ){
      for (let i = 0; i <= complete_filter.length; i++) {
        results_container.innerHTML = complete_filter.length
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
        download_link.setAttribute("href", filter_search[i].src);
        // download_link.setAttribute('download', link.all[i].name)
        download_link.appendChild(download_icon);
        download_btn.appendChild(download_link);
        hover.appendChild(download_btn);
      }
    }
    else if(
      user_choice !== "all" &&
      user_author == "all" &&
      selected_language !== "all" &&
      (searched == "" || searched == " ")
    ){
      for (let i = 0; i <= lang_cat_filter.length; i++) {
        results_container.innerHTML = lang_cat_filter.length
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", lang_cat_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (lang_cat_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", lang_cat_filter[i].volume_link);
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
        download_link.setAttribute("href", lang_cat_filter[i].src);
        // download_link.setAttribute('download', link.all[i].name)
        download_link.appendChild(download_icon);
        download_btn.appendChild(download_link);
        hover.appendChild(download_btn);
      }
    }
    else if (
      user_choice == "all" &&
      user_author !== "all" &&
      selected_language !== "all" &&
      (searched == "" || searched == " ")
    ) {
      for (let i = 0; i <= lang_auth_filter.length; i++) {
        results_container.innerHTML = lang_auth_filter.length;
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", lang_auth_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (lang_auth_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", lang_auth_filter[i].volume_link);
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
    else if (
      user_choice == "all" &&
      user_author == "all" &&
      selected_language !== "all" &&
      (searched == "" || searched == " ")
    ) {
      for (let i = 0; i <= language_filter.length; i++) {
        results_container.innerHTML = language_filter.length;
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", language_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (language_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", language_filter[i].volume_link);
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
    else if (
      user_choice !== "all" &&
      user_author !== "all" &&
      selected_language == "all" &&
      (searched == "" || searched == " ")
    ) {
      for (let i = 0; i <= cat_auth_filter.length; i++) {
        results_container.innerHTML = cat_auth_filter.length;
        // Book Container
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.setAttribute("id", "book");

        // Book Image
        let book_img = document.createElement("img");
        book_img.setAttribute("src", cat_auth_filter[i].front_src);
        book.appendChild(book_img);
        all_container.appendChild(book);

        // Hover Layer
        let hover = document.createElement("div");
        hover.setAttribute("class", "hover_layer");
        book.appendChild(hover);

        // If Volumes Availabe

        if (cat_auth_filter[i].volume_available == true) {
          let volume_link_container = document.createElement("div");
          let volume_link = document.createElement("a");
          volume_link.setAttribute("class", "volume_link");
          volume_link.setAttribute("href", cat_auth_filter[i].volume_link);
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
    else {
      alert("Error While Filtering");
    }
  
});



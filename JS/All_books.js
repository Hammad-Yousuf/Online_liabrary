let all_books_container = JSON.parse(all_books_array);
let all_books = all_books_container.books;
let all_books_length = all_books.length;
console.log(all_books_length);

// Search

let user_choice = document.getElementById("categories").value;
let search_btn = document.getElementById("search");
search_btn.addEventListener("click", () => {
  user_choice = document.getElementById("categories").value;
  console.log(user_choice);
  let filtered_results = all_books.filter(
    (book) => book.category == user_choice
  );
  console.log(filtered_results);
  let all_container = document.getElementById("all_container");
  all_container.innerHTML = "";
  if (user_choice == "all") {
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
  } else {
    for (let i = 0; i <= filtered_results.length; i++) {
      // Book Container
      let book = document.createElement("div");
      book.setAttribute("class", "book");
      book.setAttribute("id", "book");

      // Book Image
      let book_img = document.createElement("img");
      book_img.setAttribute("src", filtered_results[i].front_src);
      book.appendChild(book_img);
      all_container.appendChild(book);

      // Hover Layer
      let hover = document.createElement("div");
      hover.setAttribute("class", "hover_layer");
      book.appendChild(hover);

      // If Volumes Availabe

      if (filtered_results[i].volume_available == true) {
        let volume_link_container = document.createElement("div");
        let volume_link = document.createElement("a");
        volume_link.setAttribute("class", "volume_link");
        volume_link.setAttribute("href", filtered_results[i].volume_link);
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
      download_link.setAttribute("href", filtered_results[i].src);
      // download_link.setAttribute('download', link.all[i].name)
      download_link.appendChild(download_icon);
      download_btn.appendChild(download_link);
      hover.appendChild(download_btn);
    }
  }
});

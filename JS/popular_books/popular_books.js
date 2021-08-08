let popular_books_container = JSON.parse(popular_books_array);
let popular_books = popular_books_container.popular
let popular_length = popular_books.length;
for (let i = 0; i <= popular_length - 1; i++) {
  // Book Container
  let book = document.createElement("div");
  book.setAttribute("class", "book");
  book.setAttribute("id", "book");

  // Book Image
  let book_img = document.createElement("img");
  book_img.setAttribute('src', popular_books[i].front_src)
  book.appendChild(book_img);
  popular_container.appendChild(book);

  // Hover Layer
  let hover = document.createElement("div");
  hover.setAttribute("class", "hover_layer");
  book.appendChild(hover);

  // If Volumes Availabe

  if (popular_books[i].volume_available == true) {
      let volume_link_container = document.createElement("div");
      let volume_link = document.createElement("a");
      volume_link.setAttribute("class", "volume_link");
      volume_link.setAttribute("href", popular_books[i].volume_link);
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
  download_link.setAttribute("href", popular_books[i].src);
  // download_link.setAttribute('download', link.popular[i].name)
  download_link.appendChild(download_icon);
  download_btn.appendChild(download_link);
  hover.appendChild(download_btn);
}

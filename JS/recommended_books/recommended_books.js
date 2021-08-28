let recommended_books_container = JSON.parse(recommended_books_array);
let recommended_books = recommended_books_container.recommended
let recommended_length = recommended_books.length;
let recommended_container = document.getElementById('rec_container')
for (let i = 0; i <= recommended_length - 1; i++) {
  // Book Container
  let book = document.createElement("div");
  book.setAttribute("class", "book");
  book.setAttribute("id", "book");

  // Book Image
  let book_img = document.createElement("img");
  book_img.setAttribute('src', recommended_books[i].front_src)
  book.appendChild(book_img);
  recommended_container.appendChild(book);

  // Hover Layer
  let hover = document.createElement("div");
  hover.setAttribute("class", "hover_layer");
  book.appendChild(hover);

  // If Volumes Availabe

  if (recommended_books[i].volume_available == true) {
      let volume_link_container = document.createElement("div");
      let volume_link = document.createElement("a");
      volume_link.setAttribute("class", "volume_link");
      volume_link.setAttribute("href", recommended_books[i].volume_link);
      volume_link_container.appendChild(volume_link);
      let volume_link_text = document.createTextNode(
      "Click Here For Complete Volumes!"
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
  download_link.setAttribute("href", recommended_books[i].src);
  // download_link.setAttribute('download', link.recommended[i].name)
  download_link.appendChild(download_icon);
  download_btn.appendChild(download_link);
  hover.appendChild(download_btn);
}

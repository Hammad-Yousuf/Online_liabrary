

// let popular_books = fetch("./js/popular_books.json").then(function (res) {
//   return res.json();
// });
// let books_array = popular_books.then(function (array) {
//   return array.popular.length;
// });


// let popular_container = document.getElementById("popular_container");


// popluar_books.then(books =>  console.log(books.Popular[0]))
// popluar_books.then(books => console.log(books.Popular[i]));

// for (let i = 0; i <= 5; i++) {
//   // Book Container
//   let book = document.createElement("div");
//   book.setAttribute("class", "book");
//   book.setAttribute("id", "book");

//   // Book Image
//   let book_img = document.createElement("img");
//   popular_books.then((src) => (book_img.src = src.popular[i].front_src));
//   book.appendChild(book_img);
//   popular_container.appendChild(book);

//   // Hover Layer
//   let hover = document.createElement("div");
//   hover.setAttribute("class", "hover_layer");
//   book.appendChild(hover);

//   // If Volumes Availabe

//   popular_books.then(function (volumes) {
//   if (volumes.popular[i].volume_available == true) {
//       let volume_link_container = document.createElement("div");
//       let volume_link = document.createElement("a");
//       volume_link.setAttribute("class", "volume_link");
//       volume_link.setAttribute("href", volumes.popular[i].volume_link);
//       volume_link_container.appendChild(volume_link);
//       let volume_link_text = document.createTextNode(
//       "Click Here For Other Volumes!"
//       );
//       volume_link.appendChild(volume_link_text);
//       hover.appendChild(volume_link_container);
//   } else {
//       let volume_link_container = document.createElement("div");
//       let volume_link_text = document.createTextNode(" ");
//       volume_link_container.appendChild(volume_link_text);
//       hover.appendChild(volume_link_container);
//   }
//   });

//   // Download_btn

//   let download_btn = document.createElement("button");
//   download_btn.setAttribute("class", "download_btn");
//   let download_icon = document.createElement("i");
//   download_icon.setAttribute("class", "fad fa-download");
//   let download_link = document.createElement("a");
//   // download_link.src = "hello";
//   popular_books.then(function (link) {
//   download_link.setAttribute("href", link.popular[i].src);
//   // download_link.setAttribute('download', link.popular[i].name)
//   });
//   download_link.appendChild(download_icon);
//   download_btn.appendChild(download_link);
//   hover.appendChild(download_btn);
// }

// // Recommended Books

// let recommended_container = document.getElementById("rec_container");

// // popluar_books.then(books =>  console.log(books.Popular[0]))
// // popluar_books.then(books => console.log(books.Popular[i]));

// for (let i = 0; i <= 5; i++) {
//   let book = document.createElement("div");
//   book.setAttribute("class", "book");
//   book.setAttribute("id", "book");
//   let book_img = document.createElement("img");
//   popular_books.then((src) => (book_img.src = src.popular[i].front_src));
//   book.appendChild(book_img);
//   recommended_container.appendChild(book);
// }


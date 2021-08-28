let authors = JSON.parse(authors_array).authors;
let authors_length = authors.length;
console.log(authors_length);
console.log(authors);

//  HTML Container
const authors_container = document.getElementById('authors_container');
// let i = 0;
for(let i = 0; i <= authors_length - 1; i++){
    let author_name = document.createElement('a');
    author_name.setAttribute('class', 'author');
    author_name.setAttribute('title', authors[i])
    let author = document.createTextNode(authors[i]);
    author_name.appendChild(author);
    authors_container.appendChild(author_name)
}
for(let i = 0; i<= authors_length - 1; i++){
    console.log(document.querySelector('.author').title);
}

document.querySelectorAll('.author').forEach(e => {
    e.addEventListener('click',()=>{
        alert(e.title)
    })
})
'use stict'
console.log('bsd')

var gBooks = [
    { 'id': 1, 'Title': 'Deal Breaker', 'price': 56, 'img': "../img/dealbreaker.jpg" , 'abaut': 'Sports agent Myron Bolitar is poised on the edge of the big time. So is Christian Steele, a rookie quarterback and Myrons prized client. But when Christian gets a phone call from a former ' },
    { 'id': 2, 'Title': 'Don\'t let go', 'price': 76, 'img': "img/dontletgo.jpg", 'abaut': 'Sports agent Myron Bolitar is poised on the edge of the big time. So is Christian Steele, a rookie quarterback and Myrons prized client. But when Christian gets a phone call from a former ' },
]

function updateBook(bookId, bookPrice) {
    
}
function readAndUpdateBook (bookId) {
    var newPrice = prompt('enter new price')
 updateBook(bookId, newPrice)
}

function readAndAddNewBook() {
    var elRecipient = document.querySelector('#recipient-name')
    var a = elRecipient.value;
    var elRecipientPrice = document.querySelector('#recipient-price')
    var b = elRecipientPrice.value;
    addBook(a, b)
    a=0;
    b=0;
}

function addBook(name, price) {
    var lastBook = gBooks[gBooks.length - 1]
    var newId = lastBook.id + 1
    var book = {'id':newId,'Title':name,'price':price }
    gBooks.push(book)
    renderBooks()
}

function renderBooks() {

    var strHtml =
        ` <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col"  colspan="3" >Action</th>
      
    </tr>
  </thead>
   <tbody> `;

    for (var i = 0; i < gBooks.length; i++) {
        var book = gBooks[i];
        strHtml +=
            ` <tr>
      <th scope="row">${book.id}</th>
      <td>${book.Title}</td>
      <td>${book.price}</td>
      <td><button type="button" class="btn btn-primary btn-sm" data-target="#bookModal${book.id}" data-toggle="modal" >Read</button></td>
     <td><button type="button" class="btn btn-warning btn-sm" onclick= "readAndUpdateBook(${book.id})" >Update</button></td>
      <td><button type="button" class="btn btn-danger btn-sm" onclick = "deleteBook(${i})">Delete</button></td>
    </tr>`
    }
    strHtml += `</tbody>
    </table>`

    var elBooktable = document.querySelector(".booktable");
    elBooktable.innerHTML = strHtml;

}
renderBooks()


function renderBookModal() {
    var strHtml = '';

    for (var i = 0; i < gBooks.length; i++) {
        var book = gBooks[i];
        strHtml += `
        <div class="modal fade" id="bookModal${book.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Book Information</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h1>"${book.Title}"</h1>
                        <img src=${book.img} /> 
                        <p>${book.abaut}</p>
                        <p>price: ${book.price} nis</p>
                        <label for="input-1" class="control-label">Rate This</label>
<input id="input-1" name="input-1" class="rating rating-loading" data-min="0" data-max="5" data-step="1">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`


    }
    var elmodelabaut = document.querySelector(".modelabaut");
    elmodelabaut.innerHTML = strHtml;


}
renderBookModal()

function deleteBook(bookId) {
    var id = (bookId)
    gBooks.splice(id, 1)
    console.log(gBooks)
    renderBooks()
}



console.log('Starting up');

var gProjs =  [
    {
        "href":"#calcu",
        "id": "calcu",
        "name": "calcu",
        "title": "It's ugly but works",
        "desc": "Allows you to perform accounting operations",
        "publishedAt": 1448693940000,
        "labels": ["Matrixes", "keyboard events"],
        "img": "projs-images/calcu.png",
    },
    {
       "href": "#touch-nums",
        "id": "touch-nums",
        "name": "touch-nums",
        "title": "Let's see how quick you are",
        "desc": "Click the digits as soon as possibles",
        "publishedAt": 1448693940000,
        "labels": ["Matrixes", "keyboard events"],
        "img": "projs-images/touch-nums.png",
    },
      {
       "href": "#book-shop",
        "id": "book-shop",
        "name": "book-shops",
        "title": "Helps you manage your store",
        "desc": "Helps you manage your store",
        "publishedAt": 1448693940000,
        "labels": ["Matrixes", "keyboard events"],
        "img": "projs-images/bookshop.png",
    }
]

function initPage() {
  renderProjs();
}



function renderProjs() {
  var elPortfolioContainer = document.querySelector('#portfolio-container');
  var elModalsContainer = document.querySelector('#modals-container');

  var strHtmlPreviews = '';
  var strHtmlModals = '';

  for (var i = 0; i < gProjs.length; i++) {
    var proj = gProjs[i];
    strHtmlPreviews += `
    <div class="col-md-4 col-sm-6 portfolio-item">
          <a onclick="projClicked(${i})" class="portfolio-link" data-toggle="modal" href="#portfolioModal${i}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src=${proj.img} alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.name}</p>
          </div>
        </div>
        `;
    strHtmlModals += `
    <div class="portfolio-modal modal fade" id="portfolioModal${i}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="${proj.img}" alt="">
                    <p>${proj.desc}</p>
                    <ul class="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: Threads</li>
                      <li>Category: Illustration</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }



  elPortfolioContainer.innerHTML = strHtmlPreviews;
  elModalsContainer.innerHTML = strHtmlModals;

}


function projClicked(idx) {
  console.log(idx);
  var elContainer = document.querySelector('#selected-proj-container');

  elContainer
   .querySelector('h2')
   .innerHTML = gProjs[idx].name; 

   elContainer
   .querySelector('p')
   .innerHTML = `desc for proj ${idx+1}`; 
}

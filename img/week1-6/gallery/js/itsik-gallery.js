"use strict"
console.log('bsd')
var gprojes = [
  {
    "href": "#calcu",
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



// function projClicked(idx) {
//   console.log(idx);
//   var elContainer = document.querySelector('#selected-proj-container');

//   elContainer
//     .querySelector('h2')
//     .innerHTML = gProjs[idx].name;

//   elContainer
//     .querySelector('p')
//     .innerHTML = `desc for proj ${idx + 1}`;
// }



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
            <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">Illustration</p>
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
                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!</p>
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
}

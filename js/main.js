console.log('Starting up');

$(onInit);

function onInit() {
  renderPortfolio();
  renderModals();
}
//poster="./img/portfolio/minesweeper-img.png"
function renderPortfolio() {
  const portfolioStr = getGProjs().map((item, idx) => {

    return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx}">
       <div class="portfolio-hover port-${idx}" controls [muted] = "'muted'" onmouseover="playVid(${idx})" onmouseout="pauseVid(${idx})">
            <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
            </div>
        </div> 
            <video class="video-${idx} videoInsert" muted width="350" height="260">
                <source src="${item.url}" type="video/mp4">
                Your browser does not support the video tag.
                <img class="img-fluid d-block mx-auto" src="./img/portfolio/error.webp" alt=""> 

            </video>
            </a>
        <div class="portfolio-caption">
        <h4>${item.name}</h4>
        <p class="">${item.title}</p>
        </div>
       </div>
       `
  }).join('');

  $('.portfolio-items-container').append(portfolioStr)
}


function renderModals() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const modalsStr = getGProjs().map((item, idx) => {
    const date = new Date(1662940800000);
    return `<div class="portfolio-modal modal fade port${idx}" id="portfolioModal${idx}" tabindex="-1" role="dialog" aria-hidden="true">
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
                    <h2>${item.name}</h2>
                    <p class="item-intro">${item.title}</p>
                    <video class="videoInsert" width="700" height="1000" muted autoplay loop>
                        <source src="${item.url}" type="video/mp4">
                        Your browser does not support the video tag.
                        <img class="img-fluid d-block mx-auto" src="./img/portfolio/error.webp" alt=""> 
                    </video>
                    <p>${item.desc}</p>
                    <ul class="list-inline">
                      <li>Date: ${monthNames[date.getMonth()]} ${date.getFullYear()}</li>
                      <!-- <li>Client: Threads</li> -->
                      <li>Category:  ${item.labels.join(", ")}</li>
                    </ul>
                    <div class="btn-proj-container">
                      <button class="btn btn-success btn-lg btn-proj" onclick="location.href='https://nircoren1.github.io/${item.name.toLowerCase()}';">Check it Out!</button>
                    </div>
                    <button class="btn btn-danger btn-sm" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`}).join('');

  $('body').append(modalsStr);
}

// var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) { console.log(this); $('video', this).get(0).play(); }
function hideVideo(e) { $('video', this).get(0).pause(); }
function wa() { console.log('wa'); }


function playVid(idx) {
  $(`.video-${idx}`).get(0).play()
}

function pauseVid(idx) {
  $(`.video-${idx}`).get(0).pause()
  $(`.video-${idx}`).get(0).currentTime = 0;
}

$('.btn-contact').on('click', onContact);

function onContact() {

  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=nircoren@gmail.com&su=${$('.name-input').val()}
    &body=${$('.msg-input').val()}&bcc=${$('.email-input').val()}`)

  $('.name-input').val('')
  $('.email-input').val('')
  $('.msg-input').val('')
}
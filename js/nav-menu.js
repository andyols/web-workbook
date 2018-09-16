// --------------------------------------------------------------
// IMPORT HTML
// --------------------------------------------------------------
// get current page HTML link (nav-menu.html), then insert it before current page <main>
var link    = document.querySelector('link[rel="import"]');
var content = link.import;
var el      = content.querySelector('.nav-container');

document.body.insertBefore(el.cloneNode(true), document.getElementsByTagName('main')[0]);
// --------------------------------------------------------------



// --------------------------------------------------------------
// INITIALIZE PAGE
// --------------------------------------------------------------

// get necessary elements to animate opening and closing of nav-menu
const pageContent = document.body.getElementsByTagName('main')[0]
const navToggle   = document.querySelector('.nav-toggler')
const navMenu     = document.querySelector('.nav-menu')
const main        = document.getElementsByTagName('main')[0]

// preset some classes to accomodate navbar being open
pageContent.classList.add('body-open')
pageContent.classList.add('transition-transform')

// turn navMenu into a SimpleScrollbar element
SimpleScrollbar.initEl(navMenu)
// --------------------------------------------------------------



// --------------------------------------------------------------
// SET CURRENT NAV-LINK
// --------------------------------------------------------------

// get current page index directory path
const currPagePath = "../.." + window.location.pathname
const currPageRef = document.querySelector('a[href="' + currPagePath + '"]')

// add current-page class to current page and make it a variable
currPageRef.classList.add('current-page')
let currPage = document.querySelector('.current-page')
// --------------------------------------------------------------



// --------------------------------------------------------------
// OPEN / CLOSE ENTIRE NAV MENU
// --------------------------------------------------------------

navToggle.addEventListener('click', _ => { // toggle navbar when user clicks hamburger
  pageContent.classList.toggle('body-open')
  navToggle.classList.toggle('nav-open')
  navMenu.classList.toggle('nav-open')
})
main.addEventListener('click', _ => { // close navbar if user clicks off navbar while it is open
  if(navMenu.classList.contains('nav-open')) {
    pageContent.classList.remove('body-open')
    navToggle.classList.remove('nav-open')
    navMenu.classList.remove('nav-open')
  }
})
// --------------------------------------------------------------



// --------------------------------------------------------------
// OPEN / CLOSE FOLDERS
// --------------------------------------------------------------
// traverse through each group of links to identify which group has the current page,
// also handles opening and closing of groups
let dropdown = document.querySelectorAll('.dropdown')

let openCloseAll = document.querySelector('.nav-open-close-all')
openCloseAll.addEventListener('click', openClose)

for(var i=0; i<dropdown.length; i++) {
  dropdown[i].addEventListener('click', toggle)

  // make sure the current page's group is open on page load
  if(dropdown[i].contains(currPage)) {
    dropdown[i].classList.add('current-folder')
    dropdown[i].classList.add('open')
    dropdown[i].querySelector('.dropdown-content').classList.add('open')
  }
}


// --------------------------------------------------------------
// FUNCTIONS
// --------------------------------------------------------------
function toggle() {
  this.classList.toggle('open')
  this.lastElementChild.classList.toggle('open')
}
function openClose() {
  if(this.classList.contains('closed')) {
    openAll()
  }
  else {
    closeAll()
  }
  this.classList.toggle('closed')
}
function openAll() {
  for(var i=0; i<dropdown.length; i++) {
    dropdown[i].classList.add('open')
    dropdown[i].querySelector('.dropdown-content').classList.add('open')
  }
}
function closeAll() {
  for(var i=0; i<dropdown.length; i++) {
    dropdown[i].classList.remove('open')
    dropdown[i].querySelector('.dropdown-content').classList.remove('open')
  }
}
// --------------------------------------------------------------

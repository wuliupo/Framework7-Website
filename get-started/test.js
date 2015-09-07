var isMaterial = location.href.indexOf('material') > 0;

// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
  material: isMaterial
});


// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Framework7.$;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: !isMaterial
});

// Now we need to run the code that will be executed only for About page.
// For this case we need to add event listener for "pageInit" event

// Option 1. Using one 'pageInit' event handler for all pages (recommended way):
$$(document).on('pageInit', function (e) {
  // Get page data from event data
  var page = e.detail.page;
  
  if (page.name === 'about') {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page, alert 1');
  }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  myApp.alert('Here comes About page, alert 2');
})
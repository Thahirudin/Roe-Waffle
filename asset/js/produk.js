function openInputMobile() {
    var searchInputMobile = document.getElementById("search-input-mobile");
    if (searchInputMobile.style.display === "none" || searchInputMobile.style.display === "") {
      searchInputMobile.style.display = "block";
    } else {
      searchInputMobile.style.display = "none";
    }
}

function searchMobile() {
    var keyword = document.getElementById("search-bar-mobile").value;
    window.location.href = "search.html?keyword=" + keyword;
}
// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

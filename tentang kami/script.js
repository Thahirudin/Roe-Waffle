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
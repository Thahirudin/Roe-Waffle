$(document).ready(function () {
  var owl = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Menghubungkan tombol prev dan next ke slider
  $(".custom-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".custom-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
});
// Menentukan jumlah slide
var totalSlides = document.querySelectorAll(
  ".carousel-inner .carousel-item"
).length;

// Membuat indikator secara dinamis
var customIndicators = document.getElementById("custom-carousel-indicators");
for (var i = 0; i < totalSlides; i++) {
  var indicator = document.createElement("span");
  indicator.className = "custom-indicator";
  indicator.setAttribute("data-bs-slide-to", i);
  if (i === 0) {
    indicator.classList.add("active");
  }
  indicator.onclick = function () {
    var slideNumber = this.getAttribute("data-bs-slide-to");
    var carousel = document.getElementById("carouselExampleIndicators");
    var carouselInstance = new bootstrap.Carousel(carousel);
    carouselInstance.to(parseInt(slideNumber));
  };
  customIndicators.appendChild(indicator);
}

// Mendeteksi perubahan slide
var carousel = document.getElementById("carouselExampleIndicators");
carousel.addEventListener("slid.bs.carousel", function () {
  var activeSlide = document.querySelector(".carousel-item.active");
  var slideIndex = Array.from(activeSlide.parentElement.children).indexOf(
    activeSlide
  );

  // Menghapus kelas active dari semua indikator
  var indicators = document.querySelectorAll(".custom-indicator");
  indicators.forEach(function (indicator) {
    indicator.classList.remove("active");
  });

  // Menambah kelas active ke indikator yang sesuai dengan slide yang aktif
  var activeIndicator = document.querySelector(
    `.custom-indicator[data-bs-slide-to="${slideIndex}"]`
  );
  activeIndicator.classList.add("active");
});

$(document).ready(function () {
  // Inisialisasi Carousel
  var owl = initializeCarousel();

  // Menghubungkan tombol prev dan next ke slider
  $(".custom-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".custom-next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  // Menampilkan indikator carousel
  var totalSlides = getTotalSlides();
  createCustomIndicators(totalSlides);

  // Mendeteksi perubahan slide
  var carousel = document.getElementById("carouselExampleIndicators");
  carousel.addEventListener("slid.bs.carousel", handleSlideChange);

  // Menampilkan preloader saat dokumen dimuat
  showPreloader();

  // Setelah 3 detik, sembunyikan preloader
  setTimeout(hidePreloader, 3000);
});

function initializeCarousel() {
  return $(".owl-carousel").owlCarousel({
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
}

function getTotalSlides() {
  return document.querySelectorAll(".carousel-inner .carousel-item").length;
}

function createCustomIndicators(totalSlides) {
  var customIndicators = document.getElementById("custom-carousel-indicators");
  for (var i = 0; i < totalSlides; i++) {
    var indicator = document.createElement("span");
    indicator.className = "custom-indicator";
    indicator.setAttribute("data-bs-slide-to", i);
    if (i === 0) {
      indicator.classList.add("active");
    }
    indicator.onclick = handleIndicatorClick;
    customIndicators.appendChild(indicator);
  }
}

function handleSlideChange() {
  var activeSlide = document.querySelector(".carousel-item.active");
  var slideIndex = Array.from(activeSlide.parentElement.children).indexOf(
    activeSlide
  );

  // Menghapus kelas active dari semua indikator
  var indicators = document.querySelectorAll(".custom-indicator");
  indicators.forEach(function (indicator) {
    indicator.classList.remove("active");
  });

  // Menambahkan kelas active ke indikator yang sesuai dengan slide yang aktif
  var activeIndicator = document.querySelector(
    `.custom-indicator[data-bs-slide-to="${slideIndex}"]`
  );
  activeIndicator.classList.add("active");
}

function handleIndicatorClick() {
  var slideNumber = this.getAttribute("data-bs-slide-to");
  var carousel = document.getElementById("carouselExampleIndicators");
  var carouselInstance = new bootstrap.Carousel(carousel);
  carouselInstance.to(parseInt(slideNumber));
}

function showPreloader() {
  $("#preloader").fadeIn();
}

function hidePreloader() {
  $("#preloader").fadeOut();
}

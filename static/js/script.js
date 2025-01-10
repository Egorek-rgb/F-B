const swiper = new Swiper('.mySwiper', {
  slidesPerView: 4, // Количество видимых слайдов
  spaceBetween: 30, // Расстояние между слайдами
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
    renderFraction: function (currentClass, totalClass) {
      // Кастомизация текста между числами
      return `<span class="${currentClass}"></span> из <span class="${totalClass}"></span>`;
    },
  },
});

function updateArrowState() {
  const prevButton = document.querySelector('.custom-swiper-button-prev');
  const nextButton = document.querySelector('.custom-swiper-button-next');
  prevButton.classList.add('blue');
  // Проверяем, находимся ли в начале

}
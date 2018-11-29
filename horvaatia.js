function initSlides() {
  currentSlide = 0;
  slides = document.querySelectorAll('#slaidid .slaid');
  slides[currentSlide].className = 'slaid aktiivne_slaid';
}

function nextSlide() {
  slides[currentSlide].className = 'slaid';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slaid aktiivne_slaid';
}
function prevSlide() {
  slides[currentSlide].className = 'slaid';
  currentSlide = currentSlide - 1;
  if (currentSlide<0)
      currentSlide = slides.length -1;
  slides[currentSlide].className = 'slaid aktiivne_slaid';
}

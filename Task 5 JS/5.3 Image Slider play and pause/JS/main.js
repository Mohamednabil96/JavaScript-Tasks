let sliderImages = document.querySelectorAll('.slider-image'),
    prevBtn = document.querySelector('#prev-btn'),
    playBtn = document.querySelector('#play-btn'),
    pauseBtn = document.querySelector('#pause-btn'),
    nextBtn = document.querySelector('#next-btn'),
    currentIndex = 0,
    intervalId = null;

function showImage(index) {
  sliderImages.forEach(image => image.style.display = 'none');
  sliderImages[index].style.display = 'block';
  currentIndex = index;
}

function prevImage() {
  let index = currentIndex - 1;
  if (index < 0) {
    index = sliderImages.length - 1;
  }
  showImage(index);
}

function nextImage() {
  let index = currentIndex + 1;
  if (index >= sliderImages.length) {
    index = 0;
  }
  showImage(index);
}

function startSlider() {
  intervalId = setInterval(nextImage, 1500);
}

function stopSlider() {
  clearInterval(intervalId);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
playBtn.addEventListener('click', startSlider);
pauseBtn.addEventListener('click', stopSlider);

showImage(currentIndex);
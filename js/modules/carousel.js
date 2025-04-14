export function featureCarousel() {
  const track = document.querySelector('.features-card-container');
  const slides = document.querySelectorAll('.feature-card');
  const preBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  let currentSlide = 0;

  function updateSlidePosition(){
    const slideWidth = slides[0].offsetWidth +32;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

    nextBtn.addEventListener('click', () =>{
      if(currentSlide < slides.length-1){
        currentSlide++;
        updateSlidePosition();
      }
    });

    preBtn.addEventListener('click', ()=>{
      if(currentSlide>0){
        currentSlide--;
        updateSlidePosition();
      }
    });

    window.addEventListener('resize', updateSlidePosition);
  }

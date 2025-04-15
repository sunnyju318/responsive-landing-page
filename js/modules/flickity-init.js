const carousel = document.querySelector('.review-card-container');

if (carousel) {
  new Flickity(carousel, {
    wrapAround: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false,
    pageDots: true,
  });
}

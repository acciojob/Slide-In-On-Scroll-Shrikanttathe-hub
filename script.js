// // Your JS code here.
// const sliderImages = document.querySelectorAll('.slide-in');
//  function checkSlide() {
//     sliderImages.forEach((img) => {
//       // Halfway through the image
//       const slideInAt =
//         window.scrollY + window.innerHeight - img.height / 2;

//       // Bottom of the image
//       const imageBottom = img.offsetTop + img.height;

//       const isHalfShown = slideInAt > img.offsetTop;
//       const isNotScrolledPast = window.scrollY < imageBottom;

//       if (isHalfShown && isNotScrolledPast) {
//         img.classList.add('active');
//       } else {
//         img.classList.remove('active');
// 		  }
//     });
//   }

//   // Attach debounced scroll handler
//   window.addEventListener('scroll', debounce(checkSlide));
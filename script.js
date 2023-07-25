let burger = document.querySelector('.burger');
let burgerItems = document.querySelectorAll('.nav-mobile__list-item');


document.querySelector('.burger').addEventListener('click', () => {
  if (burger.textContent == 'x') {
    document.querySelector('.nav-mobile').style.display = "none";
    burger.textContent = '☰';
  }
  else {
    document.querySelector('.nav-mobile').style.display = "flex";
    burger.textContent = 'x';
  }
})

for (let item of burgerItems) {
  item.addEventListener('click', () => {
    document.querySelector('.nav-mobile').style.display = "none";
    burger.textContent = '☰';
  })
}


// let IMAGES_URLs = [
//           "https://sun9-64.userapi.com/impg/YaHZiSZ9gpqx_vtCrwgUE0f0NZ_IHSyCDLjRvw/p5rgr-PQtgE.jpg?size=1366x2160&quality=95&sign=0c008255f52a97300ba7636a3cc19241&type=album",
//             "https://sun9-69.userapi.com/impg/JxZYpG5szmNBzXMPxwzQXMQKX6ALMlBBxrAdxQ/8OrkEpBejj4.jpg?size=1025x1280&quality=95&sign=f54d40847dd2d1d86d28b3c04ec3d38f&type=album",
//             "https://avatars.mds.yandex.net/get-altay/219656/2a00000186e013348893c6010bddc2e755d3/L_height",
//               "https://sun9-2.userapi.com/impg/GXZrPQQdf81IXfWCupqRCXFhb4lvepRzIAFqvw/8YLMA6KS1Js.jpg?size=722x1280&quality=95&sign=7725b335b949fd4b45ff09cb51fbc66d&type=album",
//             "https://avatars.mds.yandex.net/get-altay/941278/2a00000187b7959193beb8eee1c09385f12f/L_height"]

// let indexImage = 0;

// let sectionPhotogalleryPhotoShow = document.querySelector('.section-photogallery__photo-show');



// let switchNextPhoto = function() {
//   indexImage = (indexImage + 1) % IMAGES_URLs.length;
//   console.log(indexImage)
//   sectionPhotogalleryPhotoShow.src = IMAGES_URLs[indexImage];
// }

// // setInterval(switchNextPhoto, 2000)
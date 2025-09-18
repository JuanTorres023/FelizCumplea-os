const btn = document.getElementById('enterBtn');
const intro = document.getElementById('intro');
const letter = document.getElementById('letter');
const music = document.getElementById('bg-music');

btn.addEventListener('click', () => {
    intro.classList.add('hidden');
    letter.classList.remove('hidden');

    music.play().catch(err => {
        console.log('El navegador bloqueó el audio:', err);
    });
});
music.volume = 0.7; // 0.0 a 1.0

const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (20 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);



/* 
function resizeCollageToPhoto(photo) {
  const img = new Image();
  img.src = photo.src;
  img.onload = () => {
    const ratio = img.width / img.height;

    const maxW = window.innerWidth * 0.9;  // 90% del ancho
    const maxH = window.innerHeight * 0.6; // 60% del alto
    let width = img.width;
    let height = img.height;

    if (width > maxW) {
      width = maxW;
      height = width / ratio;
    }
    if (height > maxH) {
      height = maxH;
      width = height * ratio;
    }

    collage.style.width = width + 'px';
    collage.style.height = height + 'px';
  };
}

function getRandomPosition() {
  const maxX = window.innerWidth - collage.offsetWidth;
  const maxY = window.innerHeight - collage.offsetHeight;
  return {
    x: Math.random() * maxX,
    y: Math.random() * maxY
  };
}

function nextPhoto() {
  photos[current].classList.remove('active');
  current = (current + 1) % photos.length;
  photos[current].classList.add('active');

  resizeCollageToPhoto(photos[current]);

  const pos = getRandomPosition();
  collage.style.left = pos.x + 'px';
  collage.style.top = pos.y + 'px';
}


resizeCollageToPhoto(photos[current]);


setInterval(nextPhoto, 4000);


window.addEventListener('resize', () => resizeCollageToPhoto(photos[current]));
 */

//const floatContainer = document.body;  // o un div fijo
/* const photosSrc = [
  'img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg',
  'img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg',
  'img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg','img/18.jpg', 'img/19.jpg','img/20.jpg',
  'img/21.jpg','img/22.jpg','img/23.jpg','img/24.jpg','img/25.jpg','img/26.jpg',
  'img/27.jpg','img/28.jpg','img/29.jpg','img/30.jpg','img/31.jpg','img/32.jpg', 'img/33.jpg','img/34.jpg','img/35.jpg','img/36.jpg', 
  'img/37.jpg','img/38.jpg','img/39.jpg','img/40.jpg','img/41.jpg','img/42.jpg',
  'img/43.jpg','img/44.jpg','img/45.jpg','img/46.jpg','img/47.jpg','img/48.jpg', 'img/49.jpg','img/50.jpg',
  'img/51.jpg','img/52.jpg','img/53.jpg','img/54.jpg','img/55.jpg','img/56.jpg',
  'img/57.jpg','img/58.jpg','img/59.jpg','img/60.jpg','img/61.jpg','img/62.jpg', 'img/63.jpg','img/64.jpg'
]; */


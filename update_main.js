const fs = require('fs');

const galleryDataStr = `
const galleryData = {
  "cuisines": [
    "Image/cuisines/57a4fc203dcb2d454a1e8f4522ed4c80.jpg",
    "Image/cuisines/799229c0dfaed0822dcb96760c54322b.jpg",
    "Image/cuisines/d07730b8847c1bb994d16fda21deac6d.jpg",
    "Image/cuisines/IMG_9245.JPG",
    "Image/cuisines/648a8f300ce304a9df2d887bab481ceb.jpg",
    "Image/cuisines/4294719e7e2fde77211abc6fe1c50a08.jpg",
    "Image/cuisines/82a193c6ceb8881f71bc47edac92a840.jpg",
    "Image/cuisines/b315081c3219bc1245f1ffe83111613d.jpg",
    "Image/cuisines/2032868a75e30c2d866672f83c5bdc05.jpg",
    "Image/cuisines/d3824e98ea33632f17b5151c43506e78.jpg",
    "Image/cuisines/8a161e6da546b9da0a122a51aca7323f.jpg",
    "Image/cuisines/photo4-cuisine.JPG"
  ],
  "dressings": [
    "Image/dressings/bd040f77902ff7d6a4db488f3a3d1911.jpg",
    "Image/dressings/099211b3ba76d0a8ceddf42092ef47ea.jpg",
    "Image/dressings/36a439065c3ed385a9e6414e7cb7638a.jpg",
    "Image/dressings/acf583f2cd5ae81a5167ca8fdf1ab179.jpg",
    "Image/dressings/02de764d6a52aaa24c4050a298967ead.jpg",
    "Image/dressings/911d67db50bcfc24389ac3af9f0e9bc5.jpg",
    "Image/dressings/c28a4f20dd3d6430d244a8d275076b1c.jpg",
    "Image/dressings/0eb2dd96ad2b897d16983500f0b69ccc.jpg",
    "Image/dressings/7c0fb3301e851dfd196c678b37ab995b.jpg",
    "Image/dressings/1e29b03451c3cab885e0216801319c55.jpg",
    "Image/dressings/5dd25528ca083d60eb3a497a74b3aa0b.jpg"
  ],
  "salons": [
    "Image/saloon/f8c76b55c40475e20afec396b7be8bab.jpg",
    "Image/saloon/9f413bd936b1b0ddb2ecda414da353e8.jpg",
    "Image/saloon/e72dd6797a23a38ed1e337fa0563a7aa.jpg",
    "Image/saloon/1b48110e0a958a540d225062a2cbd450.jpg",
    "Image/saloon/d3d3112a7c2646e014563ded5d35a44a.jpg",
    "Image/saloon/192e85f55e0dc646d39599966ffcc602.jpg",
    "Image/saloon/39ba8176590f61b5e0bdf72a3ba67b66.jpg",
    "Image/saloon/9d552e5e1294dfb4216aa8b4596a0df6.jpg",
    "Image/saloon/75d08cb4c05caf343698bac71db7e56b.jpg",
    "Image/saloon/14194bf12dd9a2505c2b01d4f6a3f9de.jpg",
    "Image/saloon/487184374813b70c57c383794cf58091.jpg",
    "Image/saloon/cacd0668015da266106de7103cb78df8.jpg"
  ],
  "chambres": [
    "Image/chambre/abc00e149bfcf3a9b45c37557920db31.jpg",
    "Image/chambre/ef6f95bcd123a45124a61f8b8360516d.jpg",
    "Image/chambre/aa28583344a9f91b3168b15ccd38b8ab.jpg",
    "Image/chambre/6eef9c3177f17f493cbc78a1b63709d9.jpg",
    "Image/chambre/252dca03e694004797ac2ceb193dd414.jpg",
    "Image/chambre/2ad9f249745149100f8a2daf0b24eaf6.jpg",
    "Image/chambre/398075ef1bdc5896601c799a58475126.jpg",
    "Image/chambre/520d757300c0258c9b43193a6e964232.jpg"
  ],
  "bureaux": [
    "Image/bureaux/dfd2db8878588a14a353d0715d7b1be2.jpg",
    "Image/bureaux/88b305991b4e68bf55f3f1adef6618f2.jpg",
    "Image/bureaux/f87ad8e6419c21f2d9ff7f6384b329be.jpg",
    "Image/bureaux/5d66a7b8d12863782a8e3d819118d8e5.jpg",
    "Image/bureaux/6ac029360a9cdd9a01819a0cdffeeee9.jpg",
    "Image/bureaux/19c91eb1dc7fad7a5a266179455dda1a.jpg",
    "Image/bureaux/34a3077e5f53b0606b6d0e99ea71c7dc.jpg",
    "Image/bureaux/615d68b101619ab99d9fb4abb7a6872a.jpg",
    "Image/bureaux/0dfb300be51dbbbb3cd6c8d730e12322.jpg",
    "Image/bureaux/205cbbc747dee24be28639f9b77977a0.jpg",
    "Image/bureaux/41b788d313c66cd2703d1e0878d80e11.jpg"
  ],
  "salles-de-bain": [
    "Image/salle de bain/6314c1a8f4a29acfe488645eb605eba5.jpg",
    "Image/salle de bain/795c13de31b01c659d9dc5c70139647d.jpg",
    "Image/salle de bain/ece1c8540d8eab2b9b01ec12a5bbab79.jpg",
    "Image/salle de bain/848ce957d7d762260ea99567c1e50601.jpg",
    "Image/salle de bain/dc75d5cd9cd20eb64ef8ad10233ed431.jpg",
    "Image/salle de bain/71e3aa6adb398eb8b27d8560704214fd.jpg",
    "Image/salle de bain/ab8f039197ad7b740125543be97870d4.jpg"
  ],
  "cuisines-haut-standing": [
    "Image/Cuisines de haut standing/4294719e7e2fde77211abc6fe1c50a08.jpg",
    "Image/Cuisines de haut standing/799229c0dfaed0822dcb96760c54322b.jpg",
    "Image/Cuisines de haut standing/82a193c6ceb8881f71bc47edac92a840.jpg",
    "Image/Cuisines de haut standing/8a161e6da546b9da0a122a51aca7323f.jpg",
    "Image/Cuisines de haut standing/IMG_9245.JPG",
    "Image/Cuisines de haut standing/IMG_9597.JPG",
    "Image/Cuisines de haut standing/IMG_9598.JPG",
    "Image/Cuisines de haut standing/IMG_9599.JPG",
    "Image/Cuisines de haut standing/IMG_9600.JPG",
    "Image/Cuisines de haut standing/IMG_9601.JPG",
    "Image/Cuisines de haut standing/IMG_9602.JPG",
    "Image/Cuisines de haut standing/IMG_9603.JPG",
    "Image/Cuisines de haut standing/IMG_9604.JPG",
    "Image/Cuisines de haut standing/IMG_9606.JPG",
    "Image/Cuisines de haut standing/IMG_9607.JPG",
    "Image/Cuisines de haut standing/IMG_9608.JPG",
    "Image/Cuisines de haut standing/IMG_9609.JPG",
    "Image/Cuisines de haut standing/IMG_9610.JPG",
    "Image/Cuisines de haut standing/IMG_9611.JPG",
    "Image/Cuisines de haut standing/IMG_9612.JPG",
    "Image/Cuisines de haut standing/b315081c3219bc1245f1ffe83111613d.jpg",
    "Image/Cuisines de haut standing/d07730b8847c1bb994d16fda21deac6d.jpg",
    "Image/Cuisines de haut standing/d3824e98ea33632f17b5151c43506e78.jpg",
    "Image/Cuisines de haut standing/photo4-cuisine.JPG"
  ],
  "dressings-lumineux-luxueux": [
    "Image/Dressings lumineux luxeux/02de764d6a52aaa24c4050a298967ead.jpg",
    "Image/Dressings lumineux luxeux/099211b3ba76d0a8ceddf42092ef47ea.jpg",
    "Image/Dressings lumineux luxeux/0eb2dd96ad2b897d16983500f0b69ccc.jpg",
    "Image/Dressings lumineux luxeux/1e29b03451c3cab885e0216801319c55.jpg",
    "Image/Dressings lumineux luxeux/36a439065c3ed385a9e6414e7cb7638a.jpg",
    "Image/Dressings lumineux luxeux/5dd25528ca083d60eb3a497a74b3aa0b.jpg",
    "Image/Dressings lumineux luxeux/7c0fb3301e851dfd196c678b37ab995b.jpg",
    "Image/Dressings lumineux luxeux/911d67db50bcfc24389ac3af9f0e9bc5.jpg",
    "Image/Dressings lumineux luxeux/acf583f2cd5ae81a5167ca8fdf1ab179.jpg",
    "Image/Dressings lumineux luxeux/bd040f77902ff7d6a4db488f3a3d1911.jpg",
    "Image/Dressings lumineux luxeux/c28a4f20dd3d6430d244a8d275076b1c.jpg"
  ],
  "lit": [
    "Image/LIT/252dca03e694004797ac2ceb193dd414.jpg",
    "Image/LIT/2ad9f249745149100f8a2daf0b24eaf6.jpg",
    "Image/LIT/398075ef1bdc5896601c799a58475126.jpg",
    "Image/LIT/6eef9c3177f17f493cbc78a1b63709d9.jpg",
    "Image/LIT/IMG_9559.JPG",
    "Image/LIT/IMG_9560.JPG",
    "Image/LIT/IMG_9561.JPG",
    "Image/LIT/IMG_9562.JPG",
    "Image/LIT/IMG_9563.JPG",
    "Image/LIT/IMG_9564.JPG",
    "Image/LIT/IMG_9565.JPG",
    "Image/LIT/IMG_9566.JPG",
    "Image/LIT/IMG_9567.JPG",
    "Image/LIT/IMG_9568.JPG",
    "Image/LIT/IMG_9569.JPG",
    "Image/LIT/IMG_9570.JPG",
    "Image/LIT/IMG_9571.JPG",
    "Image/LIT/IMG_9572.JPG",
    "Image/LIT/IMG_9573.JPG",
    "Image/LIT/IMG_9574.JPG",
    "Image/LIT/IMG_9575.JPG",
    "Image/LIT/IMG_9576.JPG",
    "Image/LIT/IMG_9578.JPG",
    "Image/LIT/IMG_9579.JPG",
    "Image/LIT/aa28583344a9f91b3168b15ccd38b8ab.jpg"
  ],
  "dressing-individuel": [
    "Image/Dressing individuel/IMG_9530.JPG",
    "Image/Dressing individuel/IMG_9531.JPG",
    "Image/Dressing individuel/IMG_9532.JPG",
    "Image/Dressing individuel/IMG_9533.JPG",
    "Image/Dressing individuel/IMG_9534.JPG",
    "Image/Dressing individuel/IMG_9535.JPG",
    "Image/Dressing individuel/IMG_9536.JPG",
    "Image/Dressing individuel/IMG_9537.JPG",
    "Image/Dressing individuel/IMG_9538.JPG",
    "Image/Dressing individuel/IMG_9539.JPG",
    "Image/Dressing individuel/IMG_9540.JPG",
    "Image/Dressing individuel/IMG_9541.JPG",
    "Image/Dressing individuel/IMG_9542.JPG",
    "Image/Dressing individuel/IMG_9543.JPG",
    "Image/Dressing individuel/IMG_9544.JPG",
    "Image/Dressing individuel/IMG_9545.JPG",
    "Image/Dressing individuel/IMG_9546.JPG",
    "Image/Dressing individuel/IMG_9547.JPG",
    "Image/Dressing individuel/IMG_9548.JPG",
    "Image/Dressing individuel/IMG_9549.JPG",
    "Image/Dressing individuel/IMG_9550.JPG",
    "Image/Dressing individuel/IMG_9551.JPG",
    "Image/Dressing individuel/IMG_9552.JPG",
    "Image/Dressing individuel/IMG_9553.JPG",
    "Image/Dressing individuel/IMG_9554.JPG",
    "Image/Dressing individuel/IMG_9555.JPG",
    "Image/Dressing individuel/IMG_9556.JPG",
    "Image/Dressing individuel/IMG_9557.JPG"
  ],
  "meubles-tv": [
    "Image/Meubles TV/14194bf12dd9a2505c2b01d4f6a3f9de.jpg",
    "Image/Meubles TV/1b48110e0a958a540d225062a2cbd450.jpg",
    "Image/Meubles TV/487184374813b70c57c383794cf58091.jpg",
    "Image/Meubles TV/9d552e5e1294dfb4216aa8b4596a0df6.jpg",
    "Image/Meubles TV/9f413bd936b1b0ddb2ecda414da353e8.jpg",
    "Image/Meubles TV/IMG_9515.JPG",
    "Image/Meubles TV/IMG_9516.JPG",
    "Image/Meubles TV/IMG_9517.JPG",
    "Image/Meubles TV/IMG_9518.JPG",
    "Image/Meubles TV/IMG_9520.JPG",
    "Image/Meubles TV/IMG_9521.JPG",
    "Image/Meubles TV/IMG_9522.JPG",
    "Image/Meubles TV/IMG_9523.JPG",
    "Image/Meubles TV/IMG_9524.JPG",
    "Image/Meubles TV/IMG_9525.JPG",
    "Image/Meubles TV/IMG_9526.JPG",
    "Image/Meubles TV/IMG_9527.JPG",
    "Image/Meubles TV/IMG_9528.JPG",
    "Image/Meubles TV/IMG_9529.JPG",
    "Image/Meubles TV/e72dd6797a23a38ed1e337fa0563a7aa.jpg",
    "Image/Meubles TV/f8c76b55c40475e20afec396b7be8bab.jpg"
  ]
};

// LIGHTBOX LOGIC
let currentCategory = [];
let currentIndex = 0;
let autoplayTimer = null;
let isTransitioning = false;
const AUTOPLAY_INTERVAL = 4500; 

const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = \`
  <div class="lightbox-close">&times;</div>
  <div class="lightbox-prev">&#10094;</div>
  <div class="lightbox-next">&#10095;</div>
  <div class="lightbox-content">
    <img class="lightbox-img active" src="" alt="Gallery Image">
    <img class="lightbox-img next-img" src="" alt="Gallery Image">
  </div>
\`;
document.body.appendChild(lightbox);

const lightboxImg1 = lightbox.querySelector('.lightbox-img.active');
const lightboxImg2 = lightbox.querySelector('.lightbox-img.next-img');
const closeBtn = lightbox.querySelector('.lightbox-close');
const prevBtn = lightbox.querySelector('.lightbox-prev');
const nextBtn = lightbox.querySelector('.lightbox-next');

let activeImgEl = lightboxImg1;
let nextImgEl = lightboxImg2;

function openLightbox(category) {
  if (galleryData[category] && galleryData[category].length > 0) {
    currentCategory = galleryData[category];
    currentIndex = 0;
    
    // reset state
    isTransitioning = false;
    activeImgEl.src = currentCategory[currentIndex];
    activeImgEl.classList.add('active');
    activeImgEl.style.opacity = 1;
    
    nextImgEl.classList.remove('active');
    nextImgEl.style.opacity = 0;

    // preload next
    if (currentCategory.length > 1) {
      const preloadImg = new Image();
      preloadImg.src = currentCategory[1];
    }
    
    lightbox.classList.add('active');
    startAutoplay();
  } else {
    alert("Aucune image disponible pour cette catégorie.");
  }
}

function startAutoplay() {
  stopAutoplay();
  if (currentCategory.length > 1) {
    autoplayTimer = setInterval(() => {
      transitionTo(currentIndex + 1);
    }, AUTOPLAY_INTERVAL);
  }
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function resetAutoplay() {
  startAutoplay();
}

function transitionTo(index) {
  if (isTransitioning || currentCategory.length <= 1) return;
  isTransitioning = true;
  
  if (index < 0) index = currentCategory.length - 1;
  else if (index >= currentCategory.length) index = 0;
  
  currentIndex = index;
  
  nextImgEl.src = currentCategory[currentIndex];
  
  // start crossfade
  nextImgEl.classList.add('active');
  nextImgEl.style.opacity = 1;
  activeImgEl.style.opacity = 0;
  
  setTimeout(() => {
    activeImgEl.classList.remove('active');
    // swap pointers
    const temp = activeImgEl;
    activeImgEl = nextImgEl;
    nextImgEl = temp;
    isTransitioning = false;
    
    // preload next
    let nextIndex = (currentIndex + 1) % currentCategory.length;
    const preloadImg = new Image();
    preloadImg.src = currentCategory[nextIndex];
  }, 800); // matches CSS transition duration
}

function nextSlideManually() {
  if (isTransitioning) return;
  stopAutoplay();
  transitionTo(currentIndex + 1);
  resetAutoplay();
}

function prevSlideManually() {
  if (isTransitioning) return;
  stopAutoplay();
  transitionTo(currentIndex - 1);
  resetAutoplay();
}

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
  stopAutoplay();
});

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  prevSlideManually();
});

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  nextSlideManually();
});

// Swipe Mobile Support
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDist = touchEndX - touchStartX;
  if (swipeDist < -50) {
    nextSlideManually();
  } else if (swipeDist > 50) {
    prevSlideManually();
  }
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const cat = btn.getAttribute('data-cat');
    if (cat === 'tout') {
      window.location.href = 'realisations.html';
    } else {
      openLightbox(cat);
    }
  });
});

document.querySelectorAll('.open-lightbox-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const cat = btn.getAttribute('data-cat');
    openLightbox(cat);
  });
});

// Devis Form Submission
window.submitDevis = function(e) {
  e.preventDefault();
  const nom = document.getElementById('devis-nom').value;
  const projet = document.getElementById('devis-projet').value;
  const message = document.getElementById('devis-message').value;
  
  const text = \`Bonjour, je suis \${nom}.\\nJe souhaite demander un devis pour un projet de type : \${projet}.\\nDétails : \${message}\`;
  const whatsappUrl = \`https://wa.me/22967585650?text=Salut%2C%20j%27ai%20vu%20votre%20site%20et%20je%20voudrais%20en%20savoir%20plus.`;
  
  window.open(whatsappUrl, '_blank');
  document.getElementById('devis-modal').classList.remove('active');
  document.getElementById('devis-form').reset();
};
\`

const originalMainJs = fs.readFileSync('js/main.js', 'utf8');
const replaceIndex = originalMainJs.indexOf('const galleryData = {');
const newMainJs = originalMainJs.substring(0, replaceIndex) + galleryDataStr;
fs.writeFileSync('js/main.js', newMainJs);

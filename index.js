(function () {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const root = document.documentElement;
  const layer = document.createElement("div");
  layer.className = "matrix-effects";
  layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = `
    <div class="matrix-scanlines"></div>
    <div class="matrix-grid"></div>
    <div class="matrix-spotlight"></div>
    <div class="matrix-cursor"></div>
  `;
  document.body.appendChild(layer);

  let raf = null;

  function setPosition(x, y) {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      root.style.setProperty("--mouse-x", x + "px");
      root.style.setProperty("--mouse-y", y + "px");
      raf = null;
    });
  }

  document.addEventListener(
    "mousemove",
    (e) => {
      setPosition(e.clientX, e.clientY);
      document.body.classList.add("matrix-active");
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    document.body.classList.remove("matrix-active");
  });
})();

document.addEventListener('DOMContentLoaded', function () {
    const pianoEmbed = document.getElementById('piano-embed');
    const captionText = document.getElementById('piano-slider-caption');
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');

    // Video tracks library configuration list
    const playlist = [
        { id: "egse03uTV9k", title: "La Campanella", wiki: "https://en.wikipedia.org/wiki/La_campanella" },
        { id: "z123vsYk3nA", title: "Ballade No. 1", wiki: "https://en.wikipedia.org/wiki/Ballade_No._1_(Chopin)" },
        { id: "m1iLhY28tFQ", title: "Waterfall Etude", wiki: "https://en.wikipedia.org/wiki/%C3%89tude_Op._10,_No._1_(Chopin)" }
    ];
    
    let currentIndex = 0;

    if (!pianoEmbed || !captionText) return; // Guard logic execution check

    function updateVideo(index) {
        currentIndex = (index + playlist.length) % playlist.length;
        const video = playlist[currentIndex];
        
        // Update iframe source path link cleanly
        pianoEmbed.src = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0`;
        pianoEmbed.title = video.title;
        
        // Update label text view string
        captionText.innerHTML = `<a target="_blank" rel="noopener" href="${video.wiki}" class="term-link">${video.title}</a>`;
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            updateVideo(currentIndex + 1);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            updateVideo(currentIndex - 1);
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const photoEl = document.getElementById('cubing-photo');
    const captionEl = document.getElementById('cubing-slider-caption');
    const prevBtn = document.querySelector('.photo-btn-prev');
    const nextBtn = document.querySelector('.photo-btn-next');

    // Speed cubing photo gallery list
    const photos = [
        { src: "images/podium.png", caption: "3x3 Blindfolded 2nd place at Please be Solved Vancouver 2024 at UBC" },
        { src: "images/surreysideopenpodium.png", caption: "First place at Surrey Side Open" }
    ];

    let currentIndex = 0;

    if (!photoEl || !captionEl) return; // Guard logic execution check

    function updatePhoto(index) {
        currentIndex = (index + photos.length) % photos.length;
        const photo = photos[currentIndex];

        photoEl.src = photo.src;
        photoEl.alt = photo.caption;
        captionEl.textContent = photo.caption;
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            updatePhoto(currentIndex + 1);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            updatePhoto(currentIndex - 1);
        });
    }
});
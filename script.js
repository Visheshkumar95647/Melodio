const video = document.getElementById("zoom-video");
const maxScale = 2; 
const minScale = 1;
let lastKnownScrollPosition = 0;
let ticking = false;

function zoomOnScroll(scrollPos) {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scale = Math.min(
    maxScale,
    minScale + (scrollPos / maxScroll) * (maxScale - minScale)
  );
  video.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

window.addEventListener("scroll", () => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      zoomOnScroll(lastKnownScrollPosition);
      ticking = false;
    });
    ticking = true;
  }
});
  
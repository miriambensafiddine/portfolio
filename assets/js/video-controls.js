const videos = document.querySelectorAll('.video-wrapper video');

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.muted = true;
      video.setAttribute('playsinline', '');
      video.play();
      if (video.currentTime !== 0) {
        video.currentTime = 0;
      }
    } else {
      video.pause();
    }
  });
}, { threshold: 0.25 });

videos.forEach((video) => {
  video.muted = true;
  video.setAttribute('playsinline', '');
  videoObserver.observe(video);
});

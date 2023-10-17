document.addEventListener("DOMContentLoaded", function () {
    const imagesAndVideos = document.querySelectorAll(".photo-container > *");
    let currentIndex = 0;
  
    function showImageOrVideo(index) {
      imagesAndVideos.forEach((item, i) => {
        if (i === index) {
          item.style.display = "block";
          if (item.tagName === "VIDEO") {
            item.play(); // Start playing the video
          }
        } else {
          item.style.display = "none";
          if (item.tagName === "VIDEO") {
            item.pause(); // Pause other videos
          }
        }
      });
    }
  
    function nextImageOrVideo() {
      currentIndex = (currentIndex + 1) % imagesAndVideos.length;
      showImageOrVideo(currentIndex);
    }
  
    // Set an initial image or video.
    showImageOrVideo(currentIndex);
  
    // Automatically switch to the next image or video every 3 seconds.
    setInterval(nextImageOrVideo, 3000);
  });
  
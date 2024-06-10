document.getElementById('startButton').addEventListener('click', function() {
    navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 4096 }, height: { ideal: 2160 } } })
      .then(function(stream) {
        const videoElement = document.querySelector('video');
        if (videoElement) {
          videoElement.srcObject = stream;
        }
      })
      .catch(function(err) {
        console.log("The following error occurred: " + err.name);
      });
  
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  
    const videos = document.querySelectorAll('a-video');
    videos.forEach(video => {
      const originalSrc = video.getAttribute('src');
      const proxiedSrc = proxyUrl + originalSrc;
      video.setAttribute('src', proxiedSrc);
      video.setAttribute('autoplay', 'true');
      video.setAttribute('sound', 'src: url(' + proxiedSrc + '); autoplay: true');
    });
  
    this.style.display = 'none'; // Hide the button after starting the experience
  });
  
  const markers = document.querySelectorAll('a-marker');
  markers.forEach(marker => {
    marker.addEventListener('markerFound', function() {
      const video = this.querySelector('a-video');
      if (video) {
        console.log('Marker found. Video URL:', video.getAttribute('src'));
        video.components.sound.playSound();
      }
    });
  
    marker.addEventListener('markerLost', function() {
      const video = this.querySelector('a-video');
      if (video) {
        console.log('Marker lost. Video URL:', video.getAttribute('src'));
        video.components.sound.pauseSound();
      }
    });
  });
  
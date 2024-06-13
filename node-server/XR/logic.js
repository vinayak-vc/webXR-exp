document.addEventListener('DOMContentLoaded', function() {
    const startScreen = document.getElementById('startScreen');
    const startButton = document.getElementById('startButton');
    const toggleLogsButton = document.getElementById('toggleLogsButton');
    const logsContainer = document.getElementById('logsContainer');
    const markerInfo = document.getElementById('markerInfo');
    const scene = document.querySelector('a-scene');
    let currentVideo;

    startButton.addEventListener('click', function() {
        // Add fade-out class to startScreen
        startScreen.classList.add('fade-out');

        // Get user media with maximum resolution and back camera
        navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment'
                }
            })
            .then(function(stream) {
                const videoElement = document.querySelector('video');
                if (videoElement) {
                    videoElement.srcObject = stream;
                }
                logMessage('Camera started successfully.');
                // Hide the start screen and show the AR scene after the animation
                setTimeout(() => {
                    startScreen.style.display = 'none';
                    scene.style.display = 'block';
                    toggleLogsButton.style.display = 'block';
                }, 1000); // Match the duration of the fade-out animation
            })
            .catch(function(err) {
                logMessage("The following error occurred: " + err.name);
            });
    });

    toggleLogsButton.addEventListener('click', function() {
        logsContainer.style.display = logsContainer.style.display === 'none' ? 'block' : 'none';
    });

    logsContainer.addEventListener('click', function() {
        logsContainer.style.display = 'none';
    });

    // Get the current base URL
    const baseURL = `${window.location.protocol}//${window.location.hostname}`;

    // Listen for marker found event
    const markers = document.querySelectorAll('a-marker');
    markers.forEach(marker => {
        marker.addEventListener('markerFound', function() {
            const markerId = this.id;
            logMessage('Marker found: ' + markerId);

            // Remove existing a-assets and a-videos
            const assets = this.querySelectorAll('a-asset');
            assets.forEach(asset => asset.parentNode.removeChild(asset));

            const videos = this.querySelectorAll('a-video');
            videos.forEach(video => video.parentNode.removeChild(video));

            // Show particle effect
            const particle = document.getElementById(`particle${markerId.split('marker')[1]}`);
            particle.setAttribute('visible', 'true');

            markerInfo.innerText = `Marker Found: ${markerId}`;
            markerInfo.style.display = 'block';

            fetch(`${baseURL}/getVideoUrl?marker=${markerId}`)
                .then(response => response.json())
                .then(data => {
                    const videoUrl = `${data.url}`;
                    logMessage('Video URL: ' + videoUrl);

                    let aasset = document.createElement('a-asset');
                    this.appendChild(aasset);
                    let video = document.createElement('video');

                    video.setAttribute('id', `myVideo${markerId}${new Date().toLocaleTimeString()}`);
                    video.setAttribute('src', videoUrl);
                    video.setAttribute('autoplay', 'true');
                    video.setAttribute('loop', 'true');

                    aasset.appendChild(video);
                    this.appendChild(aasset);

                    video.addEventListener('loadedmetadata', function() {
                        const aspectRatio = video.videoWidth / video.videoHeight;
                        const width = -0.5 * aspectRatio;
                        const height = 0.5;

                        currentVideo = document.createElement('a-video');
                        currentVideo.setAttribute('src', `#${video.id}`);
                        currentVideo.setAttribute('width', width);
                        currentVideo.setAttribute('height', height);
                        currentVideo.setAttribute('rotation', '125 270 90'); // Adjust rotation if needed
                        currentVideo.setAttribute('position', '0 0 0'); // Adjust position if needed
                        currentVideo.setAttribute('autoplay', 'true');
                        currentVideo.setAttribute('loop', 'true');

                        currentVideo.setAttribute('animation', 'property: scale; to: 2 2 2; easing: easeInOutQuad; dur: 1000');
                        currentVideo.setAttribute('animation__fadein', 'property: opacity; from: 0; to: 1; easing: easeInOutQuad; dur: 1000');

                        // Add border
                        currentVideo.setAttribute('material', 'shader: flat; side: double; color: white; opacity: 1;');

                        currentVideo.addEventListener('canplaythrough', function() {
                            logMessage('Video can play through.');
                            particle.setAttribute('visible', 'false'); // Hide particle effect
                        });
                        currentVideo.addEventListener('error', function() {
                            logMessage('Error loading video: ' + videoUrl);
                        });

                        marker.appendChild(currentVideo);
                    });
                })
                .catch(error => {
                    logMessage('Error fetching video URL: ' + error.message);
                });
        });

        marker.addEventListener('markerLost', function() {
            logMessage('Marker lost');

            markerInfo.innerText = 'Marker Found: None';
            markerInfo.style.display = 'block';

            let aasset = this.querySelector('a-asset');
            if (aasset) {
                let video = aasset.querySelector('video');
                video.pause();
                video.src = '';
                video.load();

                this.removeChild(aasset);
            }

            let existingVideo = this.querySelector('a-video');
            if (existingVideo) {
                this.removeChild(existingVideo);
            }

            const particle = document.getElementById(`particle${this.id.split('marker')[1]}`);
            particle.setAttribute('visible', 'false'); // Hide particle effect
        });
    });

    function logMessage(message) {
        const logEntry = document.createElement('div');
        logEntry.textContent = message;
        logsContainer.appendChild(logEntry);
    }

    // Utility function to create a new video element
    function createVideoElement(id, src) {
        let video = document.createElement('video');
        video.setAttribute('id', id);
        video.setAttribute('src', src);
        video.setAttribute('autoplay', 'true');
        video.setAttribute('loop', 'true');
        video.setAttribute('crossorigin', 'anonymous');
        return video;
    }
});
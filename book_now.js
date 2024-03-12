function updatePackageName(selectElement) {
  var packageNameInput = document.getElementById("packageName");
  var selectedOption = selectElement.options[selectElement.selectedIndex].text;
  packageNameInput.value = selectedOption;
}
window.addEventListener('DOMContentLoaded', function() {
  // Get the video element
  var video = document.getElementById('bgVideo');

  // Play the video
  video.play();

  // Pause the video when it's out of view
  window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
      var videoPosition = video.getBoundingClientRect().top;

      if (videoPosition > window.innerHeight || videoPosition < 0) {
          video.pause();
      } else {
          video.play();
      }
  });
});
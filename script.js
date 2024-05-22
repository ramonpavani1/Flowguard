function showCameras(startIndex) {
  const cameras = document.querySelectorAll(".camera");
  cameras.forEach((camera, index) => {
    if (index >= startIndex - 1 && index <= startIndex + 1) {
      camera.style.display = "block";
    } else {
      camera.style.display = "none";
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const cameras = document.querySelectorAll('.camera');
  cameras.forEach(camera => {
      camera.style.visibility = 'visible';
  });
});

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

function showName(name) {
  document.getElementById("selectedName").innerHTML = name;
}

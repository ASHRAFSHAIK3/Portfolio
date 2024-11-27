function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    const mainContent = document.querySelector('.main-content');
    navbar.classList.toggle('minimized');
    if (navbar.classList.contains('minimized')) {
        mainContent.style.marginLeft = '100px';
    } else {
        mainContent.style.marginLeft = '270px';
    }
}
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'C:\Users\rahee\OneDrive\Desktop\Ibbu Projects\portfolio\Shaik Ashraf RESUME.pdf'; // Replace with the actual path to the CV
    link.download = 'YourName_CV.pdf'; // The name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

        // Function to wrap each letter of a text within a span for animation
        function wrapText(selector) {
            var textWrapper = document.querySelector(selector);
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        }

        // Wrapping text for h1 and h4 elements
        wrapText('.ani');
        wrapText('.mew');

        // Anime.js timeline for h1 and h4 animations (same animation for both)
        anime.timeline({loop: false})
        .add({
            targets: '.ani .letter, .mew .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1200,
            delay: (el, i) => 30 * i  // Animating each letter of h1 and h4
        })
        // Different animation for paragraph (fade in and slide up)
        .add({
            targets: '.nope',
            opacity: [0, 1],
            translateY: [20, 0],  // Sliding up effect
            easing: "easeOutQuad",
            duration: 1000,
            offset: '-=200'  // Starts a bit after h1 and h4 animations
        });

        // Placeholder function for the download CV button
        function downloadCV() {
            alert("Download CV functionality is not yet implemented.");
        }
        var textWrapper = document.querySelector('.text_box .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.text_box .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.text_box',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  // Function to download CV
  function downloadCV() {
      const link = document.createElement('a');
      link.href = 'C:\Users\rahee\OneDrive\Desktop\Ibbu Projects\portfolio\Shaik Ashraf RESUME.pdf';  // Replace with the actual CV file path
      link.download = 'Shaik_Ashraf_CV.pdf';  // The name for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);  // Clean up the element
  }
  function openModal(imageSrc) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("certModal").style.display = "block";
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}

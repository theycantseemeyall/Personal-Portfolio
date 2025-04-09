// Smooth scroll to About Me section and show the About Me section
function scrollToAbout() {
    const aboutSection = document.getElementById("about-me");

    // Scroll smoothly to the About Me section
    aboutSection.scrollIntoView({ behavior: "smooth" });

    // Show the About Me section
    showSection('about-me');
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section-content');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the clicked section
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}
// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true, // Enable looping of slides
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 10, // Space between slides
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Enable clickable pagination
    },
});

// Event listener for when the slide changes
swiper.on('slideChange', function () {
    // Get the index of the current slide
    const currentIndex = swiper.activeIndex;
    
    // Hide all images
    const allImages = document.querySelectorAll('.swiper-slide .slide-img');
    allImages.forEach(image => {
        image.style.display = 'none'; // Hide image
    });

    // Show the image of the current slide
    const currentSlideImage = document.querySelectorAll('.swiper-slide')[currentIndex].querySelector('.slide-img');
    if (currentSlideImage) {
        currentSlideImage.style.display = 'block'; // Show current slide's image
    }
});

// Initial setup to show the first slide's image
const initialImage = document.querySelectorAll('.swiper-slide')[swiper.activeIndex].querySelector('.slide-img');
if (initialImage) {
    initialImage.style.display = 'block';
}


var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

  // Example Swiper initialization
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,  // Adjust number of visible slides
    spaceBetween: 10,  // Space between slides
    loop: true,        // Loop slides
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
document.getElementById('your-button-id').addEventListener('click', function() {
    // Your code here to switch sections or content
});
// Smooth scroll to About Me section and show the About Me section
function scrollToAbout() {
    const aboutSection = document.getElementById("about-me");

    // Scroll smoothly to the About Me section
    aboutSection.scrollIntoView({ behavior: "smooth" });

    // Show the About Me section
    showSection('about-me');
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section-content');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the clicked section
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}

// Ensure the home section is displayed by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

// Swiper initialization
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,  // Adjust number of visible slides
    spaceBetween: 10,  // Space between slides
    loop: true,        // Loop slides
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


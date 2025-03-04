// Modal functionality
const modal = document.getElementById("bookingModal");
const bookNowButton = document.getElementById("book-now");
const closeButton = document.querySelector(".close");

bookNowButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Booking form submission
const bookingForm = document.getElementById("booking-form");
bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const checkinDate = document.getElementById("checkin-date").value;
  const checkoutDate = document.getElementById("checkout-date").value;

  if (!name || !email || !checkinDate || !checkoutDate) {
    alert("Please fill out all fields.");
    return;
  }

  if (new Date(checkinDate) >= new Date(checkoutDate)) {
    alert("Check-out date must be after check-in date.");
    return;
  }

  alert(`Booking successful for ${name} from ${checkinDate} to ${checkoutDate}`);
  modal.style.display = "none"; // Closes modal after submission
});

// About Us Audio
const aboutAudioButton = document.getElementById('play-about-audio');
const aboutAudio = document.getElementById('about-audio');

aboutAudioButton.addEventListener('click', () => {
  if (aboutAudio.paused) {
    aboutAudio.play();
    aboutAudioButton.textContent = 'Pause About Us Audio';
  } else {
    aboutAudio.pause();
    aboutAudioButton.textContent = 'Play About Us Audio';
  }
});

// Facility Audio
const facilityButtons = document.querySelectorAll('.play-facility-audio');
facilityButtons.forEach((button) => {
  const audio = button.nextElementSibling;
  button.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      button.textContent = 'Pause Audio';
    } else {
      audio.pause();
      button.textContent = 'Play Audio';
    }
  });
});

// Mobile Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  if (navMenu.classList.contains('active')) {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
  }
});

// Smooth Scrolling
// Smooth Scrolling with Animation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = link.getAttribute('href'); // Get target section
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust to avoid overlap with fixed header
        behavior: 'smooth' // Enables smooth scrolling
      });
    }
  });
});


// Function to handle fade-in effect
const fadeInElements = document.querySelectorAll('.fade-in');

// Options for the Intersection Observer
const options = {
  threshold: 0.3 // Trigger the animation when 30% of the element is in view
};

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Adding visible class to:", entry.target); // Debugging
      entry.target.classList.add('visible'); 
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, { threshold: 0.3 });

// Observe each fade-in element
fadeInElements.forEach(element => {
  observer.observe(element);
});

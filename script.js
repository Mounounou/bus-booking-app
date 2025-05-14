document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission (for demo purposes)

  const form = document.getElementById("bookingForm");

  // Check if the form is valid
  if (form.checkValidity()) {
    // Show the success message if valid
    alert("Step 1 complete! Next: Seat selection UI (coming soon)");
  } else {
    // Show a message asking for validation if form is not valid
    alert("Please fill out all fields before proceeding.");
  }
});

const languageData = {
  en: {
    heroTitle: "Book Your Bus Ticket in Seconds",
    heroDescription: "Fast, reliable, and comfortable travel booking platform.",
    buttonText: "Book Now",
    whyChooseTitle: "Why Choose Bus Booking?",
    feature1: " Easy Booking",
    feature1Description: "Book your bus ticket in just a few clicks with a smooth and intuitive interface.",
    feature2: " Live Tracking",
    feature2Description: "Track your bus in real-time and stay informed every step of the way.",
    feature3: " Instant Tickets",
    feature3Description: "Get your tickets delivered instantly via email and in your dashboard.",
    bookingFormTitle: "Book a Trip",
    bookingFormButton: "Next"
  },
  fr: {
    heroTitle: "Réservez votre billet de bus en quelques secondes",
    heroDescription: "Plateforme de réservation rapide, fiable et confortable.",
    buttonText: "Réservez maintenant",
    whyChooseTitle: "Pourquoi choisir Bus Booking ?",
    feature1: " Réservation facile",
    feature1Description: "Réservez votre billet de bus en quelques clics avec une interface fluide et intuitive.",
    feature2: " Suivi en direct",
    feature2Description: "Suivez votre bus en temps réel et restez informé à chaque étape.",
    feature3: " Billets instantanés",
    feature3Description: "Recevez vos billets instantanément par email et dans votre tableau de bord.",
    bookingFormTitle: "Réservez un voyage",
    bookingFormButton: "Suivant"
  },
  ar: {
    heroTitle: "احجز تذكرة الحافلة في ثوانٍ",
    heroDescription: "منصة حجز سفر سريعة وموثوقة ومريحة.",
    buttonText: "احجز الآن",
    whyChooseTitle: "لماذا تختار Bus Booking؟",
    feature1: "حجز سهل",
    feature1Description: "احجز تذكرة الحافلة في بضع نقرات مع واجهة سلسة وبديهية.",
    feature2: " تتبع مباشر",
    feature2Description: "تتبع الحافلة في الوقت الفعلي وابق على اطلاع بكل خطوة.",
    feature3: " تذاكر فورية",
    feature3Description: "استلم تذاكرك فورًا عبر البريد الإلكتروني وفي لوحة التحكم الخاصة بك.",
    bookingFormTitle: "احجز رحلة",
    bookingFormButton: "التالي"
  }
};

document.getElementById('language-select').addEventListener('change', (e) => {
  const selectedLanguage = e.target.value;
  changeLanguage(selectedLanguage);
});

function changeLanguage(language) {
  document.querySelector('.hero h2').innerText = languageData[language].heroTitle;
  document.querySelector('.hero p').innerText = languageData[language].heroDescription;
  document.querySelector('.btn-primary').innerText = languageData[language].buttonText;
  
  document.querySelector('#features h2').innerText = languageData[language].whyChooseTitle;
  
  const features = document.querySelectorAll('.feature-card');
  features[0].querySelector('h3').innerText = languageData[language].feature1;
  features[0].querySelector('p').innerText = languageData[language].feature1Description;
  features[1].querySelector('h3').innerText = languageData[language].feature2;
  features[1].querySelector('p').innerText = languageData[language].feature2Description;
  features[2].querySelector('h3').innerText = languageData[language].feature3;
  features[2].querySelector('p').innerText = languageData[language].feature3Description;
  
  document.querySelector('.booking-form h2').innerText = languageData[language].bookingFormTitle;
  document.querySelector('.booking-form button').innerText = languageData[language].bookingFormButton;
}

document.addEventListener("DOMContentLoaded", function () {
  // Login Modal
  const loginBtn = document.getElementById("loginBtn");
  const loginModal = document.getElementById("loginModal");
  const closeBtn = document.querySelector(".close");

  loginBtn.onclick = () => loginModal.style.display = "block";
  closeBtn.onclick = () => loginModal.style.display = "none";

  window.onclick = function (event) {
    if (event.target == loginModal) {
      loginModal.style.display = "none";
    }
  };

  // Forgot Password
  document.getElementById("forgotPassword").addEventListener("click", function () {
    showForgotPasswordModal();
  });

  // Login Form Submit
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Logged in successfully! (This is just a placeholder for now.)");
    loginModal.style.display = "none";
  });
});

function showForgotPasswordModal() {
  const forgotPasswordModal = document.createElement('div');
  forgotPasswordModal.id = 'forgotPasswordModal';
  forgotPasswordModal.className = 'modal';
  forgotPasswordModal.innerHTML = `
    <div class="modal-content">
      <h2>Forgotten Password</h2>
      <p>Please enter your email address to reset your password:</p>
      <input type="email" id="resetEmail" placeholder="Email address" />
      <button id="sendReset">Send Reset Link</button>
    </div>
  `;
  document.body.appendChild(forgotPasswordModal);
  forgotPasswordModal.style.display = 'block';

  window.addEventListener("click", function (e) {
    if (e.target === forgotPasswordModal) {
      forgotPasswordModal.style.display = "none";
      document.body.removeChild(forgotPasswordModal);
    }
  });

  // Handle Send Reset Link
  document.getElementById('sendReset').addEventListener('click', function () {
    const email = document.getElementById('resetEmail').value;
    if (email) {
      alert("Password reset link sent to: " + email); // Placeholder for actual action
      forgotPasswordModal.style.display = "none";
      document.body.removeChild(forgotPasswordModal);
    } else {
      alert("Please enter a valid email address.");
    }
  });
}

// Create Account Modal Handling
document.getElementById("createAccount").addEventListener("click", function() {
  document.getElementById("createAccountModal").style.display = "block";
});

// Close when clicking outside the modal content
document.addEventListener("click", function(event) {
  const modal = document.getElementById("createAccountModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Handle Create Account Form Submit
document.getElementById("createAccountForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Get form values
  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  // Simple validation
  if (!Object.values(formData).every(Boolean)) {
    alert("Please fill in all fields");
    return;
  }

  // Process the form (in a real app, you would send this to a server)
  console.log("Account created:", formData);
  alert("Account created successfully!");
  
  // Close modal and reset form
  document.getElementById("createAccountModal").style.display = "none";
  this.reset();
});
// JavaScript validation for Confirm Password
document.getElementById("createAccountForm").addEventListener("submit", function(event) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    event.preventDefault(); // Prevent form submission
  }
});
// Seat selection logic
const seats = document.querySelectorAll('.seat');
const bookBtn = document.getElementById('bookBtn');

let selectedSeats = [];

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    if (seat.classList.contains('available')) {
      seat.classList.toggle('selected');
      const seatNumber = seat.getAttribute('data-seat');

      if (seat.classList.contains('selected')) {
        selectedSeats.push(seatNumber);
      } else {
        selectedSeats = selectedSeats.filter(s => s !== seatNumber);
      }
    }
  });
});

bookBtn.addEventListener('click', () => {
  if (selectedSeats.length > 0) {
    alert(`You have selected seats: ${selectedSeats.join(', ')}`);
    // Future: Redirect to payment or confirmation page
  } else {
    alert("Please select at least one seat.");
  }
});

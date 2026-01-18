// DOM Elements
const loginForm = document.getElementById("loginForm");
const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");
const logoutBtn = document.getElementById("logoutBtn");
const loginMessage = document.getElementById("loginMessage");

// Stored credentials
const ownerUsername = "admin";
const ownerPassword = "1234";

// Check login status on page load
if (localStorage.getItem("isLoggedIn") === "true") {
  showDashboard();
} else {
  showLoginForm();
}

// Handle login form submission
loginForm?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === ownerUsername && password === ownerPassword) {
    localStorage.setItem("isLoggedIn", "true");
    showDashboard();
  } else {
    loginMessage.textContent = "Invalid credentials. Try again.";
    loginMessage.classList.add("animate__animated", "animate__shakeX");
    setTimeout(() => {
      loginMessage.classList.remove("animate__animated", "animate__shakeX");
    }, 1000);
  }
});

// Handle logout
logoutBtn?.addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "admin.html";
});

// Show dashboard section
function showDashboard() {
  loginSection.style.display = "none";
  dashboardSection.style.display = "block";
  dashboardSection.classList.add("animate__animated", "animate__fadeIn");
}

// Show login form section
function showLoginForm() {
  loginSection.style.display = "block";
  dashboardSection.style.display = "none";
}
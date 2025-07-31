// PART 1: Basic Event Handling
document.getElementById("greetBtn").addEventListener("click", () => {
  document.getElementById("greetMessage").classList.toggle("hidden");
});

// PART 2: Light/Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// PART 2: Collapsible FAQ
document.querySelectorAll(".faq-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// PART 3: Form Validation
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("formFeedback");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  feedback.textContent = ""; // Clear previous messages

  if (name === "" || email === "" || password === "") {
    feedback.textContent = "All fields are required!";
    feedback.style.color = "red";
  } else if (!emailRegex.test(email)) {
    feedback.textContent = "Invalid email address!";
    feedback.style.color = "red";
  } else if (password.length < 6) {
    feedback.textContent = "Password must be at least 6 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Successfully registered!";
    feedback.style.color = "green";
  }
});

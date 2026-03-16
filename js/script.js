const REVIEWS_KEY = "gmTailorsReviews";
const VISIT_REQUESTS_KEY = "gmTailorsVisitRequests";
const ADMIN_PHONE = "9423706998";

initAdminPage();
initHomePage();

function initAdminPage() {
  const loginForm = document.getElementById("loginForm");
  const loginSection = document.getElementById("loginSection");
  const dashboardSection = document.getElementById("dashboardSection");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginMessage = document.getElementById("loginMessage");

  if (!loginSection || !dashboardSection) {
    return;
  }

  const ownerUsername = "admin";
  const ownerPassword = "1234";

  if (localStorage.getItem("isLoggedIn") === "true") {
    showDashboard();
  } else {
    showLoginForm();
  }

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")?.value.trim();
    const password = document.getElementById("password")?.value.trim();

    if (username === ownerUsername && password === ownerPassword) {
      localStorage.setItem("isLoggedIn", "true");
      showDashboard();
      return;
    }

    if (loginMessage) {
      loginMessage.textContent = "Invalid credentials. Try again.";
    }
  });

  logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "admin.html";
  });

  function showDashboard() {
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
  }

  function showLoginForm() {
    loginSection.style.display = "block";
    dashboardSection.style.display = "none";
  }
}

function initHomePage() {
  initStarRating();
  initFeedbackForm();
  initReviewPreview();
  initCounterAnimation();
  initFilters();
  initEstimator();
  initAppointmentForm();
  initRevealAnimations();
  initTiltEffects();
  initHeroScene();
}

function initStarRating() {
  const ratingInput = document.getElementById("rating");
  const stars = Array.from(document.querySelectorAll(".star-rating span"));

  if (!ratingInput || stars.length === 0) {
    return;
  }

  const paintStars = (rating) => {
    stars.forEach((star) => {
      const value = Number(star.dataset.value);
      star.classList.toggle("is-active", value <= rating);
    });
  };

  stars.forEach((star) => {
    star.addEventListener("mouseenter", () => {
      paintStars(Number(star.dataset.value));
    });

    star.addEventListener("click", () => {
      ratingInput.value = star.dataset.value || "0";
      paintStars(Number(ratingInput.value));
    });
  });

  const container = stars[0]?.parentElement;
  container?.addEventListener("mouseleave", () => {
    paintStars(Number(ratingInput.value));
  });
}

function initFeedbackForm() {
  const feedbackForm = document.getElementById("feedbackForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  if (!feedbackForm || !thankYouMessage) {
    return;
  }

  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const feedback = document.getElementById("feedback")?.value.trim();
    const rating = Number(document.getElementById("rating")?.value || 0);

    if (!name || !feedback || rating < 1) {
      thankYouMessage.textContent = "Please complete your name, feedback, and star rating.";
      thankYouMessage.classList.remove("hidden");
      return;
    }

    const reviews = getStoredReviews();
    reviews.unshift({
      name,
      feedback,
      rating,
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    });

    localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews.slice(0, 12)));
    thankYouMessage.textContent = "Thank you for your feedback. Your review has been saved.";
    thankYouMessage.classList.remove("hidden");
    feedbackForm.reset();
    const ratingInput = document.getElementById("rating");
    if (ratingInput) {
      ratingInput.value = "0";
    }
    document.querySelectorAll(".star-rating span").forEach((star) => {
      star.classList.remove("is-active");
    });
    initReviewPreview();
  });
}

function initReviewPreview() {
  const reviewPreview = document.getElementById("reviewPreview");

  if (!reviewPreview) {
    return;
  }

  const reviews = getStoredReviews().slice(0, 3);
  if (reviews.length === 0) {
    reviewPreview.innerHTML = '<div class="review-card">No reviews yet. Be the first to leave one.</div>';
    return;
  }

  reviewPreview.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card">
          <strong>${escapeHtml(review.name)}</strong>
          <div class="review-stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
          <p>${escapeHtml(review.feedback)}</p>
          <small>${escapeHtml(review.date)}</small>
        </article>
      `,
    )
    .join("");
}

function initCounterAnimation() {
  const counters = document.querySelectorAll("[data-counter]");

  if (counters.length === 0 || typeof IntersectionObserver === "undefined") {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.counted === "true") {
        return;
      }

      const target = Number(entry.target.dataset.counter || 0);
      const duration = 1200;
      const startTime = performance.now();

      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        entry.target.textContent = Math.floor(progress * target).toLocaleString("en-IN");
        if (progress < 1) {
          requestAnimationFrame(step);
          return;
        }

        entry.target.textContent = target.toLocaleString("en-IN");
        entry.target.dataset.counted = "true";
      };

      requestAnimationFrame(step);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
}

function initFilters() {
  const buttons = Array.from(document.querySelectorAll(".filter-btn"));
  const items = Array.from(document.querySelectorAll(".product-item"));

  if (buttons.length === 0 || items.length === 0) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      items.forEach((item) => {
        const categories = (item.dataset.category || "").split(" ");
        const match = filter === "all" || categories.includes(filter);
        item.classList.toggle("is-hidden", !match);
      });
    });
  });
}

function initEstimator() {
  const garmentType = document.getElementById("garmentType");
  const fitType = document.getElementById("fitType");
  const timeline = document.getElementById("timeline");
  const result = document.getElementById("estimatorResult");

  if (!garmentType || !fitType || !timeline || !result) {
    return;
  }

  const garmentBase = { suit:1200 , shirt: 450, pant: 650 };
  const fitMultiplier = { classic: 1, slim: 1.12, wedding: 1.4 };
  const fittingDays = {
    standard: "5-7 days",
    priority: "2-3 days",
  };

  const updateResult = () => {
    const basePrice = garmentBase[garmentType.value] || 0;
    const multiplier = fitMultiplier[fitType.value] || 1;
    const rushCharge = timeline.value === "priority" ? 700 : 0;
    const price = Math.round(basePrice * multiplier + rushCharge);
    result.textContent = `Estimated starting price: Rs. ${price.toLocaleString("en-IN")} | Trial and delivery window: ${fittingDays[timeline.value]}.`;
  };

  [garmentType, fitType, timeline].forEach((field) => {
    field.addEventListener("change", updateResult);
  });

  updateResult();
}

function initAppointmentForm() {
  const form = document.getElementById("appointmentForm");
  const message = document.getElementById("appointmentMessage");

  if (!form || !message) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("visitorName")?.value.trim();
    const phone = document.getElementById("visitorPhone")?.value.trim();
    const need = document.getElementById("visitType")?.value;
    const preferredDate = document.getElementById("visitDate")?.value || "";
    const notes = document.getElementById("visitNotes")?.value.trim() || "";

    if (!name || !phone) {
      message.textContent = "Please enter your name and phone number.";
      message.classList.remove("hidden");
      return;
    }

    const request = {
      id: createId("visit"),
      customer: name,
      phone,
      need,
      preferredDate,
      notes,
      status: "New",
      createdAt: new Date().toISOString(),
    };

    const requests = getStoredVisitRequests();
    requests.unshift(request);
    localStorage.setItem(VISIT_REQUESTS_KEY, JSON.stringify(requests.slice(0, 100)));

    const whatsappLink = createWhatsAppLink(request);
    const smsLink = createSmsLink(request);
    message.innerHTML = `
      <strong>${escapeHtml(name)}</strong>, your visit request was sent successfully.
      It is now saved for the admin dashboard.
      <br />
      Admin alert:
      <a href="${whatsappLink}" target="_blank" rel="noreferrer">WhatsApp ${escapeHtml(ADMIN_PHONE)}</a>
      |
      <a href="${smsLink}">SMS ${escapeHtml(ADMIN_PHONE)}</a>
    `;
    message.classList.remove("hidden");
    form.reset();

    window.open(whatsappLink, "_blank", "noopener");
  });
}

function initRevealAnimations() {
  const revealItems = document.querySelectorAll("[data-reveal]");

  if (revealItems.length === 0) {
    return;
  }

  if (typeof IntersectionObserver === "undefined") {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
}

function initTiltEffects() {
  const tiltItems = document.querySelectorAll("[data-tilt]");

  tiltItems.forEach((item) => {
    item.addEventListener("mousemove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -18;
      item.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateZ(10px)`;
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "";
    });
  });
}

function initHeroScene() {
  const heroScene = document.getElementById("heroScene");

  if (!heroScene) {
    return;
  }

  heroScene.addEventListener("mousemove", (event) => {
    const rect = heroScene.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * -12;
    heroScene.style.transform = `rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
  });

  heroScene.addEventListener("mouseleave", () => {
    heroScene.style.transform = "";
  });
}

function getStoredReviews() {
  try {
    return JSON.parse(localStorage.getItem(REVIEWS_KEY) || "[]");
  } catch (error) {
    return [];
  }
}

function getStoredVisitRequests() {
  try {
    const value = JSON.parse(localStorage.getItem(VISIT_REQUESTS_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (error) {
    return [];
  }
}

function createWhatsAppLink(request) {
  const text = [
    "New GM Tailors visit request",
    `Customer: ${request.customer}`,
    `Phone: ${request.phone}`,
    `Need: ${request.need}`,
    `Preferred date: ${request.preferredDate || "Not provided"}`,
    `Notes: ${request.notes || "None"}`,
  ].join("\n");

  return `https://wa.me/91${ADMIN_PHONE}?text=${encodeURIComponent(text)}`;
}

function createSmsLink(request) {
  const body = [
    "New GM Tailors visit request",
    `Customer: ${request.customer}`,
    `Phone: ${request.phone}`,
    `Need: ${request.need}`,
    `Preferred date: ${request.preferredDate || "Not provided"}`,
  ].join("\n");

  return `sms:+91${ADMIN_PHONE}?body=${encodeURIComponent(body)}`;
}

function createId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

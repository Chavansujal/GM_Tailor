const REVIEWS_KEY = "gmTailorsReviews";
const feedbackList = document.getElementById("feedbackList");

if (feedbackList) {
  const reviews = getStoredReviews();

  if (reviews.length === 0) {
    feedbackList.innerHTML = '<div class="review-card">No saved customer feedback yet.</div>';
  } else {
    feedbackList.innerHTML = reviews
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
}

function getStoredReviews() {
  try {
    return JSON.parse(localStorage.getItem(REVIEWS_KEY) || "[]");
  } catch (error) {
    return [];
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rangeForm");
  const evenList = document.getElementById("evenList");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Clear previous results
    evenList.innerHTML = "";

    // Get input values
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);

    // Validate input
    if (isNaN(start) || isNaN(end)) {
      alert("Please enter valid numbers.");
      return;
    }

    if (start > end) {
      alert("Start number must be less than or equal to end number.");
      return;
    }

    // Generate even numbers
    let hasEven = false;
    for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
        const li = document.createElement("li");
        li.textContent = i;
        evenList.appendChild(li);
        hasEven = true;
      }
    }

    if (!hasEven) {
      const li = document.createElement("li");
      li.textContent = "No even numbers found in this range.";
      evenList.appendChild(li);
    }
  });
});

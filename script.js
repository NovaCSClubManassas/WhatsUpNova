document.addEventListener("DOMContentLoaded", () => {
    // Character counters
    document.querySelectorAll("[data-counter]").forEach(input => {
      const counter = document.getElementById(input.dataset.counter);
      if (counter) {
        input.addEventListener("input", () => counter.textContent = input.value.length);
      }
    });
  
    // Auto end time
    const duration = document.getElementById("eventDuration");
    const start = document.getElementById("eventTime");
    const end = document.getElementById("eventEndTime");
    if (duration && start && end) {
      const updateEndTime = () => {
        if (duration.value && duration.value !== "custom" && start.value) {
          const [h, m] = start.value.split(":");
          const date = new Date();
          date.setHours(h);
          date.setMinutes(m + parseInt(duration.value));
          end.value = date.toTimeString().slice(0, 5);
        }
      };
      duration.onchange = start.onchange = updateEndTime;
    }
  
    // Password strength
    const pwd = document.getElementById("password");
    const bar = document.getElementById("strengthBar");
    if (pwd && bar) {
      pwd.addEventListener("input", () => {
        let s = 0;
        if (pwd.value.length >= 8) s++;
        if (pwd.value.match(/[a-z]/) && pwd.value.match(/[A-Z]/)) s++;
        if (pwd.value.match(/[0-9]/)) s++;
        if (pwd.value.match(/[^a-zA-Z0-9]/)) s++;
        bar.className = "password-strength-bar";
        if (s <= 2) bar.classList.add("strength-weak");
        else if (s === 3) bar.classList.add("strength-medium");
        else if (s >= 4) bar.classList.add("strength-strong");
      });
    }
  
    // Day tabs (index.html)
    document.querySelectorAll(".day-tab").forEach(tab => {
      tab.onclick = () => {
        document.querySelectorAll(".day-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
      };
    });
  });
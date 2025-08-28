document.addEventListener("DOMContentLoaded", () => {
  const heartCount = document.getElementById("heartCount");
  const copyCountEl = document.getElementById("copyCount");
  const coinCount = document.getElementById("coinCount");
  const callHistory = document.getElementById("callHistory");
  const clearHistory = document.getElementById("clearHistory");

  let hearts = 0;
  let copies = 0;
  let coins = 100;

  // ❤️ Heart Toggle
  document.querySelectorAll(".heart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.textContent === "🤍") {
        btn.textContent = "💗";
        btn.classList.add("text-red-500");
        hearts++;
      } else {
        btn.textContent = "🤍";
        btn.classList.remove("text-red-500");
        hearts--;
      }
      heartCount.textContent = hearts;
    });
  });

  // 📋 Copy
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".service-card");
      const number = card.dataset.number;
      navigator.clipboard.writeText(number);

      // Increase Copy Counter
      copies++;
      copyCountEl.textContent = copies;

      alert(`Copied: ${number}`);
    });
  });

  // 📞 Call
  document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      const card = btn.closest(".service-card");
      const title = card.dataset.title;
      const number = card.dataset.number;

      alert(`Calling ${title} at ${number}`);
      coins -= 20;
      coinCount.textContent = coins;

      // 🕒 Add Call to History
      const time = new Date().toLocaleTimeString();
      if (callHistory.children[0]?.textContent === "No recent calls") {
        callHistory.innerHTML = "";
      }

      const li = document.createElement("li");
      li.innerHTML = `<span class="font-semibold">${title}</span> - ${number} <br><span class="text-gray-500 text-xs">${time}</span>`;
      callHistory.prepend(li);
    });
  });

  // 🗑 Clear History
  clearHistory.addEventListener("click", () => {
    callHistory.innerHTML = `<li class="text-gray-400">No recent calls</li>`;
  });
});

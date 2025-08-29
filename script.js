document.addEventListener("DOMContentLoaded", () => {
  const heartCount = document.getElementById("heartCount");
  const copyCountEl = document.getElementById("copyCount");
  const coinCount = document.getElementById("coinCount");
  const callHistory = document.getElementById("callHistory");
  const clearHistory = document.getElementById("clearHistory");

  let hearts = 0;
  let copies = 0;
  let coins = 100;

  //  Heart Toggle
  document.querySelectorAll(".heart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const liked = btn.dataset.liked === "true";

      if (liked) {
        btn.textContent = "🤍";
        btn.classList.remove("text-red-500");
        hearts = Math.max(0, hearts - 1);
        btn.dataset.liked = "false";
      } else {
        btn.textContent = "❤️";
        btn.classList.add("text-red-500");
        hearts++;
        btn.dataset.liked = "true";
      }
      heartCount.textContent = hearts;
    });
  });

  //  Copy
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".service-card");
      const number = card?.dataset.number;

      if (!number) return;

      navigator.clipboard.writeText(number).then(() => {
        copies++;
        copyCountEl.textContent = copies;
        alert(`Copied: ${number}`);
      }).catch(() => {
        alert("Failed to copy!");
      });
    });
  });

  //  Call
  document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      const card = btn.closest(".service-card");
      const title = card?.dataset.title || "Unknown Service";
      const number = card?.dataset.number || "N/A";

      alert(`Calling ${title} at ${number}`);

      coins = Math.max(0, coins - 20);
      coinCount.textContent = coins;

      //  Add Call to History

 const time = new Date().toLocaleTimeString();
      if (callHistory.firstElementChild?.textContent === "No recent calls") {
        callHistory.innerHTML = "";
      }

      const li = document.createElement("li");
      li.className = "flex justify-between items-center border-b pb-1"; // flex row layout
      li.innerHTML = `
        <div>
          <span class="font-semibold">${title}</span> <br> ${number}
        </div>
        <span class="text-gray-500 text-xs">${time}</span>
      `;
      callHistory.prepend(li);
    });
  }); 

  //  Clear History
  clearHistory.addEventListener("click", () => {
    callHistory.innerHTML = `<li class="text-gray-400">No recent calls</li>`;
  });
});
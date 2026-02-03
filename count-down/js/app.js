const endDate = "January 10, 2026 23:59:00";

document.getElementById('endDate').innerText = endDate;

const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff <= 0) {
    inputs.forEach(input => input.value = 0);
    clearInterval(timer);
    return;
  }

  inputs[0].value = Math.floor(diff / 3600 / 24);        // Days
  inputs[1].value = Math.floor(diff / 3600) % 24;       // Hours
  inputs[2].value = Math.floor(diff / 60) % 60;         // Minutes
  inputs[3].value = Math.floor(diff) % 60;              // Seconds
};

clock();
const timer = setInterval(clock, 1000);

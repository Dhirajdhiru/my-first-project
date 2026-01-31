const pad = (value) => String(value).padStart(2, "0");

const updateTimer = () => {
  const now = new Date();
  const end = new Date();
  end.setHours(now.getHours() + 6);
  end.setMinutes(now.getMinutes() + 25);
  end.setSeconds(now.getSeconds() + 15);

  const diff = end - now;
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
};

updateTimer();
setInterval(updateTimer, 1000);

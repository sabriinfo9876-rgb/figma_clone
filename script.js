document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".rating .item");
  
    items.forEach((item) => {
      const counter = item.querySelector(".counter");
      if (!counter) return;
  
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      
      // Shuruat mein full target value hi dikhegi
      counter.innerText = target + suffix;
  
      let timer = null; // Purane ongoing timer ko clear karne ke liye
  
      item.addEventListener("mouseenter", () => {
        // Agar pehle se koi animation chal rahi ho toh usse rok dein
        if (timer) clearInterval(timer);
  
        // Mouse aate hi pehle 0 se restart karein
        counter.innerText = "0" + suffix;
  
        const duration = 1000; // Animation total time (1 second)
        const stepTime = 30;   // Update interval speed (ms)
        const steps = duration / stepTime;
        const increment = target / steps;
        let currentCount = 0;
  
        timer = setInterval(() => {
          currentCount += increment;
  
          if (currentCount >= target) {
            counter.innerText = target + suffix;
            clearInterval(timer);
            timer = null;
          } else {
            counter.innerText = Math.floor(currentCount) + suffix;
          }
        }, stepTime);
      });
    });
  });
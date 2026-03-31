AOS.init();

// Theme toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

// Typing effect
const words = ["Web Developer", "AI Enthusiast", "Problem Solver"];
let i = 0, j = 0, deleting = false;

function type() {
  let text = words[i];

  if (!deleting) {
    document.querySelector(".typing").innerHTML = text.substring(0, j++);
    if (j > text.length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.querySelector(".typing").innerHTML = text.substring(0, j--);
    if (j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();

// 3D tilt
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 10;
    const rotateY = (x - rect.width / 2) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#38bdf8",
      opacity: 0.4
    }
  }
});
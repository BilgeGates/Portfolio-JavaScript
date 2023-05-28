const programmingLanguages = [
  "JavaScript",
  "Python",
  "JavaScript",
  "CSS",
  "HTML",
];

const emojiSpan = document.querySelector(".title");
const titleAnimated = document.querySelector(".title-animated");

const changeLanguage = () => {
  const randomLanguage =
    programmingLanguages[
      Math.floor(Math.random() * programmingLanguages.length)
    ];
  emojiSpan.textContent = "🌐";
  titleAnimated.textContent = randomLanguage;
};

const emojis = ["💻", "🔥", "🎉", "⚡️", "🌐"];
const emojiSpan2 = document.querySelector(".title");

const generateRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];

  emojiSpan2.textContent = randomEmoji;
};

setInterval(() => {
  changeLanguage();
  generateRandomEmoji();
}, 1000);

const tech = document.querySelector(".tech-animated");
const arr = ["Redux", "NodeJs", "HTML", "JavaScript", "CSS", "Bootstrap"];
let i = 0;

setInterval(() => {
  tech.textContent = arr[i];
  const randomColor = getRandomColor();
  tech.style.textShadow = `0 0 5px ${randomColor}`;
  tech.style.fontSize = "3rem";
  tech.style.borderColor = randomColor;
  tech.style.color = randomColor;
  i = (i + 1) % arr.length;
}, 1000);

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

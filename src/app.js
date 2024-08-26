function randomCard() {
  let suits = ["♥", "♠", "♣", "♦"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let card = document.querySelector(".card");
  let colorClass = "black";
  if (randomSuit == "♥" || randomSuit == "♦") {
    colorClass = "red";
  }
  card.innerHTML = `<div class="top ${colorClass}">${randomSuit}</div>
      <div class="center">${randomNumber}</div>
      <div class="bottom ${colorClass}">${randomSuit}</div>`;
}

window.onload = randomCard();

let randomizer = document.querySelector(".randomize");
randomizer.addEventListener("click", randomCard);

let width = document.querySelector("#width");
width.addEventListener("change", function() {
  let card = document.querySelector(".card");
  card.style.width = width.value;
});

let height = document.querySelector("#height");
height.addEventListener("change", function() {
  let card = document.querySelector(".card");
  card.style.height = height.value;
});

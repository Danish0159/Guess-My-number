"use strict"
// 10) Handling click events, addEventlistner(first,2nd) First is the action of event, and second is the fucntion that specifies what should be done now.
// 11) By default everything that user enters is in string so we have to manually convert that in number
// 11) document.querySelector() we can use it to select classes and id's

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value)
  console.log(guess)

  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!"
  }
  //when player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!"
    document.querySelector(".number").textContent = secretNumber

    document.querySelector("body").style.backgroundColor = "#60b347"
    document.querySelector(".number").style.width = "30rem"
    //Setting the high score.
    if (score > highscore) {
      highscore = score
      document.querySelector(".highscore").textContent = highscore
    }
  }
  //when player is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "👆 Too High!" : "👇 Too Low!"
      score--
      document.querySelector(".score").textContent = score
    } else {
      document.querySelector(".message").textContent = " You lost the game"
      document.querySelector(".score").textContent = 0
    }
  }
})

//Reset everything on clicking the again button.
document.querySelector(".again").addEventListener("click", function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1

  document.querySelector(".message").textContent = "Start guessing..."
  document.querySelector(".score").textContent = score
  document.querySelector(".number").textContent = "?"
  document.querySelector(".guess").value = ""

  document.querySelector("body").style.backgroundColor = "#222"
  document.querySelector(".number").style.width = "15rem"
})

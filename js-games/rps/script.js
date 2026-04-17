let wins = 0
let botChoice
let outcome
let guessing = Math.round(Math.random()*100)
let winnerText
let scoreText = `Score: ${wins}`
document.getElementById("scoreTracker").innerHTML = scoreText;

function button(user_choice){
    guessing = Math.round(Math.random()*100)
    if (guessing > 66.5){
        botChoice = "rock"
    }
    else {
        if (guessing < 66.5 && guessing > 33.5){
            botChoice = "scissors"
        }
        else {
            botChoice = "paper"
        }
    }
    if (botChoice === "rock" && user_choice === "scissors") {
        outcome = "lose"
    }
    else if (botChoice === "rock" && user_choice === "paper"){
        outcome = "win"
    }
    else if (botChoice === "paper" && user_choice === "rock"){
        outcome = "lose"
    }
    else if (botChoice === "paper" && user_choice === "scissors"){
        outcome = "win"
    }
    else if (botChoice === "scissors" && user_choice === "paper"){
        outcome = "lose"
    }
    else if (botChoice === "scissors" && user_choice === "rock"){
        outcome = "win"
    }
    else if (botChoice === user_choice){
        outcome = "drew"
    }

    winnerText = `The bot chose ${botChoice}, and you chose ${user_choice}, so you ${outcome}!`;

    if (outcome === "win"){
        wins += 1
    }
    scoreText = `Score: ${wins}`
    document.getElementById("result").innerHTML = winnerText;
    document.getElementById("scoreTracker").innerHTML = scoreText;
}
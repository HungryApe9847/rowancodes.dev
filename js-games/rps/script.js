let wins = 0
let losses = 0
let botChoice
let outcome
let guessing = Math.round(Math.random()*100)
let winnerText
let winsText = `Wins: ${wins}`
let lossesText = `Losses: ${losses}`
document.getElementById("scoreTracker").innerHTML = winsText;
document.getElementById("loseTracker").innerHTML = lossesText;

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
    else if (outcome === "lose"){
        losses += 1
    }
    if (wins - 10 > losses){
        document.getElementById("comments").innerHTML = `I underestimated you, human.`;
    }
    else if (wins - 5 > losses){
        document.getElementById("comments").innerHTML = `Niiiicceee.`
    }
    else if (wins > losses){
        document.getElementById("comments").innerHTML = `You seem to be worthy. Kind of.`
    }
    else if (wins < losses - 999999999){
        document.getElementById("comments").innerHTML = `Right, if you have hacked this game, please note that I beg for mercy and also some food.`
    }
    else if (wins < losses - 5){
        document.getElementById("comments").innerHTML = `I really am good at this, aren't I?`
    }
    else if (wins < losses){
        document.getElementById("comments").innerHTML = `Wait... am I winning? I... I'm winning!!!`
    }
    //`Wait... am I winning? I... I'm winning!!!`
    //`I really am good at this, aren't I?`
    //`Right, if you have hacked this game, please note that I beg for mercy and also some food.`

    winsText = `Wins: ${wins}`
    lossesText = `Losses: ${losses}`
    document.getElementById("loseTracker").innerHTML = lossesText;
    document.getElementById("result").innerHTML = winnerText;
    document.getElementById("scoreTracker").innerHTML = winsText;
}
alert("Hello ! Basketball day today ? let's hit it !")

alert("Have you heard about George and Michael? They are matching in central court now,can't believe theyare the best players in school now,let's go check it out.")
prompt("Who are you choosing today ? Michael or George?")// type your name or anything .

//// make all the button connected !! 
const michaelBtn = document.getElementById("michaelBtn")
const georgeBtn = document.getElementById("georgeBtn")

const scoreBtn = document.getElementById("scoreBtn")
const hitBtn = document.getElementById("hitBtn")

// document,addEventListener("DOMContentLoaded",function() {

michaelBtn.addEventListener("mouseover", function() {
 alert ("Hi,I am Michael!")
 prompt("Who is choosing me ?")
});
georgeBtn.addEventListener("mouseover", function() {
 alert("Hi,I am George! ")
 prompt("Who is choosing me ?")
});

hitBtn.addEventListener("click", function() {
    alert("Player Instructions: Please click any of the flower,gold medal or basketball buttons to win your conponent.")
    });

    document.addEventListener("DOMContentLoaded",() =>{
    //const restart = document.getElementById("reStartBtn")
const restart = document.getElementById("reStartBtn")   
const michaelScoreSpan = document.querySelector("[data-michael-score]")
const georgeScoreSpan = document.querySelector("[data-george-score]")

restart.addEventListener("click", () => {
  
                     michaelScoreSpan.innerHTML=0 ;
                     georgeScoreSpan.innerHTML =0
           
            })
            
        })


scoreBtn.addEventListener("click", () => {
    console.log("Your score")
   });

// })



const selectionButtons = document.querySelectorAll("[data-selection]")
// const finalColumn = document.querySelector("[data-final-colum]")
const michaelScoreSpan = document.querySelector("[data-michael-score]")
const georgeScoreSpan = document.querySelector("[data-george-score]")
const SELECTIONS =[
    {
        name:"flower",
        emoji:"🌺 ",
        beats:"ball"
    },
    {
        name:"basketball",
        emoji:"🏀 ",
        beats:"gold"
    },
    {
        name:"goldmedal",
        emoji:"🏅",
        beats:"flower"
    }
]

    selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click",e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const michaelSelection = randomSelection()
    const georgeSelection = randomSelection()
    const michaelWiner = isWinner(georgeSelection,michaelSelection)
    const georgeWiner = isWinner(michaelSelection,georgeSelection)
  

    if(michaelWiner) incrementScore(michaelScoreSpan)
    if(georgeWiner) incrementScore(georgeScoreSpan)
}

function incrementScore(scoreSpan) {
   // for(let i=0;i <=10;i++){
    let score = parseInt(scoreSpan.innerText);
    if(score <= 5){
    score +=1;
    scoreSpan.innerText = score;
    if(score ===5) {
        alert("HEY ! You are the winner.You can now restart the game !")}
    }
}
//}}

function randomSelection() {
    const randomIndex = Math.floor(Math.random()* SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

// function incrementScore(scoreSpan) {
//     for(let i=0;i <=10;i++){
//     let score = parseInt(scoreSpan.innerText);
//     if(score < 10){
//     score +=1;
//     scoreSpan.innerText = score;
//     }

// }}

// function reStart(){
//     for (let i=0;i <=10;i++){
//     if(michaelScoreSpan.innerText===10){
//         alert("Congradulations Michael,You are the winner !");
//          michaelScoreSpan.innerText=0 ;
//          georgeScoreSpan.innerText=0
//     }else if(georgeScoreSpan.innerText===10){
//         alert("Congradulations George,You are the winner!")
//          michaelScoreSpan.innerText=0 
//          georgeScoreSpan.innerText=0
//     }
// }}


 function isWinner(michaelSelection,georgeSelection) {
    return michaelSelection.beats === georgeSelection.name
}

// if score = 10, hit RESTART  button !!!!!!!
//if the score reach 10 , call anoter restart function 
//michaelScore=georgeScore=0 
//scoreSpan=0 

// function restart(){
//     for (let i=0;i <=10;i++){
//     if(michaelScoreSpan.innerText===10){
//         alert("Congradulations Michael,You are the winner !");
//          michaelScoreSpan.innerText===0 ;
//          georgeScoreSpan.innerText===0
//     }else if(georgeScoreSpan.innerText==10){
//         alert("Congradulations George,You are the winner!")
//          michaelScoreSpan.innerText===0 
//          georgeScoreSpan.innerText===0
//     }
// }}

















const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const paper = document.getElementById("paper");
const result = document.getElementById("result");
const pSelect = document.getElementById("p-select");
const cSelect = document.getElementById("c-select");


let pScore = 0;
let cScore = 0;
const player = 'player';
const computer = 'computer';
let resultStr = "";


function rock1() {
    const cOptions = ["Sten", "Sax", "Påse"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];
    let pInput = "sten";
    pSelect.innerHTML = "Du valde: STEN"
    if (pInput === cInput) {
        cSelect.innerHTML= "Datorn valde: STEN"
        resultStr = "Det blev oavgjort"
    } else if (cInput === "Sax") {
        cSelect.innerHTML= "Datorn valde: SAX"
        resultStr = "Du vinner!"
        updateScore(player)
    } else {
        cSelect.innerHTML = "Datorn valde: PÅSE"
        resultStr = "Datorn vinner tyvärr :("
        updateScore(computer)   
    }
    result.innerHTML = resultStr;
    
}

function scissor1() {
    const cOptions = ["Sten", "Sax", "Påse"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];
    let pInput = "Sax";
    pSelect.innerHTML = "Du valde: SAX"
    if (pInput === cInput) {
        cSelect.innerHTML= "Datorn valde: SAX"
        resultStr = "Det blev oavgjort"
    } else if (cInput === "Påse") {
        cSelect.innerHTML= "Datorn valde: PÅSE"
        resultStr ="Du vinner!"
        updateScore(player)
    } else {
        cSelect.innerHTML= "Datorn valde: STEN"
        resultStr = "Datorn vinner tyvärr :("
        updateScore(computer)
    }
    result.innerHTML = resultStr;
}

function paper1() {
    const cOptions = ["Sten", "Sax", "Påse"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];
    let pInput ="Påse";
    pSelect.innerHTML = "Du valde: PÅSE"
    if (pInput === cInput) {
        cSelect.innerHTML= "Datorn valde: PÅSE"
        resultStr ="Det blev oavgjort"
    } else if (cInput === "Sten") {
        cSelect.innerHTML= "Datorn valde: STEN"
        resultStr ="Du vinner!"
        updateScore(player)
    } else {
        cSelect.innerHTML= "Datorn valde: SAX"
        resultStr ="Datorn vinner tyvärr :("
        updateScore(computer)
    }
    result.innerHTML = resultStr;
}

rock.addEventListener("click", rock1);
scissor.addEventListener("click", scissor1);
paper.addEventListener("click", paper1);

function updateScore(winner) {
    if (winner === computer) {
        cScore += 1
    } else if (winner === player){
        pScore += 1
    }
    document.getElementById("p-score").innerHTML = pScore;
    document.getElementById("c-score").innerHTML = cScore;
    if (pScore === 5){
        alert("Nämen! Du vann ju! Grattis!")
        reset()
    }
    else if (cScore === 5) {
        alert("Attans, datorn vann denna gång, bättre lycka framöver!")
        reset()
    }

}

function reset() {
    cScore = 0
    pScore = 0
    document.getElementById("p-score").innerHTML = pScore;
    document.getElementById("c-score").innerHTML = cScore;
    resultStr = ""
    result.innerHTML = resultStr
    pSelect.innerHTML = "Du valde: "
    cSelect.innerHTML = "Datorn valde: "
     
}

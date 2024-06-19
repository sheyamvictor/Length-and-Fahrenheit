function inch(){

let inbox = Number(document.getElementById("inbox").value)
let inchval = inbox/ 2.54
let result = document.getElementById("ans")
result.innerHTML= inchval.toFixed(3) + "inches"
};

function frag(){

    let inbox = Number(document.getElementById("inbox").value)
    let Fragval = (inbox - 32) * 5/9;
    let result = document.getElementById("result")
    result.innerHTML= Fragval.toFixed(2)  +  "Celsius"
    }
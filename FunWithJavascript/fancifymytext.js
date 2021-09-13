function enlargeText() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function fancifyText() {
    document.getElementById("userText").style.fontFamily = "Lucida Handwriting";
    document.getElementById("userText").style.fontWeight = "Bold";
    document.getElementById("userText").style.color = "Blue";
    document.getElementById("userText").style.textDecoration = "Underline";
}

function borifyText() {
    document.getElementById("userText").style.fontFamily = "Times New Roman";
    document.getElementById("userText").style.fontWeight = "Normal";
    document.getElementById("userText").style.color = "Black";
    document.getElementById("userText").style.textDecoration = "None";
}

function mooText() {
    document.getElementById("userText").style.textTransform = "Uppercase";
    var str = document.getElementById("userText").value;
    var parts = str.split(".");
    document.getElementById("userText").value = parts.join("-Moo");
}
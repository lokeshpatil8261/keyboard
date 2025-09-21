let str = "";
const keypress = new Audio('./keypress.wav');

// Function to update display
function updateDisplay() {
    document.getElementById("text").innerText = str;
    document.getElementById("text-area").innerText = str;
}

// Handle key press (both physical and virtual)
function handleKey(key) {
    if (key === "Backspace" || key === "BACKSPACE") {
        str = str.slice(0, -1);
    } else if (key === "Enter" || key === "ENTER") {
        str += "\n";  // new line
    } else if (key === " ") {
        str += " ";
    } else if (
        key === "Shift" || key === "CapsLock" || key === "Tab" ||
        key === "Alt" || key === "Control" || key === "Meta" || key === "ESC"
    ) {
        return; // ignore these keys
    } else {
        str += key;
    }
    updateDisplay();
}

//  1. When pressing real keyboard
document.body.addEventListener('keydown', (event) => {
    keypress.play();
    let keyElement = document.getElementById(event.key.toLowerCase()) || document.getElementById(event.key.toUpperCase());

    if (event.key === "Backspace") keyElement = document.getElementById("BACKSPACE");
    if (event.key === "Enter") keyElement = document.getElementById("enter");
    if (event.key === " ") keyElement = document.getElementById("space");

    if (keyElement) {
        keyElement.style.backgroundColor = 'white';
        keyElement.style.color = 'black';
    }

    handleKey(event.key);
});

document.body.addEventListener('keyup', (event) => {
    let keyElement = document.getElementById(event.key.toLowerCase()) || document.getElementById(event.key.toUpperCase());

    if (event.key === "Backspace") keyElement = document.getElementById("BACKSPACE");
    if (event.key === "Enter") keyElement = document.getElementById("enter");
    if (event.key === " ") keyElement = document.getElementById("space");

    if (keyElement) {
        keyElement.style.backgroundColor = 'black';
        keyElement.style.color = 'white';
    }
});

//  2. When clicking virtual keyboard
let keys = document.getElementsByClassName("key");
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function () {
        keypress.play();
        let key = this.innerText;

        if (this.id === "space") key = " ";
        if (this.id === "BACKSPACE") key = "Backspace";
        if (this.id === "enter") key = "Enter";

        this.style.backgroundColor = 'white';
        this.style.color = 'black';

        setTimeout(() => {
            this.style.backgroundColor = 'black';
            this.style.color = 'white';
        }, 200);

        handleKey(key);
    });
}




















// const keypress = new Audio('./keypress.wav');


// document.body.addEventListener('keydown', (event)=>{
//        let keys = document.getElementsByClassName('key');
//        keypress.play();
//        for(let i=0; i<keys.length; i++){
//             if(event.key == '1'){
//             document.getElementById('1').style.backgroundColor = 'white'
//             document.getElementById('1').style.color = 'black'
//           }
//            if(event.key == '2'){
//             document.getElementById('2').style.backgroundColor = 'white'
//             document.getElementById('2').style.color = 'black'
//           }
//            if(event.key == '3'){
//             document.getElementById('3').style.backgroundColor = 'white'
//             document.getElementById('3').style.color = 'black'
//           }
//            if(event.key == '3'){
//             document.getElementById('3').style.backgroundColor = 'white'
//             document.getElementById('3').style.color = 'black'
//           }
//            if(event.key == '4'){
//             document.getElementById('4').style.backgroundColor = 'white'
//             document.getElementById('4').style.color = 'black'
//           }
//            if(event.key == '5'){
//             document.getElementById('5').style.backgroundColor = 'white'
//             document.getElementById('5').style.color = 'black'
//           }
//            if(event.key == '6'){
//             document.getElementById('6').style.backgroundColor = 'white'
//             document.getElementById('6').style.color = 'black'
//           }
//            if(event.key == '7'){
//             document.getElementById('7').style.backgroundColor = 'white'
//             document.getElementById('7').style.color = 'black'
//           }
//            if(event.key == '8'){
//             document.getElementById('8').style.backgroundColor = 'white'
//             document.getElementById('8').style.color = 'black'
//           }
//            if(event.key == '9'){
//             document.getElementById('9').style.backgroundColor = 'white'
//             document.getElementById('9').style.color = 'black'
//           }
//            if(event.key == '0'){
//             document.getElementById('0').style.backgroundColor = 'white'
//             document.getElementById('0').style.color = 'black'
//           }
//            if(event.key == 'BACKSPACE'){
//             document.getElementById('BACKSPACE').style.backgroundColor = 'white'
//             document.getElementById('BACKSPACE').style.color = 'black'
//           }

//           if(event.key == 'a'){
//             document.getElementById('a').style.backgroundColor = 'white'
//             document.getElementById('a').style.color = 'black'
//           }
//           if(event.key == 'b'){
//             document.getElementById('b').style.backgroundColor = 'white'
//             document.getElementById('b').style.color = 'black'
//           }
//            if(event.key == 'c'){
//             document.getElementById('c').style.backgroundColor = 'white'
//             document.getElementById('c').style.color = 'black'
//           }
//            if(event.key == 'd'){
//             document.getElementById('d').style.backgroundColor = 'white'
//             document.getElementById('d').style.color = 'black'
//           }
//            if(event.key == 'e'){
//             document.getElementById('e').style.backgroundColor = 'white'
//             document.getElementById('e').style.color = 'black'
//           }
//            if(event.key == 'f'){
//             document.getElementById('f').style.backgroundColor = 'white'
//             document.getElementById('f').style.color = 'black'
//           }
//           if(event.key == 'g'){
//             document.getElementById('g').style.backgroundColor = 'white'
//             document.getElementById('g').style.color = 'black'
//           }
//            if(event.key == 'h'){
//             document.getElementById('h').style.backgroundColor = 'white'
//             document.getElementById('h').style.color = 'black'
//           }
//           if(event.key == 'i'){
//             document.getElementById('i').style.backgroundColor = 'white'
//             document.getElementById('i').style.color = 'black'
//           }
//            if(event.key == 'j'){
//             document.getElementById('j').style.backgroundColor = 'white'
//             document.getElementById('j').style.color = 'black'
//           }
//           if(event.key == 'k'){
//             document.getElementById('k').style.backgroundColor = 'white'
//             document.getElementById('k').style.color = 'black'
//           }
//            if(event.key == 'l'){
//             document.getElementById('l').style.backgroundColor = 'white'
//             document.getElementById('l').style.color = 'black'
//           }
//           if(event.key == 'm'){
//             document.getElementById('m').style.backgroundColor = 'white'
//             document.getElementById('m').style.color = 'black'
//           }
//            if(event.key == 'n'){
//             document.getElementById('n').style.backgroundColor = 'white'
//             document.getElementById('n').style.color = 'black'
//           }
//           if(event.key == 'o'){
//             document.getElementById('o').style.backgroundColor = 'white'
//             document.getElementById('o').style.color = 'black'
//           }
//            if(event.key == 'p'){
//             document.getElementById('p').style.backgroundColor = 'white'
//             document.getElementById('p').style.color = 'black'
//           }
//           if(event.key == 'q'){
//             document.getElementById('q').style.backgroundColor = 'white'
//             document.getElementById('q').style.color = 'black'
//           }
//            if(event.key == 'r'){
//             document.getElementById('r').style.backgroundColor = 'white'
//             document.getElementById('r').style.color = 'black'
//           }
//           if(event.key == 's'){
//             document.getElementById('s').style.backgroundColor = 'white'
//             document.getElementById('s').style.color = 'black'
//           }
//            if(event.key == 't'){
//             document.getElementById('t').style.backgroundColor = 'white'
//             document.getElementById('t').style.color = 'black'
//           }
//           if(event.key == 'u'){
//             document.getElementById('u').style.backgroundColor = 'white'
//             document.getElementById('u').style.color = 'black'
//           }
//            if(event.key == 'v'){
//             document.getElementById('v').style.backgroundColor = 'white'
//             document.getElementById('v').style.color = 'black'
//           }
//           if(event.key == 'w'){
//             document.getElementById('w').style.backgroundColor = 'white'
//             document.getElementById('w').style.color = 'black'
//           }
//            if(event.key == 'x'){
//             document.getElementById('x').style.backgroundColor = 'white'
//             document.getElementById('x').style.color = 'black'
//           }
//           if(event.key == 'y'){
//             document.getElementById('y').style.backgroundColor = 'white'
//             document.getElementById('y').style.color = 'black'
//           }
//            if(event.key == 'z'){
//             document.getElementById('z').style.backgroundColor = 'white'
//             document.getElementById('z').style.color = 'black'
//           }
//        }
// })


// document.body.addEventListener('keyup', (event)=>{
//         console.log(event.key);
//        let keys = document.getElementsByClassName('key');
//        for(let i=0; i<keys.length; i++){
//           if(event.key == '1'){
//             document.getElementById('1').style.backgroundColor = 'black'
//             document.getElementById('1').style.color = 'white'
//           }
//            if(event.key == '2'){
//             document.getElementById('2').style.backgroundColor = 'black'
//             document.getElementById('2').style.color = 'white'
//           }
//            if(event.key == '3'){
//             document.getElementById('3').style.backgroundColor = 'black'
//             document.getElementById('3').style.color = 'white'
//           }
//            if(event.key == '3'){
//             document.getElementById('3').style.backgroundColor = 'black'
//             document.getElementById('3').style.color = 'white'
//           }
//            if(event.key == '4'){
//             document.getElementById('4').style.backgroundColor = 'black'
//             document.getElementById('4').style.color = 'white'
//           }
//            if(event.key == '5'){
//             document.getElementById('5').style.backgroundColor = 'black'
//             document.getElementById('5').style.color = 'white'
//           }
//            if(event.key == '6'){
//             document.getElementById('6').style.backgroundColor = 'black'
//             document.getElementById('6').style.color = 'white'
//           }
//            if(event.key == '7'){
//             document.getElementById('7').style.backgroundColor = 'black'
//             document.getElementById('7').style.color = 'white'
//           }
//            if(event.key == '8'){
//             document.getElementById('8').style.backgroundColor = 'black'
//             document.getElementById('8').style.color = 'white'
//           }
//            if(event.key == '9'){
//             document.getElementById('9').style.backgroundColor = 'black'
//             document.getElementById('9').style.color = 'white'
//           }
//            if(event.key == '0'){
//             document.getElementById('0').style.backgroundColor = 'black'
//             document.getElementById('0').style.color = 'white'
//           }
//            if(event.key == 'BACKSPACE'){
//             document.getElementById('BACKSPACE').style.backgroundColor = 'black'
//             document.getElementById('BACKSPACE').style.color = 'white'
//           }

//           if(event.key == 'a'){
//             document.getElementById('a').style.backgroundColor = 'black'
//             document.getElementById('a').style.color = 'white'
//           }
//            if(event.key == 'b'){
//             document.getElementById('b').style.backgroundColor = 'black'
//             document.getElementById('b').style.color = 'white'
//           }
//            if(event.key == 'c'){
//             document.getElementById('c').style.backgroundColor = 'black'
//             document.getElementById('c').style.color = 'white'
//           }
//           if(event.key == 'd'){
//             document.getElementById('d').style.backgroundColor = 'black'
//             document.getElementById('d').style.color = 'white'
//           }
//           if(event.key == 'e'){
//             document.getElementById('e').style.backgroundColor = 'black'
//             document.getElementById('e').style.color = 'white'
//           }
//           if(event.key == 'f'){
//             document.getElementById('f').style.backgroundColor = 'black'
//             document.getElementById('f').style.color = 'white'
//           }
//           if(event.key == 'g'){
//             document.getElementById('g').style.backgroundColor = 'black'
//             document.getElementById('g').style.color = 'white'
//           }
//            if(event.key == 'h'){
//             document.getElementById('h').style.backgroundColor = 'black'
//             document.getElementById('h').style.color = 'white'
//           }
//           if(event.key == 'i'){
//             document.getElementById('i').style.backgroundColor = 'black'
//             document.getElementById('i').style.color = 'white'
//           }
//            if(event.key == 'j'){
//             document.getElementById('j').style.backgroundColor = 'black'
//             document.getElementById('j').style.color = 'white'
//           }
//           if(event.key == 'k'){
//             document.getElementById('k').style.backgroundColor = 'black'
//             document.getElementById('k').style.color = 'white'
//           }
//            if(event.key == 'l'){
//             document.getElementById('l').style.backgroundColor = 'black'
//             document.getElementById('l').style.color = 'white'
//           }
//           if(event.key == 'm'){
//             document.getElementById('m').style.backgroundColor = 'black'
//             document.getElementById('m').style.color = 'white'
//           }
//            if(event.key == 'n'){
//             document.getElementById('n').style.backgroundColor = 'black'
//             document.getElementById('n').style.color = 'white'
//           }
//           if(event.key == 'o'){
//             document.getElementById('o').style.backgroundColor = 'black'
//             document.getElementById('o').style.color = 'white'
//           }
//            if(event.key == 'p'){
//             document.getElementById('p').style.backgroundColor = 'black'
//             document.getElementById('p').style.color = 'white'
//           }
//           if(event.key == 'q'){
//             document.getElementById('q').style.backgroundColor = 'black'
//             document.getElementById('q').style.color = 'white'
//           }
//            if(event.key == 'r'){
//             document.getElementById('r').style.backgroundColor = 'black'
//             document.getElementById('r').style.color = 'white'
//           }
//           if(event.key == 's'){
//             document.getElementById('s').style.backgroundColor = 'black'
//             document.getElementById('s').style.color = 'white'
//           }
//            if(event.key == 't'){
//             document.getElementById('t').style.backgroundColor = 'black'
//             document.getElementById('t').style.color = 'white'
//           }
//           if(event.key == 'u'){
//             document.getElementById('u').style.backgroundColor = 'black'
//             document.getElementById('u').style.color = 'white'
//           }
//            if(event.key == 'v'){
//             document.getElementById('v').style.backgroundColor = 'black'
//             document.getElementById('v').style.color = 'white'
//           }
//           if(event.key == 'w'){
//             document.getElementById('w').style.backgroundColor = 'black'
//             document.getElementById('w').style.color = 'white'
//           }
//            if(event.key == 'x'){
//             document.getElementById('x').style.backgroundColor = 'black'
//             document.getElementById('x').style.color = 'white'
//           }
//           if(event.key == 'y'){
//             document.getElementById('y').style.backgroundColor = 'black'
//             document.getElementById('y').style.color = 'white'
//           }
//            if(event.key == 'z'){
//             document.getElementById('z').style.backgroundColor = 'black'
//             document.getElementById('z').style.color = 'white'
//           }
//        }
// })







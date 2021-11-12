document.querySelector('button').onclick = countChar;
function countChar() {
    let string=document.querySelector('.text').value;
    console.log("Длина строки равна: " +string.length)
}

var i = 0;
var txt = 'Kenneth Fan';
var speed = 80;

function typeWriter() {
if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}
window.onload = typeWriter;
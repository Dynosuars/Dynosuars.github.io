const delay = 25;

function write(target, content, index){
    target.innerHTML += content.charAt(index);
    setTimeout(target, delay);
}
const btnclick= document.querySelectorAll(".drum").length

for(let i=0; i<btnclick;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", btnclick)
    function btnclick(){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}
}
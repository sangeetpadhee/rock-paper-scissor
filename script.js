let leftrock = document.querySelector(".leftrock");
let leftpaper = document.querySelector(".leftpaper");
let leftscissor = document.querySelector(".leftscissor");

let rightrock = document.querySelector(".rightrock");
let rightpaper = document.querySelector(".rightpaper");
let rightscissor = document.querySelector(".rightscissor");

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");

let winimg = document.querySelector(".win");
let looseimg = document.querySelector(".loose");
let drawimg = document.querySelector(".draw");

let vs = document.querySelector(".vs");

var drawsound = document.querySelector(".drawsound");
var winsound =document.querySelector(".winsound");
var loosesound = document.querySelector(".loosesound");



rock.addEventListener('click', ()=>{
    vs.style.display="none";
    leftrock.style.display="block";
    leftpaper.style.display="none";
    leftscissor.style.display="none";
    const c = Math.floor(Math.random() * 3);
    if(c==0){
        rightrock.style.display="block";
        rightpaper.style.display="none";
        rightscissor.style.display="none";

        winimg.style.display="none";
        looseimg.style.display="none";
        drawimg.style.display="block";

        drawsound.play();
    }else if(c==1){
        rightrock.style.display="none";
        rightpaper.style.display="block";
        rightscissor.style.display="none";

        winimg.style.display="none";
        looseimg.style.display="block";
        drawimg.style.display="none"; 
        
        loosesound.play();
    }else{
    rightrock.style.display="none";
    rightpaper.style.display="none";
    rightscissor.style.display="block";

    winimg.style.display="block";
    looseimg.style.display="none";
    drawimg.style.display="none";

    winsound.play();
}
})


paper.addEventListener('click', ()=>{
    vs.style.display="none";
    leftrock.style.display="none";
    leftpaper.style.display="block";
    leftscissor.style.display="none";
    const c = Math.floor(Math.random() * 3);
    if(c==0){
        rightrock.style.display="block";
        rightpaper.style.display="none";
        rightscissor.style.display="none";

        winimg.style.display="block";
        looseimg.style.display="none";
        drawimg.style.display="none";

        winsound.play();
    }else if(c==1){
        rightrock.style.display="none";
        rightpaper.style.display="block";
        rightscissor.style.display="none";

        winimg.style.display="none";
        looseimg.style.display="none";
        drawimg.style.display="block";   

        drawsound.play();
    }else{
    rightrock.style.display="none";
    rightpaper.style.display="none";
    rightscissor.style.display="block";

    winimg.style.display="none";
    looseimg.style.display="block";
    drawimg.style.display="none";

    loosesound.play();
}
})

scissor.addEventListener('click', ()=>{
    vs.style.display="none";
    leftrock.style.display="none";
    leftpaper.style.display="none";
    leftscissor.style.display="block";
    const c = Math.floor(Math.random() * 3);
    if(c==0){
        rightrock.style.display="block";
        rightpaper.style.display="none";
        rightscissor.style.display="none";

        winimg.style.display="none";
        looseimg.style.display="block";
        drawimg.style.display="none";

        loosesound.play();
    }else if(c==1){
        rightrock.style.display="none";
        rightpaper.style.display="block";
        rightscissor.style.display="none";

        winimg.style.display="block";
        looseimg.style.display="none";
        drawimg.style.display="none";   

        winsound.play();
    }else{
    rightrock.style.display="none";
    rightpaper.style.display="none";
    rightscissor.style.display="block";

    winimg.style.display="none";
    looseimg.style.display="none";
    drawimg.style.display="block";

    drawsound.play();
}
})
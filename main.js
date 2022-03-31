song1="";
song2="";

function preload(){
song1=loadSound("mighty morphin power rangers.mp3");
song2=loadSound("harry-potter-theme-song.mp3");
}

function setup(){
canvas=createCanvas(400,300);
canvas.position(430,160);
video=createCapture(VIDEO);
video.hide();
}
    
function draw(){
image(video,0,0,500,400);
}
img = "";
status = "";
object = [];

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#07fa34");
    text("dog", 98, 70);
    noFill();
    stroke("#07fa34");
    rect(99, 40, 200, 200 );
    fill("#07fa34");
    text("cat", 320, 70);
    noFill();
    stroke("#07fa34");
    rect(300, 40, 400, 300 );
}

function modelLoaded(){
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
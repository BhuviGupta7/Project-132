Status = "";
Bottle_image = "";

function preload()
{
    Bottle_image = loadImage("colvn_512.jpg");
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status: true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}
function draw()
{
    image(Bottle_image, 0, 0, 640, 420);
}
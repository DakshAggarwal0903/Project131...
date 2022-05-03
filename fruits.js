Zastatus="";
Zaarray=[];
function preload(){
    imagee=createImg('fruitbasket.jpg');
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    imagee.hide();
    a=ml5.objectDetector('cocossd',ml5Loaded);
}
function ml5Loaded(){
    console.log("ML5 Is Loaded");
    Zastatus=true;
}
function draw(){
    image(imagee,0,0,480,380);
    if(Zastatus != ""){
        a.detect(imagee,Theerror);
        for(i=0;i<Zaarray.length;i++){
        document.getElementById("stast").innerHTML="Object is Detected";
        document.getElementById("noofobj").innerHTML="The number of objects is: "+Zaarray.length;
        }
    }
}
function Theerror(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results)
    }
}
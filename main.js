var SpeechRecognition = window.webkitSpeechRecognition;
  
var my_agent= new SpeechRecognition();

 
function my_start()
{
    document.getElementById("textbox").innerHTML = ""; 
    my_agent.start();
} 
 
my_agent.onresult = function(event) {

 console.log(event); 

 my_content = event.results[0][0].transcript;

 document.getElementById("textbox").innerHTML = my_content;


 if(my_content == "Take my selfie."){
    agent_speak();
 }



}

function agent_speak(){

    var synth = window.speechSynthesis;

    var speak_data = "Taking your selfie in 5 seconds";

    var utter_data = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utter_data);

    Webcam.attach(my_cam);

    //setTimout(function(){}, time in ms);


    setTimeout(function(){

        cam_snap();
        save_selfie();

    }, 5000);


    

}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality:90
     
});

my_cam = document.getElementById('camera');


function cam_snap(){

    Webcam.snap(function(new_picture){

        document.getElementById("result").innerHTML = "<img id = 'selfie' src = '" + new_picture + "'>"


    });
    
}

function save_selfie(){

img = document.getElementById("selfie").src;

my_link = document.getElementById("save_link");
my_link.href = img;

my_link.click();
}

function take_snapshot()
{
    console.log(img_id);

    Webcam.snapfunction(data_uri);
         if(ing_id=="selfie1")
         document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
}
if(img_id=="selfie2"){
    document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
}
if(img_id=="selfie3"){ 
    document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
}
setTimeout(function()
{
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 5000);
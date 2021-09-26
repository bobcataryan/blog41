
prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality:90
});

camera=document.getElementById("webcam");

Webcam.attach('#webcam');

function Take_pic(){
    Webcam.snap(function (data_uri){
        document.getElementById("pic").innerHTML="<img src="+data_uri+" id='pic_taken'>";
    });
    };

    console.log('ml5.version', ml5.version);

    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/y1laODxbH/model.json",model_loaded);

    function model_loaded(){
        console.log("Model loaded");
    }

    function talk(){
        var synth = window.speechSynthesis;
        speak_data_1= "Prediction number 1 is" +prediction_1;
        speak_data_2= "Prediction number 2 is" +prediction_2;
        var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        synth.speak(utterThis);
    }   
    function identify(){
        img=document.getElementById("pic_taken");
         classifier.classify(img, gotResult);
         console.log("checked");
     }
 
     function gotResult(error,results){
         if (error){
             console.error(error);
         }
         else{
         console.log(results);
         prediction_1=results[0].label;
         prediction_2=results[1].label;
         document.getElementById("emotion_name").innerHTML=prediction_1;
         document.getElementById("emotion_name2").innerHTML=prediction_2;
       talk();
         if (results[0].label == "Thumbs Up"){
             document.getElementById("emoji").innerHTML= "&#128077;";
             console.log("worked");
 
         }
         if (results[0].label == "OK"){
             document.getElementById("emoji").innerHTML= "&#128076;";
             console.log("worked");
 
         }
         if (results[0].label == "High five"){
             document.getElementById("emoji").innerHTML= "&#129306;";
             console.log("worked");
 
         }
         if (results[0].label == "Peace"){
             document.getElementById("emoji").innerHTML= "&#9996;";
             console.log("worked");
 
         }
         if (results[0].label == "Fist Bump"){
             document.getElementById("emoji").innerHTML= "&#128074;";
             console.log("worked");
         }


         if (results[1].label == "Thumbs Up"){
            document.getElementById("emoji2").innerHTML= "&#128077;";
            console.log("worked");

        }
        if (results[1].label == "OK"){
            document.getElementById("emoji2").innerHTML= "&#128076;";
            console.log("worked");

        }
        if (results[1].label == "High five"){
            document.getElementById("emoji2").innerHTML= "&#129306;";
            console.log("worked");

        }
        if (results[1].label == "Peace"){
            document.getElementById("emoji2").innerHTML= "&#9996;";
            console.log("worked");

        }
        if (results[1].label == "Fist Bump"){
            document.getElementById("emoji2").innerHTML= "&#128074;";
            console.log("worked");
        }
     }
     }
 
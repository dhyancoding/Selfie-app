var sr = window.webkitSpeechRecognition

var r = new sr()

function Start(){
    document.getElementById("textbox").innerHTML=" "
    r.start()
    Webcam.attach(camera)
}

r.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML= content
    if(content == "take my selfie"){
    Speak()   
    }

}

Webcam.set({
    width:360, height:250, image_format: "png", png_quality:90
    })

camera=document.getElementById("camera")

function Speak(){
    syn=window.speechSynthesis
    speak_data= "Taking your selfie in 3 seconds :)!"
    Utter=new SpeechSynthesisUtterance(speak_data)
    syn.speak(Utter)
    Webcam.attach(camera)
    setTimeout(function(){
        Camera()
        Save()
    }, 3000)
}

function Camera(){
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML = '<img id="my_selfie" src="' + data_uri + '">'
    })
}

function Save(){
    link = document.getElementById("link")
    img = document.getElementById("my_selfie").src
    link.href = img
    link.click()
}


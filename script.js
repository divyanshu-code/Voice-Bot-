let a = document.querySelector("#non");
let h = document.querySelector("#v");
let q = document.querySelector("#btn");
let l = document.querySelector('#stop');

function speak(text){
  
    let text_speech = new SpeechSynthesisUtterance(text) ;

    text_speech.pitch = 1;
    text_speech.rate = 1;
    text_speech.volume = 1;
    text_speech.lang = "en-IN-Wavenet-B";
    window.speechSynthesis.speak(text_speech);
}

function wish(){

     let date = new Date();
     let hour = date.getHours()

     if(hour>0 && hour<12){
         speak("Good Morning Dear ")
     }else if( hour >= 12 && hour <= 16){
        speak("Good afternoon dear");
     }else if(hour> 16 && hour<= 19){
        speak("Good evening dear");
     }else{
        speak("hey dear how can i help you ") ;
     }
    }

window.addEventListener('load' , ()=>{
    h.style.display = "none";
    l.style.display= "none";
   //  wish();
})

let Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let c = new Recognition();

c.onresult= (event)=>{

   let current = event.resultIndex ;
   let b = event.results[current][0].transcript ;

   a.innerText = b ;
    
   hero(b.toLowerCase());

}

q.addEventListener('click' , ()=>{
     c.start();
     q.style.display=" none";  
     h.style.display = "block";
     l.style.display = "block";

})

l.addEventListener('click',()=>{
   c.stop();
   h.style.display="none";
   q.style.display= 'block';
   l.style.display='none'; 

})


function hero(message){

    h.style.display = "none";
    q.style.display="flex" ;

    a.innerText="click here to talk to me";

     if(message.includes("hello") || message.includes("hey") || message.includes("hii") || message.includes("hii chinki")|| message.includes("hello chinki")|| message.includes("hey chinki")){
         speak("hello dear , how can i help you ? ");
     }else if(message.includes("who are you") || message.includes("hu r u")){
        speak(" i am your assistant , created by divyanshu");
     }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
     }
     else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
     }
     else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
     }
     else if(message.includes("open linkedin")){
        speak("opening linkedin...")
        window.open("https://linkedin.com/","_blank")
     } else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("chinki tell me time ") || message.includes("time")){

        let time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"});
         speak(time);
    }  else if(message.includes("chinki tell me date ") || message.includes("date")){

        
        let date = new Date().toLocaleString(undefined, {day: "numeric", month: "short"});
        speak(date);
   }
   else if(message.includes("how are you")){
    speak(" hello i am fine ,what about you !");
 }
 else if(message.includes("play")){
   
      let z = message.split("play")[1].trim();
      speak(`playing  ${z}`);

    window.open(`https://www.youtube.com/results?search_query=${z}`)
 }
   else{
    let finalText="this is what i found on internet regarding" + message.replace("chinki","")
    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("chinki","")}`,"_blank")
}

}
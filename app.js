let massage = document.querySelector('.mySMS');
let chatbox = document.querySelector('.chatBox');

let inputValue = document.querySelector('.myInput');
let btn = document.querySelector('.myBtn');
let mydiv = document.querySelector('.massage');
let allmsgDiv = document.querySelector('.allMsg');


massage.addEventListener("click", function(){
    
  chatbox.style.transform = "scaleY(1)";
     
    
});

btn.addEventListener('click', function(e){
    let div = document.createElement('div')
   let span = document.createElement('span');
   div.className = "leftSide";
   span.className=('useSpan');
   span.innerHTML = inputValue.value;
   div.appendChild(span);
   mydiv.appendChild(div);
   inputValue.value = ""

   if(span.innerHTML == "hello"){
       let div1 =document.createElement('div');
       let span1 = document.createElement('span');
       span1.innerHTML = "hi i am chatboat how may i help you?";
       div1.className = "rightSide";
       span1.className = "left";
       div1.appendChild(span1);
       mydiv.appendChild(div1);
       
   }else if(span.innerHTML == "how are you?" ||span.innerHTML == "how r u?"){
    let div1 =document.createElement('div');
    let span1 = document.createElement('span');
    span1.innerHTML = "i am fine what about you";
    div1.className = "rightSide";
    span1.className = "left";
    div1.appendChild(span1);
    mydiv.appendChild(div1);

   }else if(span.innerHTML == "who are you?"){
    let div1 =document.createElement('div');
    let span1 = document.createElement('span');
    span1.innerHTML = "i am a robot created by Habibur Rahman who is the woner of this company";
    div1.className = "rightSide";
    span1.className = "left";
    div1.appendChild(span1);
    mydiv.appendChild(div1);


   }else if(span.innerHTML == "how many language you can speak?"){
    let div1 =document.createElement('div');
    let span1 = document.createElement('span');
    span1.innerHTML = "i can speak in three languages ";
    div1.className = "rightSide";
    span1.className = "left";
    div1.appendChild(span1);
    mydiv.appendChild(div1);


   }else if(span.innerHTML == "whats are they?"){
    let div1 =document.createElement('div');
    let span1 = document.createElement('span');
    span1.innerHTML = "english , bengali , hindi";
    div1.className = "rightSide";
    span1.className = "left";
    div1.appendChild(span1);
    mydiv.appendChild(div1);


   }else if(span.innerHTML == "are you male?" || span.innerHTML == "are you female?" || span.innerHTML == "are you male or female?" ){
    let div1 =document.createElement('div');
    let span1 = document.createElement('span');
    span1.innerHTML = "i am femlae as a vartual assistant";
    div1.className = "rightSide";
    span1.className = "left";
    div1.appendChild(span1);
    mydiv.appendChild(div1);

   }else if(span.innerHTML == "whats your age?"){
    let div1 =document.createElement('div');
    let span1 = document.createElement('span');
    span1.innerHTML = "my age is three month";
    div1.className = "rightSide";
    span1.className = "left";
    div1.appendChild(span1);
    mydiv.appendChild(div1);


   }else if(span.innerHTML == "bye"){
    let div1 =document.createElement('div');
    let span1 = document.createElement('span');
    span1.innerHTML = "thanks for with us";
    div1.className = "rightSide";
    span1.className = "left";
    div1.appendChild(span1);
    mydiv.appendChild(div1);

   

   }else{
    let div1 =document.createElement('div');
    let span1 = document.createElement('span');
    span1.innerHTML = "i don't understand what you say !";
    div1.className = "rightSide";
    span1.className = "left";
    div1.appendChild(span1);
    mydiv.appendChild(div1);


   }
    
});

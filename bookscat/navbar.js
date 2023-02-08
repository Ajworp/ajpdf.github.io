/*function myFunction()
{
  var element = document.getElementById("myDIV");
  element.classList.toggle("mystyle");
}*/
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  function talk(){
    var know = {
    "Who are you" : "Hello, Codewith_random here ",
    "who are you" : "Hello, Codewith_random here ",
    "How are you" : "Good and you",
    "how are you" : "Good and you",
    "what can i do for you" : "Please Give us A Follow & Like.",
    "What can i do for you" : "Please Give us A Follow & Like.",
    "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
    "your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
    "ok" : "Thank You So Much ",
    "Ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon..",
    "hi" :"hello",
    "Hi" :"hello",
    "hello":"hello how are you ?",
    "Hello":"hello how are you ?",
    "what is your name":"My name is Dhano",
  
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }
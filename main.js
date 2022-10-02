let chatScreen1Btn = document.getElementById("chatScreen1Btn");
let chatScreen2Btn = document.getElementById("chatScreen2Btn");
let chatScreen1 = document.getElementById("chatScreen1");
let chatScreen2 = document.getElementById("chatScreen2");
let chatInput1 = document.getElementById("chatInput1");
let chatInput2 = document.getElementById("chatInput2");
let whatIsVal1,whatIsVal2;
let counter1 = 0,counter2 = 0;

chatScreen1Btn.addEventListener("click",function(){
    whatIsVal1 = chatInput1.value;
    sessionStorage.setItem("someKey1-"+counter1,whatIsVal1)
    let ptag1 = document.createElement("p");
    ptag1.className = "myChats";
    let ptag1Span = document.createElement("span");
    ptag1Span.className = "myChatsSpan";
    ptag1Span.innerHTML = sessionStorage.getItem("someKey1-"+counter1);
    ptag1.appendChild(ptag1Span);
    chatScreen1.appendChild(ptag1);

    let ptag2 = document.createElement("p");
    ptag2.className = "otherChats";
    let ptag2Span = document.createElement("span");
    ptag2Span.className = "otherChatsSpan";
    ptag2Span.innerHTML = sessionStorage.getItem("someKey1-"+counter1);
    ptag2.appendChild(ptag2Span);
    chatScreen2.appendChild(ptag2);

    counter1++;
    chatInput1.value ="";
})

chatScreen2Btn.addEventListener("click",function(){
    whatIsVal2 = chatInput2.value;
    sessionStorage.setItem("someKey2-"+counter2,whatIsVal2)
    let ptag3 = document.createElement("p");
    ptag3.className = "myChats";
    let ptag3Span = document.createElement("span");
    ptag3Span.className = "myChatsSpan";
    ptag3Span.innerHTML = sessionStorage.getItem("someKey2-"+counter2);
    ptag3.appendChild(ptag3Span);
    chatScreen2.appendChild(ptag3);

    let ptag4 = document.createElement("p");
    ptag4.className = "otherChats";
    let ptag4Span = document.createElement("span");
    ptag4Span.className = "otherChatsSpan";
    ptag4Span.innerHTML = sessionStorage.getItem("someKey2-"+counter2);
    ptag4.appendChild(ptag4Span);
    chatScreen1.appendChild(ptag4);
    
    counter2++;
    chatInput2.value ="";
})


chatInput1.addEventListener("keypress",function(e){
    if (e.key === "Enter") {
        chatScreen1Btn.click();
      }
})
chatInput2.addEventListener("keypress",function(e){
    if (e.key === "Enter") {
        chatScreen2Btn.click();
      }
})
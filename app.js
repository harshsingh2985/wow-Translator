var input=document.querySelector("#submitbtn");
var txtinputs=document.querySelector("#txtareas");
var outputdiv=document.querySelector("#output");



function eventhandler(){
    // console.log("you have been clicked")
    var txtinput=txtinputs.value;
    // console.log("clicked ",txtinput)
    outputdiv.innerText="translated"+txtinput;
    



}

input.addEventListener("click",eventhandler)



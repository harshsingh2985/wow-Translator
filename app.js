var input=document.querySelector("#submitbtn");
var txtinputs=document.querySelector("#txtareas");
var outputdiv=document.querySelector("#output");

var serverurl="https://api.funtranslations.com/translate/wow.json"


function geturl(text){
    return serverurl + "?" +"text="+ text;

}

function eventhandler(){
    // console.log("you have been clicked")
    var txtinput=txtinputs.value;
    // console.log("clicked ",txtinput)
    // outputdiv.innerText="translated"+txtinput;

    // callback function in the javascipt
    fetch(geturl(txtinput))
    .then(response=>response.json())
    .then(json=>{
        var translatedtxt=(json.contents.translated)
        outputdiv.innerText=translatedtxt
    })
    
    // console.log(json.contents.translated))






}

input.addEventListener("click",eventhandler)



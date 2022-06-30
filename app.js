var input=document.querySelector("#submitbtn")

var txtinputs=document.querySelector("#txtareas")


function eventhandler(){
    // console.log("you have been clicked")
    var txtinput=txtinputs.value;
    console.log("clicked ",txtinput)
    


}

input.addEventListener("click",eventhandler)



const Inputbox = document.getElementById("Input-box");
const listcontainer = document.getElementById("list-container");

function addtask(){
    if(Inputbox.value == ''){
        alert("You can must enter valid value");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = Inputbox.value ;
        listcontainer.appendChild(li);
    }

}
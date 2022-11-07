let items=[];
document.onkeydown = function (e) {
    e = e || window.event;
    switch (e.which || e.keyCode) {
            case 13 : register()
                break;
    }
}



function register(){

    console.log ("processing...");

    let txtTask = document.getElementById("txtTask");

    let checkbox = document.createElement("input"); 
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "complete?");
        checkbox.setAttribute("value", "ff");
        checkbox.checked = false; 

    let item=document.getElementById("txtTask").value;

    if (item=document.getElementById("txtTask").value){document.getElementById("list").innerHTML+= `<input type=checkbox>${item}<br></input>`;
    items.push(document.getElementById("txtTask").value);
    console.table (items);
    document.getElementById("txtTask").value="";
    }else{console.log("my apologies, but tis empty m'lord");
    alert("You sure are quick on the trigger buddy.\n\nBut first I'm going to need you to enter a task first!");
    }

function remove(){
    console.log ("removing...")
    }
}






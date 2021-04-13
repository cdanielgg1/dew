const generate = document.getElementById('generate');
const rows = document.getElementByName('rows')[0];
const container = document.getElementById('table-container');

generate.onclick = (event) =>{
    event.preventDefault(); //prevent normal flow
    //event.stopPropagation(); //prevent event bubbling
    //empty container
    container.querySelectorAll(".row").forEach(container.removeChild);//this is the same as:
    //container.querySelectorAll(".row").forEach(ros) => container.removeChild(row));

    //or eaiser:
    //container.innerHTML="";

    //generate elements
    for(let i = 0 ; i < rows.value ; i++){
        const div = document.createElement("div");
        div.innerText = "Row: " + (i+1) + ". Col: 1";
        container.appendChild(div);
    }
}
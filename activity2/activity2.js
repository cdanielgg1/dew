

document.querySelector('#boton').addEventListener('click' , obtenerDatos);

function obtenerDatos(){

 

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','employees.json', true);

    xhttp.send();
    
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

          
            let datos = JSON.parse(this.responseText);
        
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
               console.log(item);
               res.innerHTML += `
                <tr>
                
                    <td>${item.name}</td>
                    <td>${item.department}</td>
                
                
                </tr>
               
               `
            }
        }
    }
    
}
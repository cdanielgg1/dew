
function createTable()
{

document.getElementById("myTable").innerHTML = "";

var rows = document.getElementById('rows').value; 
var colums = document.getElementById('columns').value;
  
 for(var r=0;r<parseInt(rows,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(colums,10);c++)  
    {
      var y = x.insertCell(c);
       y.innerHTML="Row: "+r+" Col: "+c;
      }
    }
    }

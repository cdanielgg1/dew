

class Window {

    constructor(options = {}) {
        this.width = options.width || 200;
        this.heigh = options.heigh || 200;
        this.posX = options.posX || 200;
        this.posY = options.posY || 200;


        this.el = document.createElement('div');
        this.el.style.width = this.width + 'px';
        this.el.style.height = this.heigh + 'px';
        this.el.style.top = this.posX + 'px';
        this.el.style.left = this.posY + 'px';
        this.el.style.position = 'absolute';
        this.el.style.backgroundColor = 'blue';

        document.body.appendChild(this.el);

    }
  
    setTitle(title){
        document.title = prompt('sup bro ?');

        document.getElementById('input').addEventListener('keypress', function( event ) {
            if( event.keyCode === 13 ) {  // return ?
                document.title = this.value;
            }
        }, false);

       // let div = document.createElement('div');

      //  var title = document.createElement("div");
      
    //  document.title = "My New Page Title"; 
      
       // this.el.innerText = title;

      //  this.title ='Calculadora'
 const input = document.querySelector('input');
const label = document.getElementById('title');

input.addEventListener('title', updateValue);

function updateValue(e) {
  title.textContent = e.srcElement.value;

}
    }
}

var a=new Window();


class Calculator extends Window{
 
    constructor(options = {}){
        super();

        var content = document.createElement("div");

        content.innerHTML = '<div class="calculadora">\
        <form action="#" name ="calculadora" id="calculadora">\
        <input  id= "input" placeholder="Ingrese algún texto" name="name" onclick="setTitle()"/>\
        <label id="label">0</label>\
        <p id="title">""</p>\
        <p id="textoPantalla"class="display">0</p>\
         <p>\
                <input type ="button" class="numero" value="." />\
                <input type ="button" class="borrar" value="C" />\
            </p>\
             <p>\
                            <input type="button" class="numero" value ="0"/>\
                            <input type="button" class="numero" value ="1" />\
                            <input type="button" class="numero" value ="2"/>\
                            <input type="button" class="numero" value ="3"/>\
                            <input type="button" class="numero" value ="4"/>\
         </p>\
            <p>\
            <input type="button" class="numero" value ="5" />\
            <input type="button" class="numero" value ="6" />\
            <input type="button" class="numero" value ="7" />\
            <input type="button" class="numero" value ="8" />\
            <input type="button" class="numero" value ="9" />\
         </p>\
         <p>\
            <input type="button" class="resta" value ="-"/>\
            <input type="button" class="multiplicacion" value ="*"/>\
            <input type="button" class="suma" value ="+"/>\
            <input type="button" class="division" value ="/"/>\
            <input type="button" class="resultado" value ="="/>\
        </p>\
        </form>\
     </div>';

        this.el.appendChild(content);
        this.display = content.querySelector('.display');

        function buttonClick(e) {
       
             this.innerText += e.target.value;
        }

       

        content.querySelectorAll('.numero').forEach(button => 
            button.addEventListener('click', buttonClick.bind(this.display)));

           
            content.querySelector('.suma').onclick = (e) =>{
               
                this.numero1 = this.display.innerText;
                this.operador = '+';
                this.display.innerText = '';
               

            }
            content.querySelector('.resta').onclick = (e) =>{
              
                this.numero1 = this.display.innerText;
                this.operador = '-';
                this.display.innerText = '';
              

            }
            content.querySelector('.division').onclick = (e) =>{
             
                this.numero1 = this.display.innerText;
                this.operador = '/';
                this.display.innerText = '';
              

            }
            content.querySelector('.multiplicacion').onclick = (e) =>{
               
                this.numero1 = this.display.innerText;
                this.operador = '*';
                this.display.innerText = '';
            
            }
            content.querySelector('.borrar').onclick = (e) =>{
              
                this.display.textContent = "";
                this.numero1 = 0;
                this.operador = '';
             
            }

              
            content.querySelector('.resultado').onclick = (e) =>{
         
                if(this.operador == '+'){
                    this.display.innerText = Number(this.numero1) + Number(this.display.innerText);
                }
                if(this.operador == '*'){
                    this.display.innerText = this.numero1 * this.display.innerText;
                }
                if(this.operador == '/'){
                    this.display.innerText = this.numero1 / this.display.innerText;
                }
                if(this.operador == '-'){
                    this.display.innerText = this.numero1 - this.display.innerText;
                }
            

            }

        }

    }
    var c = new Calculator();
    console.log(c);
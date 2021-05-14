

class Window {


    constructor(options = {}) {
        this.width = options.width || 150;
        this.heigh = options.heigh || 150;
        this.posX = options.posX || 150;
        this.posY = options.posy || 150;

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
        this.el.innerText = title;


    }
}

/*

class Calculator extends Window{
    constructor(options = {}){
        super();

        var content = document.createElement('div');

        content.innerHTML = '<input class ="display">\
                            <button class = "number-button">0</button>\
                            <button class = "number-button">1</button>\
                            <button class = "number-button">2</button>\
                            <button class = "number-button">3</button>\
                            <button class = "number-button">4</button>\
                            <button class = "number-button">5</button>\
                            <button class = "number-button">6</button>\
                            <button class = "number-button">7</button>\
                            <button class = "number-button">8</button>\
                            <button class = "number-button">9</button>\
                            <button class = "number-button">-</button>\
                            <button class = "number-button">*</button>\
                            <button class = "number-button">/</button>\
                            <button class = "number-button">+</button>\
                            <button class = "number-button">=</button>\
                            <button class = "number-button">AC</button>\
                            ';
        this.el.appendChild(content);
        this.display = content.querySelector('.display');
        function buttonClick(e) {

            this.value += e.target.innerText;
        }
        content.querySelectorAll('.number-button').forEach(button => 
            button.addEventListener('click', buttonClick.bind(this.display))
        );

        /*
        this.display = document.createElement('input');
        this.buttons = [];
        this.buttons.push(document.createElement('button'));

        this.buttons[0].innerText = '0';

        this.el.appendChild(this.display);
        this.el.appendChild(this.buttons[0]);

        function buttonClick(e){
            this.value += e.target.innerText;
        }
        this.button[0].onclick = buttonClick.bind(this.display);
        }*/

    //}
//}
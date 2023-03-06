const display = document.getElementById("display");
let num1 = "";
let num2 = "";
let op = "";


function press(num) {
  num1 += num;
  display.innerHTML = num1;
}

function setOP(key) {
  op = key;
  num2 = num1;
  num1 = "";
}

function clr() {
  num1 = "";
  num2 = "";
  op = "";
  display.innerHTML = "0";
}

function calculate() {
  let a = parseFloat(num2);
  let b = parseFloat(num1);
  let res = 0;
  switch(op) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
  }
  num1 = res;
  op = "";
  display.innerHTML = res;
}

function operaciones(op)
{

    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    };

    var operacion;

    switch(op) {
        case 'sumar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "+";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "suma";
            break;
        case 'restar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "-";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "resta";
            break;
        case 'multiplicar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "*";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "multiplicacion";
            break;
        case 'dividir':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "/";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "division";
            break;
            
        case 'igual':	
            
            operacion = document.getElementById("resultado").value;
            
            var memoriaop = document.getElementById("memoria").value;
            
            switch(memoriaop) {
                case 'suma':
                    var operandos = operacion.split("+");
                    var resultado = ops.sumar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'resta':
                    var operandos = operacion.split("-");
                    var resultado = ops.restar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'multiplicacion':
                    var operandos = operacion.split("*");
                    var resultado = ops.multiplicar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'division':
                    var operandos = operacion.split("/");
                    var resultado = ops.dividir(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;					
            
            }	
            

            break;
            

    }


}
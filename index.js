let fs = require('fs');


let archivo = fs.readFileSync('triangulo.txt', 'utf-8');

let datos = archivo.split('\r\n');
//console.log(datos[2]);

var numbers = [];
datos.forEach(function(element) {
    numbers.push(element.split('').map( Number ));

  });

var numbersFound = [];

function runNumber(valor, fila, columna) {
    
  
    if(fila === 0 && columna === 0)
    {
        numbersFound.push(numbers[0][0]);
      getChidrens(fila, columna);
    }else{

        numbersFound.push(valor);
        getChidrens(fila, columna);
    }

}

function getChidrens(fila, columna) {
    if((datos.length-1) != (fila) ){
  
if(numbers[fila+1][columna] > numbers[fila+1][columna+1])
{
    runNumber(numbers[fila+1][columna],fila+1, columna );
}else
{
    runNumber(numbers[fila+1][columna+1],fila+1, columna+1 );
}
}
}
//{}
runNumber(0,0,0);
    console.log(numbersFound);
  
var suma = numbersFound.reduce(function(a, b){ return a + b; });
 console.log(suma);


//console.log(ArrayData);
//console.log(ArrayNumeros);


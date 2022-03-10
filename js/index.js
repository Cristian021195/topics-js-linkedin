// PUNTO 0
"use strict";
function logThis(){
    this.desc = "logger";
    console.log(this)
}
new logThis();
/*  ¿Que sale por consola?
    op1: window ❌
    op2: function ❌
    op3: undefined ❌
    op4: {desc: logger} ✅

    __Nota: El concepto de this, hace referencia a "esto" desde donde estoy parado y "esto que estoy usando", en scope o ambiente. en este caso esta funcion
*/

// PUNTO 1
const $modal = document.getElementById('result');

setTimeout(() => {
    $modal.classList.remove('hidden');
}, 1000);

console.log('Result shwon')

/*
    op1: inmediato ✅
    op1: luego del timeout ❌
*/

// PUNTO 2
class Person{}
var student = new Person();

/* Cual sentencia crea un objeto "Persona" llamado student
    op1: var student = new Person() ✅
    op2: var student = construct Person() ❌
    op3: var student =  Person() ❌
    op4: var student = construct Person ❌
*/


// PUNTO 3

function addTax(total) {
    return total * 1.05;
}

/* Como usarias la funcion para saber cuanto impuesto tienes que pagar
    op1: addTax($50) ❌
    op2: addTax 50; ❌
    op3: addTax(50); ✅
*/


// PUNTO 4

var a = ["dog","cat","parrot"];
a[100] = "turtle";

console.log(a.length, a) // 101 (101) ['dog', 'cat', 'parrot', vacío ×97, 'turtle']

/* Que sale por la consola
    op1: 3 ❌
    op2: 101 ✅
    op3: 100 ❌
    op4: 4 ❌
*/


//PUNTO 5

const vacio = () => ({})
console.log(vacio())

/* Marca la opcion INCORRECTA para devolver un objeto vacío
    op1: ()=> {return {};} ❌
    op2: ()=>(({})) ❌
    op3: ()=>{} ✅
    op4: ()=>({})❌
*/


//PUNTO 6

function* simpleGenerator(){
    yield 1;
    yield 2;
}

const generatorObj = simpleGenerator();
console.log(generatorObj.next())
console.log(generatorObj.next())
console.log(generatorObj.next()) //next puede recibir un valor , si no esta presente en la cantidad de yield no ejecuta nada

/* Cual es el nombre de una funcion la cual cuando se ejecuta puede ser suspendida y retomada mas tarde
    op1: Funcion flecha ❌
    op2: Funcion Promesa ❌
    op3: Funcion generadora ✅
    op4: Funcion Aync/Await ❌

    __ NOTA: las funciones generadoras son funciones que pueden retornar diferentes valores segun la cantidad de veces que sea llamada y cantidad de retornos 'yield' tenga.
*/

//PUNTO 7

sum(10,20)
//diff(10,20)

function sum(x,y){
    return x+y;
}

let diff = function(x,y){return x-y}

/* Seleccione la opcion correcta
    op1: ReferenceError ✅
    op2: 30 \n ReferenceError \n 30 \n -10 ❌
    op3: 30 \n -10 ❌
    op4: ReferenceError \n -10 ❌

    __ NOTA: Javascript si bien ejecuta la funcion sum, el error es forzado por la consola, dandonos ReferenceError.
*/


// PUNTO 8

class X{
    get Y(){
        return 42
    }
}

var x = new X();

console.log(x.Y)

/* Como obtienes desde la variable x, el numero 42
    op1: x.get('Y') ❌
    op2: x.Y ✅
    op3: x.get().Y ❌
    op4: x.Y() ❌

    __ NOTA: Javascript si bien ejecuta la funcion sum, el error es forzado por la consola, dandonos ReferenceError.
*/


// PUNTO 9

let valor1;
//console.log(valor1.reduce())

/* Tu codigo produce el siguiente error: Cannot read property 'reduce' of undefined, ¿Que quiere decir?
    op1: Estas llamando un metodo reduce de un objeto que tiene el valor nulo ❌
    op2: Estas llamando un metodo reduce de un objeto que no existe ❌
    op3: Estas llamando un metodo reduce de un arreglo vacío ❌
    op4: Estas llamando un metodo reduce de un objeto que esta declarado pero no tiene ningun valor ✅

    __ NOTA: como todo lo declarado en JS son objetos, al llamar un metodo de una variable sin definir nos da el error.
*/


// PUNTO 9

/* ¿Cual opcion no es un operador unario?
    op1: instanceof ✅
    op2: void ❌
    op3: typeof ❌
    op4: delete ❌

    __ NOTA: Una operacion unaria es aquella que tiene un solo operando, este operando viene antes o despues del operador, 
    son mas eficientes que las funciones estandar, y no pueden ser sobreescritos.
        _ typeof	Returns a string which is the type of the operand
        _ delete	Deletes specific index of an array or specific property of an object
        _ void	Discards a return value of an expression.
*/


// PUNTO 10

var v = 1;
var f1 = function(){
    console.log(v)
}
var f2 = function(){
    var v = 2;
    f1();
}
console.log('Ejecutamos la funcion f2')
f2();


/* ¿Que sale por consola?
    op1: undefined ❌
    op2: Nada, este codigo dará un error ❌
    op3: 2 ❌
    op4: 1 ✅

    __ NOTA: Una operacion unaria es aquella que tiene un solo operando, este operando viene antes o despues del operador, 
    son mas eficientes que las funciones estandar, y no pueden ser sobreescritos.
        _ typeof	Returns a string which is the type of the operand
        _ delete	Deletes specific index of an array or specific property of an object
        _ void	Discards a return value of an expression.
*/

//PUNTO 11

var a;
var b = (a = 3) ? true : false;

console.log(b)

/* ¿Cual es el problema con este programa?
    op1: No puedes usar el operador ternario a la derecha de una asignacion de variables ❌
    op2: No puedes definir una variable sin inicializar ❌
    op3: La condicion en el operador ternario esta usando una asignacion ✅
    op4: El codigo esta usando var que ya no se usa ❌

    __ NOTA: el operador ternario, evalua como true, si algo es true, distinto de null o undefined, por lo tanto al ser a = 3, existe, y b tambien. entonces dará true
*/

//PUNTO 12

class TextCalculator{
    static calculate(total){
        return total * 0.05;
    }
}

console.log(TextCalculator.calculate(50))

/* ¿Cual es el problema con este programa?
    op1: new TextCalculator().calculate(50) ❌ // Uncaught TypeError: (intermediate value).calculate is not a function
    op2: new TextCalculator().calculate($50) ❌
    op3: TextCalculator.calculate(50) ✅
    op4: calculate(50) ❌

    __ NOTA: Un metodo estatico en JS no le hace falta la instancia de la clase a la que pertenece.
*/

var obj; 
console.log(obj) //undefined
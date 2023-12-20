// Ejercicio 2. 

//Considerando que 𝑎 = 4, 𝑏=7, 𝑐=2𝑏, 𝑥=𝑎 , 𝑦=3𝑥, 𝑢=6, 𝑤=10; crear un algoritmo con JavaScript que realice y muestre el resultado en consola de las siguientes operaciones algebraica:

let a= 4;
let b= 7;
let c= 2 * b;
let x= a;
let y= 3 * x;
let u= 6;
let w= 10;
let z= /"asigna un valor a z"/; 

let resultado1= a*b*c;
console.log("El resultado es: " , resultado1); 
alert("a.El resultado es: " + resultado1);

let resultado2 = Math.pow(a,2) + Math.pow(b,92);
console.log("El resultado es: ", resultado2);
alert("b.El resultado es: " + resultado2);

let resultado3= x+y*(u+w*a);
console.log("El resultado es: " + resultado3);
alert("c.El resultado es: " + resultado3); 

let resultado4= x*y*(z+w);
console.log("El resultado es: " + resultado4);
alert("d.El resultado es: " + resultado4); 


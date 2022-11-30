console.log("Welcome to JS")

//if-else//
//semáforo: 3 condiciones + 1 extra + prompt

function trafficLight(){

let color = prompt("Choose the color of the traffic light");

if (color == "green") {
    console.log("Puedes pasar");    
} else if (color == "yellow") {
    console.log("Precaución");
} else if (color == "red") {
    console.log("Espere, tráfico en circulación")
} else {
    console.log("Error en el sistema")
}
}

/*switch
para un input value ejecuta el caso == value
importante recordar break; al final de casa escenario*/

function trafficGandalf() {
    
    let color = prompt("Choose the color of the traffic light");

    switch (color) {
        case "green":
            console.log("You can pass");
            break;
        case "yellow":
            console.log("Run you fools!");
            break;
        case "red":
            console.log("You shall not pass");
            break;
        default:
            console.log("It seems you are not familiar with traffic lights")
    }
}

/*for
Bucle ejecutado*/

function forExample(){
    for (let i = 1991; i <= 2022; i++){
        //ejemplo de continue
        //salta a la próxima iteración
        if (i % 2 == 0){
            continue; //si el número es par salta al siguiente for (no lo imprime)
        }
        //ejemplo de terminación abrupta del bucle
        if (i > 2011) {
            break;
        }
        
        console.log("Es el año " + i);
    }   
}

/*while
la variable se declara fuera del bucle*/

function whileExample() {
    let i = 1991;
    while (i<=2022){
        
        if (i % 0 == 0){
            i++;
            continue;
        }

        if (i > 2011){
            break;
        }

        console.log("Es el año " + i);
        i++;
    }
}

//Otro ejemplo: login con intentos determinados

function checkUser(){
    //check
}

/* do ... while
se ejecuta entre 1 - N veces (Al menos una vez aunque la condición del while sea falsa*/

function meanWhile(){
    i = 11;
    let functionText = "";
    do{
        functionText = "Es el año " + i + "\n";
        console.log(functionText);
        i++;
    } while (i < 10);   
}

//Ejemplos condicionales varios

function conditionalEx1(num){
    if (num % 2 == 0 && num != 20 && num != 0 &&! (num%8 == 0 || num%6 == 0)){
        console.log("The number is even, different of 20 and 0, nor mult8 or mult6");
    } else {
        console.log("The number is not valid")
    }
}

//OBJETOS - conjunto de propiedades y métodos
/* Ejemplo:coche
    car.name = "FIAT"
    car.model = "500"
    car.color = "white"
    car.start();
    car.drive();
    car.stop();*/

let cars = [{type:"FIAT", model:"500", color:"white", 'max-tara':1500}, {type:"Opel", model:"Corsa", color:"red", 'max-tara':1000}];

const person = {
    name : "Willy",
    lastName: "Wonka",
    fullName: function () {console.log(this.name + " "+this.lastName)}   
}

let coche = {
    type: "Torpedo", 
    model: "HyperSonic",
    color: "purple",
    'max-tara': 9999, 
    drive: function(speed){
        console.log("estás conduciendo a "+speed+" km/h")
    },
    getInfo: function (){
        console.log(this.type,this.model,this.color,this['max-tara']);
    }
}

//METODOS DE TEXTO

function longitudArray() {
let str = 'abcd'
let longitud = str.length;
console.log(longitud);
}



//documentación de arrays -> split() y join() -> str a arr y arr a str
                            //pop quita al final / shift la quita al principio
                            //splice añade nuevos elementos, slice los quita -pero mantiene el espacio
                            //ver encontrar mayor numero y menor número de un array en 

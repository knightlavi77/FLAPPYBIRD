const jugador =
document.getElementById(
"jugador"
);

const tuboSup1 =
document.getElementById(
"tuboSuperior1"
);

const tuboInf1 =
document.getElementById(
"tuboInferior1"
);

const tuboSup2 =
document.getElementById(
"tuboSuperior2"
);

const tuboInf2 =
document.getElementById(
"tuboInferior2"
);



const puntajeTexto =
document.getElementById(
"puntaje"
);



/* variables */
let hueco = 50;

let alturaMinima = 80;
let alturaMaxima = 220;

let y = 200;

let gravedad = 3;

let salto = 45;

let distanciaTubos = window.innerWidth * 1.2;

let tuboX1 = window.innerWidth;
let tuboX2 = window.innerWidth + distanciaTubos;


let puntos = 0;

let juegoActivo = true;

/* salto */

function brincar(){

if(juegoActivo){

y -= salto;

}

}

/* teclado */

document.addEventListener(
"keydown",

function(event){

if(
event.code=="Space"
){

brincar();

}

}

);

/* click móvil */

document.addEventListener(
"click",

brincar

);

/* loop */

function actualizar(){

if(
!juegoActivo
){

return;

}

/* gravedad */

y += gravedad;

jugador.style.top =
y + "px";

/* movimiento tubos */

tuboX1 -= 5;
tuboX2 -= 5;

tuboSup1.style.left =
tuboX1 + "px";

tuboInf1.style.left =
tuboX1 + "px";

tuboSup2.style.left =
tuboX2 + "px";

tuboInf2.style.left =
tuboX2 + "px";

/* reinicio tubos */



if(
tuboX1 < -100
){

tuboX1 = tuboX2 + 500;

let altura1 =
Math.floor(
Math.random() *
(alturaMaxima - alturaMinima)
)
+ alturaMinima;

console.log(
"Pantalla:",
window.innerHeight,
"Altura:",
altura1,
"Hueco:",
hueco,
"Inferior:",
alturaInferior
);

let alturaInferior1 =
window.innerHeight
-
altura1
-
hueco;

tuboSup1.style.height =
altura1 + "px";

tuboInf1.style.height =
alturaInferior1 + "px";

puntos++;
puntajeTexto.innerHTML =
"Puntos: " + puntos;
}

if(
tuboX2 < -100
){

tuboX2 = tuboX1 + 500;

let altura2 =
Math.floor(
Math.random() *
(alturaMaxima - alturaMinima)
)
+ alturaMinima;

let alturaInferior2 =
window.innerHeight
-
altura2
-
hueco;

tuboSup2.style.height =
altura2 + "px";

tuboInf2.style.height =
alturaInferior2 + "px";

puntos++;

puntajeTexto.innerHTML =
"Puntos: " + puntos;

}

/* colisión suelo */

if(
y > window.innerHeight-60
){

finJuego();

}

/* colisión techo */

if(
y < 0
){

finJuego();

}

/* colisión tubos */

let jugadorRect =
jugador.getBoundingClientRect();



if(

intersecta(
jugadorRect,
tuboSup1.getBoundingClientRect()

)

||

intersecta(
jugadorRect,
tuboInf1.getBoundingClientRect()
)

||

intersecta(
jugadorRect,
tuboSup2.getBoundingClientRect()
)

||

intersecta(
jugadorRect,
tuboInf2.getBoundingClientRect()
)

){

finJuego();

}
}

/* detección */

function intersecta(
a,
b
){

return !(
a.right < b.left ||

a.left > b.right ||

a.bottom < b.top ||

a.top > b.bottom

);

}

/* fin */

function finJuego(){

juegoActivo = false;

alert(
"Juego terminado\nPuntos: "
+
puntos
);

location.reload();

}

/* velocidad */

setInterval(

actualizar,

25

);
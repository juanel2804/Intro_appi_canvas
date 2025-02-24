// 1. Obtener el elemento <canvas> del documento HTML mediante su ID
var canvas = document.getElementById("canvas");

// 2. Obtener el contexto de dibujo en 2D del canvas
//    - El contexto permite usar funciones para dibujar en el área del canvas.
var ctx = canvas.getContext("2d");


//    - RGB funciona con tres parámetros: rojo (R), verde (G) y azul (B).
//    - Ejemplo: rgb(34, 177, 76) representa un verde más vibrante.
ctx.fillStyle = "rgb(90, 93, 255)"; // Verde vibrante personalizado

// 4. Dibujar un rectángulo relleno con el color definido
//    - fillRect(x, y, width, height)
//      - x: posición en el eje X donde empieza el rectángulo (10 píxeles desde la izquierda).
//      - y: posición en el eje Y donde empieza el rectángulo (10 píxeles desde la parte superior).
//      - width: ancho del rectángulo (100 píxeles).
//      - height: alto del rectángulo (100 píxeles).
ctx.fillRect(10, 10, 100, 100);

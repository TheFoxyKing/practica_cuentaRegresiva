let tiempoFinalizado;
let intervaloDeTiempo;

function comenzarCuentaRegresiva() {
    tiempoFinalizado = setTimeout(tiempoCumplido, 30000);
    intervaloDeTiempo = setInterval(tictoc, 1000);
    actualizarContador(30);
}  //Iniciar

function tictoc() {
    let tiempo = document.getElementById('contador').textContent
    actualizarContador(tiempo - 1)
}

function tiempoCumplido() {
    clearInterval(intervaloDeTiempo);
    actualizarContador(0)
    const sonido = new Audio('../sonidos/gameover.wav')
    sonido.play()
    alert("Game Over! se acabo el tiempo intetalo de nuevo");
}

function actualizarContador(tiempo1){
    document.getElementById('contador').textContent = tiempo1
}


function mostrarRespuestas(respuesta_1,respuesta_2,respuesta_3,respuesta_4,respuesta_5){
    clearTimeout(tiempoFinalizado);
    clearInterval(intervaloDeTiempo);

    const fecha = new Date();
    const mensaje = 
`${fecha.toLocaleDateString("es-VE")} 
1.${respuesta_1} 
2.${respuesta_2}
3.${respuesta_3} 
4.${respuesta_4} 
5.${respuesta_5}`
alert(mensaje)
}




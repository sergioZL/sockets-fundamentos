var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});
// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar información 
socket.emit('enviarMensaje', {
    usuario: 'sergio',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log(resp);
});

// Escuchar información 
socket.on('enviarMensaje', function(res) {
    console.log('Servidor:', res);
});
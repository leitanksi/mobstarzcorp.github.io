document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('logo');
    var chatIcon = document.getElementById('chat-icon');
    var chatPopup = document.getElementById('chat-popup');
    var closeChat = document.getElementById('close-chat');
    var chatForm = document.getElementById('chat-form');

    // Evento de clic en el logotipo para refrescar la página
    logo.addEventListener('click', function() {
        location.reload(); // Refresca la página
    });

    // Función para mostrar u ocultar el globo de chat
    function toggleChatPopup() {
        if (chatPopup.style.display === 'block') {
            chatPopup.style.display = 'none'; // Oculta el globo de chat si está visible
        } else {
            chatPopup.style.display = 'block'; // Muestra el globo de chat si está oculto
        }
    }

    // Evento de clic en el ícono de chat para mostrar u ocultar el globo de chat
    chatIcon.addEventListener('click', function() {
        toggleChatPopup();
    });

    // Evento de clic en el botón de cerrar del globo de chat para ocultar el globo
    closeChat.addEventListener('click', function() {
        chatPopup.style.display = 'none'; // Oculta el globo de chat
    });

    // Manejo de envío del formulario de chat
    chatForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario de la manera tradicional

        var email = 'mobstarzcorp@proton.me';
        var subject = encodeURIComponent('Nuevo mensaje de chat');
        var message = encodeURIComponent(document.getElementById('chat-input').value);
        var mailtoLink = `mailto:${email}?subject=${subject}&body=${message}`;

        window.location.href = mailtoLink; // Abre el cliente de correo para enviar el mensaje
        chatPopup.style.display = 'none'; // Oculta el chat después de enviar el mensaje
    });

    // Cierra el globo de chat si se hace clic fuera del área del chat
    document.addEventListener('click', function(event) {
        if (!chatPopup.contains(event.target) && !chatIcon.contains(event.target)) {
            chatPopup.style.display = 'none'; // Oculta el globo de chat si se hace clic fuera de él
        }
    });
});

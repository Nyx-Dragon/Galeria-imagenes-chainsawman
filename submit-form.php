<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validar y sanitizar los datos
    $name = filter_var($name, FILTER_SANITIZE_STRING);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $message = filter_var($message, FILTER_SANITIZE_STRING);

    // Aquí puedes agregar código para enviar un correo electrónico o guardar los datos en una base de datos
    $to = "tucorreo@ejemplo.com";
    $subject = "Nuevo mensaje de contacto de: $name";
    $body = "Nombre: $name\nCorreo Electrónico: $email\n\nMensaje:\n$message";

    if (mail($to, $subject, $body)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>

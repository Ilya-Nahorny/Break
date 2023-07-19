<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["cf-name"];
    $email = $_POST["cf-email"];
    $message = $_POST["cf-message"];

    // Формируем тело письма
    $to = "nahorny.ilya@gmail.com";
    $subject = "Nowa wiadomość z formularza kontaktowego";
    $body = "Od: $name\nEmail: $email\n\nWiadomość:\n$message";

    // Отправка письма
    if (mail($to, $subject, $body)) {
        echo "Dziękujemy! Twoja wiadomość została wysłana.";
    } else {
        echo "Przepraszamy, ale wystąpił problem podczas wysyłania wiadomości.";
    }
}
?>

<?php

// configure
$from = '2florista@mail.ru';
$sendTo = '2florista@mail.ru';
$subject = 'New message from contact form';
$fields = array('name' => 'Имя', 'phone' => 'Телефон', 'message' => 'Сообщение'); // array variable name => Text to appear in the email
$okMessage = 'Ваше сообщение было отправлено, мы свяжемся с Вами в ближайшее время';
$errorMessage = 'Ваше сообщение не было отправлено';

// let's do the sending

try
{
    $emailText = "Вы получили новое сообщение от\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}
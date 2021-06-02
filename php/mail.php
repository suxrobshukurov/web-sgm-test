<?php
    // Проверьте данные формы
    $name = $phone = $address = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = test_input($_POST["name"]);
        $phone = test_input($_POST["phone"]);
        $address = test_input($_POST["address"]);
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    $ip = $_SERVER['REMOTE_ADDR'];
    
    // отпарвка письма на почту
    $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
    $headers = "From: $phone\r\nReply-to: $phone\r\nContent-type: text/html; charset=utf-8\r\n";
    $success = mail("suxrob-1996@mail.ru", $subject, $address, $headers);
    echo $success;

    // запись данных в файле logform.txt
    $mess = "Имя: $name, Телефон: $phone, Адрес: $address, ip: $ip\n";

    if($_POST['']);
    $file=fopen('logform.txt', 'a+');
    fputs($file,$mess);
    fclose($file);
    echo $success;

?>
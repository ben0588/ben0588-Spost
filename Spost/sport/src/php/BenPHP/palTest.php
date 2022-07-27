<?php
include('ECPay.Payment.Integration.php');
header("Access-Control-Allow-Origin:*");

echo '1|OK';

$data = $_REQUEST;
var_dump($data);


?>
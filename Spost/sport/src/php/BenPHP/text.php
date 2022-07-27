<?php

 print_r($_POST); 
//  可得到 ECPAY 的回傳參數

//  if(isset($_POST['RtnCode']) AND $_POST['RtnCode'] == 1)
//  {
//     $order = unserialize(base64_decode($_SESSION['order']));
//     $order->setOrderComplete();
//     $order->save();
//     $_SESSION['order'] = base64_encode(serialize($order));
//     header('Location: '.Config::BASE_URL."thankyou");
//     exit;
//  }else{
//     header('Location: '.Config::BASE_URL."fail");
//     exit;
//  }

 ?>
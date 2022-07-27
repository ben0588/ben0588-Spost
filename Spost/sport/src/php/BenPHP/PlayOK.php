<?php
//include "db_func.php"; 
require_once 'ECPay.Payment.Integration.php';
include("sql.php");

// 將 post 資料轉成字串 儲存 SaveData
$String = print_r( $_POST, true );
//file_put_contents( 'tmp/ECPay.txt', $String, FILE_APPEND );
// var_dump($String);
// echo($String . "<br />");
 
//writelogV1("tmp/log.txt" ,"ECPay_OrderResultURL.php======================");  
//writelogV1("tmp/log.txt" ,$String); 
 
define( 'ECPay_MerchantID', '2000132' );
define( 'ECPay_HashKey', '5294y06JbISpM5x9');
define( 'ECPay_HashIV', 'v77hoKGq4kWxNNIS');
 
// 重新整理回傳參數。
$arParameters = $_POST;
foreach ($arParameters as $keys => $value) {
    if ($keys != 'CheckMacValue') {
        if ($keys == 'PaymentType') {
            $value = str_replace('_CVS', '', $value);
            $value = str_replace('_BARCODE', '', $value);
            $value = str_replace('_CreditCard', '', $value);
        }
        if ($keys == 'PeriodType') {
            $value = str_replace('Y', 'Year', $value);
            $value = str_replace('M', 'Month', $value);
            $value = str_replace('D', 'Day', $value);
        }
        $arFeedback[$keys] = $value;
    }
}
 
// 計算出 CheckMacValue
$CheckMacValue = ECPay_CheckMacValue::generate( $arParameters,ECPay_HashKey, ECPay_HashIV,1);

// echo $CheckMacValue ."<br />";
// echo $_POST['CheckMacValue'] . "<br />";
// var_dump($arParameters)  ."<br />";

// 必須要支付成功並且驗證碼正確
if ( $_POST['RtnCode'] =='1' && $CheckMacValue == $_POST['CheckMacValue'] ){
    // echo "OKKKKKK";
    // 
    // 要處理的程式放在這裡，例如將線上服務啟用、更新訂單資料庫付款資訊等
        $State = $_POST['RtnCode'];               // 交易狀態碼 1=成功
        $OrderNumber = $_POST['TradeNo'];               // 綠界提供的訂單號
        $PaymentDate = $_POST['PaymentDate'];       // 付款時間
        $PaymentType = $_POST['PaymentType'];       // 付款類型
        $id = $_POST['CustomField1'];         // 取會員ID

    $sql ="UPDATE shoppingcar SET State=?,OrderNumber=?,PaymentDate=?,PaymentType=? WHERE id=?";
    // $sql ="UPDATE shoppingcar SET State=0 WHERE id=1";
    // $result = $mysql->query($sql);
    // prepare回傳該物件的實體
    $stmt = $mysqli->prepare($sql);
    // bind_param綁定參數 ('isss')i代表數字,s代表字串,(要帶入的參數變數)
    $stmt->bind_param('iissi',$State,$OrderNumber,$PaymentDate,$PaymentType,$id);
    // $stmt->bind_param('iiss',$RtnCode,$TradeNo,$PaymentDate,$PaymentType);
    // 執行
    $stmt->execute();
    // $result->execute();
    // 

 
    
}
echo "付款成功，3秒後返回網站";
header("refresh: 3;url=http://localhost:3000/member/$id");


// 接收到資訊回應ok
// echo 'OK!付款成功';
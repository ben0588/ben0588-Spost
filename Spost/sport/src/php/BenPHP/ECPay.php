<?php
include('ECPay.Payment.Integration.php');
header("Access-Control-Allow-Origin:*","Content-Type:application/x-www-form-urlencoded");

// $MerchantTradeNo= $_REQUEST['MerchantTradeNo']; // 訂單編號 成功
// echo $MerchantTradeNo;
// $MerchantTradeDate= $_REQUEST['MerchantTradeDate']; //下單日期 成功
// echo $MerchantTradeDate;
// $TotalAmount= $_REQUEST['TotalAmount']; // 總金額 成功
// echo $TotalAmount;
// $TradeDesc = $_REQUEST['TradeDesc'];  // 商品描敘 只有一筆
// echo $TradeDesc;
// $ChoosePayment= $_REQUEST['ChoosePayment']; // 交易方法 成功
// echo $ChoosePayment;

$ItemName = $_POST['ItemName']; //取全部商品名稱


try {
         
    $obj = new ECPay_AllInOne();
   
       //服務參數
    //    $obj->ServiceURL  = "https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5";  //服務位置，記得測試完要還成正式網址
    //    $obj->HashKey     = 'pwFHCqoQZGmho4w6' ;                                          //測試用Hashkey，請自行帶入ECPay提供的HashKey
    //    $obj->HashIV      = 'EkRm7iFT261dpevs' ;                                          //測試用HashIV，請自行帶入ECPay提供的HashIV
    //    $obj->MerchantID  = '3002607';                                                    //測試用MerchantID，請自行帶入ECPay提供的MerchantID
    //    $obj->EncryptType = '1';                                                          //CheckMacValue加密類型，請固定填入1，使用SHA256加密
        $obj->ServiceURL  = "https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5";  //服務位置，記得測試完要還成正式網址
        $obj->HashKey     = '5294y06JbISpM5x9' ;                                          //測試用Hashkey，請自行帶入ECPay提供的HashKey
        $obj->HashIV      = 'v77hoKGq4kWxNNIS' ;                                          //測試用HashIV，請自行帶入ECPay提供的HashIV
        $obj->MerchantID  = '2000132';                                                    //測試用MerchantID，請自行帶入ECPay提供的MerchantID
       $obj->EncryptType  = 1;
    //    $obj->CheckMacValue = $_POST;

       //基本參數(請依系統規劃自行調整)
    //    $MerchantTradeNo = "Test".time() ;
    //    $obj->Send['ReturnURL']      = "https://2e1a-220-132-230-112.jp.ngrok.io/spost/Benphp/PlayOK.php";//付款完成通知回傳的網址
    //    $obj->Send['ReturnURL']         = "palTest.php" ;                 //付款完成通知回傳的網址
    //    $obj->Send['ReturnURL']         = "https://e340-118-163-218-100.jp.ngrok.io/spost/Benphp/palTest.php" ;                 //付款完成通知回傳的網址
    //    $obj->Send['ReturnURL']         = "http://localhost:80/spost/Benphp/PlayOK.php" ;                 //付款完成通知回傳的網址
       $obj->Send['ReturnURL']         = "not.php" ;                 //付款完成通知回傳的網址

       $obj->Send['MerchantTradeNo']   = $_REQUEST['MerchantTradeNo']+rand(1,999)."carTest";   //訂單編號
       $obj->Send['MerchantTradeDate'] = date('Y/m/d H:i:s');           //交易時間
    //    $obj->Send['MerchantTradeDate'] = '2012/03/21 15:40:18';           //交易時間
       $obj->Send['TotalAmount']       = (int)$_REQUEST['TotalAmount']; //交易金額
       $obj->Send['TradeDesc']         = $_REQUEST['TradeDesc'];        //交易描述
       $obj->Send['NeedExtraPaidInfo'] = 'Y';                           //額外的付款資訊(消費者信用卡末四碼)
       $obj->Send['ChoosePayment']     = $_REQUEST['ChoosePayment'];    //付款方式:依照前端選擇值
    //    $obj->Send['CheckMacValue']     = $sMacValue;
    //    $obj->Send['ClientBackURL']     = "http://localhost:3000/";   // Client 端返回特店的按鈕連結
       $obj->Send['OrderResultURL']    ="http://localhost:80/spost/Benphp/PlayOK.php";
    //    $obj->Send['ChoosePayment']     = ECPay_PaymentMethod::ALL;      //付款方式:全部
        $obj->Send['CustomField1'] = $_REQUEST['MemberID'];

    $obj->SendExtend['MerchantTradeDate'] = '2012/03/21 15:40:18';
        /*  當 付款方式 [ChoosePayment] 為 ALL 時，可隱藏不需要的付款方式，多筆請以井號分隔(#)。
            可用的參數值：
            Credit:信用卡
            WebATM:網路 ATM
            ATM:自動櫃員機
            CVS:超商代碼
            BARCODE:超商條碼 */
        $ItemName = $_POST['ItemName']; //取全部商品名稱
        foreach($ItemName as $k =>$v){
            // var_dump((json_decode($v))) ;
            // echo "<br />";
            // var_dump((json_decode($v)->title));
            $v1 = json_decode($v);
            // var_dump($v1[$k === "title"]);
            $Name = $v1[$k]->title;
            $Time = $v1[$k]->date . " " . $v1[$k]->time;
            $Price = $v1[$k]->price;
            $Type = $v1[$k]->oid[0] == "l" ? "[課程]" : "[場地]";

            // var_dump($Type);
            
            // var_dump($Price);
            // var_dump($title);
            // foreach( $v1 as $k1 => $v2 ){
            //     // echo "<br />";
            //     var_dump($v2);
                // echo $v1->title;
                // echo "<br />";
                // echo $v1->date . $v1->time;

                array_push($obj->Send['Items'],
                array('Name' => $Name . $Type. $Time ." NT$"  ,
                'Price' => (int)$Price,
                'Currency' => "元",
                'Quantity' => (int)"1",
                'URL' => "dedwed",
                ));

                // var_dump($obj->Send['Items'][0]);
                // var_dump($obj->Send['Items']);

                // var_dump($obj->Send['Items']);
            }

    //    訂單的商品資料
    //    array_push($obj->Send['Items'],
    //    array('Name' => "#" . $v1->title ."Time:" . $v1->date . $v1->time,
    //    'Price' => (int)$v1->price,
    //    'Currency' => "元",
    //    'Quantity' => (int)"1",
    //    'URL' => "dedwed"));
    //    var_dump($obj->Send['Items']);
    // }
    // $obj->Query['MerchantTradeNo'] = $_REQUEST['MerchantTradeNo']+rand(1,999)."carTest";

    //    //產生訂單(auto submit至ECPay)
       $obj->CheckOut(); 
    // $Response = (string)$obj->CheckOutString();
    // echo $Response;

    
   } catch (Exception $e) {
    echo $e->getMessage();
   } 
?>
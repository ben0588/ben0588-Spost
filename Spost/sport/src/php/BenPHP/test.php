<?php
$mysqli = new mysqli("localhost","root","","newspost",3306);
$mysqli->set_charset('utf8');

$price1 = "2018/2/4-18:40:21";

$sha256 = hash('sha256','1');
// $id = $AL->MerchantTradeNo;
// var_dump($id);
// 再個別寫入資料庫更新即可
// */
// $sql = "INSERT INT id,LPid,price,period,time,OrderNumber,State FROM orderlist WHERE values(?,?,?,?,?,?,?) ";

// $sql ="INSERT INTO orderlist(id,LPid,price,period,time,OrderNumber,State) values(1,'l04','200','2022-07-21','10:00 ~ 11:00
// ','123car','1')";
//  $sql ="INSERT INTO test(sha256) values(?)";
 $sql ="UPDATE orderlist set period=(?) where orderid='18'";

// $result = $mysql->query($sql);
// prepare回傳該物件的實體
$stmt = $mysqli->prepare($sql);
// bind_param綁定參數 ('isss')i代表數字,s代表字串,(要帶入的參數變數)
// $stmt->bind_param('isisdsi',$id,$LPid,$price,$period,$time,$OrderNumber,$State);
// $stmt->bind_param('s',$sha256);
$stmt->bind_param('s',$price1);
// 執行
$stmt->execute();

echo $sha256;
echo $price1;


?>
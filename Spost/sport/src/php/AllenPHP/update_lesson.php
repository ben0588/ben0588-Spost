<?php
$mysqli = new mysqli('localhost', 'root', '', 'spost', 3306);
$mysqli->set_charset('utf8');

foreach ($_REQUEST as $key => $val) {

        echo "{$key} = {$val}<br/ >";
    
}

$lid = $_REQUEST['lid'];
$title = $_REQUEST['title'];
$info = $_REQUEST['info'];
$addr = $_REQUEST['addr'];
$mode = $_REQUEST['mode'];
$price = $_REQUEST['price'];
$pricepertime = $_REQUEST['pricePerTime'];
$timelength = $_REQUEST['timeLength'];

$type = $_REQUEST['type'];
$stype = implode(";", $type);

//星期
//w1
$monb = $_REQUEST['monBegin'];
$mone = $_REQUEST['monEnd'];
if (($monb != '') && ($mone != '')) {
    $mon = $monb . ' ～ ' . $mone;
}
//w2
$tueb = $_REQUEST['tueBegin'];
$tuee = $_REQUEST['tueEnd'];
if (($tueb != '') && ($tuee != '')) {
    $tue = $tueb . ' ～ ' . $tuee;
}
//w3
$wedb = $_REQUEST['wedBegin'];
$wede = $_REQUEST['wedEnd'];
if (($wedb != '') && ($wede != '')) {
    $wed = $wedb . ' ～ ' . $wede;
}
//w4
$thub = $_REQUEST['thuBegin'];
$thue = $_REQUEST['thuEnd'];
if (($thub != '') && ($thue != '')) {
    $thu = $thub . ' ～ ' . $thue;
}
//w5
$frib = $_REQUEST['friBegin'];
$frie = $_REQUEST['friEnd'];
if (($frib != '') && ($frie != '')) {
    $fri = $frib . ' ～ ' . $frie;
}
//w6
$satb = $_REQUEST['satBegin'];
$sate = $_REQUEST['satEnd'];
if (($satb != '') && ($sate != '')) {
    $sat = $satb . ' ～ ' . $sate;
}
//w7
$sunb = $_REQUEST['sunBegin'];
$sune = $_REQUEST['sunEnd'];
if (($sunb != '') && ($sune != '')) {
    $sun = $sunb . ' ～ ' . $sune;
}

//更新資料庫
echo'<hr/>';
$sql = "UPDATE lesson SET title= '{$title}', info='{$info}', addr='{$addr}', mode='{$mode}', price='{$price}' , pricepertime='{$pricepertime}', timelength='{$timelength}', type='{$stype}', mon='{$mon}', tue='{$tue}', wed='{$wed}', thu='{$thu}', fri='{$fri}', sat='{$sat}', sun='{$sun}'  WHERE lid='{$lid}'";

if ($mysqli->query($sql)) {
    echo "資料更新成功";
} else {
    echo "資料更新失敗";
}

//圖片

$img1 = addslashes(file_get_contents($_FILES['img1']['tmp_name']));
$img2 = addslashes(file_get_contents($_FILES['img2']['tmp_name']));
$img3 = addslashes(file_get_contents($_FILES['img3']['tmp_name']));

// if (isset($img1)){
//     echo 'oo';
// }else{
//     echo 'xx';
// }
// if (isset($img2)){
//     echo 'oo';
// }else{
//     echo 'xx';
// }
// if (isset($img3)){
//     echo 'oo';
// }else{
//     echo 'xx';
// }

echo '<hr/>';
if (isset($img1)){
    $sqlimage1 = "UPDATE limage SET img='{$img1}' WHERE lid = '{$lid}'";
}
if (isset($img2)){
    $sqlimage2 = "INSERT INTO limage (img, lid) VALUES('{$img2}','{$lid}')";
}
if (isset($img3)){
    $sqlimage3 = "INSERT INTO limage (img, lid) VALUES('{$img3}','{$lid}')";
}

if ($mysqli->query($sqlimage1)) {
    echo "圖片1上傳成功".'<br/>';
}
if ($mysqli->query($sqlimage2)) {
    echo "圖片2上傳成功".'<br/>';
}
if ($mysqli->query($sqlimage3)) {
    echo "圖片3上傳成功".'<br/>';
}

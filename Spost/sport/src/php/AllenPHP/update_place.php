<?php
$mysqli = new mysqli('localhost', 'root', '', 'spost', 3306);
$mysqli->set_charset('utf8');

foreach ($_REQUEST as $key => $val) {
    if ($val !== '') {
        echo "{$key} = {$val}<br/ >";
    }
}

$pid = $_REQUEST['pid'];
$title = $_REQUEST['title'];
$info = $_REQUEST['info'];
$addr = $_REQUEST['addr'];
$price = $_REQUEST['price'];
$pricepertime = $_REQUEST['pricePerTime'];

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
$sql = "UPDATE place SET title= '{$title}', info='{$info}', addr='{$addr}', price='{$price}' , pricepertime='{$pricepertime}', type='{$stype}', mon='{$mon}', tue='{$tue}', wed='{$wed}', thu='{$thu}', fri='{$fri}', sat='{$sat}', sun='{$sun}'  WHERE pid='{$pid}'";

if ($mysqli->query($sql)) {
    echo "更新成功";
} else {
    echo "更新失敗";
}

//圖片
$img1 = addslashes(file_get_contents($_FILES['img1']['tmp_name']));
$img2 = addslashes(file_get_contents($_FILES['img2']['tmp_name']));
$img3 = addslashes(file_get_contents($_FILES['img3']['tmp_name']));

echo '<hr/>';
if (isset($img1)){
    $sqlimage1 = "UPDATE pimage SET img='{$img1}' WHERE pid = '{$pid}'";
}
if (isset($img2)){
    $sqlimage2 = "INSERT INTO pimage (img, pid) VALUES('{$img2}','{$pid}')";
}
if (isset($img3)){
    $sqlimage3 = "INSERT INTO pimage (img, pid) VALUES('{$img3}','{$pid}')";
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
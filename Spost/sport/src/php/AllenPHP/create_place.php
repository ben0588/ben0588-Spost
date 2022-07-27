<?php

$mysqli = new mysqli('localhost', 'root', '', 'spost', 3306);
$mysqli->set_charset('utf8');


// foreach ($_REQUEST as $key => $val) {
//     if ($val !== '') {
//         echo "{$key} = {$val}<br/ >";
//     }
// } 
foreach ($_POST as $key => $val){
    if($val!==''){
        echo "{$key} = {$val}<br/ >";
    }
}

/* ------------------------------------新增場地--------------------------------------------- */

if (isset($_REQUEST["title"])) {

    //lid
    $sqlcount = "SELECT * FROM place";
    if ($result = mysqli_query($mysqli, $sqlcount)) {
        $rowcount = mysqli_num_rows($result);
        $pid = "p" . $rowcount + 1;
        echo $pid;
    }

    //單一資料
    $title = $_REQUEST['title'];
    $info = $_REQUEST['info'];
    $plimit = $_REQUEST['plimit'];
    $price = $_REQUEST['price'];
    $pricepertime = $_REQUEST['pricePerTime'];
    $id = $_REQUEST['id'];

    //星期
    //w1
    $monb = $_REQUEST['monBegin'];
    $mone = $_REQUEST['monEnd'];
    if (($monb != '') && ($mone != '')) {
        $mon = $monb . ' ～ ' . $mone;
        echo $mon;
    }
    //w2
    $tueb = $_REQUEST['tuesBegin'];
    $tuee = $_REQUEST['tuesEnd'];
    if (($tueb != '') && ($tuee != '')) {
        $tue = $tueb . ' ～ ' . $tuee;
        echo $tue;
    }
    //w3
    $wedb = $_REQUEST['wedBegin'];
    $wede = $_REQUEST['wedEnd'];
    if (($wedb != '') && ($wede != '')) {
        $wed = $wedb . ' ～ ' . $wede;
        echo $wed;
    }
    //w4
    $thub = $_REQUEST['thurBegin'];
    $thue = $_REQUEST['thurEnd'];
    if (($thub != '') && ($thue != '')) {
        $thu = $thub . ' ～ ' . $thue;
        echo $thu;
    }
    //w5
    $frib = $_REQUEST['friBegin'];
    $frie = $_REQUEST['friEnd'];
    if (($frib != '') && ($frie != '')) {
        $fri = $frib . ' ～ ' . $frie;
        echo $fri;
    }
    //w6
    $satb = $_REQUEST['satBegin'];
    $sate = $_REQUEST['satEnd'];
    if (($satb != '') && ($sate != '')) {
        $sat = $satb . ' ～ ' . $sate;
        echo $sat;
    }
    //w7
    $sunb = $_REQUEST['sunBegin'];
    $sune = $_REQUEST['sunEnd'];
    if (($sunb != '') && ($sune != '')) {
        $sun = $sunb . ' ～ ' . $sune;
        echo $sun;
    }

    // 分類
    echo "<hr/>";
    $type = $_REQUEST['type'];
    $stype = implode(";", $type);
    echo $stype;

    //地址
    $addrs = $_REQUEST['city'] . $_REQUEST['district'] . $_REQUEST['addr'];

    //資料庫
    $sql = "INSERT INTO place (pid, title, id, addr, info, plimit, price, pricepertime, mon, tue, wed, thu, fri, sat, sun, type) VALUES " 
    . "('{$pid}','{$title}','{$id}','{$addrs}','{$info}','{$plimit}','{$price}','{$pricepertime}','{$mon}','{$tue}','{$wed}','{$thu}','{$fri}','{$sat}','{$sun}','{$stype}')";
    if ($mysqli->query($sql)) {
        echo "上傳成功";
    } else {
        echo "上傳失敗";
    }

    //圖片
    if ($_FILES['img1']['error'] == 0) {
        $img1 = addslashes(file_get_contents($_FILES['img1']['tmp_name']));
    }

    if ($_FILES['img2']['error'] == 0) {
        $img2 = addslashes(file_get_contents($_FILES['img2']['tmp_name']));
    }

    if ($_FILES['img3']['error'] == 0)   {
        $img3 = addslashes(file_get_contents($_FILES['img3']['tmp_name']));
    }

    // 資料庫
    if ($img3 !== null) {
        $sqlimg = "INSERT INTO pimage(img, pid) VALUES('{$img1}','{$pid}'),('{$img2}','{$pid}'),('{$img3}','{$pid}')";
    } elseif ($img2 !== null) {
        $sqlimg = "INSERT INTO pimage (img, pid) VALUES('{$img1}','{$pid}'),('{$img2}','{$pid}')";
    } else {
        $sqlimg = "INSERT INTO pimage (img, pid) VALUES('{$img1}','{$pid}')";
    }


    if ($mysqli->query($sqlimg)) {
        echo "上傳成功";
    } else {
        echo "上傳失敗";
    }
}

// header("Location: http://localhost:3000/#/RentPlace");
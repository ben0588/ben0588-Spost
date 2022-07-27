<?php
    include('sql.php');

    // 場地介紹頁
    $pid = $materialPost["pid"];

    $sql = " SELECT * FROM place WHERE pid = '$pid'; ";
    $result = $sportSql->query($sql);

    $img = " SELECT img FROM place INNER JOIN pimage ON place.pid = pimage.pid WHERE place.pid = '$pid'; ";
    $imgInfo = $sportSql->query($img);

    $i = 2;
    $myJSON=[];
    while ($date = mysqli_fetch_object($result)) {
        $myJSON[0] = $date;
        $id = " SELECT * FROM `member` WHERE id = '$date->id'; ";
        $idImg = $sportSql->query($id);
        $myJSON[1] = $idImg->fetch_object()->img;
        while ($date = $imgInfo->fetch_object()) {
            $date->img = base64_encode($date->img);
            $myJSON[$i] = $date;
            $i++;
        }
    }

    $MaterialToClient = json_encode($myJSON);
    echo $MaterialToClient;
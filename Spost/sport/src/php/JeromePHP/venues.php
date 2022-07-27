<?php
    include('sql.php');

    // 課程介紹頁
    $lid = $materialPost["lid"];

    $sql = " SELECT * FROM lesson WHERE lid = '$lid';";
    $result = $sportSql->query($sql);

    $img = " SELECT img FROM lesson INNER JOIN limage ON lesson.lid = limage.lid WHERE lesson.lid = '$lid' ";
    $imgInfo = $sportSql->query($img );

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
<?php
    include('sql.php');

    // 日期按鈕
    $pid = $materialPost["pid"];

    $sql = "SELECT mon, tue, wed, thu, fri, sat, sun FROM place WHERE pid = $pid";
    $result = $sportSql->query($sql);

    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $myJSON = $date;
    }
    $DateToClient = json_encode($myJSON);
    echo $DateToClient;
?>
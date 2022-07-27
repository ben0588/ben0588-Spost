<?php
    // SELECT DISTINCT type from lesson ORDER BY type;

    include('sql.php');
    header("Access-Control-Allow-Origin:*");
    $sql = "SELECT DISTINCT `type` from lesson ORDER BY `type` ";
    $result = $mysqli->query($sql);
    $i=0;
    $myJSON=[];
    while($datas = $result->fetch_object()){
        $myJSON[$i] = $datas;
        $i++;
    }
    $dataToClient=json_encode($myJSON);
    echo $dataToClient;   
?>
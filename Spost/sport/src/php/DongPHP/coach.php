<?php
    include('sql.php');
    header("Access-Control-Allow-Origin:*");
    $sql = "SELECT img1,type,title,addr,price,cname,mode FROM `lesson` INNER JOIN coach ON lesson.cid = coach.cid";
    $result = $mysqli->query($sql);
    $i=0;
    $myJSON=[];
    while($datas = $result->fetch_object()){
        // var_dump($datas);
        $datas->img1 = base64_encode($datas->img1);
        $myJSON[$i] = $datas;
        $i++;
    }
    $dataToClient=json_encode($myJSON);
    echo $dataToClient;    
?>
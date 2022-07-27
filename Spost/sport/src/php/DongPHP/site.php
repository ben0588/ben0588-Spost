<?php
    include('sql.php');
    
    header("Access-Control-Allow-Origin:*");
    // $sql = "SELECT pid,title,addr,img1,`type`,price,pricepertime FROM `place` ORDER BY RAND()";
    $sql = "SELECT place.pid,title,addr,price,pricepertime,member.nickname,pimage.img 
    FROM place INNER JOIN member ON place.id = member.id 
    LEFT JOIN pimage ON place.pid = pimage.pid 
    GROUP BY pimage.pid ORDER BY RAND()"; 
    $result = $mysqli->query($sql);
    $i=0;
    $myJSON=[];
    while($datas = $result->fetch_object()){
        // var_dump($datas);
        $datas->img = base64_encode($datas->img);
        $myJSON[$i] = $datas;
        $i++;
    }
    $dataToClient=json_encode($myJSON);
    echo $dataToClient;    
?>
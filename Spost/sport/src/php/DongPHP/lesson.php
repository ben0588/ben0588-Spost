<?php
    include('sql.php');
    header("Access-Control-Allow-Origin:*");
    // $sql = "SELECT lid,img1,type,title,addr,price,cname,mode FROM `lesson` INNER JOIN coach ON lesson.cid = coach.cid ORDER BY RAND()";
    $sql = "SELECT nickname ,lesson.lid , title, addr, info, mode, price, limage.img , type 
    FROM lesson INNER JOIN 
    member ON lesson.id = member.id 
    LEFT JOIN limage ON lesson.lid = limage.lid 
    GROUP BY limage.lid ORDER BY RAND()";
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
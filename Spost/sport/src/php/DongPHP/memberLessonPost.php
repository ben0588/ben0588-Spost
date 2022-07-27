<?php
    include 'sql.php';
    header("Access-Control-Allow-Origin:*");


    foreach ($_POST as $key => $val) {
        $checkinfo = [];
        $checkinfo[0] = explode(',', $key)[0];
        $checkinfo[1] = explode(',', $key)[1];
    }
    if(hash('sha256', $checkinfo[0].'spost') == $checkinfo[1]){
        $sql = "SELECT lesson.id ,nickname ,lesson.lid , title, addr, info, mode, price, limage.img , type 
        FROM lesson INNER JOIN 
        member ON lesson.id = member.id 
        LEFT JOIN limage ON lesson.lid = limage.lid 
        WHERE lesson.id = $checkinfo[0] group BY lesson.lid";

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
    }else{
        echo true;
    }
?>
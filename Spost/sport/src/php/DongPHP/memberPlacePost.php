<?php
    include 'sql.php';
    header("Access-Control-Allow-Origin:*");

    foreach ($_POST as $key => $val) {
        $checkinfo = [];
        $checkinfo[0] = explode(',', $key)[0];
        $checkinfo[1] = explode(',', $key)[1];
    }
    if(hash('sha256', $checkinfo[0].'spost') == $checkinfo[1]){
        $sql = "SELECT place.id,place.pid,title,addr,price,pricepertime,member.nickname,pimage.img 
        FROM place INNER JOIN member ON place.id = member.id 
        LEFT JOIN pimage ON place.pid = pimage.pid WHERE place.id = $checkinfo[0]
        group by place.pid";

        $result = $mysqli->query($sql);
        $i=0;
        $myJSON=[];
        while($datas = $result->fetch_object()){
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
<?php
    include 'sql.php';
    header("Access-Control-Allow-Origin:*");

    $pid='';
    foreach ($_POST as $key => $val) {
        $checkinfo = [];
        $checkinfo[0] = explode(',', $key)[0];
        $pid = explode(',', $key)[0];
        $checkinfo[1] = explode(',', $key)[1];
        $checkinfo[2] = explode(',', $key)[2];
    }
    $sql = "SELECT place.* , pimage.img 
    FROM place INNER JOIN 
    pimage ON place.pid = pimage.pid WHERE place.pid=\"$pid\"";
    $result = $mysqli->query($sql);
    $i=0;
    $myJSON=[];
    while($datas = $result->fetch_object()){            
        $datas->img = base64_encode($datas->img);
        $myJSON[$i] = $datas;
        $i++;                
    }

    if((hash('sha256', $checkinfo[1].'spost') == $checkinfo[2])&&($checkinfo[1]==$myJSON[0]->id)){        
        $dataToClient=json_encode($myJSON);
        echo $dataToClient;
    }else{
        echo true;
    }
?>
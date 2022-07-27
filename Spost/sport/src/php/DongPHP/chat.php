<?php

    include('sql.php');
    header("Access-Control-Allow-Origin:*");

    // var_dump($_POST);
    foreach ($_POST as $key => $val) {        
        $temp = explode(',',$key);
    }
    // var_dump($temp);
    // SELECT nickname,img FROM `member` WHERE id = 1;
    if(hash('sha256',$temp[0].'spost')==$temp[1]){
        $sql = "SELECT nickname,img FROM `member` WHERE id = $temp[0]";
        $result = $mysqli->query($sql);

        $i=0;
        $myJSON=[];
        while($datas = $result->fetch_object()){
            $myJSON[$i] = $datas;
            $i++;                
            $dataToClient=json_encode($myJSON);
            echo $dataToClient;        
        }
    }else{
        echo '00';
    }
?>
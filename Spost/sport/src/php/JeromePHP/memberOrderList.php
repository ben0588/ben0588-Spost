<?php
    include('sql.php');

    $id = $materialPost['id'];
    $info = $materialPost['info'];

    $i = 0;
    $myJSON=[];
    if( hash('sha256', $id.'spost') == $info ){
        // 會員訂單資料
        $sql = " SELECT * FROM shoppingcar WHERE id = '$id' AND `State` = '1' GROUP BY `oid` ORDER BY `shoppingcar`.`title` DESC ";

        $result = $sportSql->query($sql);

        while ($date = $result->fetch_object()) {
            $myJSON[$i] = $date;
            $i++;
        }

        $DateToClient = json_encode($myJSON);
        echo $DateToClient;
    }
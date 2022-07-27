<?php
    include('sql.php');

    $id = $materialPost['id'];
    $info = $materialPost['info'];

    if( hash('sha256', $id.'spost') == $info ){
        // 會員資料
        $sql = " SELECT * FROM member WHERE id = '$id' ";
        $result = $sportSql->query($sql);

        $DateToClient = json_encode($result->fetch_object());
        echo $DateToClient;
    }else {
        echo true;
    }


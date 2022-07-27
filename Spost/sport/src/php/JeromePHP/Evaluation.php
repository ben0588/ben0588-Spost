<?php
    include('sql.php');

    $oid = $materialPost['oid'];

    $sql = " SELECT member.nickname, reaction.rate, reaction.info, reaction.time FROM reaction INNER JOIN member ON reaction.id = member.id WHERE `PLId` = 'l27'; ";
    $result = $sportSql->query($sql);

    $i = 0;
    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $myJSON[$i] = $date;
        $i++;
    }

    $DateToClient = json_encode($myJSON);
    echo $DateToClient;
?>
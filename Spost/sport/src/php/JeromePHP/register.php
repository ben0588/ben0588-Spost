<?php
    include('sql.php');

    // 註冊頁
    $account  = $materialPost["account"];
    $email    = $materialPost["email"];

    $insert = "INSERT INTO member (account, email) VALUES (?, ?)";
    $sportIn = $sportSql->prepare($insert);
    $sportIn->bind_param('ss', $account, $email);

    if ( $sportIn->execute() ) {
        echo true;
    }else {
        echo "";
    }
?>
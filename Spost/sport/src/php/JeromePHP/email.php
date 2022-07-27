<?php
    include('sql.php');

    // 註冊頁
    $account  = "{$materialPost['account']}";
    $password = hash('sha256', $materialPost["password"]);
    $email    = "{$materialPost['email']}";
    $phone    = $materialPost["phone"];
    $realname = "{$materialPost['realname']}";
    $nickname = "{$materialPost['nickname']}";
    $gender   = "{$materialPost['gender']}";

    $upDate = "UPDATE member 
        SET `password` = ?, phone = ?, realname = ?, nickname = ?, gender = ?
        WHERE account = '$account'";
    $sportUp = $sportSql->prepare($upDate);
    $sportUp->bind_param('sssss', $password, $phone, $realname, $nickname, $gender);
    if ( $sportUp->execute() ) {
        echo true;
    }else {
        echo "";
    }
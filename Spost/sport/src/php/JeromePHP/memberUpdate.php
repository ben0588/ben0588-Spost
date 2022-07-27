<?php
    include('sql.php');

    $id = "{$materialPost['id']}";
    $img = "{$materialPost['img']}";
    // $img = "{$materialFILES['img']}";
    $realname = "{$materialPost['realname']}";
    $nickname = "{$materialPost['nickname']}";
    $email    = "{$materialPost['email']}";
    $birthday = "{$materialPost['birthday']}";
    $phone    = $materialPost["phone"];
    $gender   = "{$materialPost['gender']}";
    $password = hash('sha256', $materialPost["password"]);
    
    // 會員資料
    if ($password == hash('sha256','')) {
        $upDate = "UPDATE member 
            SET img = ?, realname = ?, nickname = ?, email = ?, birthday = ?, phone = ?, gender = ?
            WHERE id = '$id'";
        $sportUp = $sportSql->prepare($upDate);
        $sportUp->bind_param('sssssss', $img, $realname, $nickname, $email, $birthday, $phone, $gender);
    }else {
        $upDate = "UPDATE member 
            SET img = ?, realname = ?, nickname = ?, email = ?, birthday = ?, phone = ?, gender = ?, `password` = ?
            WHERE id = '$id'";
        $sportUp = $sportSql->prepare($upDate);
        $sportUp->bind_param('ssssssss', $img, $realname, $nickname, $email, $birthday, $phone, $gender, $password);
    }
    if ( $sportUp->execute() ) {
        echo true;
    }

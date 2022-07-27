<?php
    include('sql.php');

    // 登入頁
    $singInAccount  = $materialPost["singInAccount"];
    $singInEmail  = $materialPost["singInEmail"];
    $singInPassword  = hash('sha256', $materialPost["singInPassword"]);


    if ( strlen($singInAccount) == 0 ) {
        $get = "SELECT * FROM member WHERE email = '$singInEmail' ";
    }else {
        $get = "SELECT * FROM member WHERE account = '$singInAccount' ";
    }
    $results = $sportSql->query($get);
    $row = $results->fetch_array();

    if ( $row['password'] == $singInPassword ) {
        $check = [];
        $check[0] = $row['id'];
        $check[1] = hash('sha256', $row['id'].'spost');
        $checkA = json_encode($check);
        echo $checkA;
    }


?>
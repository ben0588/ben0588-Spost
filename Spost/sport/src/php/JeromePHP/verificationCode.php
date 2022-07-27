<?php
    include('sql.php');

    $email  = $materialPost["emails"];

    $chkCode = "";
    for ( $i = 0 ; $i <= 3 ; $i++ ) {
        $chkCode .= rand(0, 9);
    }
    if ( mail( $email, "SPOST + 忘記密碼驗證信", $chkCode ) ) {
        echo $chkCode;
    }else {
        echo "";
    }
?>
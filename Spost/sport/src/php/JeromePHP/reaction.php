<?php
    include('sql.php');

    $id = "{$materialPost['id']}";
    $info = "{$materialPost['info']}";

    $PLId = "{$materialPost['PLId']}";
    $rate = "{$materialPost['rate']}";
    $reactionInfo = "{$materialPost['reactionInfo']}";
    $time = "{$materialPost['time']}";

    if( hash('sha256', $id.'spost') == $info ) {
        $sql = "INSERT INTO reaction (id, rate, info, `time`) VALUES (?, ?, ?, ?)";
        $sportIn = $sportSql->prepare($sql);
        $sportIn->bind_param('ssss', $PLId, $rate, $reactionInfo, $time);
        
        if ( $sportIn->execute() ) {
            echo true;
        }
    }
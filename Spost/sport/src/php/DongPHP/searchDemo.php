<?php
    include 'sql.php';
    header("Access-Control-Allow-Origin:*");
    $clientRequest = new stdClass();
    foreach ($_POST as $key => $val){
        if($val !== ""){
            $clientRequest->$key = $val;
        }
    }
    // 查看前端結果
    // var_dump($clientRequest);
    $i=0;
    $myJSON=[];
/*--------------------
    關鍵字搜尋
----------------------*/
    $keyWord = "%{$_POST['search']}%";
    $sql = "SELECT title,addr,cname,price,mode,img1 FROM `lesson` 
            INNER JOIN coach ON lesson.cid = coach.cid 
            WHERE title LIKE ? OR addr LIKE ? OR cname LIKE ?";
/*--------------------
    縣市行政區
----------------------*/
    if(isset($clientRequest->district)){
        $sql .= " INTERSECT SELECT title,addr,cname,price,mode,img1 FROM `lesson`".
                    " INNER JOIN coach ON lesson.cid = coach.cid".
                    " WHERE addr LIKE \"%{$clientRequest->city}{$clientRequest->district}%\" ";
    } elseif(isset($clientRequest->city)){
        $sql .= " INTERSECT SELECT title,addr,cname,price,mode,img1 FROM `lesson`".
                " INNER JOIN coach ON lesson.cid = coach.cid".
                " WHERE addr LIKE \"%{$clientRequest->city}%\" ";
    }
/*--------------------
    模式
----------------------*/
    if(isset($clientRequest->mode)){
        $sql .= " INTERSECT SELECT title,addr,cname,price,mode,img1 FROM `lesson`".
                    " INNER JOIN coach ON lesson.cid = coach.cid".
                    " WHERE mode = '{$clientRequest->mode}'";
    }

/*--------------------
    價錢

    SELECT title,addr,cname,price,mode,img1 FROM `lesson` 
            INNER JOIN coach ON lesson.cid = coach.cid
            WHERE price BETWEEN 0 AND 500
----------------------*/
    if(isset($clientRequest->price)){        
        if($clientRequest->price=="$3001 ~ 以上"){
            foreach (explode("~",$clientRequest->price) as $key => $val){
                $priceTemp[0] = trim(explode("~",$clientRequest->price)[0]);
                $priceTemp[0] = trim($priceTemp[0],"$");
            }
            $sql .= " INTERSECT SELECT title,addr,cname,price,mode,img1 FROM `lesson` 
            INNER JOIN coach ON lesson.cid = coach.cid
            WHERE price >= {$priceTemp[0]}";
        }else{
            foreach (explode("~",$clientRequest->price) as $key => $val){
                $priceTemp[0] = trim(explode("~",$clientRequest->price)[0]);
                $priceTemp[1] = trim(explode("~",$clientRequest->price)[1]);
                $priceTemp[0] = trim($priceTemp[0],"$");
                $priceTemp[1] = trim($priceTemp[1],"$");
            }
            $sql .= " INTERSECT SELECT title,addr,cname,price,mode,img1 FROM `lesson` 
            INNER JOIN coach ON lesson.cid = coach.cid
            WHERE price BETWEEN {$priceTemp[0]} AND {$priceTemp[1]}";
        }
        // var_dump($priceTemp);
        // echo $sql;
    }

    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('sss',$keyWord,$keyWord,$keyWord);
    $stmt->execute();
    $result = $stmt->get_result();
    while($row = $result->fetch_assoc()){
        $myJSON[$i] = $row;
        $myJSON[$i]['img1'] = base64_encode($myJSON[$i]['img1']);
        $i++;
    }
    $dataToClient=json_encode($myJSON);
    // 輸出
    echo $dataToClient;
    $stmt->free_result();
    $stmt->close();
?>
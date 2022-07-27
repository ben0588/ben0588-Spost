<?php
include("sql.php");
header("Access-Control-Allow-Origin:*");

// =========查詢資料用
// 測試inner join關聯資料庫內容
// $sql = "SELECT lid,title,addr,info,mode,type from `lesson` inner join `coach` where lesson.cid = coach.cid";

// 取得place(場地表格)內容
// $sql = "SELECT pid,title,type,img1 from `place` ";
$sql = "SELECT * FROM place INNER JOIN pimage ON place.pid = pimage.pid ORDER BY RAND() limit 15" ;
$result = $mysqli->query($sql); // 使用query連接mysqli資料庫後下sql指令
// var_dump($result);  // dump是個object物件
// var_dump($result->fetch_object()); //取出是個object物件

// =========取資料用
// 測試取object物件資料值成功
// echo $row;
// echo $row->lid;
// echo gettype($row);

// $row = $result->fetch_object();
// var_dump($row);
// 由於以上方法每次只會產生一筆資料,使用while迴圈方式將全部資料撈取
// 在上面新增變數,跑迴圈後直接更新上述的變數值
$i =0;
$oder = [];
while($data = $result->fetch_object()){

        // 變數指向對應資料表標籤名稱_須留意SQL查詢指令
        // var_dump($row);
        // echo $row;
        // echo "{$row->lid}:{$row->title}:{$row->info}:{$row->mode} <br />"; 

        // 取資料庫的img欄位(mediumblob格式)
        $data->img = base64_encode($data->img);

        // // [i] = 陣列的key值[0]
        $oder[$i] = $data;
        // // i++不加的話就會無限跑0,等同不會塞資料進變數
        $i++;
}

// 將陣列轉換成json字串顯示出來(單跑php是亂碼是正常的,要去前端看內容)
// echo json_encode($oder);
$myOderJson = json_encode($oder);
echo($myOderJson);

// foreach($result as $k => $v){
//     echo "{$k}:{$v}<br/>";
//     foreach($v as $h){
//         echo "{$h}";
//     }
// }

// foreach ($result as $k => $v){ 
//     // 如果$v資料姓名型態是array才另外處理
//     if (gettype($v) == 'array'){
//         // 印出$key
//         // echo $k . '<br/>';
//         // 因為是array所以可以使用foreach將[]數字取出
//         foreach($v as $h){
//             echo "{$h} <br/>";
//             // $v=key取出來等於是勾選哪個興趣方塊順序;
//         }
//     }else{
//         // echo "{$k} : {$v} <br />" ;
//     }
// }   

 
// ==========新增資料用
// $lid = 121 ;$title = '測試中';   $addr = '台中市';    $info ="歐北來";
// $sql = "INSERT INTO lesson(lid,title,addr,info) VALUE(?,?,?,?)";
// // prepare回傳該物件的實體
// $stmt = $mysqli->prepare($sql);
// // bind_param綁定參數 ('isss')i代表數字,s代表字串,(要帶入的參數變數)
// $stmt->bind_param('isss',$lid,$title,$addr,$info);
// // 執行
// $stmt->execute();







?>
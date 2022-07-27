<!-- 用來簡化SQL下指令的設計 -->
<?php

    class MyQuery {
        private $mysqli;
        
        //進階增加維護姓->定義常數
        const QUERY_NAME = 'name';
        const QUERY_TEL = 'tel';
        const QUERY_ADDRESS = 'adder';
        // 設定完畢後去ben61.php修改輸入條件
        

        // 將從外面輸入的值放入this變數$mysqli
        function __construct($mysqli){
            $this->mysqli = $mysqli;
        }

        // 取得商品資料 (給我id,想看甚麼)
        function getProductData($id,$field){
            $sql = "SELECT * FROM food WHERE id = {$id}";
            $result = $this->mysqli->query($sql);

            // 判斷是否有抓取成功,如果是列數量0則返回false(沒抓到),成功就執行else
            if($result->num_rows == 0){
                return false;
            }else{
                // fetch_assoc取陣列跟物件
                $data = $result->fetch_assoc();
                return $data[$field];
            }
        }

        // 取得所有資料所有地址資料
        function getAllAddress($where =''){
            $sql = "SELECT addr FROM food";
            if(strlen(($where) > 0)){
                $sql .= " WHERE {$where}";
            }
            $sql .= " ORDER BY id";
            $result = $this->mysqli->query($sql);
            $ret = [];
            while($row =$result->fetch_object()){
                $ret[] = $row;
            }
            return $ret;


        }
        // 關鍵字查詢 =>用or關鍵字查詢
        // $keyword = xxx; yyy;
        // 比如只要查name,tel,addr
        function getDataBbyKeyword($keyword=''){
            $keywords=[];
            // 沒打;就是查詢單一目標
            if(strpos($keyword,';') !== false){
                // 有打;就用;切割出多個目標
                $keywords = explode(';',$keyword);
            }else{
                // 如果沒打;就把資料放進去當作單一目標查詢
                $keywords[] = $keyword;
            }

            //若沒有傳參數
            if (strlen($keyword)==0){
                $sql ="SELECT name,tel,addr FROM food";
            }else{
                //有傳參數
                $sql ="SELECT name,tel,addr FROM food WHERE";
                foreach($keywords as $i => $key){
                    // 清除下參數條件;後的空白格
                    $key = trim($key);
                    // 如果不等於0就加上OR增加條件
                    if($i != 0){
                        $sql .= ' OR ';
                    }
                    $sql .= " name LIKE '%{$key}%' OR tel LIKE '%{$key}%' OR addr LIKE '%{$key}%'";
                    
                }
            }
            $result = $this->mysqli->query($sql);
            $ret = [];
            while($row =$result->fetch_object()){
                $ret[] = $row;
            }
            return $ret;

            echo $sql;
            var_dump($keywords);
            // $sql ="SELECT `name`,tel,addr FROM food";
            // $result = $this->mysqli->query($sql);
            
        }

    }

?>
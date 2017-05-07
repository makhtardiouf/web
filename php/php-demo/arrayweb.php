<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>PHP array</title></head>
    <body>
        <?php
        $cars = array(
            array("번호", "제목", "글쓰기"),
            array(1, "테스트", "과이자"),
            array(2, "길동", "백운"),
            array(3, "취업", "이쁜"),
            array(4, "학과", "학과")
        );

        echo '<table border="1" margin="10">';

        for ($i = 0; $i < sizeof($cars); $i++) {
            if ($i % 2 == 1)
                echo '<tr bgcolor="pink">';
            else
                echo '<tr bgcolor="green">';

            for ($j = 0; $j < sizeof($cars[$i]); $j++) {
                echo "<td>" . $cars[$i][$j] . "</td>";
            }
            echo "</tr>";
        }
        echo '</table>';
        //  var_dump($cars);

        ?>
    </body>
</html>
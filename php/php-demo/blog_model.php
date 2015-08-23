<?php
// MVC: model.php
function connectDb()
{
    $link = mysql_connect('localhost', 'makhtar', 'MAKlib');
    mysql_select_db('wordpress', $link);

    return $link;
}

function closeDb($link)
{
    mysql_close($link);
}

function getPosts()
{
    $link = connectDb();
    $result = mysql_query('SELECT ID, post_title FROM wp_posts WHERE post_status="publish"', $link);
    $posts = array();

    while ($row = mysql_fetch_assoc($result)) {
        $posts[] = $row;
    }
     closeDb($link);
    return $posts;
}

function getPost($id)
{
    $link = connectDb();

    $id = intval($id);
    $query = "SELECT post_date, post_title, post_content FROM wp_posts WHERE ID=$id";
    $result = mysql_query($query);
    $row = mysql_fetch_assoc($result);

    closeDb($link);

    return $row;
}

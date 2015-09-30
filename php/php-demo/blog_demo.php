<?php
// List posts from a wordpress DB: the none MVC way
// $Id: blog_demo.php, 6bca5116b68d  makhtar $

$link = mysql_connect('localhost', 'makhtar', 'MAKlib');
mysql_select_db('wordpress', $link);

$result = mysql_query('SELECT ID, post_title FROM wp_posts', $link);

$posts = array();
while ($row = mysql_fetch_assoc($result)) {
    $posts[] = $row;
    if(!empty($row['post_title']))
    ;//  echo "Fetched post: " . $row['post_title'] . "\n";
}
echo "Fetched " . sizeof($posts) . " posts\n";
mysql_close($link);

// include the HTML presentation code
require_once 'blog_view.php';

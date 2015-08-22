<?php $title = "List of Posts";
//  Turn on output buffering
ob_start();
?>

    <h1>List of Posts</h1>
    <ul>
        <?php foreach ($posts as $post): ?>
        <li>
          <a href="/read?id=<?php echo $post['ID']; ?>">
              <?php echo $post['post_title'] ; ?>
            </a>
        </li>
        <?php endforeach ?>
    </ul>
<?php
$content = ob_get_clean();
include 'blog_layout.php';
?>

<?php 
$title = $post['title'];
ob_start(); 
?>
    <h1><?php echo $post['post_title']; ?></h1>

    <div class="date"><?php echo $post['post_date']; ?></div>
    <div class="body" style="width: 60%;">
        <?php echo $post['post_content']; ?>
    </div>
    
<?php 
$content = ob_get_clean();
include 'blog_layout.php';
?>

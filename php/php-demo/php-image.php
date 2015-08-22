<?php
header("Content-Type: image/png");
$im = @imagecreatetruecolor(100, 100)
    or die("Cannot Initialize new GD image stream");

$bg_color = imagecolorallocate($im, 3, 0, 0);
$txt_color = imagecolorallocate($im, 233, 14, 91);
$fill = imagecolorallocate($im, 15, 15, 15);

imagestring($im, 1, 5, 5,  "Hello PHP imaging", $txt_color);
imagefill($im, 50, 50, $fill);

imagepng($im);
imagedestroy($im);

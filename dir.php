<?php $files = array_map('basename', glob('recipes/*.md')); ?>
let files = <?php echo json_encode($files) ?>;
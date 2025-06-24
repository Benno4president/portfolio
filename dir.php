var files = <?php $out = array();
foreach (glob('portfolio_items/*') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];
}
echo json_encode($out); ?>;
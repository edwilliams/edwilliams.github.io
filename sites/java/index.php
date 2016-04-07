<?

$cmd = 'javac ToDo.java; java ToDo ' . $_GET['item'];
echo exec( $cmd );
<?php
	include('credentials.php');
	global $connection;
	$sql = 'SELECT * FROM forum ORDER BY id DESC';
	$result = mysqli_query($connection, $sql);
	$data = array();
	while($row = mysqli_fetch_assoc($result)) { 
		$data[] = $row;
	}
	echo json_encode($data);
	mysqli_close($connection);

?>
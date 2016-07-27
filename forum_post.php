<?php
	include('credentials.php');
	global $connection;
	date_default_timezone_set('America/Los_Angeles'); 
	$captcha = filter_input(INPUT_POST, 'captchaResponse');
	$name = filter_input(INPUT_POST, 'name');
	$title = filter_input(INPUT_POST, 'title'); 
	$entry = filter_input(INPUT_POST, 'entry');
	$recaptcha_secret = "6Ldy-CUTAAAAABMisFFuJ7NVN_-5pvADpHRDj3YJ";
	$time = date('m-d-Y h:ia');

    if (!$captcha) {
        echo 'no captcha';// Return error code if there is no captcha
    }
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LdnDCYTAAAAAJTI346QtTVlA0fM3V4gMDSj7Ehr&response=".$captcha);
    if($response.success == false) {
        echo 'robot';
    } else {
      	$sql = 'INSERT INTO forum (title, name,entry, entry_time) VALUES ("'.$title.'", "'.$name.'", "'.$entry.'", "'.$time.'")';
		mysqli_query($connection, $sql);
	    echo "success";
    }

?>
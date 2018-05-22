<?php
if( isset($_POST['topic']) && isset($_POST['email']) && isset($_POST['message']) ){
	$t = $_POST['topic']; 
	$e = $_POST['email'];
	$m = nl2br($_POST['message']);
	$to = "monika.dembek@gmail.com";	
	$from = $e;
	$subject = 'Portfolio website - message frm contact form';
	$message = '<b>Topic:</b> '.$t.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
	$headers = 'From: '. $from . "\r\n";
	$headers .= 'MIME-Version: 1.0'."\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
	if( mail($to, $subject, $m, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>
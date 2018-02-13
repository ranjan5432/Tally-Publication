<?php
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];


if($name!=''){
	
$message='<body>
<center> <h2>Feedback Form</h2></center>
<table>
<tr><td>Name</td><td>:'.$name.'</td><tr> 
<tr><td>Email</td><td>:'.$email.'</td><tr> 
<tr><td>Query</td><td>:'.$message.'</td><tr>  
</table></body>';


$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:'.$name.' <'.$email.'>' . "\r\n";
$headers .= 'BCC: '.'\r\n';

mail("ranjannayak@ralecon.com", "Feedback Form \n".date("d-m-Y"), $message, $headers); 

	?>
	<script>window.location="thankyou.html";</script>
	<?php
	
}else{
	?>
	<script>window.location="index.html";</script>
	<?php
}

?>
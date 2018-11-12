<?php

if (isset($_POST['submit'])) {
  //get info
  $name = $_POST['name'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];
  //fill remaining info
  $mailTo = 'leorod18@icloud.com';
  $subject = 'JOB OFFER';
  $headers = "FROM: ".$mailFrom;
  $txt = "You have recieved an e-mail from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.html?mailsend");
}

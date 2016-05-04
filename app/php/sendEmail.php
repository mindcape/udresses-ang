<?php
   /*
   * Collect all Details from Angular HTTP Request.
   */
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$email = $request->email;
    @$subject = $request->subject;
    @$msg = $request->msg;
    echo $email; //this will go back under "data" of angular call.

    $headers = "From: admin@udayafashions.com" . "\r\n" .;
    $headers .= 'Cc: udaya@udayafashions.com,mahiudaya@gmail.com' . "\r\n";

    mail($email,$subject,$msg,$headers);

?>

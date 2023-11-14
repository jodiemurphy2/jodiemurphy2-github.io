function hideForm(){
    var userName=document.getElementById("name").value
    var userEmail=document.getElementById("email").value
    document.getElementById("myForm").style.display="none";
    alert(userName +", thank you for your details. We will be in touch via "+userEmail+" shortly.")
    document.getElementById("message").innerHTML=userName +", thank you for your details. We will be in touch via "+userEmail+" shortly.";
}
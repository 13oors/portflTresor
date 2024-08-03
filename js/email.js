function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        email :  document.getElementById("email").value,
        subject :document.getElementById("subject").value,
        message :  document.getElementById("message").value,
    }
    emailjs.send("service_ha9f8xy","template_4xtxelj",parms).then(alert("Email sent!!"))
}
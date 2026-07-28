function sendMail() {
    var parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // const serviceID = "";
    // const templateID = "";

    emailjs.send("service_ftmhjji", "template_4bms75m", parms).then(alert("Your message was sent successfully."));
            
}
  
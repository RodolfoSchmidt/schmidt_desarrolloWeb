function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "rodolfoschmidt9@gmail.com",
        Password : "password",
        To : 'rodolfoschmidt9@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Dorm Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Tel: " + document.getElementById("phone").value
            + "<br> message: " + document.getElementById("message").value
    }).then(
      message => alert("Mensaje envidado")
    );
}
emailjs.init({
    publicKey: "W-9zYPFoa3y-ygBFH",
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_rdcwhrv",
        "template_177mnwo",
        contactForm
    )
    .then(() => {
        alert("Message sent successfully!");
        contactForm.reset();
    })
    .catch((error) => {
        console.error(error);
        alert("An error occurred while sending the message.");
    });
});
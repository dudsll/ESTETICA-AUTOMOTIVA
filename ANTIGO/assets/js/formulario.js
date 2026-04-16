(function(){
emailjs.init("GwjW__TEUkD1EQJaZ");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
      "service_yjvtp33",
      "template_h36o1og",
      this
    )
    .then(function() {
      alert("Boa! Sua Nave agradece!");
    }, function(error) {
      alert("Erro ao enviar: " + error);
    });

});
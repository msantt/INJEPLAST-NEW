// Inicialização com sua chave (Pegue na aba 'Account' do EmailJS)
emailjs.init("4WUf15XkOtazti_hq");

const btn = document.querySelector('.submit-button');
const form = document.querySelector('form')

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.innerText = 'Enviando...';
    btn.disabled = true;

    // Certifique-se de que o ID do serviço e do template estão corretos
    emailjs.sendForm('service_tsd0p6i', 'template_edj0uid', this)
        .then(() => {
            btn.innerText = 'Enviar Solicitação';
            btn.disabled = false;
            alert('Solicitação enviada com sucesso!');
            this.reset();
        }, (err) => {
            btn.innerText = 'Enviar Solicitação';
            btn.disabled = false;
            alert('Falha ao enviar: ' + JSON.stringify(err));
        });
});
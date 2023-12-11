document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
        enviaForm();
    });

    function enviaForm() {
        const nome= document.getElementById('nome').value;
        const email= document.getElementById('email').value;
        const mensagem= document.getElementById('mensagem').value;
        const dados= {
            nome:nome,
            email:email,
            mensagem:mensagem
        };

        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';

        const msgconfirm=document.getElementById('msgconfirm');
        msgconfirm.textContent ="Sua mensagem foi enviada com sucesso!";
        msgconfirm.classList.add('mostrar');

        setTimeout(function () {
            msgconfirm.classList.remove('mostrar');
        }, 5000);
    }
});

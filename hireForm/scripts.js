function navigate(url) {
    window.location.href = url;
}

function hire() {
    const form = document.querySelector('.hireForm');
    const cpf = form.querySelector('input[placeholder="CPF/CNPJ"]').value;
    const name = form.querySelector('input[placeholder="Nome"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const phone = form.querySelector('input[placeholder="Telefone"]').value;
    const message = form.querySelector('textarea').value;

    if (!cpf || !name || !email || !phone || !message) {
        alert('Preencha todos os campos');
        return;
    }

    if (cpf.length < 11) {
        alert('CPF/CNPJ inválido');
        return;
    }
    if (phone.length < 10) {
        alert('Telefone inválido');
        return;
    }

    navigate("../success/index.html");
}
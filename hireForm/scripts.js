function navigate(url) {
  window.location.href = url;
}

function validateForm() {
  const form = document.querySelector(".hireForm");
  const cpf = form.querySelector('input[placeholder="CPF/CNPJ"]');
  const name = form.querySelector('input[placeholder="Nome"]');
  const email = form.querySelector('input[placeholder="Email"]');
  const phone = form.querySelector('input[placeholder="Telefone"]');
  const message = form.querySelector("textarea");
  const buttonSubmit = document.getElementById("submit");

  if (
    !cpf.value ||
    !name.value ||
    !email.value ||
    !phone.value ||
    !message.value
  ) {
    buttonSubmit.disabled = true;
    return;
  }

  cpf.classList.remove("invalidField");
  name.classList.remove("invalidField");
  email.classList.remove("invalidField");
  phone.classList.remove("invalidField");
  message.classList.remove("invalidField");

  buttonSubmit.removeAttribute("disabled");
}

function hire() {
  const form = document.querySelector(".hireForm");
  const cpf = form.querySelector('input[placeholder="CPF/CNPJ"]');
  const name = form.querySelector('input[placeholder="Nome"]');
  const email = form.querySelector('input[placeholder="Email"]');
  const phone = form.querySelector('input[placeholder="Telefone"]');
  const message = form.querySelector("textarea");

  if (
    !cpf.value ||
    !name.value ||
    !email.value ||
    !phone.value ||
    !message.value
  ) {
    cpf.classList.add("invalidField");
    name.classList.add("invalidField");
    email.classList.add("invalidField");
    phone.classList.add("invalidField");
    message.classList.add("invalidField");

    alert("Preencha todos os campos");
    return;
  }

  if (cpf.value.length < 11) {
    cpf.classList.add("invalidField");
    alert("CPF/CNPJ inválido");
    return;
  }
  if (phone.value.length < 10) {
    phone.classList.add("invalidField");

    alert("Telefone inválido");
    return;
  }

  navigate("../success/index.html");
}

function backToHome() {
  navigate("../home/index.html");
}

validateForm();
